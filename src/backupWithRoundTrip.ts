import { addons, useChannel } from "@storybook/preview-api";
import type {
  Renderer,
  PartialStoryFn as StoryFunction,
  Parameters,
} from "@storybook/types";
import { STORY_CHANGED, FORCE_REMOUNT } from "@storybook/core-events";
import { EVENTS, PARAM_KEY } from "./constants";
import { RequestHandler, ResponseFunction } from "msw";

type Context = {
  [x: string]: any;
  parameters: Parameters;
};

type ResponseObject = {
  [key: string]: string | number | Record<string, any>;
};

const channel = addons.getChannel();

let INITIAL_MOUNT_STATE = true;
let STORY_CHANGED_STATE = false;
let delay = 0;
let status = 200;
let responses: Record<string, any> = {};
let moveTimeout: any;

const getParameter = (
  parameters: Parameters,
  key: string,
  defaultValue: any[]
) => {
  return parameters[key] || defaultValue;
};

const updateHandlers = (handlers: RequestHandler[]) => {
  handlers.forEach((handler: any) => {
    const currentResponse = responses[handler.info.path];
    handler.resolver = (
      req: RequestHandler,
      res: ResponseFunction,
      ctx: Context
    ) => {
      res(ctx.delay(delay), ctx.status(status), ctx.json(currentResponse));
    };
  });
};

export const withRoundTrip = (
  storyFn: StoryFunction<Renderer>,
  ctx: Context
) => {
  let parameters,
    msw: { handlers: any; originalResponses: Record<string, any> },
    handlers: any;
  parameters = ctx.parameters;
  if (parameters) msw = getParameter(parameters, PARAM_KEY, []);
  if (msw) {
    handlers = msw.handlers;
    responses = msw.originalResponses;
  }
  console.log("with round trip", msw);

  const emit = useChannel({
    [EVENTS.UPDATE]: ({ key, value }) => {
      if (key === "delay") {
        if (moveTimeout) clearTimeout(moveTimeout);
        delay = value;
        moveTimeout = setTimeout(() => {
          updateHandlers(handlers);
          const responseObject: ResponseObject = {
            delay: delay,
            status: status,
            responses: responses,
          };
          emit(EVENTS.SEND, responseObject);
          channel.emit(FORCE_REMOUNT, { storyId: ctx.id });
        }, 200);
      }
      if (key === "status") {
        status = value;
        updateHandlers(handlers);
        const responseObject: ResponseObject = {
          delay: delay,
          status: status,
          responses: responses,
        };
        emit(EVENTS.SEND, responseObject);
        channel.emit(FORCE_REMOUNT, { storyId: ctx.id });
      }
    },
    [EVENTS.UPDATE_RESPONSES]: ({ key, objectKey, objectValue }) => {
      if (key === "responses") {
        responses[objectKey] = objectValue;
        const responseObject: ResponseObject = {
          delay: delay,
          status: status,
          responses: responses,
        };
        emit(EVENTS.SEND, responseObject);
        updateHandlers(handlers);
        channel.emit(FORCE_REMOUNT, { storyId: ctx.id });
      }
    },
  });

  if (INITIAL_MOUNT_STATE) {
    channel.on(STORY_CHANGED, () => {
      STORY_CHANGED_STATE = true;
    });
    emit(EVENTS.SEND, { status: 200, delay: 0, responses });
    INITIAL_MOUNT_STATE = false;
  }
  if (STORY_CHANGED_STATE) {
    STORY_CHANGED_STATE = false;
  }
  return storyFn();
};

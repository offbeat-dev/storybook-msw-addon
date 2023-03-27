import { addons, useChannel } from "@storybook/preview-api";
import type {
  Renderer,
  PartialStoryFn as StoryFunction,
  Parameters,
} from "@storybook/types";
import { STORY_CHANGED, FORCE_REMOUNT } from "@storybook/core-events";
import { EVENTS, PARAM_KEY } from "./constants";
import { RequestHandler, ResponseFunction } from "msw";

let INITIAL_MOUNT_STATE = true;
let STORY_CHANGED_STATE = false;
let delay = 0;
let status = 200;
const responses: Record<string, any> = window.localStorage.getItem(
  "originalResponses"
)
  ? JSON.parse(window.localStorage.getItem("originalResponses"))
  : {};

type Context = {
  [x: string]: any;
  parameters: Parameters;
};

type ResponseObject = {
  [key: string]: string | number | Record<string, any>;
};

const channel = addons.getChannel();
let moveTimeout: any;

const getParameter = (
  parameters: Parameters,
  key: string,
  defaultValue: any[]
) => {
  return parameters[key] || defaultValue;
};

export const withRoundTrip = (
  storyFn: StoryFunction<Renderer>,
  ctx: Context
) => {
  let parameters, msw, handlers: any;
  parameters = ctx.parameters;
  if (parameters) msw = getParameter(parameters, PARAM_KEY, []);
  if (msw) handlers = msw.handlers;

  const emit = useChannel({
    [EVENTS.UPDATE]: ({ key, value }) => {
      if (key === "delay") {
        if (moveTimeout) clearTimeout(moveTimeout);
        delay = value;
        moveTimeout = setTimeout(() => {
          channel.emit(FORCE_REMOUNT, { storyId: ctx.id });
        }, 500);
      }
      if (key === "status") {
        status = value;
        channel.emit(FORCE_REMOUNT, { storyId: ctx.id });
      }
      const responseObject: ResponseObject = {
        delay: delay,
        status: status,
        responses: responses,
      };
      emit(EVENTS.SEND, responseObject);
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
        channel.emit(FORCE_REMOUNT, { storyId: ctx.id });
      }
    },
  });

  if (INITIAL_MOUNT_STATE) {
    window.localStorage.removeItem("originalResponses");
    const originalResponses = {} as Record<string, any>;
    handlers.forEach(async (handler: any) => {
      const originalRequest = new Request(handler.info.path);
      const originalResponse = await fetch(originalRequest);
      const originalData = await originalResponse.json();
      originalResponses[handler.info.path] = originalData;
      window.localStorage.setItem(
        "originalResponses",
        JSON.stringify(originalResponses)
      );
    });

    channel.on(STORY_CHANGED, () => {
      STORY_CHANGED_STATE = true;
    });
    if (handlers) emit(EVENTS.SEND, { status: 200, delay: 0, responses });
    else emit(EVENTS.SEND, {});
    INITIAL_MOUNT_STATE = false;
  }
  if (STORY_CHANGED_STATE) {
    if (handlers) emit(EVENTS.SEND, { status: 200, delay: 0, responses });
    else emit(EVENTS.SEND, {});
    STORY_CHANGED_STATE = false;
  }
  if (handlers) {
    handlers.forEach((handler: any) => {
      const currentResponse = responses[handler.info.path];
      const originalResolver = handler.resolver;

      if (window.localStorage.getItem("originalResponses")) {
        handler.resolver = (
          req: RequestHandler,
          res: ResponseFunction,
          ctx: Context
        ) => {
          return res(
            ctx.delay(delay),
            ctx.status(status),
            ctx.json(currentResponse)
          );
        };
      }
    });
  }

  return storyFn();
};

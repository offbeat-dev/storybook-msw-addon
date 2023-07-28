import { addons, useChannel } from "@storybook/preview-api";
import type {
  Renderer,
  PartialStoryFn as StoryFunction,
  Parameters,
} from "@storybook/types";
import {
  STORY_CHANGED,
  FORCE_REMOUNT,
  STORY_ARGS_UPDATED,
} from "@storybook/core-events";
import { EVENTS, PARAM_KEY } from "./constants";
import { RequestHandler, rest } from "msw";

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
  if (!handlers || !responses) return;
  const worker = (window as any).msw;
  handlers?.forEach((handler: any) => {
    const currentResponse = responses[handler.info.path];
    status = currentResponse.status;
    worker.use(
      rest.get(handler.info.path, (req, res, ctx) => {
        return res(
          ctx.status(currentResponse.status),
          ctx.delay(delay),
          ctx.json(currentResponse.data)
        );
      })
    );
  });
};

export const withRoundTrip = (
  storyFn: StoryFunction<Renderer>,
  ctx: Context
) => {
  let parameters,
    msw: { handlers: any; originalResponses: Record<string, any> },
    handlers: any;

  const worker = (window as any).msw;

  parameters = ctx.parameters;
  if (parameters) msw = getParameter(parameters, PARAM_KEY, []);

  const emit = useChannel({
    [EVENTS.UPDATE]: ({ key, value }) => {
      if (key === "delay") {
        clearTimeout(moveTimeout);
        delay = value;
        updateHandlers(handlers);
        moveTimeout = setTimeout(() => {
          channel.emit(FORCE_REMOUNT, { storyId: ctx.id });
        }, 300);
      }
      if (key === "status") {
        status = value;
        Object.keys(responses).forEach((key: any) => {
          responses[key].status = value;
        });
        updateHandlers(handlers);
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
        responses[objectKey].data = objectValue;
        const responseObject: ResponseObject = {
          delay: delay,
          status: status,
          responses: responses,
        };
        updateHandlers(handlers);
        emit(EVENTS.SEND, responseObject);
        channel.emit(FORCE_REMOUNT, { storyId: ctx.id });
      }
    },
    [EVENTS.RESET]: () => {
      delete (window as any).msw.originalResponses;
      worker.stop();
      location.reload();
    },
  });

  if (!msw || !worker) {
    emit(EVENTS.SEND, {
      status: undefined,
      delay: undefined,
      responses: undefined,
    });

    return storyFn();
  }

  if (INITIAL_MOUNT_STATE) {
    handlers = msw.handlers;
    responses = msw.originalResponses;
    updateHandlers(handlers);
    emit(EVENTS.SEND, { status, delay, responses });
    channel.on(STORY_ARGS_UPDATED, () => {
      if (ctx.viewMode === "docs") return;
      delete (window as any).msw.originalResponses;
      location.reload();
    });
    channel.on(STORY_CHANGED, () => {
      delete (window as any).msw.originalResponses;
      worker.stop();

      STORY_CHANGED_STATE = true;
      location.reload();
    });
    INITIAL_MOUNT_STATE = false;
    //channel.emit(FORCE_REMOUNT, { storyId: ctx.id });
  }

  if (STORY_CHANGED_STATE) {
    STORY_CHANGED_STATE = false;
    channel.emit(FORCE_REMOUNT, { storyId: ctx.id });
  }

  return storyFn();
};

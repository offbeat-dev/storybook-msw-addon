import { addons, useChannel } from "@storybook/preview-api";
import { getMethodFunction } from "./utils/getMethodFunction";
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
import { EVENTS } from "./constants";
import {
  RequestHandler,
  graphql,
  delay,
  HttpResponse,
  HttpHandler,
  GraphQLHandler,
} from "msw";
import { getResponse } from "./utils/getResponse";

type Context = {
  [x: string]: any;
  parameters: Parameters;
};

const channel = addons.getChannel();
let INITIAL_MOUNT_STATE = true;
let SET_INITIAL_RESPONSES = false;
let responseDelay = 0;
let status = 200;
let moveTimeout: NodeJS.Timeout;
let emit: (eventName: string, ...args: any) => void;

const updateHandlers = () => {
  if (!Object.keys(window.__MSW_STORYBOOK__.handlersMap).length) return;
  if (!window.__MSW_STORYBOOK__) return;
  const worker = window.__MSW_STORYBOOK__.worker;
  worker.resetHandlers();

  window.__MSW_STORYBOOK__.handlers?.forEach((handler) => {
    if (!window.__MSW_STORYBOOK__.handlersMap[handler.info.header]) return;
    const currentResponse =
      window.__MSW_STORYBOOK__.handlersMap[handler.info.header].response;
    const currentHandler =
      window.__MSW_STORYBOOK__.handlersMap[handler.info.header].handler;

    if ((handler as HttpHandler).info.path) {
      const httpHandler = handler as HttpHandler;
      const methodFunction = getMethodFunction(httpHandler.info.method);
      worker.use(
        methodFunction(httpHandler.info.path, async () => {
          await delay(responseDelay);
          return HttpResponse.json(currentResponse.jsonBodyData, {
            status: status,
          });
        }),
      );
    } else if ((handler as GraphQLHandler).info.operationName) {
      const graphQLHandler = handler as GraphQLHandler;
      worker.use(
        graphql.query(
          graphQLHandler.info.operationName,
          async ({ query, variables }) => {
            await delay(responseDelay);
            return HttpResponse.json(
              { ...currentResponse.jsonBodyData },
              { status: status },
            );
          },
        ),
      );
    }
  });
};

export const withRoundTrip = (
  storyFn: StoryFunction<Renderer>,
  ctx: Context,
) => {
  if (!ctx.parameters.msw) return storyFn();

  if (!window.__MSW_STORYBOOK__) {
    channel.emit(FORCE_REMOUNT, { storyId: ctx.id });
    return storyFn();
  }

  if (ctx.parameters.msw.handlers) {
    // Get handlers from story parameters
    if (!window.__MSW_STORYBOOK__.handlers)
      window.__MSW_STORYBOOK__.handlers = ctx.parameters.msw
        .handlers as RequestHandler[];
    // Initialize handlersMap to store responses
    if (!window.__MSW_STORYBOOK__.handlersMap)
      window.__MSW_STORYBOOK__.handlersMap = {};
    // Define events to listen to from the addon panel
    console.log(
      "msw-storybook-addon: setting up handlers",
      ctx.parameters.msw,
      window.__MSW_STORYBOOK__.handlersMap,
    );
    emit = useChannel({
      [EVENTS.UPDATE]: ({ key, value }) => {
        if (key === "delay") {
          clearTimeout(moveTimeout);
          responseDelay = value;
          updateHandlers();
          moveTimeout = setTimeout(() => {
            channel.emit(FORCE_REMOUNT, { storyId: ctx.id });
          }, 500);
        }
        if (key === "status") {
          status = value;
          updateHandlers();
          channel.emit(FORCE_REMOUNT, { storyId: ctx.id });
        }
        const responseObject = {
          delay: responseDelay,
          status: status,
          responses: window.__MSW_STORYBOOK__.handlersMap,
        };
        emit(EVENTS.SEND, responseObject);
      },
      [EVENTS.UPDATE_RESPONSES]: ({ key, objectKey, objectValue }) => {
        if (key === "responses") {
          window.__MSW_STORYBOOK__.handlersMap[objectKey].response = {
            ...window.__MSW_STORYBOOK__.handlersMap[objectKey].response,
            jsonBodyData: objectValue,
          };
          updateHandlers();
          const responseObject = {
            delay: responseDelay,
            status: status,
            responses: window.__MSW_STORYBOOK__.handlersMap,
          };
          emit(EVENTS.SEND, responseObject);
          channel.emit(FORCE_REMOUNT, { storyId: ctx.id });
        }
      },
      [EVENTS.RESET]: () => {
        window.__MSW_STORYBOOK__.handlersMap = {};
        window.__MSW_STORYBOOK__.worker.stop();
        location.reload();
      },
    });
    // If this is the first time the story is mounted, send the initial state to the addon panel
    if (INITIAL_MOUNT_STATE) {
      logEvents();
      emit(EVENTS.SEND, {
        delay: responseDelay,
        status: status,
        responses: window.__MSW_STORYBOOK__.handlersMap,
      });
      channel.on(STORY_ARGS_UPDATED, () => {
        window.__MSW_STORYBOOK__.handlersMap = {};
        location.reload();
      });
      channel.on(STORY_CHANGED, () => {
        emit(EVENTS.SEND, {
          status: undefined,
          delay: undefined,
          responses: undefined,
        });
        window.__MSW_STORYBOOK__.handlersMap = {};
        window.__MSW_STORYBOOK__.worker.stop();
        location.reload();
      });
      INITIAL_MOUNT_STATE = false;
    }
  }

  return storyFn();
};

// Listen to request:match events from msw in order to build the handlersMap
const logEvents = () => {
  const worker = window.__MSW_STORYBOOK__.worker;
  if (!Array.isArray(window.__MSW_STORYBOOK__.handlers)) {
    const joinedHandlers: any = [];
    Object.values(window.__MSW_STORYBOOK__.handlers).forEach((handler) => {
      if (Array.isArray(handler)) joinedHandlers.push(...handler);
      else joinedHandlers.push(handler);
    });
    window.__MSW_STORYBOOK__.handlers = joinedHandlers;
  }

  worker.events.on("request:match", async ({ request, requestId }) => {
    if (SET_INITIAL_RESPONSES) return;
    let { handler, response } = await getResponse(
      window.__MSW_STORYBOOK__.handlers || [],
      request,
    );
    let responseObj = {} as {
      jsonBodyData: JSON;
      status: number;
      delay: number;
    };
    let responseData = await response.json();
    if (response && handler) {
      if (
        window.__MSW_STORYBOOK__.handlersMap[handler.info.header] &&
        window.__MSW_STORYBOOK__.handlersMap[handler.info.header].response
      ) {
        responseObj.jsonBodyData = responseData;
      }

      window.__MSW_STORYBOOK__.handlersMap[handler.info.header] = {
        handler: handler,
        response: {
          ...response,
          jsonBodyData: responseData,
          delay: responseDelay,
          status: response.status,
        },
      };
      updateHandlers();
      emit(EVENTS.SEND, {
        delay: responseDelay,
        status: status,
        responses: window.__MSW_STORYBOOK__.handlersMap,
      });
      SET_INITIAL_RESPONSES = true;
    }
  });
};

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
import { EVENTS } from "./constants";
import {
  RequestHandler,
  http,
  delay,
  HttpResponse,
  HttpHandler,
  GraphQLHandler,
  HttpRequestHandler,
  GraphQLRequestHandler,
} from "msw";
import { getResponse } from "./utils/getResponse";

type Context = {
  [x: string]: any;
  parameters: Parameters;
};

const channel = addons.getChannel();
let INITIAL_MOUNT_STATE = true;
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

    console.log("currentResponse", currentResponse);
    console.log("currentHandler", currentHandler);
    if ((handler as HttpHandler).info.path) {
      const httpHandler = handler as HttpHandler;
      worker.use(
        http.get(httpHandler.info.path, async () => {
          console.log("new httphandler", httpHandler.info.path);
          await delay(responseDelay);
          if (currentResponse.status !== 200)
            return new HttpResponse(null, { status: status });
          return HttpResponse.json(currentResponse.jsonBodyData);
        }),
      );
    }
    //   worker.use(
    //     http.get(handler.info.path, async () => {
    //       await delay(responseDelay);
    //       if (currentResponse.status !== 200)
    //         return new HttpResponse(null, { status: status });
    //       return HttpResponse.json(currentResponse.json);
    //     }),
    //   );
    // } else if (handler.info.operationName) {
    //   console.log(currentResponse);
    //   // worker.use(
    //   //   graphql.query(handler.info.operationName, async ({ query }) => {
    //   //     await delay(responseDelay);
    //   //     if (currentResponse.status !== 200)
    //   //       return new HttpResponse(null, { status: status });

    //   //     return HttpResponse.json(currentResponse.json);
    //   //     // return res(
    //   //     //   ctx.status(status),
    //   //     //   ctx.delay(delay),
    //   //     //   currentResponse.body.includes("errors")
    //   //     //     ? ctx.errors([...JSON.parse(currentResponse.body).errors])
    //   //     //     : ctx.data(JSON.parse(currentResponse.body).data),
    //   //   }),
    //   // );
    // }
  });
};

// const updateHandlers = (handlers: RequestHandler[]) => {
//   if (!handlers || !responses) return;
//   const worker = (window as any).msw;
//   handlers?.forEach((handler: HttpHandler) => {
//     const currentResponse = responses[handlerResponseKey(handler)];
//     status = currentResponse.status;
//     const method = handler.info.method as
//       | "GET"
//       | "HEAD"
//       | "POST"
//       | "PUT"
//       | "HEAD"
//       | "PATCH"
//       | "OPTIONS"
//       | "DELETE"
//       | RegExp;

//     if (typeof method !== "string") {
//       console.warn(
//         `[MSW] Failed to retrieve the original response for the given handler. Can only retrieve original responses for handlers with a string method, RegExp is currently not supported. Offending path: ${handler.info.path}`,
//       );

//       return;
//     }

//     const methodFunction = {
//       GET: http.get,
//       POST: http.post,
//       PUT: http.put,
//       DELETE: http.delete,
//       PATCH: http.patch,
//       HEAD: http.head,
//       OPTIONS: http.options,
//     }[method];

//     worker.use(
//       methodFunction(handler.info.path, async () => {
//         await delay(responseDelay);
//         return HttpResponse.json(currentResponse.data, {
//           status: currentResponse.status,
//         });
//       }),
//     );
//   });
// };

// export const withRoundTrip = (
//   storyFn: StoryFunction<Renderer>,
//   ctx: Context,
// ) => {
//   let parameters,
//     msw: { handlers: any; originalResponses: Record<string, any> },
//     handlers: any;

//   const worker = (window as any).msw;

//   parameters = ctx.parameters;
//   if (parameters) msw = getParameter(parameters, PARAM_KEY, []);

//   const emit = useChannel({
//     [EVENTS.UPDATE]: ({ key, value }) => {
//       if (key === "delay") {
//         clearTimeout(moveTimeout);
//         responseDelay = value;
//         updateHandlers(handlers);
//         moveTimeout = setTimeout(() => {
//           channel.emit(FORCE_REMOUNT, { storyId: ctx.id });
//         }, 300);
//       }
//       if (key === "status") {
//         status = value;
//         Object.keys(responses).forEach((key: any) => {
//           responses[key].status = value;
//         });
//         updateHandlers(handlers);
//         channel.emit(FORCE_REMOUNT, { storyId: ctx.id });
//       }
//       const responseObject: ResponseObject = {
//         delay: responseDelay,
//         status: status,
//         responses: responses,
//       };
//       emit(EVENTS.SEND, responseObject);
//     },
//     [EVENTS.UPDATE_RESPONSES]: ({ key, objectKey, objectValue }) => {
//       if (key === "responses") {
//         responses[objectKey].data = objectValue;
//         const responseObject: ResponseObject = {
//           delay: responseDelay,
//           status: status,
//           responses: responses,
//         };
//         updateHandlers(handlers);
//         emit(EVENTS.SEND, responseObject);
//         channel.emit(FORCE_REMOUNT, { storyId: ctx.id });
//       }
//     },
//     [EVENTS.RESET]: () => {
//       delete (window as any).msw.originalResponses;
//       worker.stop();
//       location.reload();
//     },
//   });

//   if (!msw || !worker) {
//     emit(EVENTS.SEND, {
//       status: undefined,
//       delay: undefined,
//       responses: undefined,
//     });

//     return storyFn();
//   }

//   if (INITIAL_MOUNT_STATE) {
//     handlers = msw.handlers;
//     responses = msw.originalResponses;
//     updateHandlers(handlers);
//     emit(EVENTS.SEND, { status, delay: responseDelay, responses });
//     channel.on(STORY_ARGS_UPDATED, () => {
//       if (ctx.viewMode === "docs") return;
//       delete (window as any).msw.originalResponses;
//       location.reload();
//     });
//     channel.on(STORY_CHANGED, () => {
//       delete (window as any).msw.originalResponses;
//       worker.stop();

//       STORY_CHANGED_STATE = true;
//       location.reload();
//     });
//     INITIAL_MOUNT_STATE = false;
//     //channel.emit(FORCE_REMOUNT, { storyId: ctx.id });
//   }

//   if (STORY_CHANGED_STATE) {
//     STORY_CHANGED_STATE = false;
//     channel.emit(FORCE_REMOUNT, { storyId: ctx.id });
//   }

//   return storyFn();
// };

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
          window.__MSW_STORYBOOK__.handlersMap[objectKey].response =
            HttpResponse.text(JSON.stringify(objectValue));
          updateHandlers();
          const responseObject = {
            delay: responseDelay,
            status: status,
            responses: window.__MSW_STORYBOOK__.handlersMap,
          };
          channel.emit(FORCE_REMOUNT, { storyId: ctx.id });
          emit(EVENTS.SEND, responseObject);
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
      console.log("INITIAL_MOUNT_STATE", window.__MSW_STORYBOOK__);
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
    console.log("handler : response", handler, responseData);

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
    }
  });
};

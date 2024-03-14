import { RequestHandler } from "msw";
import { SetupWorker, StartOptions, setupWorker } from "msw/browser";

export type MswParameters = {
  msw?: {
    handlers: RequestHandler[];
    originalResponses: Record<string, any>;
  };
};

type Context = {
  parameters: MswParameters;
  viewMode: string;
};

let worker: SetupWorker;
let opt: StartOptions;

export const initialize = async (options?: StartOptions) => {
  opt = options;
};

const setupHandlers = (msw: MswParameters["msw"]) => {
  if (worker) {
    if (window.__MSW_STORYBOOK__) return;
    worker.resetHandlers();
    if (msw) {
      if (Array.isArray(msw) && msw.length > 0) {
        worker.use(...msw);
      } else if ("handlers" in msw && msw.handlers) {
        const handlers = Object.values(msw.handlers)
          .filter(Boolean)
          .reduce(
            (handlers, handlersList) => handlers.concat(handlersList),
            [] as RequestHandler[],
          );

        if (handlers.length > 0) {
          console.log("handlers", handlers);
          worker.use(...handlers);
        }
      }
    }
  }
};

export const mswLoader = async (context: Context) => {
  const {
    parameters: { msw },
    viewMode,
  } = context;

  if (!msw || (window.__MSW_STORYBOOK__ && window.__MSW_STORYBOOK__.worker)){
    return;
  }

  if (viewMode === "docs" && window.__MSW_STORYBOOK__.worker) {
    worker =
      typeof global.process === "undefined" && window.__MSW_STORYBOOK__.worker;
  } else {
    worker = typeof global.process === "undefined" && setupWorker();
  }
  await worker.start(opt);
  setupHandlers(msw);

  if (worker) {
    window.__MSW_STORYBOOK__ = window.__MSW_STORYBOOK__ || {};
    window.__MSW_STORYBOOK__.worker = worker;
  }
  return {};
};

// const modifyHandlersAndArgs = (handlers: any, context: Context) => {
//   handlers.forEach((handler: any) => {
//     const modifiedPath =
//       handler.info.path.replace(/\/$/, "") + `/${self.crypto.randomUUID()}`;
//     Object.keys(context.args).forEach((key) => {
//       if (context.args[key] === handler.info.path) {
//         context.args[key] = modifiedPath;
//       }
//     });
//     Object.keys(context.allArgs).forEach((key) => {
//       if (context.allArgs[key] === handler.info.path) {
//         context.allArgs[key] = modifiedPath;
//       }
//     });
//     Object.keys(context.initialArgs).forEach((key) => {
//       if (context.initialArgs[key] === handler.info.path) {
//         context.initialArgs[key] = modifiedPath;
//       }
//     });
//     handler.info.header = handler.info.header.replace(
//       handler.info.path,
//       modifiedPath,
//     );
//     handler.info.path = modifiedPath;
//   });

//   return { handlers: handlers, context: context };
// };

// const getOriginalResponses = async (handlers: RequestHandler[]) => {
//   const originalResponses = {} as Record<string, any>;

//   for (const handler of handlers) {
//     console.log("handler", handler);

//     if (handler.info.header.includes("query")) {
//       const graphQLHandler = handler as GraphQLHandler;
//       console.log("GraphQL: ", handler.log);
//       // const originalRequest = new Request(path, {
//       //   method,
//       // });

//       // const originalResponse = await fetch(originalRequest);
//       // let originalData;
//       // if (!originalResponse.ok) originalData = null;
//       // else originalData = await originalResponse.json();
//       // originalResponses[handlerResponseKey(httpHandler)] = {
//       //   data: originalData,
//       //   status: originalResponse.status,
//       // };
//     } else {
//       const httpHandler = handler as HttpHandler;
//       const path = httpHandler.info.path;
//       const method = httpHandler.info.method || HttpMethods.GET;

//       if (typeof path !== "string") {
//         console.warn(
//           `[MSW] Failed to retrieve the original response for the given handler. Can only retrieve original responses for handlers with a string path, RegExp is currently not supported. Offending path: ${path}`,
//         );
//         continue;
//       }

//       if (typeof method !== "string") {
//         console.warn(
//           `[MSW] Failed to retrieve the original response for the given handler. Can only retrieve original responses for handlers with a string method, RegExp is currently not supported. Offending path: ${path}`,
//         );
//         continue;
//       }

//       const originalRequest = new Request(path, {
//         method,
//       });

//       const originalResponse = await fetch(originalRequest);
//       let originalData;
//       if (!originalResponse.ok) originalData = null;
//       else originalData = await originalResponse.json();
//       originalResponses[handlerResponseKey(httpHandler)] = {
//         data: originalData,
//         status: originalResponse.status,
//       };
//     }
//   }
//   return originalResponses;
// };

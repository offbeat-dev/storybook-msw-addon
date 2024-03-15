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

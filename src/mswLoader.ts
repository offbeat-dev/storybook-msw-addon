import type { RequestHandler } from "msw";
import type { SetupWorker, StartOptions } from "msw/browser";
import { setupWorker } from "msw/browser";
import { isNodeProcess } from "is-node-process";

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
let initialHandlers: RequestHandler[] = [];

export const initialize = async (options?: StartOptions, handlers: RequestHandler[] = []) => {
  opt = options;
  initialHandlers = handlers;
};

const setupHandlers = (msw: MswParameters["msw"]) => {
  if (worker) {
    worker.resetHandlers(...initialHandlers);
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

  if (!msw || isNodeProcess()) {
    return;
  }

  if (window.__MSW_STORYBOOK__ && window.__MSW_STORYBOOK__.worker) {
    setupHandlers(msw);
    return;
  }

  if (viewMode === "docs" && window.__MSW_STORYBOOK__ && window.__MSW_STORYBOOK__.worker) {
    worker = window.__MSW_STORYBOOK__.worker;
  } else {
    worker = setupWorker();
  }

  await worker.start(opt);
  setupHandlers(msw);

  if (worker) {
    window.__MSW_STORYBOOK__ = window.__MSW_STORYBOOK__ || {};
    window.__MSW_STORYBOOK__.worker = worker;
  }
  return {};
};

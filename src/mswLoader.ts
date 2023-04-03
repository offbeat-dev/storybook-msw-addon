import { SetupWorker, RequestHandler, setupWorker, rest } from "msw";

export type SetupApi = SetupWorker;
export type InitializeOptions = Parameters<SetupWorker["start"]>[0];

export type MswParameters = {
  msw?: {
    handlers: RequestHandler[] | Record<string, RequestHandler>;
    originalResponses: Record<string, any>;
  };
};

type Context = {
  parameters: MswParameters;
};

let worker: SetupWorker;
let opt: InitializeOptions;

export const initialize = async (options?: InitializeOptions) => {
  opt = options;
};

export function getWorker(): SetupWorker {
  if (worker === undefined) {
    throw new Error(
      `[MSW] Failed to retrieve the worker: no active worker found. Did you forget to call "initialize"?`
    );
  }

  return worker;
}

export const mswLoader = async (context: Context) => {
  const {
    parameters: { msw },
  } = context;
  if (!msw) return;
  if (msw.originalResponses || (window as any).msw) return;
  const worker = typeof global.process === "undefined" && setupWorker();
  if ("handlers" in msw && msw.handlers) {
    const handlers = Object.values(msw.handlers)
      .filter(Boolean)
      .reduce(
        (handlers, handlersList) => handlers.concat(handlersList),
        [] as RequestHandler[]
      );

    if (handlers.length > 0) {
      worker.use(...handlers);
    }
    worker.start(opt || {});

    (window as any).msw = worker;
    const responses = await getOriginalResponses(handlers);
    context.parameters.msw = {
      ...msw,
      originalResponses: responses,
    };
  }

  return {};
};

const getOriginalResponses = async (handlers: any[]) => {
  const originalResponses = {} as Record<string, any>;
  for (const handler of handlers) {
    const originalRequest = new Request(handler.info.path);
    const originalResponse = await fetch(originalRequest);
    let originalData;
    if (!originalResponse.ok) originalData = null;
    else originalData = await originalResponse.json();
    originalResponses[handler.info.path] = {
      data: originalData,
      status: originalResponse.status,
    };
  }

  return originalResponses;
};

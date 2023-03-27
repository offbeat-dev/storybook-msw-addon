import { SetupWorkerApi, RequestHandler } from "msw";

export type SetupApi = SetupWorkerApi;
export type InitializeOptions = Parameters<SetupWorkerApi["start"]>[0];

export type MswParameters = {
  msw?:
    | RequestHandler[]
    | { handlers: RequestHandler[] | Record<string, RequestHandler> };
};

type Context = {
  parameters: MswParameters;
};

let api: SetupApi;
let workerPromise: Promise<unknown> | void;

export async function initialize(
  options?: InitializeOptions
): Promise<SetupApi> {
  const { setupWorker } = await import("msw");
  const worker = setupWorker();
  workerPromise = worker.start(options);
  api = worker;
  return api;
}

export function getWorker(): SetupApi {
  if (api === undefined) {
    throw new Error(
      `[MSW] Failed to retrieve the worker: no active worker found. Did you forget to call "initialize"?`
    );
  }

  return api;
}

export const mswLoader = async (context: Context) => {
  const {
    parameters: { msw },
  } = context;

  let handlers: RequestHandler[] = [];

  if (api) {
    api.resetHandlers();
    if (msw) {
      if (Array.isArray(msw) && msw.length > 0) {
        api.use(...msw);
      } else if ("handlers" in msw && msw.handlers) {
        handlers = Object.values(msw.handlers)
          .filter(Boolean)
          .reduce(
            (handlers, handlersList) => handlers.concat(handlersList),
            [] as RequestHandler[]
          );

        if (handlers.length > 0) {
          api.use(...handlers);
        }
      }
    }
  }

  if (workerPromise) {
    await workerPromise;
  }

  return {};
};

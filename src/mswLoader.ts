import { SetupWorker, setupWorker } from "msw/browser";

export type SetupApi = SetupWorker;
export type InitializeOptions = Parameters<SetupWorker["start"]>[0];

export type MswParameters = {
  msw?: {
    handlers: any[];
    originalResponses: Record<string, any>;
  };
};

type Context = {
  parameters: MswParameters;
  viewMode: string;
  args: Record<string, any>;
  allArgs: Record<string, any>;
  initialArgs: Record<string, any>;
};

let worker: SetupWorker;
let opt: InitializeOptions;

export const initialize = async (options?: InitializeOptions) => {
  opt = options;
};

export function getWorker(): SetupWorker {
  if (worker === undefined) {
    throw new Error(
      `[MSW] Failed to retrieve the worker: no active worker found. Did you forget to call "initialize"?`,
    );
  }

  return worker;
}

export const mswLoader = async (context: Context) => {
  const {
    parameters: { msw },
    viewMode,
  } = context;
  if (!msw) return;
  if (msw.originalResponses || ((window as any).msw && viewMode !== "docs"))
    return;

  let worker;
  if (viewMode === "docs" && (window as any).msw) {
    worker = typeof global.process === "undefined" && (window as any).msw;
  } else {
    worker = typeof global.process === "undefined" && setupWorker();
  }

  if ("handlers" in msw && msw.handlers) {
    let handlers = Object.values(msw.handlers)
      .filter(Boolean)
      .reduce(
        (handlers, handlersList) => handlers.concat(handlersList),
        [] as unknown[],
      );
    if (viewMode === "docs") {
      const { handlers: modifiedHandlers, context: modifiedContext } =
        modifyHandlersAndArgs(handlers, context);
      handlers = modifiedHandlers;
      context = modifiedContext;
    }

    if (handlers.length > 0) {
      worker.use(...handlers);
    }
    if (!(window as any).msw) await worker.start(opt || {}); //this prevents race conditions. If msw is already running, we don't need to start it again, otherwise we do and we wait for it to start before continuing to rendering stories.

    (window as any).msw = worker;
    const responses = await getOriginalResponses(handlers);
    context.parameters.msw = {
      ...msw,
      originalResponses: responses,
    };
  }

  return {};
};

const modifyHandlersAndArgs = (handlers: any, context: Context) => {
  handlers.forEach((handler: any) => {
    const modifiedPath =
      handler.info.path.replace(/\/$/, "") + `/${self.crypto.randomUUID()}`;
    Object.keys(context.args).forEach((key) => {
      if (context.args[key] === handler.info.path) {
        context.args[key] = modifiedPath;
      }
    });
    Object.keys(context.allArgs).forEach((key) => {
      if (context.allArgs[key] === handler.info.path) {
        context.allArgs[key] = modifiedPath;
      }
    });
    Object.keys(context.initialArgs).forEach((key) => {
      if (context.initialArgs[key] === handler.info.path) {
        context.initialArgs[key] = modifiedPath;
      }
    });
    handler.info.header = handler.info.header.replace(
      handler.info.path,
      modifiedPath,
    );
    handler.info.path = modifiedPath;
  });

  return { handlers: handlers, context: context };
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

import { setupWorker } from 'msw/browser';

// src/mswLoader.ts
var worker;
var opt;
var initialize = async (options) => {
  opt = options;
};
var setupHandlers = (msw) => {
  if (worker) {
    if (window.__MSW_STORYBOOK__)
      return;
    worker.resetHandlers();
    if (msw) {
      if (Array.isArray(msw) && msw.length > 0) {
        worker.use(...msw);
      } else if ("handlers" in msw && msw.handlers) {
        const handlers = Object.values(msw.handlers).filter(Boolean).reduce(
          (handlers2, handlersList) => handlers2.concat(handlersList),
          []
        );
        if (handlers.length > 0) {
          console.log("handlers", handlers);
          worker.use(...handlers);
        }
      }
    }
  }
};
var mswLoader = async (context) => {
  const {
    parameters: { msw },
    viewMode
  } = context;
  if (!msw || window.__MSW_STORYBOOK__ && window.__MSW_STORYBOOK__.worker) {
    return;
  }
  if (viewMode === "docs" && window.__MSW_STORYBOOK__.worker) {
    worker = typeof global.process === "undefined" && window.__MSW_STORYBOOK__.worker;
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

export { initialize, mswLoader };
//# sourceMappingURL=out.js.map
//# sourceMappingURL=index.mjs.map
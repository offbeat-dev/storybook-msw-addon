'use strict';

var previewApi = require('@storybook/preview-api');
var coreEvents = require('@storybook/core-events');
var msw = require('msw');

// src/withRoundTrip.ts

// src/constants.ts
var ADDON_ID = "storybook/msw-vite-addon";
var EVENTS = {
  SEND: `${ADDON_ID}/send`,
  UPDATE: `${ADDON_ID}/update`,
  UPDATE_RESPONSES: `${ADDON_ID}/update-responses`,
  RESET: `${ADDON_ID}/reset`
};

// src/utils/executeHandlers.ts
var executeHandlers = async ({
  request,
  requestId,
  handlers,
  resolutionContext
}) => {
  let matchingHandler = null;
  let result = null;
  for (const handler of handlers) {
    result = await handler.run({ request, requestId, resolutionContext });
    if (result !== null) {
      matchingHandler = handler;
    }
    if (result?.response) {
      break;
    }
  }
  if (matchingHandler) {
    return {
      handler: matchingHandler,
      parsedResult: result?.parsedResult,
      response: result?.response
    };
  }
  return null;
};

// src/utils/randomId.ts
function randomId() {
  return Math.random().toString(16).slice(2);
}

// src/utils/getResponse.ts
var getResponse = async (handlers, request) => {
  const result = await executeHandlers({
    request,
    requestId: randomId(),
    handlers
  });
  return {
    handler: result?.handler,
    response: result?.response
  };
};

// src/withRoundTrip.ts
var channel = previewApi.addons.getChannel();
var INITIAL_MOUNT_STATE = true;
var responseDelay = 0;
var status = 200;
var moveTimeout;
var emit;
var updateHandlers = () => {
  if (!Object.keys(window.__MSW_STORYBOOK__.handlersMap).length)
    return;
  if (!window.__MSW_STORYBOOK__)
    return;
  const worker = window.__MSW_STORYBOOK__.worker;
  worker.resetHandlers();
  window.__MSW_STORYBOOK__.handlers?.forEach((handler) => {
    if (!window.__MSW_STORYBOOK__.handlersMap[handler.info.header])
      return;
    const currentResponse = window.__MSW_STORYBOOK__.handlersMap[handler.info.header].response;
    const currentHandler = window.__MSW_STORYBOOK__.handlersMap[handler.info.header].handler;
    console.log("currentResponse", currentResponse);
    console.log("currentHandler", currentHandler);
    if (handler.info.path) {
      const httpHandler = handler;
      worker.use(
        msw.http.get(httpHandler.info.path, async () => {
          console.log("new httphandler", httpHandler.info.path);
          await msw.delay(responseDelay);
          if (currentResponse.status !== 200)
            return new msw.HttpResponse(null, { status });
          return msw.HttpResponse.json(currentResponse.jsonBodyData);
        })
      );
    }
  });
};
var withRoundTrip = (storyFn, ctx) => {
  if (!ctx.parameters.msw)
    return storyFn();
  if (!window.__MSW_STORYBOOK__) {
    channel.emit(coreEvents.FORCE_REMOUNT, { storyId: ctx.id });
    return storyFn();
  }
  if (ctx.parameters.msw.handlers) {
    if (!window.__MSW_STORYBOOK__.handlers)
      window.__MSW_STORYBOOK__.handlers = ctx.parameters.msw.handlers;
    if (!window.__MSW_STORYBOOK__.handlersMap)
      window.__MSW_STORYBOOK__.handlersMap = {};
    emit = previewApi.useChannel({
      [EVENTS.UPDATE]: ({ key, value }) => {
        if (key === "delay") {
          clearTimeout(moveTimeout);
          responseDelay = value;
          updateHandlers();
          moveTimeout = setTimeout(() => {
            channel.emit(coreEvents.FORCE_REMOUNT, { storyId: ctx.id });
          }, 500);
        }
        if (key === "status") {
          status = value;
          updateHandlers();
          channel.emit(coreEvents.FORCE_REMOUNT, { storyId: ctx.id });
        }
        const responseObject = {
          delay: responseDelay,
          status,
          responses: window.__MSW_STORYBOOK__.handlersMap
        };
        emit(EVENTS.SEND, responseObject);
      },
      [EVENTS.UPDATE_RESPONSES]: ({ key, objectKey, objectValue }) => {
        if (key === "responses") {
          window.__MSW_STORYBOOK__.handlersMap[objectKey].response = msw.HttpResponse.text(JSON.stringify(objectValue));
          updateHandlers();
          const responseObject = {
            delay: responseDelay,
            status,
            responses: window.__MSW_STORYBOOK__.handlersMap
          };
          channel.emit(coreEvents.FORCE_REMOUNT, { storyId: ctx.id });
          emit(EVENTS.SEND, responseObject);
        }
      },
      [EVENTS.RESET]: () => {
        window.__MSW_STORYBOOK__.handlersMap = {};
        window.__MSW_STORYBOOK__.worker.stop();
        location.reload();
      }
    });
    if (INITIAL_MOUNT_STATE) {
      console.log("INITIAL_MOUNT_STATE", window.__MSW_STORYBOOK__);
      logEvents();
      emit(EVENTS.SEND, {
        delay: responseDelay,
        status,
        responses: window.__MSW_STORYBOOK__.handlersMap
      });
      channel.on(coreEvents.STORY_ARGS_UPDATED, () => {
        window.__MSW_STORYBOOK__.handlersMap = {};
        location.reload();
      });
      channel.on(coreEvents.STORY_CHANGED, () => {
        emit(EVENTS.SEND, {
          status: void 0,
          delay: void 0,
          responses: void 0
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
var logEvents = () => {
  const worker = window.__MSW_STORYBOOK__.worker;
  if (!Array.isArray(window.__MSW_STORYBOOK__.handlers)) {
    const joinedHandlers = [];
    Object.values(window.__MSW_STORYBOOK__.handlers).forEach((handler) => {
      if (Array.isArray(handler))
        joinedHandlers.push(...handler);
      else
        joinedHandlers.push(handler);
    });
    window.__MSW_STORYBOOK__.handlers = joinedHandlers;
  }
  worker.events.on("request:match", async ({ request, requestId }) => {
    let { handler, response } = await getResponse(
      window.__MSW_STORYBOOK__.handlers || [],
      request
    );
    let responseData = await response.json();
    console.log("handler : response", handler, responseData);
    if (response && handler) {
      if (window.__MSW_STORYBOOK__.handlersMap[handler.info.header] && window.__MSW_STORYBOOK__.handlersMap[handler.info.header].response) ;
      window.__MSW_STORYBOOK__.handlersMap[handler.info.header] = {
        handler,
        response: {
          ...response,
          jsonBodyData: responseData,
          delay: responseDelay,
          status: response.status
        }
      };
      updateHandlers();
      emit(EVENTS.SEND, {
        delay: responseDelay,
        status,
        responses: window.__MSW_STORYBOOK__.handlersMap
      });
    }
  });
};

// src/preview.ts
var preview = {
  decorators: [withRoundTrip]
};
var preview_default = preview;

module.exports = preview_default;
//# sourceMappingURL=out.js.map
//# sourceMappingURL=preview.js.map
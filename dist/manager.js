'use strict';

var managerApi = require('@storybook/manager-api');
var React = require('react');
var components = require('@storybook/components');
var blocks = require('@storybook/blocks');
var theming = require('@storybook/theming');

function _interopDefault (e) { return e && e.__esModule ? e : { default: e }; }

var React__default = /*#__PURE__*/_interopDefault(React);

// src/manager.ts

// src/constants.ts
var ADDON_ID = "storybook/msw-vite-addon";
var PANEL_ID = `${ADDON_ID}/panel`;
var EVENTS = {
  SEND: `${ADDON_ID}/send`,
  UPDATE: `${ADDON_ID}/update`,
  UPDATE_RESPONSES: `${ADDON_ID}/update-responses`,
  RESET: `${ADDON_ID}/reset`
};

// src/utils/statusMap.ts
var statusTextMap = {
  200: "OK",
  401: "Unauthorized",
  403: "Forbidden",
  404: "Not Found",
  500: "Internal Server Error"
};
var statusMap_default = statusTextMap;

// src/Panel.tsx
var statusCodes = Object.keys(statusMap_default);
var { Select } = components.Form;
var Container = theming.styled.div`
  box-shadow: rgb(0 0 0 / 10%) 0px 1px 3px 0px;

  & > div:not(:first-child) {
    border-block-start: 1px solid ${({ theme }) => theme.appBorderColor};
  }

  & > div:last-child {
    border-block-end: 1px solid ${({ theme }) => theme.appBorderColor};
  }

  & > div {
    padding-block: 2rem;
    padding-inline: 1rem;
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    gap: 1rem;
  }

  h3 {
    margin-block-end: 0.5rem;
  }
`;
var ObjectControlContainer = theming.styled.div`
  border: 1px solid ${({ theme }) => theme.appBorderColor};
  border-radius: 5px;
  padding: 1rem;

  &:not(:first-child) {
    margin-block-start: 1rem;
  }
`;
var SBSelect = theming.styled(Select)`
  inline-size: 100%;
`;
var Label = theming.styled.div`
  margin-bottom: 1rem;
  flex: 1 0 50%;
`;
var ObjectsContainer = theming.styled.div`
  flex: 1 1 50%;
`;
var SBButton = theming.styled(components.Button)`
  margin-block-start: 1rem;
`;
var Panel = (props) => {
  const [addonState, setAddonState] = managerApi.useAddonState(ADDON_ID, {});
  const [dataHasChanged, setDataHasChanged] = React__default.default.useState(false);
  const emit = managerApi.useChannel({
    [EVENTS.SEND]: (newAddonState) => {
      console.log("send", newAddonState);
      setAddonState({ ...addonState, ...newAddonState });
    }
  });
  const onReset = () => {
    console.log("onReset");
    emit(EVENTS.RESET);
    setDataHasChanged(false);
  };
  const onChange = (key, value) => {
    console.log("onChange", key, value);
    emit(EVENTS.UPDATE, { key, value });
  };
  const onChangeResponse = (key, objectKey, objectValue) => {
    setDataHasChanged(true);
    console.log("onChangeResponse", key, objectKey, objectValue);
    emit(EVENTS.UPDATE_RESPONSES, { key, objectKey, objectValue });
  };
  const getRender = () => {
    if (addonState.delay !== void 0 && addonState.status !== void 0 && addonState.responses !== void 0)
      return /* @__PURE__ */ React__default.default.createElement(components.ScrollArea, null, /* @__PURE__ */ React__default.default.createElement(Container, null, /* @__PURE__ */ React__default.default.createElement("div", null, /* @__PURE__ */ React__default.default.createElement(Label, null, /* @__PURE__ */ React__default.default.createElement("h3", null, "Response Delay : ", addonState.delay, " ms"), /* @__PURE__ */ React__default.default.createElement("p", null, "Set a mock response delay")), /* @__PURE__ */ React__default.default.createElement(
        blocks.RangeControl,
        {
          name: "delay",
          value: addonState.delay,
          onChange: (value) => onChange("delay", value),
          min: 0,
          max: 1e4,
          step: 500
        }
      )), /* @__PURE__ */ React__default.default.createElement("div", null, /* @__PURE__ */ React__default.default.createElement(Label, null, /* @__PURE__ */ React__default.default.createElement("h3", null, "Response Status : ", addonState.status), /* @__PURE__ */ React__default.default.createElement("p", null, "Select a mock response status")), /* @__PURE__ */ React__default.default.createElement(
        SBSelect,
        {
          onChange: (event) => onChange("status", event.target.value),
          value: addonState.status,
          name: "status"
        },
        statusCodes.map((code) => /* @__PURE__ */ React__default.default.createElement("option", { key: code, value: code }, code, " - ", statusMap_default[code]))
      )), /* @__PURE__ */ React__default.default.createElement("div", null, /* @__PURE__ */ React__default.default.createElement(Label, null, /* @__PURE__ */ React__default.default.createElement("h3", null, "Response Data"), /* @__PURE__ */ React__default.default.createElement("p", null, "Edit the mock response data")), /* @__PURE__ */ React__default.default.createElement(ObjectsContainer, null, addonState.responses && Object.keys(addonState.responses).length > 0 && Object.keys(addonState.responses).map((key) => {
        const { method, path } = addonState.responses[key].handler.info;
        const { operationName } = addonState.responses[key].handler.info;
        return /* @__PURE__ */ React__default.default.createElement(ObjectControlContainer, { key }, /* @__PURE__ */ React__default.default.createElement(
          blocks.ObjectControl,
          {
            name: method && path ? `${method} ${path}` : operationName,
            value: addonState.responses[key].response.jsonBodyData,
            onChange: (value) => onChangeResponse("responses", key, value),
            theme: void 0
          }
        ));
      }))), /* @__PURE__ */ React__default.default.createElement("div", null, /* @__PURE__ */ React__default.default.createElement(Label, null, /* @__PURE__ */ React__default.default.createElement("h3", null, "Reset"), /* @__PURE__ */ React__default.default.createElement("p", null, "Reset the original mock response data")), /* @__PURE__ */ React__default.default.createElement(
        SBButton,
        {
          primary: true,
          onClick: onReset,
          disabled: !dataHasChanged
        },
        "Reset Mock Data"
      ))));
    return /* @__PURE__ */ React__default.default.createElement(Container, null, /* @__PURE__ */ React__default.default.createElement(Label, null, "No mock data."));
  };
  return /* @__PURE__ */ React__default.default.createElement(components.AddonPanel, { ...props }, /* @__PURE__ */ React__default.default.createElement("div", null, getRender()));
};

// src/manager.ts
managerApi.addons.register(ADDON_ID, () => {
  managerApi.addons.add(PANEL_ID, {
    type: managerApi.types.PANEL,
    title: "MSW",
    match: ({ viewMode }) => viewMode === "story",
    render: Panel
  });
});
//# sourceMappingURL=out.js.map
//# sourceMappingURL=manager.js.map
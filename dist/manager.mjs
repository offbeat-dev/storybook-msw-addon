import { addons, types, useAddonState, useChannel } from '@storybook/manager-api';
import React from 'react';
import { Button, Form, AddonPanel, ScrollArea } from '@storybook/components';
import { RangeControl, ObjectControl } from '@storybook/blocks';
import { styled } from '@storybook/theming';

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
var { Select } = Form;
var Container = styled.div`
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
var ObjectControlContainer = styled.div`
  border: 1px solid ${({ theme }) => theme.appBorderColor};
  border-radius: 5px;
  padding: 1rem;

  &:not(:first-child) {
    margin-block-start: 1rem;
  }
`;
var SBSelect = styled(Select)`
  inline-size: 100%;
`;
var Label = styled.div`
  margin-bottom: 1rem;
  flex: 1 0 50%;
`;
var ObjectsContainer = styled.div`
  flex: 1 1 50%;
`;
var SBButton = styled(Button)`
  margin-block-start: 1rem;
`;
var Panel = (props) => {
  const [addonState, setAddonState] = useAddonState(ADDON_ID, {});
  const [dataHasChanged, setDataHasChanged] = React.useState(false);
  const emit = useChannel({
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
      return /* @__PURE__ */ React.createElement(ScrollArea, null, /* @__PURE__ */ React.createElement(Container, null, /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement(Label, null, /* @__PURE__ */ React.createElement("h3", null, "Response Delay : ", addonState.delay, " ms"), /* @__PURE__ */ React.createElement("p", null, "Set a mock response delay")), /* @__PURE__ */ React.createElement(
        RangeControl,
        {
          name: "delay",
          value: addonState.delay,
          onChange: (value) => onChange("delay", value),
          min: 0,
          max: 1e4,
          step: 500
        }
      )), /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement(Label, null, /* @__PURE__ */ React.createElement("h3", null, "Response Status : ", addonState.status), /* @__PURE__ */ React.createElement("p", null, "Select a mock response status")), /* @__PURE__ */ React.createElement(
        SBSelect,
        {
          onChange: (event) => onChange("status", event.target.value),
          value: addonState.status,
          name: "status"
        },
        statusCodes.map((code) => /* @__PURE__ */ React.createElement("option", { key: code, value: code }, code, " - ", statusMap_default[code]))
      )), /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement(Label, null, /* @__PURE__ */ React.createElement("h3", null, "Response Data"), /* @__PURE__ */ React.createElement("p", null, "Edit the mock response data")), /* @__PURE__ */ React.createElement(ObjectsContainer, null, addonState.responses && Object.keys(addonState.responses).length > 0 && Object.keys(addonState.responses).map((key) => {
        const { method, path } = addonState.responses[key].handler.info;
        const { operationName } = addonState.responses[key].handler.info;
        return /* @__PURE__ */ React.createElement(ObjectControlContainer, { key }, /* @__PURE__ */ React.createElement(
          ObjectControl,
          {
            name: method && path ? `${method} ${path}` : operationName,
            value: addonState.responses[key].response.jsonBodyData,
            onChange: (value) => onChangeResponse("responses", key, value),
            theme: void 0
          }
        ));
      }))), /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement(Label, null, /* @__PURE__ */ React.createElement("h3", null, "Reset"), /* @__PURE__ */ React.createElement("p", null, "Reset the original mock response data")), /* @__PURE__ */ React.createElement(
        SBButton,
        {
          primary: true,
          onClick: onReset,
          disabled: !dataHasChanged
        },
        "Reset Mock Data"
      ))));
    return /* @__PURE__ */ React.createElement(Container, null, /* @__PURE__ */ React.createElement(Label, null, "No mock data."));
  };
  return /* @__PURE__ */ React.createElement(AddonPanel, { ...props }, /* @__PURE__ */ React.createElement("div", null, getRender()));
};

// src/manager.ts
addons.register(ADDON_ID, () => {
  addons.add(PANEL_ID, {
    type: types.PANEL,
    title: "MSW",
    match: ({ viewMode }) => viewMode === "story",
    render: Panel
  });
});
//# sourceMappingURL=out.js.map
//# sourceMappingURL=manager.mjs.map
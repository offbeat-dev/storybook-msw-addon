import { addons, types } from "@storybook/manager-api";
import { ADDON_ID, PANEL_ID } from "./constants";
import { Panel } from "./Panel";
import * as React from "react";

addons.register(ADDON_ID, () => {
  addons.add(PANEL_ID, {
    type: types.PANEL,
    title: "MSW",
    match: ({ viewMode }) => viewMode === "story",
    render: ({ active }) => <Panel active={!!active} />,
  });
});

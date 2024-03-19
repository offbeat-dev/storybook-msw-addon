import type { Preview } from "@storybook/react";
import "../src/styles/globals.scss";
import { initialize } from "../dist/index.js";
import { mswLoader } from "../dist/index.js";

initialize({
  onUnhandledRequest: "bypass",
});

const preview: Preview = {
  parameters: {
    backgrounds: {
      default: "light",
    },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
  loaders: [mswLoader],
};

export default preview;

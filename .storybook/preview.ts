import type { Preview } from "@storybook/react";
import { initialize, mswLoader } from "../dist/index.mjs";
import "../src/styles/globals.scss";

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
};

export const loaders = [mswLoader];

export default preview;

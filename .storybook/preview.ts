import type { Preview } from "@storybook/react";
import { initialize, mswLoader, getWorker } from "../dist/index.mjs";

await initialize({
  onUnhandledRequest: "bypass",
});

const preview: Preview = {
  parameters: {
    backgrounds: {
      default: "light",
    },
    actions: { argTypesRegex: "^on[A-Z].*" },
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

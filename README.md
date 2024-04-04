[![Release](https://github.com/offbeat-dev/storybook-msw-addon/actions/workflows/release.yml/badge.svg?branch=main)](https://github.com/offbeat-dev/storybook-msw-addon/actions/workflows/release.yml)

#

<p align="center">
<img src="https://raw.githubusercontent.com/offbeat-dev/storybook-msw-addon/main/storybook-msw-addon.gif">
</p>

#

<p align="center">
  <img src="https://raw.githubusercontent.com/offbeat-dev/storybook-msw-addon/main/storybook-msw-addon.png" width="150">
</p>
<h1 align="center">Storybook Addon for MSW</h1>

An MSW (Mock Service Worker) addon including a control panel that enables interaction and manipulation of mock requests within Storybook.

## Features

- Up to date with current MSW version (2.1.0)

## Installing and Setup

### Install MSW and the addon

With npm:

```sh
npm i msw storybook-msw-addon -D
```

Or with yarn:

```sh
yarn add msw storybook-msw-addon -D
```

### Generate service worker for MSW in a project folder.

Keep in mind this influences the paths you can use for your api calls.

```sh
npx msw init ${path to project folder to be initialized by msw} --save
```

For example, the following command will init a service worker inside the `api` folder of your project.

```sh
npx msw init ./api --save
```

When running Storybook, you have to serve the folder where you have init the MSW service worker as an asset to Storybook. Refer to [the docs](https://storybook.js.org/docs/react/configure/images-and-assets) if needed.

### Add the addon to your project

Add the addon to the storybook config in `./storybook/main.js`:

```js
addons: [
    ...,
    "storybook-msw-addon",
  ],
```

### Configure the addon

Enable MSW in Storybook by initializing MSW and providing the MSW loader in `./storybook/preview.js`:

```js
import { initialize, mswLoader } from "storybook-msw-addon";

// Initialize MSW
initialize();

// Provide the MSW addon loader globally. A loader runs before a story renders, avoiding potential race conditions.
export const loaders = [mswLoader];
```

### Start Storybook

Remember to serve the `public` folder, or the path where you have init the MSW service worker

```sh
npm run storybook
```

## Usage

The pass request handlers (https://mswjs.io/docs/basics/request-handler) into the `handlers` property of the `msw` parameter. This is commonly an array of handlers.

```js
import { http, HttpResponse } from "msw";

export const SuccessBehavior = () => <UserProfile />;

SuccessBehavior.parameters = {
  msw: {
    handlers: [
      http.get(endpoint, () => {
        return HttpResponse.json({ results: results });
      }),
    ],
  },
};
```

### Advanced Usage

`WIP` -- Advanced use cases are currently being test with the current version of this addon.

#### Configuring MSW

If you want to configure `storybook-msw--addon`, you can pass options to the `initialize` function.

For example, if you want MSW to bypass unhandled requests you can initialize the addon with the `onUnhandledRequest: "bypass"` option:

```js
// preview.js
import { initialize } from "storybook-msw-addon";

initialize({
  onUnhandledRequest: "bypass",
});
```

### Development scripts

- `yarn start` runs babel in watch mode and starts Storybook
- `yarn build` build and package your addon code

### Acknowledgments

This addon was inspired both by [msw-storybook-addon](https://storybook.js.org/addons/msw-storybook-addon) and [storybook-addon-mock](https://storybook.js.org/addons/storybook-addon-mock/), motivating us to combine features of both addons in one place.

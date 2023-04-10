import type { Meta, StoryObj } from "@storybook/react";
import { rest } from "msw";
import { MockApi } from "./MockApi";

const results = [
  {
    episode_id: 4,
    title: "A New Hope",
    opening_crawl:
      "(Mocked) Rebel spaceships have won their first victory against the evil Galactic Empire.",
    producer: "Gary Kurtz, Rick McCallum",
  },
  {
    episode_id: 5,
    title: "Empire Strikes Back",
    opening_crawl:
      "(Mocked) Imperial troops are pursuing the Rebel forces across the galaxy.",
    producer: "Gary Kurtz, Rick McCallum",
  },
  {
    episode_id: 6,
    title: "Return of the Jedi",
    opening_crawl:
      "(Mocked) Luke Skywalker has returned to his home planet of Tatooine to rescue Han Solo.",
    producer: "Howard G. Kazanjian, George Lucas, Rick McCallum",
  },
];

const meta: Meta<typeof MockApi> = {
  title: "Example/Mock API",
  component: MockApi,
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof MockApi>;

export const DefaultBehavior: Story = {
  args: {
    heading: "Mock API",
    endpoint: "https://swapi.dev/api/films/",
  },
};

export const MockedSuccess: Story = {
  args: {
    heading: "Mock API",
    endpoint: "/api/user",
  },
  parameters: {
    msw: {
      handlers: [
        rest.get("/api/user", (req, res, ctx) => {
          return res(ctx.json({ results: results }));
        }),
      ],
    },
  },
};

export const MockedError: Story = {
  args: {
    heading: "Mock API",
    endpoint: "/api/error",
  },
  parameters: {
    msw: {
      handlers: [
        rest.get("/api/error", (req, res, ctx) => {
          return res(ctx.status(403));
        }),
      ],
    },
  },
};

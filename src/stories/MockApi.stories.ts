import type { Meta, StoryObj } from "@storybook/react";
import { http, HttpResponse } from "msw";
import { MockApi } from "./MockApi";

const endpoint = "https://swapi.dev/api/films/";
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
};

export default meta;

type Story = StoryObj<typeof MockApi>;

export const DefaultBehavior: Story = {
  args: {
    heading: "Original Endpoint",
    endpoint: endpoint,
  },
};

export const MockedSuccess: Story = {
  args: {
    heading: "Mocked Success",
    endpoint: endpoint,
  },
  parameters: {
    msw: {
      handlers: [
        http.get(endpoint, ({params}) => {
          console.log("Mocked Success", HttpResponse.json({results: results}))
          return HttpResponse.json({results: results}, {status: 200});
        }),
      ],
    },
  },
};

export const MockedError: Story = {
  args: {
    heading: "Mocked Server Error",
    endpoint: endpoint,
  },
  parameters: {
    msw: {
      handlers: [
        http.get(endpoint, ({ params }) => {
          console.log("Mocked Error", params)
          return new HttpResponse(null, { status: 404 })
        }),
      ],
    },
  },
};

import * as React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { graphql, HttpResponse } from "msw";
import { MockApi } from "./App";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const defaultQueryClient = new QueryClient();
const endpoint = "https://swapi-graphql.netlify.app/.netlify/functions/index";

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

const mockedQueryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
    },
  },
});

const MockTemplate = () => (
  <QueryClientProvider client={mockedQueryClient}>
    <MockApi heading={"Mocked Success"} endpoint={endpoint} />
  </QueryClientProvider>
);

const meta: Meta<typeof MockApi> = {
  title: "Examples/React Query/GraphQL",
  component: MockApi,
};

export default meta;

type Story = StoryObj<typeof MockApi>;

export const DefaultBehavior = () => (
  <QueryClientProvider client={defaultQueryClient}>
    <MockApi heading={"Original Endpoint"} endpoint={endpoint} />
  </QueryClientProvider>
);

export const MockedSuccess: Story = {
  render: MockTemplate,
  parameters: {
    msw: {
      handlers: [
        graphql.query("AllFilmsQuery", ({ query, variables }) => {
          return HttpResponse.json({
            data: {
              allFilms: {
                films: results,
              },
            },
          });
        }),
      ],
    },
  },
};

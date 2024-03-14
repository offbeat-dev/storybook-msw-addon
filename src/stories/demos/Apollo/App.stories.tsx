import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { HttpResponse, graphql } from "msw";
import { MockApiGraphQL } from "./App";
import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
import { gql } from "@apollo/client";

const defaultClient = new ApolloClient({
  uri: "https://swapi-graphql.netlify.app/.netlify/functions/index",
  cache: new InMemoryCache(),
});

const AllFilmsQuery = gql`
  query AllFilmsQuery {
    allFilms {
      films {
        title
        episode_id: episodeID
        opening_crawl: openingCrawl
      }
    }
  }
`;

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

export const DefaultBehavior = () => (
  <ApolloProvider client={defaultClient}>
    <MockApiGraphQL heading={"Mock Films API"} query={AllFilmsQuery} />
  </ApolloProvider>
);

const meta: Meta<typeof MockApiGraphQL> = {
  title: "Examples/Apollo",
  component: MockApiGraphQL,
};

export default meta;

type Story = StoryObj<typeof MockApiGraphQL>;

const mockedClient = new ApolloClient({
  uri: "https://swapi-graphql.netlify.app/.netlify/functions/index",
  cache: new InMemoryCache(),
  defaultOptions: {
    watchQuery: {
      fetchPolicy: "no-cache",
      errorPolicy: "all",
    },
    query: {
      fetchPolicy: "no-cache",
      errorPolicy: "all",
    },
  },
});

const MockTemplate = () => (
  <ApolloProvider client={mockedClient}>
    <MockApiGraphQL heading={"Mocked Films API"} query={AllFilmsQuery} />
  </ApolloProvider>
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

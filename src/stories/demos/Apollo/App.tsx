import * as React from "react";
import { Fragment } from "react";
import "../../mock-api.scss";
import {
  useQuery,
  DocumentNode,
  TypedDocumentNode,
  OperationVariables,
} from "@apollo/client";
import { AllFilmsQueryDocument } from "../../../gql/graphql";

function useFetchFilms() {
  const { loading, error, data } = useQuery(AllFilmsQueryDocument);

  const results = data ? data.allFilms.films : [];

  return { loading, error, results };
}

type MockApiGraphQLProps = {
  heading: string;
  query: DocumentNode | TypedDocumentNode<any, OperationVariables>;
};

type MockApiGraphQLResult = {
  episode_id: number;
  title: string;
  opening_crawl: string;
  producer: string;
};

export const MockApiGraphQL = ({ heading }: MockApiGraphQLProps) => {
  const { loading, error, results } = useFetchFilms();

  if (loading) {
    return (
      <div className="storybook-mock-api__loader">
        <div className="storybook-mock-api__loader-symbol"></div>
      </div>
    );
  }

  return (
    <div className="storybook-mock-api">
      <h2>{heading}</h2>
      {error && <p>{error.message}</p>}
      {(!results || (results?.length === 0 && !error)) && (
        <p>No results found</p>
      )}
      {results && results.length > 0 && (
        <ul className="storybook-mock-api__items ">
          {results.map((result: MockApiGraphQLResult) => (
            <li key={result.episode_id} className="storybook-mock-api__item">
              <h3 className="storybook-mock-api__item-title">{result.title}</h3>
              <p className="storybook-mock-api__item-description">
                {result.opening_crawl}
              </p>
              <ul className="storybook-mock-api__tags">
                {result.producer &&
                  result.producer.split(",").map((producer, idx) => {
                    return (
                      <Fragment key={idx}>
                        <li className="storybook-mock-api__tag">{producer}</li>
                        {idx < result.producer.split(",").length - 1 && "|"}
                      </Fragment>
                    );
                  })}
              </ul>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

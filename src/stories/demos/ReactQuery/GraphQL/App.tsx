import React, { Fragment } from "react";
import "../../../mock-api.scss";
import { GraphQLClient } from "graphql-request";
import { useQuery } from "@tanstack/react-query";
import { AllFilmsQueryDocument } from "../../../../gql/graphql";

const useGetFilms = (endpoint:string) => {
  const graphQLClient = new GraphQLClient(endpoint);

  const { isError, error, isFetching, data } = useQuery({
    queryKey: ["films"],
    queryFn: async () => graphQLClient.request(AllFilmsQueryDocument),
  });

  return {
    status: isError ? "error" : isFetching ? "loading" : "success",
    error: error as Error,
    results: data && data.allFilms?.films ? data.allFilms.films : [],
  };
};

type MockApiProps = {
  endpoint: string;
  heading: string;
};

type MockApiResult = {
  episode_id: number;
  title: string;
  opening_crawl: string;
  producer: string;
};

export const MockApi = ({ endpoint, heading }: MockApiProps) => {
  const { status, results, error } = useGetFilms(endpoint);

  if (status === "loading") {
    return (
      <div className="storybook-mock-api__loader">
        <div className="storybook-mock-api__loader-symbol"></div>
      </div>
    );
  }

  return (
    <div className="storybook-mock-api">
      <h2>{heading}</h2>
      {status === "error" && <p>{error.message}</p>}
      {(!results || (results?.length === 0 && status !== "error")) && (
        <p>No results found</p>
      )}
      {results && status !== "error" && results.length > 0 && (
        <ul className="storybook-mock-api__items ">
          {results.map((result: MockApiResult) => (
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

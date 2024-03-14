import React, { Fragment } from "react";
import "../../mock-api.scss";
import { useQuery } from "@tanstack/react-query";

function fetchFilms(endpoint: string) {
  return fetch(endpoint)
    .then((res) => {
      if (!res.ok) {
        throw new Error(res.statusText);
      }
      return res;
    })
    .then((res) => res.json())
    .then((data) => data.results);
}

function useFetchFilms(endpoint: string) {
  const { isError, error, isFetching, data } = useQuery({
    queryKey:["films"], 
    queryFn: () =>
    fetchFilms(endpoint)},
  );
  return {
    status: isError ? "error" : isFetching ? "loading" : "success",
    error: error as Error,
    results: data,
  };
}

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
  const { status, error, results } = useFetchFilms(endpoint);

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
      {results && results.length > 0 && (
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

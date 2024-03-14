import React, { Fragment } from "react";
import "../../mock-api.scss";

type MockApiProps = {
  endpoint?: string;
  heading: string;
};

type MockApiResult = {
  episode_id: number;
  title: string;
  opening_crawl: string;
  producer: string;
};

export const MockApi = ({ heading, endpoint }: MockApiProps) => {
  const [results, setResults] = React.useState<MockApiResult[]>([]);
  const [loading, setLoading] = React.useState<boolean>(false);
  const [error, setError] = React.useState<string | null>(null);

  const fetchResults = React.useCallback(async () => {
    if (!endpoint) return;
    setLoading(true);
    const response = await fetch(`${endpoint}`);
    if (response.status === 200) {
      const data = await response.json();
      setResults(data);
      setLoading(false);
    } else {
      setError(
        `Something went wrong with the request. Status: ${response.status}`,
      );
      setLoading(false);
    }
  }, [endpoint]);

  React.useEffect(() => {
    fetchResults();
  }, []);

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
      {error && <p>{error}</p>}
      {(!results || (results?.length === 0 && !error)) && (
        <p>No results found</p>
      )}
      {results && results.length > 0 && (
        <ul className="storybook-mock-api__items ">
          {results.map((result) => (
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

import React from "react";
import "./mock-api.scss";

type MockApiProps = {
  endpoint?: string;
  heading: string;
};

type MockApiResult = {
  id: number;
  title: string;
  tags?: string[];
  image?: string;
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
        `Something went wrong with the request. Status: ${response.status}`
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
    <>
      <h2>{heading}</h2>
      {error && <p>{error}</p>}
      {(!results || results?.length === 0) && <p>No results found</p>}
      {results && results.length > 0 && (
        <ul>
          {results.map((result) => (
            <li key={result.id}>
              <div>
                <h3>{result.title}</h3>
                <ul>
                  {result.tags &&
                    result.tags.map((tag, idx) => <li key={idx}>{tag}</li>)}
                </ul>
              </div>
            </li>
          ))}
        </ul>
      )}
    </>
  );
};

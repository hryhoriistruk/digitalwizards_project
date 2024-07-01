import React, { useState, useEffect } from 'react';
import axios from 'axios';

const SearchResultsPage = ({ match }) => {
  const [searchResults, setSearchResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchSearchResults = async () => {
      setLoading(true);
      try {
        const response = await axios.get(`https://api.example.com/search?q=${match.params.query}`);
        setSearchResults(response.data.results);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };
    fetchSearchResults();
  }, [match.params.query]);

  return (
    <div className="search-results-page">
      <h1>Search Results for "{match.params.query}"</h1>
      {loading ? (
        <div className="loading">Loading...</div>
      ) : (
        <ul className="search-results">
          {searchResults.map((result, index) => (
            <li key={index}>
              <h2>{result.title}</h2>
              <p>{result.description}</p>
              <a href={result.url} target="_blank" rel="noopener noreferrer">
                Visit
              </a>
            </li>
          ))}
        </ul>
      )}
      {error && <div className="error">{error}</div>}
    </div>
  );
};

export default SearchResultsPage;
import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { searchAction } from '../actions';

const Search = ({ searchQuery }) => {
  const dispatch = useDispatch();
  const [query, setQuery] = useState(searchQuery);

  const handleSearch = () => {
    dispatch(searchAction(query));
  };

  return (
    <div>
      <h2>Search</h2>
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search..."
      />
      <button onClick={handleSearch}>Search</button>
    </div>
  );
};

export default Search;
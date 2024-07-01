// SearchContainer.js
import React, { useState } from 'eact';
import { connect } from 'eact-redux';
import { fetchSearchResults } from '../actions';
import SearchComponent from './SearchComponent';

const SearchContainer = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const onSearchChange = (query) => {
    setSearchQuery(query);
  };

  return (
    <SearchComponent searchQuery={searchQuery} onSearchChange={onSearchChange} />
  );
};

const mapStateToProps = (state) => {
  return {
    searchResults: state.searchResults,
  };
};

export default connect(mapStateToProps)(SearchContainer);
// FilterContainer.js
import React, { useState } from 'eact';
import { connect } from 'eact-redux';
import { fetchFilters } from '../actions';
import FilterComponent from './FilterComponent';

const FilterContainer = () => {
  const [filters, setFilters] = useState([]);

  const onFilterChange = (filter, checked) => {
    setFilters((prevFilters) => prevFilters.map((f) => (f.id === filter.id? {...f, checked } : f)));
  };

  return (
    <FilterComponent filters={filters} onFilterChange={onFilterChange} />
  );
};

const mapStateToProps = (state) => {
  return {
    filters: state.filters,
  };
};

export default connect(mapStateToProps)(FilterContainer);
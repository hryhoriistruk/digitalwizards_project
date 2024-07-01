import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { updateFilterAction, removeFilterAction } from '../actions';

const Filters = ({ filters }) => {
  const dispatch = useDispatch();

  const handleUpdateFilter = (filterId, updates) => {
    dispatch(updateFilterAction(filterId, updates));
  };

  const handleRemoveFilter = (filterId) => {
    dispatch(removeFilterAction(filterId));
  };

  return (
    <div>
      <h2>Filters</h2>
      <ul>
        {filters.map((filter) => (
          <li key={filter.id}>
            {filter.name}
            <button onClick={() => handleUpdateFilter(filter.id, { name: 'New Name' })}>
              Update
            </button>
            <button onClick={() => handleRemoveFilter(filter.id)}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Filters;
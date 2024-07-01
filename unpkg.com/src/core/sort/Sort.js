import React, { useState } from 'react';
import PropTypes from 'prop-types';

const Sort = ({ options, onChange }) => {
  const [selectedOption, setSelectedOption] = useState('');

  const handleOptionChange = (event) => {
    const selectedValue = event.target.value;
    setSelectedOption(selectedValue);
    onChange(selectedValue);
  };

  return (
    <div className="sort">
      <label>Sort by:</label>
      <select value={selectedOption} onChange={handleOptionChange}>
        <option value="">Default</option>
        {options.map((option, index) => (
          <option key={index} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      <button className="sort-direction" onClick={() => onChange(selectedOption, 'asc')}>
        <i className="fas fa-arrow-up" />
      </button>
      <button className="sort-direction" onClick={() => onChange(selectedOption, 'desc')}>
        <i className="fas fa-arrow-down" />
      </button>
    </div>
  );
};

Sort.propTypes = {
  options: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
    }),
  ).isRequired,
  onChange: PropTypes.func.isRequired,
};

export default Sort;
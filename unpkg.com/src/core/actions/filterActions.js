export const setCategoryFilter = (category) => {
  return {
    type: 'SET_CATEGORY_FILTER',
    payload: category,
  };
};

export const setPriceFilter = (price) => {
  return {
    type: 'SET_PRICE_FILTER',
    payload: price,
  };
};

export const setRatingFilter = (rating) => {
  return {
    type: 'SET_RATING_FILTER',
    payload: rating,
  };
};

export const applyFilters = (data) => {
  return {
    type: 'APPLY_FILTERS',
    payload: { data },
  };
};
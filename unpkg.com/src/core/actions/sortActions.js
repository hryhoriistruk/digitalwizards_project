export const setSortBy = (sortBy) => {
  return {
    type: 'SET_SORT_BY',
    payload: sortBy,
  };
};

export const setSortOrder = (sortOrder) => {
  return {
    type: 'SET_SORT_ORDER',
    payload: sortOrder,
  };
};

export const sortData = (data) => {
  return {
    type: 'SORT_DATA',
    payload: { data },
  };
};
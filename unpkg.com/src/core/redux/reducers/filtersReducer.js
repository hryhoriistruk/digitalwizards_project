const initialState = {
  filters: [],
};

const filtersReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_FILTERS':
      return {
        ...state,
        filters: action.payload,
      };
    case 'UPDATE_FILTER':
      return {
        ...state,
        filters: state.filters.map((filter) => {
          if (filter.id === action.payload.id) {
            return { ...filter, ...action.payload };
          }
          return filter;
        }),
      };
    case 'REMOVE_FILTER':
      return {
        ...state,
        filters: state.filters.filter((filter) => filter.id !== action.payload.id),
      };
    default:
      return state;
  }
};

export default filtersReducer;
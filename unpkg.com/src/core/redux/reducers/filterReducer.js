const initialState = {
  filters: {
    category: '',
    price: '',
    rating: '',
  },
  filteredData: [],
};

const filterReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_CATEGORY_FILTER':
      return {
       ...state,
        filters: {...state.filters, category: action.payload },
      };
    case 'SET_PRICE_FILTER':
      return {
       ...state,
        filters: {...state.filters, price: action.payload },
      };
    case 'SET_RATING_FILTER':
      return {
       ...state,
        filters: {...state.filters, rating: action.payload },
      };
    case 'APPLY_FILTERS':
      const filteredData = action.payload.data.filter((item) => {
        const { category, price, rating } = state.filters;
        if (category && item.category!== category) return false;
        if (price && item.price > price) return false;
        if (rating && item.rating < rating) return false;
        return true;
      });
      return {...state, filteredData };
    default:
      return state;
  }
};

export default filterReducer;
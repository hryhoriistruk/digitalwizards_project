const initialState = {
  sortBy: 'default',
  sortOrder: 'asc',
  sortedData: [],
};

const sortReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_SORT_BY':
      return {...state, sortBy: action.payload };
    case 'SET_SORT_ORDER':
      return {...state, sortOrder: action.payload };
    case 'SORT_DATA':
      const sortedData = action.payload.data.slice();
      switch (state.sortBy) {
        case 'price':
          sortedData.sort((a, b) => {
            if (state.sortOrder === 'asc') {
              return a.price - b.price;
            } else {
              return b.price - a.price;
            }
          });
          break;
        case 'rating':
          sortedData.sort((a, b) => {
            if (state.sortOrder === 'asc') {
              return a.rating - b.rating;
            } else {
              return b.rating - a.rating;
            }
          });
          break;
        case 'name':
          sortedData.sort((a, b) => {
            if (state.sortOrder === 'asc') {
              return a.name.localeCompare(b.name);
            } else {
              return b.name.localeCompare(a.name);
            }
          });
          break;
        default:
          // default sorting (e.g. by ID or creation date)
          sortedData.sort((a, b) => {
            if (state.sortOrder === 'asc') {
              return a.id - b.id;
            } else {
              return b.id - a.id;
            }
          });
      }
      return {...state, sortedData };
    default:
      return state;
  }
};

export default sortReducer;
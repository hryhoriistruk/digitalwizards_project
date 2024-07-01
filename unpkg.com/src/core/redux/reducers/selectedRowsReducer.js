const initialState = {
  selectedRows: [],
};

const selectedRowsReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SELECT_ROW':
      return {
        ...state,
        selectedRows: [...state.selectedRows, action.payload],
      };
    case 'DESELECT_ROW':
      return {
        ...state,
        selectedRows: state.selectedRows.filter((row) => row.id !== action.payload.id),
      };
    default:
      return state;
  }
};

export default selectedRowsReducer;
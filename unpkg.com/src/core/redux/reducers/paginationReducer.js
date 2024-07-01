// paginationReducer.js
import { SET_PAGE, SET_PAGE_SIZE, GO_TO_NEXT_PAGE, GO_TO_PREVIOUS_PAGE, GO_TO_FIRST_PAGE, GO_TO_LAST_PAGE } from './paginationActions';

const initialState = {
  page: 1,
  pageSize: 10,
  totalPages: 1,
};

export default function paginationReducer(state = initialState, action) {
  switch (action.type) {
    case SET_PAGE:
      return { ...state, page: action.payload };
    case SET_PAGE_SIZE:
      return { ...state, pageSize: action.payload };
    case GO_TO_NEXT_PAGE:
      return { ...state, page: state.page + 1 };
    case GO_TO_PREVIOUS_PAGE:
      return { ...state, page: state.page - 1 };
    case GO_TO_FIRST_PAGE:
      return { ...state, page: 1 };
    case GO_TO_LAST_PAGE:
      return { ...state, page: state.totalPages };
    default:
      return state;
  }
}
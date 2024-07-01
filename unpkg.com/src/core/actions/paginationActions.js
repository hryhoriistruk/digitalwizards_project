// paginationActions.js
export const SET_PAGE = 'SET_PAGE';
export const SET_PAGE_SIZE = 'SET_PAGE_SIZE';
export const GO_TO_NEXT_PAGE = 'GO_TO_NEXT_PAGE';
export const GO_TO_PREVIOUS_PAGE = 'GO_TO_PREVIOUS_PAGE';
export const GO_TO_FIRST_PAGE = 'GO_TO_FIRST_PAGE';
export const GO_TO_LAST_PAGE = 'GO_TO_LAST_PAGE';

export const setPage = (page) => {
  return {
    type: SET_PAGE,
    payload: page,
  };
};

export const setPageSize = (pageSize) => {
  return {
    type: SET_PAGE_SIZE,
    payload: pageSize,
  };
};

export const goToNextPage = () => {
  return {
    type: GO_TO_NEXT_PAGE,
  };
};

export const goToPreviousPage = () => {
  return {
    type: GO_TO_PREVIOUS_PAGE,
  };
};

export const goToFirstPage = () => {
  return {
    type: GO_TO_FIRST_PAGE,
  };
};

export const goToLastPage = () => {
  return {
    type: GO_TO_LAST_PAGE,
  };
};
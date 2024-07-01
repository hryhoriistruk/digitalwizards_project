import { fetchData, fetchFilters, updateFilter, removeFilter, search, paginate } from './api';

export const FETCH_DATA_REQUEST = 'FETCH_DATA_REQUEST';
export const FETCH_DATA_SUCCESS = 'FETCH_DATA_SUCCESS';
export const FETCH_DATA_FAILURE = 'FETCH_DATA_FAILURE';

export const FETCH_FILTERS_REQUEST = 'FETCH_FILTERS_REQUEST';
export const FETCH_FILTERS_SUCCESS = 'FETCH_FILTERS_SUCCESS';
export const FETCH_FILTERS_FAILURE = 'FETCH_FILTERS_FAILURE';

export const UPDATE_FILTER_REQUEST = 'UPDATE_FILTER_REQUEST';
export const UPDATE_FILTER_SUCCESS = 'UPDATE_FILTER_SUCCESS';
export const UPDATE_FILTER_FAILURE = 'UPDATE_FILTER_FAILURE';

export const REMOVE_FILTER_REQUEST = 'REMOVE_FILTER_REQUEST';
export const REMOVE_FILTER_SUCCESS = 'REMOVE_FILTER_SUCCESS';
export const REMOVE_FILTER_FAILURE = 'REMOVE_FILTER_FAILURE';

export const SEARCH_REQUEST = 'SEARCH_REQUEST';
export const SEARCH_SUCCESS = 'SEARCH_SUCCESS';
export const SEARCH_FAILURE = 'SEARCH_FAILURE';

export const PAGINATE_REQUEST = 'PAGINATE_REQUEST';
export const PAGINATE_SUCCESS = 'PAGINATE_SUCCESS';
export const PAGINATE_FAILURE = 'PAGINATE_FAILURE';

export const fetchDataAction = () => {
  return async (dispatch) => {
    dispatch({ type: FETCH_DATA_REQUEST });
    try {
      const response = await fetchData();
      dispatch({ type: FETCH_DATA_SUCCESS, payload: response.data });
    } catch (error) {
      dispatch({ type: FETCH_DATA_FAILURE, payload: error });
    }
  };
};

export const fetchFiltersAction = () => {
  return async (dispatch) => {
    dispatch({ type: FETCH_FILTERS_REQUEST });
    try {
      const response = await fetchFilters();
      dispatch({ type: FETCH_FILTERS_SUCCESS, payload: response.data });
    } catch (error) {
      dispatch({ type: FETCH_FILTERS_FAILURE, payload: error });
    }
  };
};

export const updateFilterAction = (filterId, updates) => {
  return async (dispatch) => {
    dispatch({ type: UPDATE_FILTER_REQUEST });
    try {
      const response = await updateFilter(filterId, updates);
      dispatch({ type: UPDATE_FILTER_SUCCESS, payload: response.data });
    } catch (error) {
      dispatch({ type: UPDATE_FILTER_FAILURE, payload: error });
    }
  };
};

export const removeFilterAction = (filterId) => {
  return async (dispatch) => {
    dispatch({ type: REMOVE_FILTER_REQUEST });
    try {
      const response = await removeFilter(filterId);
      dispatch({ type: REMOVE_FILTER_SUCCESS, payload: response.data });
    } catch (error) {
      dispatch({ type: REMOVE_FILTER_FAILURE, payload: error });
    }
  };
};

export const searchAction = (query) => {
  return async (dispatch) => {
    dispatch({ type: SEARCH_REQUEST });
    try {
      const response = await search(query);
      dispatch({ type: SEARCH_SUCCESS, payload: response.data });
    } catch (error) {
      dispatch({ type: SEARCH_FAILURE, payload: error });
    }
  };
};

export const paginateAction = (page) => {
  return async (dispatch) => {
    dispatch({ type: PAGINATE_REQUEST });
    try {
      const response = await paginate(page);
      dispatch({ type: PAGINATE_SUCCESS, payload: response.data });
    } catch (error) {
      dispatch({ type: PAGINATE_FAILURE, payload: error });
    }
  };
};
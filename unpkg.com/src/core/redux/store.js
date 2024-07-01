import { createStore, combineReducers } from 'redux';
import { fetchDataAction, fetchFiltersAction, updateFilterAction, removeFilterAction, searchAction, paginateAction } from './actions';
import dataReducer from './reducers/dataReducer';
import filtersReducer from './reducers/filtersReducer';
import searchReducer from './reducers/searchReducer';
import paginationReducer from './reducers/paginationReducer';

const rootReducer = combineReducers({
  data: dataReducer,
  filters: filtersReducer,
  search: searchReducer,
  pagination: paginationReducer,
});

const store = createStore(rootReducer);

store.dispatch(fetchDataAction());
store.dispatch(fetchFiltersAction());

export default store;
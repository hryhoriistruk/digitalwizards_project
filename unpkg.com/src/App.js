import React, { useState, useEffect } from 'react';
import { Provider } from 'react-redux';
import store from './store';
import Filters from './Filters';
import Search from './Search';
import Pagination from './Pagination';
import DataGrid from './DataGrid';

const App = () => {
  const [data, setData] = useState([]);
  const [filters, setFilters] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    store.subscribe(() => {
      const state = store.getState();
      setData(state.data);
      setFilters(state.filters);
      setSearchQuery(state.search.query);
      setCurrentPage(state.pagination.currentPage);
      setTotalPages(state.pagination.totalPages);
    });
  }, []);

  return (
    <Provider store={store}>
      <Filters filters={filters} />
      <Search searchQuery={searchQuery} />
      <Pagination currentPage={currentPage} totalPages={totalPages} />
      <DataGrid data={data} />
    </Provider>
  );
};

export default App;
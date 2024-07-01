// PaginationContainer.js
import React, { useState } from 'eact';
import { connect } from 'eact-redux';
import { fetchPagination } from '../actions';
import PaginationComponent from './PaginationComponent';

const PaginationContainer = () => {
  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState(10);
  const [totalPages, setTotalPages] = useState(1);

  const onPageChange = (page) => {
    setPage(page);
  };

  return (
    <PaginationComponent
      page={page}
      pageSize={pageSize}
      totalPages={totalPages}
      onPageChange={onPageChange}
    />
  );
};

const mapStateToProps = (state) => {
  return {
    pagination: state.pagination,
  };
};

export default connect(mapStateToProps)(PaginationContainer);
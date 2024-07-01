// PaginationComponent.js
import React from 'react';
import { connect } from 'react-redux';
import { setPage, setPageSize, goToNextPage, goToPreviousPage, goToFirstPage, goToLastPage } from './paginationActions';

const PaginationComponent = ({ page, pageSize, totalPages, setPage, setPageSize, goToNextPage, goToPreviousPage, goToFirstPage, goToLastPage }) => {
  return (
    <div>
      <button onClick={() => goToFirstPage()}>First</button>
      <button onClick={() => goToPreviousPage()}>Previous</button>
      <span>Page {page} of {totalPages}</span>
      <button onClick={() => goToNextPage()}>Next</button>
      <button onClick={() => goToLastPage()}>Last</button>
      <select value={pageSize} onChange={(e) => setPageSize(e.target.value)}>
        <option value="10">10 per page</option>
        <option value="20">20 per page</option>
        <option value="50">50 per page</option>
      </select>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    page: state.pagination.page,
    pageSize: state.pagination.pageSize,
    totalPages: state.pagination.totalPages,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setPage: (page) => dispatch(setPage(page)),
    setPageSize: (pageSize) => dispatch(setPageSize(pageSize)),
    goToNextPage: () => dispatch(goToNextPage()),
    goToPreviousPage: () => dispatch(goToPreviousPage()),
    goToFirstPage: () => dispatch(goToFirstPage()),
    goToLastPage: () => dispatch(goToLastPage()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(PaginationComponent);
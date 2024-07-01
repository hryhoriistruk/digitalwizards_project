// DataGridContainer.js
import React from 'eact';
import { connect } from 'eact-redux';
import { fetchData } from '../actions';
import DataGridComponent from './DataGridComponent';

const DataGridContainer = () => {
  return (
    <DataGridComponent data={[]} />
  );
};

const mapStateToProps = (state) => {
  return {
    data: state.data,
  };
};

export default connect(mapStateToProps)(DataGridContainer);
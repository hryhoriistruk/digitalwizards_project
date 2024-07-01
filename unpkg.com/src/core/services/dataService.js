// dataService.js
import axios from 'axios';

const API_URL = 'https://example.com/api';

export const fetchData = (params) => {
  return axios.get(`${API_URL}/data`, { params });
};

export const fetchTotalCount = () => {
  return axios.get(`${API_URL}/total-count`);
};
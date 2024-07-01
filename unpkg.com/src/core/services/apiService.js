import axios from 'axios';

const API_URL = 'https://example.com/api';

export const fetchData = () => {
  return axios.get(`${API_URL}/data`);
};

export const fetchFilters = () => {
  return axios.get(`${API_URL}/filters`);
};

export const updateFilter = (filterId, updates) => {
  return axios.patch(`${API_URL}/filters/${filterId}`, updates);
};

export const removeFilter = (filterId) => {
  return axios.delete(`${API_URL}/filters/${filterId}`);
};

export const search = (query) => {
  return axios.get(`${API_URL}/search?q=${query}`);
};

export const paginate = (page) => {
  return axios.get(`${API_URL}/data?page=${page}`);
};
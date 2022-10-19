import axios from 'axios';

const requestTimeout = 5000;

export const coincapInstance = axios.create({
  // baseURL: `${process.env.REACT_APP_API_URL}`,
  baseURL: 'https://api.coincap.io/v2/',
  timeout: requestTimeout,
});

export default coincapInstance;

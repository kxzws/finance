import axios from 'axios';

const requestTimeout = 5000;

export const coincapInstance = axios.create({
  baseURL: `${process.env.REACT_APP_API_URL}`,
  timeout: requestTimeout,
});

export default coincapInstance;

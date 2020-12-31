import axios from 'axios';

import {
  REACT_APP_API_PROTOCOL,
  REACT_APP_API_HOST,
  REACT_APP_API_TOKEN,
} from '@env';

const protocol = REACT_APP_API_PROTOCOL;
const host = REACT_APP_API_HOST;
const token = REACT_APP_API_TOKEN;

const api = axios.create({
  baseURL: `${protocol}://${host}/api`,
  headers: {
    authorization: `Basic ${token}`,
  },
});

export default api;

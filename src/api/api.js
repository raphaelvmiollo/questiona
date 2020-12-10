import axios from 'axios';

const api = axios.create({
  baseURL: 'http://enade.gabrieldoyle.com/api',
});

export default api;

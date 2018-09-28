import env from 'react-native-config';
import axios from 'axios';

const api = axios.create({
  baseURL: env.API_URL,
  headers: {
    'Authorization':
    `Bearer ${env.AUTH_TOKEN}`,
    'Content-Type': 'application/vnd.api+json',
  },
});

export default api;

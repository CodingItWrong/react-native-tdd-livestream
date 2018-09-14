import env from 'react-native-config';
import axios from 'axios';

const api = axios.create({
  baseURL: env.API_URL,
  headers: {
    // TODO: do not hard code this
    'Authorization':
    `Bearer ${env.AUTH_TOKEN}`,
  },
});

export default api;

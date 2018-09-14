import axios from 'axios';

const api = axios.create({
  baseURL: 'https://sandboxapi.codingitwrong.com/',
  headers: {
    // TODO: do not hard code this
    'Authorization':
    'Bearer 779931e4b49cda548a2cb849854840a8c33403703c399a8bcb1c53d6cd91a27c',
  },
});

export default api;

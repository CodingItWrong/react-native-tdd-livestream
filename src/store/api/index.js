import env from 'react-native-config';
import fake from './fake';
import remote from './remote';

let api;

console.log('loading api');

switch (env.API_DRIVER) {
case 'fake':
  api = fake;
  break;
case 'remote':
  console.log('remote');
  api = remote;
  break;
}

export default api;

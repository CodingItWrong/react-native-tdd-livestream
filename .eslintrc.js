module.exports = {
  extends: [
    'plugin:react/recommended',
    'codingitwrong',
  ],
  parser: 'babel-eslint',
  plugins: [
    'detox',
    'jest',
  ],
  env: {
    'detox/detox': true,
    'jest/globals': true,
  },
  rules: {
    'react/prop-types': 'off',
    'no-unused-vars': 'error',
  },
};

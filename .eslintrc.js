module.exports = {
  env: {
    commonjs: true,
    es6: true,
    jest: true
  },
  extends: ['eslint:recommended', 'plugin:prettier/recommended', 'plugin:jsdoc/recommended'],
  parserOptions: {
    ecmaVersion: 2018,
  },
  rules: {
    'no-var': 'error',
  }
};

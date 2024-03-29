module.exports = {
  env: {
    commonjs: true,
    es2020: true,
    jest: true,
    node: true,
  },
  extends: ["eslint:recommended", "prettier"],
  rules: {
    "no-var": "error",
    "prefer-const": "error",
  },
  root: true,
};

const prettier = "prettier --check";
const eslint = "eslint --no-ignore --max-warnings 0";

module.exports = {
  "*.{json,md,yml}": [prettier],
  "*.js": [prettier, eslint],
};

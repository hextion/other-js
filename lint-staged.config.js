module.exports = {
  '*.{json,md,yml}': ['prettier --write', 'git add'],
  '*.js': ['eslint --fix', 'git add'],
};

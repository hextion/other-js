const prettier = 'prettier --list-different';
const eslint = 'eslint --max-warnings 0';

/**
 * Return array of passed commands
 *
 * @param  {...string} commands commands to run
 * @returns {string[]} commands
 */
const run = (...commands) => commands;

module.exports = {
  '*.{json,md,yml}': run(prettier),
  '*.js': run(prettier, eslint),
};

const CHARS_REGEXP = /[a-z]/gi;
const BRACKETS_REGEXP = /\[\]|{}|\(\)/g;

/**
 * Check if brackets are valid
 *
 * @param {string} str string with brackets
 * @returns {boolean} whether brackets are valid
 */
function isValidBrackets(str) {
  let after = str.replace(CHARS_REGEXP, '');
  let before;
  do {
    before = after;
    after = before.replace(BRACKETS_REGEXP, '');
  } while (before !== after);
  return after.length === 0;
}

module.exports = { isValidBrackets };

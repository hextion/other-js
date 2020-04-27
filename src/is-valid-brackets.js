const CHARS_REGEXP = /[a-z]/gi;
const BRACKETS_REGEXP = /\[\]|{}|\(\)/g;

/**
 * Check if brackets are valid
 *
 * @param {string} str string with brackets
 * @returns {boolean} whether brackets are valid
 */
function isValidBrackets(str) {
  let previous = str.replace(CHARS_REGEXP, '');
  let current;
  while ((current = previous.replace(BRACKETS_REGEXP, '')) !== previous) {
    previous = current;
  }
  return current.length === 0;
}

module.exports = { isValidBrackets };

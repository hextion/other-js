/**
 * Check if brackets are valid
 *
 * @param {string} str string with brackets
 * @returns {boolean} whether brackets are valid
 */
function isValidBrackets(str) {
  let previous = str.replace(/[a-z]/gi, '');
  let current;
  while ((current = previous.replace(/\[\]|{}|\(\)/g, '')) !== previous) {
    previous = current;
  }
  return current.length === 0;
}

module.exports = { isValidBrackets };

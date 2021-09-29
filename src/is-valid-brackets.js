/**
 * Check if brackets are valid
 *
 * @param {string} str string with brackets
 * @returns {boolean} whether brackets are valid
 */
function isValidBrackets(str) {
  const stash = [];
  for (let i = 0; i < str.length; i++) {
    const char = str[i];
    switch (char) {
      case '{':
      case '(':
      case '[': {
        stash.push(char);
        break;
      }
      case '}': {
        if (stash.pop() === '{') break;
        return false;
      }
      case ')': {
        if (stash.pop() === '(') break;
        return false;
      }
      case ']': {
        if (stash.pop() === '[') break;
        return false;
      }
    }
  }
  return stash.length === 0;
}

module.exports = { isValidBrackets };

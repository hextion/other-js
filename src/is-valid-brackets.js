/* eslint-disable no-fallthrough */

/**
 * Check if brackets are valid
 *
 * @param {string} str string with brackets
 * @returns {boolean} whether brackets are valid
 */
function isValidBrackets(str) {
  const stack = [];
  for (let i = 0; i < str.length; i++) {
    const char = str[i];
    switch (char) {
      case '{':
      case '(':
      case '[':
        stack.push(char);
        break;
      case '}':
        if (stack.pop() === '{') break;
      case ')':
        if (stack.pop() === '(') break;
      case ']':
        if (stack.pop() === '[') break;
        return false;
    }
  }
  return stack.length === 0;
}

module.exports = { isValidBrackets };

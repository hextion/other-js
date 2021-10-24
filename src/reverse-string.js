/**
 * Reverse string
 *
 * @param {string} str string
 * @returns {string} reversed string
 */
function reverse(str) {
  let reversed = '';

  while ((reversed += str[str.length - reversed.length - 1]).length < str.length) {
    // do nothing
  }

  return reversed;
}

module.exports = { reverse };

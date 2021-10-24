/**
 * Reverse string
 *
 * @param {string} str string
 * @returns {string} reversed string
 */
function reverse(str) {
  let reversed = '';
  for (let i = str.length - 1; i >= 0; i--) {
    reversed += str[i];
  }
  return reversed;
}

module.exports = { reverse };

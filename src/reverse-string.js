/**
 *
 * @param {string} str
 */
function reverse(str) {
  let reversed = '';
  // eslint-disable-next-line
  for (let i = str.length - 1; i >= 0; i--) {
    reversed += str[i];
  }
  return reversed;
}

module.exports = { reverse };

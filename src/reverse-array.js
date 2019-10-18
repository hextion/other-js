/**
 * Reverse array
 *
 * @param {Array} arr array
 * @returns {Array} reversed array
 */
function reverse(arr) {
  return arr.reduce((acc, el) => [el].concat(acc), []);
}

module.exports = { reverse };

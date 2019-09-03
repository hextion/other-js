/**
 *
 * @param {array} arr
 */
function reverse(arr) {
  return arr.reduce((acc, el) => [el].concat(acc), []);
}

module.exports = { reverse };

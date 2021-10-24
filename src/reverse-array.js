/**
 * Reverse array
 *
 * @param {Array} arr array
 * @returns {Array} reversed array
 */
function reverse(arr) {
  const reversed = [];

  if (arr.length === 0) return reversed;

  while (reversed.push(arr[arr.length - reversed.length - 1]) < arr.length) {
    // do nothing
  }

  return reversed;
}

module.exports = { reverse };

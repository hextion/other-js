/**
 * Reverse array
 *
 * @param {Array} arr array
 * @returns {Array} reversed array
 */
function reverse(arr) {
  const reversed = [];

  if (arr.length === 0) return reversed;

  while (reversed.push(arr.at(-reversed.length - 1)) < arr.length) {
    // do nothing
  }

  return reversed;
}

function reverseInPlace(arr) {
  for (let i = 0; i < Math.floor(arr.length / 2); i++) {
    const temp = arr.at(i);
    arr[i] = arr.at(-1 - i);
    arr[arr.length - 1 - i] = temp;
  }
  return arr;
}

module.exports = { reverse, reverseInPlace };

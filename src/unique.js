/**
 * Unique
 *
 * @param {Array<object>} arr array of objects
 * @param {Function} [f] object property selector
 * @returns {Array<object>} array with uniq items
 */
function unique(arr, f = e => e) {
  const temp = arr.map(f);
  return arr.filter((_, index) => temp.indexOf(temp[index]) === index);
}

module.exports = { unique };

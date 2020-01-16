/**
 * Quick sort
 *
 * @param {number[]} arr array of numbers
 * @returns {number[]} sorted array of numbers
 */
const quickSort = arr => {
  if (arr.length === 0) {
    return arr;
  }
  const [x, ...rest] = arr;
  const smaller = quickSort(rest.filter(number => number <= x));
  const bigger = quickSort(rest.filter(number => number > x));
  return [...smaller, x, ...bigger];
};

module.exports = { quickSort };

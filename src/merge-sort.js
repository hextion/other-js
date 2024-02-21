/* eslint-disable no-unused-vars */

function* minItem(a, b, compare) {
  let i = 0;
  let j = 0;
  while (i < a.length || j < b.length) {
    if (i === a.length) {
      yield b.at(j++);
    } else if (j === b.length) {
      yield a.at(i++);
    } else {
      const result = compare(a.at(i), b.at(j));
      if (result > 0) yield b.at(j++);
      else if (result < 0) yield a.at(i++);
      else {
        yield a.at(i++);
        yield b.at(j++);
      }
    }
  }
}

/* istanbul ignore next */
/**
 * Merge arrays
 *
 * @param {number[]} a array
 * @param {number[]} b array
 * @returns {number[]} merged array
 */
function merge(a, b, compare) {
  return Array.from(minItem(a, b, compare));
}

/**
 * Merge arrays recursive
 *
 * @param {number[]} arr1 array
 * @param {number[]} arr2 array
 * @returns {number[]} merged array
 */
function mergeRecursive(arr1, arr2) {
  if (arr1.length === 0) {
    return arr2;
  }
  if (arr2.length === 0) {
    return arr1;
  }
  const el1 = arr1[0];
  const el2 = arr2[0];
  return el1 < el2
    ? [el1].concat(mergeRecursive(arr1.slice(1), arr2))
    : [el2].concat(mergeRecursive(arr1, arr2.slice(1)));
}

/**
 * Merge sort array of numbers
 *
 * @param {number[]} arr array
 * @returns {number[]} sorted array
 */
function mergeSort(arr, compare = (a, b) => a - b) {
  if (arr.length <= 1) {
    return arr;
  }
  const middle = Math.floor(arr.length / 2);
  return merge(mergeSort(arr.slice(0, middle), compare), mergeSort(arr.slice(middle), compare), compare);
}

module.exports = { mergeSort };

/* eslint-disable no-unused-vars */

/**
 * Merge arrays
 *
 * @param {[number]} arr1 array
 * @param {[number]} arr2 array
 * @returns {[number]} merged array
 */
function merge(arr1, arr2) {
  let res = [];
  let i = 0;
  let j = 0;
  for (let k = 0; k < arr1.length + arr2.length; k++) {
    if (i > arr1.length - 1) {
      res[k] = arr2[j];
      j++;
    } else if (j > arr2.length - 1) {
      res[k] = arr1[i];
      i++;
    } else if (arr1[i] < arr2[j]) {
      res[k] = arr1[i];
      i++;
    } else {
      res[k] = arr2[j];
      j++;
    }
  }
  return res;
}

/**
 * Merge arrays recursive
 *
 * @param {[number]} arr1 array
 * @param {[number]} arr2 array
 * @returns {[number]} merged array
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
 * @param {[number]} arr array
 * @returns {[number]} sorted array
 */
function mergeSort(arr) {
  if (arr.length <= 1) {
    return arr;
  }
  const middle = Math.floor(arr.length / 2);
  return mergeRecursive(mergeSort(arr.slice(0, middle)), mergeSort(arr.slice(middle)));
}

module.exports = { mergeSort };

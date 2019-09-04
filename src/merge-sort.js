/**
 *
 * @param {[number]} arr1
 * @param {[number]} arr2
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
 *
 * @param {[number]} arr
 */
function mergeSort(arr) {
  if (arr.length <= 1) {
    return arr;
  }
  const middle = Math.floor(arr.length / 2);
  return merge(mergeSort(arr.slice(0, middle)), mergeSort(arr.slice(middle)));
}

module.exports = { mergeSort };

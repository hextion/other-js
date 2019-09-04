const { mergeSort } = require('./merge-sort');

it('sorts array', () => {
  expect(mergeSort([10, 1, 3, 2, 5, 7])).toEqual([1, 2, 3, 5, 7, 10]);
  expect(mergeSort([])).toEqual([]);
  expect(mergeSort([1])).toEqual([1]);
  expect(mergeSort([1, 1])).toEqual([1, 1]);
  expect(mergeSort([2, 1])).toEqual([1, 2]);
  expect(mergeSort([-1, 1])).toEqual([-1, 1]);
  expect(mergeSort([-1, -1, -1])).toEqual([-1, -1, -1]);
});

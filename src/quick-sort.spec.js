const { quickSort } = require('./quick-sort');

it('should return empty array', () => {
  expect(quickSort([])).toMatchObject([]);
});

it('should sort array', () => {
  expect(quickSort([1, 2, 5, 3, 7, 10, 12, 9, 4, 5])).toMatchObject([1, 2, 3, 4, 5, 5, 7, 9, 10, 12]);
});

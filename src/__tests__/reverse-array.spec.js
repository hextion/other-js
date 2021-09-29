const { reverse } = require('../reverse-array');

it('reverse array', () => {
  expect(reverse([1, 3, 2])).toEqual([2, 3, 1]);
});

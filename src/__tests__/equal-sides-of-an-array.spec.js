const { equalsAt } = require('../equal-sides-of-an-array');

it('works', () => {
  expect(equalsAt([1, 2, 3, 4, 3, 2, 1])).toEqual(3);
  expect(equalsAt([1, 5, 4, 3, 2, 1])).toEqual(2);
  expect(equalsAt([6, 4, 3, 2, 1])).toEqual(1);
  expect(equalsAt([1, 2, 3, 4, 6])).toEqual(3);
  expect(equalsAt([10, 0, 0, 0, 0])).toEqual(0);
  expect(equalsAt([0, 0, 0, 0, 3])).toEqual(4);
  expect(equalsAt([1, 4, 3, 2, 1])).toEqual(-1);
});

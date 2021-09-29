const { equalsAt } = require('../equal-sides-of-an-array');

it('works', () => {
  expect(equalsAt([1, 2, 3, 4, 3, 2, 1])).toEqual(3);
  expect(equalsAt([1, 5, 4, 3, 2, 1])).toEqual(2);
  expect(equalsAt([6, 4, 3, 2, 1])).toEqual(1);
  expect(equalsAt([1, 4, 3, 2, 1])).toEqual(0);
});

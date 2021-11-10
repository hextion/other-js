const { equalsAt } = require("../equal-sides-of-an-array");

it.each`
  array                    | index
  ${[1, 2, 3, 4, 3, 2, 1]} | ${3}
  ${[1, 5, 4, 3, 2, 1]}    | ${2}
  ${[6, 4, 3, 2, 1]}       | ${1}
  ${[1, 2, 3, 4, 6]}       | ${3}
  ${[10, 0, 0, 0, 0]}      | ${0}
  ${[0, 0, 0, 0, 3]}       | ${4}
  ${[1, 4, 3, 2, 1]}       | ${-1}
`("equal sides of the $array are at $index", ({ array, index }) => {
  expect(equalsAt(array)).toBe(index);
});

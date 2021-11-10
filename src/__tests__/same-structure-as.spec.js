const { sameStructureAs } = require("../same-structure-as");

it("returns true", () => {
  expect(sameStructureAs([1, 1, 1], [2, 2, 2])).toBe(true);
  expect(sameStructureAs([1, [1, 1]], [2, [2, 2]])).toBe(true);
  expect(sameStructureAs([[[], []]], [[[], []]])).toBe(true);
});

it("returns false", () => {
  expect(sameStructureAs([1, [1, 1]], [[2, 2], 2])).toBe(false);
  expect(
    sameStructureAs(
      [1, [1, 1]],
      [
        [1, 1],
        [1, 1],
      ]
    )
  ).toBe(false);
  expect(sameStructureAs([[2, 2], 2], [1, [1, 1]])).toBe(false);
  expect(sameStructureAs([1, [1, 1]], [[2], 2])).toBe(false);
  expect(sameStructureAs([[[], []]], [[1, 1]])).toBe(false);
});

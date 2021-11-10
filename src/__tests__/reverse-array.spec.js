const { reverse } = require("../reverse-array");

it("should return new array", () => {
  const source = [];
  expect(reverse(source)).not.toBe(source);
});

it("should handle empty array", () => {
  expect(reverse([])).toEqual([]);
});

it("reverse array", () => {
  expect(reverse([1, 3, 2])).toEqual([2, 3, 1]);
});

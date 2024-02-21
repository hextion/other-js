const { reverse, reverseInPlace } = require("../reverse-array");

describe("reverse", () => {
  it("should return new array", () => {
    const source = [];
    expect(reverse(source)).not.toBe(source);
  });

  it("should handle empty array", () => {
    expect(reverse([])).toEqual([]);
  });

  it("should handle array with items", () => {
    expect(reverse([1, 3, 2])).toEqual([2, 3, 1]);
  });
});

describe("reverse in place", () => {
  it("should return same array", () => {
    const source = [];
    expect(reverseInPlace(source)).toBe(source);
  });

  it("should handle empty array", () => {
    expect(reverseInPlace([])).toEqual([]);
  });

  it("should handle array with items", () => {
    expect(reverseInPlace([1, 3, 2])).toEqual([2, 3, 1]);
  });
});

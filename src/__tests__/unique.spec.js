const { unique } = require("../unique");

it("should return new array", () => {
  const arr = [];
  expect(unique(arr)).not.toBe(arr);
});

it("should return empty array", () => {
  expect(unique([])).toMatchObject([]);
});

it("should return array with uniq items", () => {
  expect(
    unique(
      [
        {
          i: 0,
          v: 2,
        },
        {
          i: 1,
          v: 3,
        },
        {
          i: 2,
          v: 2,
        },
      ],
      (e) => e.v
    )
  ).toMatchObject([
    {
      i: 0,
      v: 2,
    },
    {
      i: 1,
      v: 3,
    },
  ]);
});

it("should return array with uniq numbers", () => {
  expect(unique([1, 2, 3, 4, 5, 6, 7, 1, 2, 3, 4, 4, 5])).toMatchObject([1, 2, 3, 4, 5, 6, 7]);
});

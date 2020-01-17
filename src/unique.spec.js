const { unique } = require('./unique');

it('should return empty array', () => {
  expect(unique([], e => e)).toMatchObject([]);
});

it('should return array with uniq items', () => {
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
      e => e.v
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

const { makeTree } = require('./tree');

it('should return empty array', () => {
  expect(makeTree([])).toMatchObject([]);
});

it('should return tree', () => {
  expect(
    makeTree([
      {
        id: 1,
        parentId: null,
      },
      {
        id: 2,
        parentId: 1,
      },
      {
        id: 3,
        parentId: null,
      },
    ])
  ).toMatchObject([
    {
      id: 1,
      parentId: null,
      children: [
        {
          id: 2,
          parentId: 1,
        },
      ],
    },
    {
      id: 3,
      parentId: null,
      children: [],
    },
  ]);
});

const { makeTree } = require('../tree');

it('should return tree', () => {
  expect(
    makeTree(
      [
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
      ],
      {
        keySelector: (item) => item.id,
        parentKeySelector: (item) => item.parentId,
      }
    )
  ).toMatchObject([
    {
      value: {
        id: 1,
        parentId: null,
      },
      children: [
        {
          value: {
            id: 2,
            parentId: 1,
          },
          children: null,
        },
      ],
    },
    {
      value: {
        id: 3,
        parentId: null,
      },
      children: null,
    },
  ]);
});

const { makeTree } = require('./tree');

it('should return empty array', () => {
  expect(makeTree([])).toMatchObject([]);
});

describe('should return tree', () => {
  it('should use default options', () => {
    expect(
      makeTree([
        {
          key: 1,
          parentKey: null,
        },
        {
          key: 2,
          parentKey: 1,
        },
        {
          key: 3,
          parentKey: null,
        },
      ])
    ).toMatchObject([
      {
        key: 1,
        parentKey: null,
        children: [
          {
            key: 2,
            parentKey: 1,
            children: null,
          },
        ],
      },
      {
        key: 3,
        parentKey: null,
        children: null,
      },
    ]);
  });

  it('should use passed options', () => {
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
          keySelector: item => item.id,
          parentKeySelector: item => item.parentId,
        }
      )
    ).toMatchObject([
      {
        id: 1,
        parentId: null,
        children: [
          {
            id: 2,
            parentId: 1,
            children: null,
          },
        ],
      },
      {
        id: 3,
        parentId: null,
        children: null,
      },
    ]);

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
          transform: item => ({ key: item.id, parentKey: item.parentId }),
        }
      )
    ).toMatchObject([
      {
        key: 1,
        parentKey: null,
        children: [
          {
            key: 2,
            parentKey: 1,
            children: null,
          },
        ],
      },
      {
        key: 3,
        parentKey: null,
        children: null,
      },
    ]);
  });
});

const { makeTree } = require("../tree");

it("should return tree", () => {
  const value_1 = {
    id: 1,
    parentId: null,
  };
  const value_2 = {
    id: 2,
    parentId: 1,
  };
  const value_3 = {
    id: 3,
    parentId: null,
  };
  const node_1 = { value: value_1 };
  const node_2 = { value: value_2 };
  const node_3 = { value: value_3 };
  node_1.parentNode = null;
  node_1.children = [node_2];
  node_2.parentNode = node_1;
  node_2.children = [];
  node_3.parentNode = null;
  node_3.children = [];
  expect(
    makeTree([value_1, value_2, value_3], {
      keySelector: (item) => item.id,
      parentKeySelector: (item) => item.parentId,
    })
  ).toMatchObject([node_1, node_3]);
});

/**
 * @param {Array<object>} arr array
 * @returns {Array<object>} tree
 */
function makeTree(arr) {
  const shalow = arr.map(each => Object.assign({}, each));
  return shalow
    .map(each => {
      let children = shalow.filter(({ parentId }) => parentId === each.id);
      children = children.length > 0 ? children : null;
      return Object.assign(each, { children })
    })
    .filter(({ parentId }) => parentId === null);
}

module.exports = { makeTree };

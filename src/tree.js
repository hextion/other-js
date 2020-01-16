/**
 * @param {Array<object>} arr array
 * @returns {Array<object>} tree
 */
function makeTree(arr) {
  const shalow = arr.map(each => ({ ...each }));
  return shalow
    .map(each => Object.assign(each, { children: shalow.filter(({ parentId }) => parentId === each.id) }))
    .filter(({ parentId }) => parentId === null);
}

module.exports = { makeTree };

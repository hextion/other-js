/**
 * @param {Array<object>} arr array
 * @param {object} options options
 * @param {Function} options.keySelector key selector
 * @param {Function} options.parentKeySelector parent key selector
 * @returns {Array<object>} tree
 */
function makeTree(arr, { keySelector, parentKeySelector }) {
  return arr
    .map((value) => ({ value }))
    .map((node, _, flat) => {
      const key = keySelector(node.value);
      let children = flat.filter((node) => parentKeySelector(node.value) === key);
      children = children.length > 0 ? children : null;
      return Object.assign(node, { children });
    })
    .filter((node) => parentKeySelector(node.value) === null);
}

module.exports = { makeTree };

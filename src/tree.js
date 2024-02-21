/**
 * @param {Array<object>} arr array
 * @param {object} options options
 * @param {Function} options.keySelector key selector
 * @param {Function} options.parentKeySelector parent key selector
 * @returns {Array<object>} tree
 */
function makeTree(arr, { keySelector, parentKeySelector }) {
  return arr
    .map((value) => ({ value, parentNode: null }))
    .map((node, _, nodes) => {
      const key = keySelector(node.value);
      const children = nodes
        .filter((node) => parentKeySelector(node.value) === key)
        .map((child) => Object.assign(child, { parentNode: node }));
      return Object.assign(node, { children });
    })
    .filter((node) => parentKeySelector(node.value) === null);
}

module.exports = { makeTree };

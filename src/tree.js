const defaultOptions = {
  keySelector: item => item.key,
  parentKeySelector: item => item.parentKey,
  transform: item => item,
};

/**
 * Merge objects into one
 *
 * @param {...object} objects object
 * @returns {object} object
 */
function merge(...objects) {
  return objects.reduce((acc, object) => ({ ...acc, ...object }), {});
}

/**
 * @param {Array<object>} arr array
 * @param {object} [options] options
 * @returns {Array<object>} tree
 */
function makeTree(arr, options = defaultOptions) {
  const { keySelector, parentKeySelector, transform } = merge(defaultOptions, options || {});
  const shalow = arr.map(each => transform({ ...each }));
  return shalow
    .map(item => {
      const key = keySelector(item);
      let children = shalow.filter(item => parentKeySelector(item) === key);
      children = children.length > 0 ? children : null;
      return Object.assign(item, { children });
    })
    .filter(item => parentKeySelector(item) === null);
}

module.exports = { makeTree };

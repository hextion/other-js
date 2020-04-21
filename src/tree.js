const { merge } = require('./merge');

const defaultOptions = {
  keySelector: item => item.key,
  parentKeySelector: item => item.parentKey,
  transform: item => item,
};

/**
 * @param {Array<object>} arr array
 * @param {object} [options] options
 * @returns {Array<object>} tree
 */
function makeTree(arr, options = defaultOptions) {
  const { keySelector, parentKeySelector, transform } = merge(defaultOptions, options || {});
  const shallow = arr.map(each => transform({ ...each }));
  return shallow
    .map(item => {
      const key = keySelector(item);
      let children = shallow.filter(item => parentKeySelector(item) === key);
      children = children.length > 0 ? children : null;
      return Object.assign(item, { children });
    })
    .filter(item => parentKeySelector(item) === null);
}

module.exports = { makeTree };

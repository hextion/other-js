const assert = require('assert').strict;

/**
 * Merge objects into one
 *
 * @param {...object} objects object
 * @returns {object} object
 */
function merge(...objects) {
  return objects.reduce((acc, object) => {
    assert(!(object === null) && typeof object === 'object', '[merge]: arguments must be objects');
    return { ...acc, ...object };
  }, {});
}

module.exports = {
  merge,
};

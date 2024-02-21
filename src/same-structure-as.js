/**
 * Check if arrays has the same structures
 *
 * @param {Array} a array
 * @param {*} b other array
 * @returns {boolean} if arrays has the same structures
 */
function sameStructureAs(a, b) {
  return (
    a.length === b.length &&
    a.every((item, idx) => {
      const anotherItem = b.at(idx);
      return (
        (Array.isArray(item) && Array.isArray(anotherItem) && sameStructureAs(item, anotherItem)) ||
        (!Array.isArray(item) && !Array.isArray(anotherItem))
      );
    })
  );
}

module.exports = { sameStructureAs };

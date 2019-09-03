/**
 *
 * @param {string} str
 * @returns {Map}
 */
function mapFromString(str) {
  return str.split('').reduce((map, letter) => map.set(letter, map.has(letter) ? map.get(letter) + 1 : 1), new Map());
}

/**
 *
 * @param {string} a
 * @param {string} b
 */
function areAnagrams(a, b) {
  const aMap = mapFromString(a);
  const bMap = mapFromString(b);
  if (aMap.size !== bMap.size) {
    return false;
  }
  for (var key of aMap.keys()) {
    if (!bMap.has(key) || bMap.get(key) !== aMap.get(key)) {
      return false;
    }
  }
  return true;
}

module.exports = { areAnagrams };

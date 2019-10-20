/**
 * Map from string
 *
 * @param {string} str string
 * @returns {Map<string, number>} map
 */
function mapFromString(str) {
  return str.split('').reduce((map, letter) => map.set(letter, map.has(letter) ? map.get(letter) + 1 : 1), new Map());
}

/**
 * Check if strings are anagrams
 *
 * @param {string} a string
 * @param {string} b string
 * @returns {boolean} whether strings are anagrams
 */
function areAnagrams(a, b) {
  if (a.length !== b.length) {
    return false;
  }
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

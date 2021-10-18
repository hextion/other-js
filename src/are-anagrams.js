/**
 * Map from string
 *
 * @param {string} str string
 * @returns {Map<string, number>} map
 */
function mapFromString(str) {
  const map = new Map();
  for (let i = 0; i < str.length; i++) {
    const char = str[i];
    const count = map.has(char) ? map.get(char) + 1 : 1;
    map.set(char, count);
  }
  return map;
}

/**
 * Check if strings are anagrams
 *
 * @param {string} a string
 * @param {string} b string
 * @returns {boolean} whether strings are anagrams
 */
function areAnagrams(a, b) {
  if (!(a.length === b.length)) return false;
  const aMap = mapFromString(a);
  const bMap = mapFromString(b);
  if (!(aMap.size === bMap.size)) return false;
  for (let key of aMap.keys()) {
    if (!(bMap.has(key) && bMap.get(key) === aMap.get(key))) return false;
  }
  return true;
}

module.exports = { areAnagrams };

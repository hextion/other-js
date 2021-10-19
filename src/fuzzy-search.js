/**
 * Fuzzy search of substring in string
 *
 * @param {string} substring substring
 * @param {string} string string
 * @returns {boolean} whether substring is in string
 */
function fuzzySearch(substring, string) {
  for (let i = 0, lastIndex = -1; i < substring.length; i++) {
    if ((lastIndex = string.indexOf(substring[i], lastIndex + 1)) === -1) return false;
  }
  return true;
}

module.exports = { fuzzySearch };

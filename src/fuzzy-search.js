/**
 * Fuzzy search of substring in string
 *
 * @param {string} substring substring
 * @param {string} string string
 * @returns {boolean} whether substring is in string
 */
function fuzzySearch(substring, string) {
  let lastIndex = -1;
  for (let i = 0; i < substring.length; i++) {
    lastIndex = string.indexOf(substring[i], lastIndex + 1);
    if (lastIndex === -1) return false;
  }
  return true;
}

module.exports = { fuzzySearch };

/**
 * Fuzzy search of substring in string
 *
 * @param {string} substring substring
 * @param {string} string string
 * @returns {boolean} whether substring is in string
 */
function fuzzySearch(substring, string) {
  let lastIndex = -1;
  for (const letter of substring) {
    const nextIndex = string.indexOf(letter, lastIndex + 1);
    if (nextIndex === -1) {
      return false;
    }
    lastIndex = nextIndex;
  }
  return true;
}

module.exports = { fuzzySearch };

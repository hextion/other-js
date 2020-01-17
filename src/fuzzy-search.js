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
    const index = string.indexOf(letter);
    if (index > lastIndex) {
      lastIndex = index;
    } else {
      return false;
    }
  }
  return true;
}

module.exports = { fuzzySearch };

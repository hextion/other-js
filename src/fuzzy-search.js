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
    const index =
      lastIndex === -1 ? string.indexOf(letter) : lastIndex + string.substring(lastIndex + 1).indexOf(letter) + 1;
    if (index > lastIndex) {
      lastIndex = index;
      continue;
    }
    return false;
  }
  return true;
}

module.exports = { fuzzySearch };

/**
 * Fuzzy search of substring in string
 *
 * @param {string} sub substring
 * @param {string} str string
 * @returns {boolean} whether substring is in string
 */
function fuzzySearch(sub, str) {
  let lastIndex = -1;
  for (const letter of sub) {
    const index = str.indexOf(letter);
    if (index > lastIndex) {
      lastIndex = index;
    } else {
      return false;
    }
  }
  return true;
}

module.exports = { fuzzySearch };

/**
 *
 * @param {string} sub substring
 * @param {string} str string
 */
function fuzzySearch(sub, str) {
  let lastIndex = -1;
  for (let i = 0; i < sub.length; i++) {
    const index = str.indexOf(sub[i]);
    if (index > lastIndex) {
      lastIndex = index;
    } else {
      return false;
    }
  }
  return true;
}

module.exports = { fuzzySearch };

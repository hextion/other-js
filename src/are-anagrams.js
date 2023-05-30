/**
 * Check if strings are anagrams
 *
 * @param {string} a string
 * @param {string} b string
 * @returns {boolean} whether strings are anagrams
 */
function areAnagrams(a, b) {
  if (!(a.length === b.length)) return false;

  const aSorted = a.split("").sort().join("");
  const bSorted = b.split("").sort().join("");

  return aSorted === bSorted;
}

module.exports = { areAnagrams };

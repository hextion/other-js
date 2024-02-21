/**
 *
 * @param {string} str
 * @param {string[]} chars
 * @param {string[]} results
 * @returns
 */
function recur(str, chars, results = []) {
  if (chars.length === 0 && !results.includes(str)) {
    return results.concat(str);
  }
  return chars.reduce((results, char, index, chars) => {
    const nextChars = chars.filter((_, i) => !(i === index));
    const nextStr = str.concat(char);

    return recur(nextStr, nextChars, results);
  }, results);
}

/**
 * In this kata you have to create all permutations of an input string and remove duplicates, if present.
 * This means, you have to shuffle all letters from the input in all possible orders.
 *
 * @param {string} str string
 * @returns {string[]} all permutations of an input string without duplicates
 */
function permutations(str) {
  return recur("", str.split(""));
}

module.exports = { permutations };

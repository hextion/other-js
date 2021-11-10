/**
 * In this kata you have to create all permutations of an input string and remove duplicates, if present.
 * This means, you have to shuffle all letters from the input in all possible orders.
 *
 * @param {string} origin string
 * @returns {string[]} all permutations of an input string without duplicates
 */
function permutations(origin) {
  const entries = [{ prefix: "", chars: origin }];
  const strings = new Set();

  while (entries.length > 0) {
    const { prefix, chars } = entries.pop();

    for (let i = 0; i < chars.length; i++) {
      const str = prefix.concat(chars[i]);
      if (str.length === origin.length) strings.add(str);
      else {
        const nextChars = chars.slice(0, i).concat(chars.slice(i + 1));
        entries.push({ prefix: str, chars: nextChars });
      }
    }
  }

  return Array.from(strings);
}

module.exports = { permutations };

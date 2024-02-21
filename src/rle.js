/**
 * RLE
 *
 * @param {string} str input
 * @returns {string} output
 */
function RLE(str) {
  if (!/^[A-Z]+$/.test(str)) throw new Error("Invalid string: " + str);

  let result = "";

  for (let start = 0, end = 0; end < str.length; end++) {
    const startChar = str.at(start);
    const endChar = str.at(end);
    if (!(startChar === endChar)) {
      const count = end - start;
      result += count > 1 ? `${startChar}${count}` : startChar;
      start = end;
    }
    if (end === str.length - 1) {
      const count = end - start + 1;
      result += count > 1 ? `${endChar}${count}` : endChar;
    }
  }

  return result;
}

module.exports = { RLE };

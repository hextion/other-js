/**
 * RLE
 *
 * @param {string} str input
 * @returns {string} output
 */
function RLE(str) {
  if (!/^[A-Z]+$/.test(str)) throw new Error("Invalid string: " + str);

  const entry = {
    char: "",
    count: 0,
    toString() {
      return this.char + (this.count > 1 ? this.count : "");
    },
  };
  let result = "";

  for (let i = 0; i < str.length; i++) {
    const char = str[i];
    if (entry.char === char) entry.count++;
    else {
      result += entry;
      entry.char = char;
      entry.count = 1;
    }
  }

  result += entry;

  return result;
}

module.exports = { RLE };

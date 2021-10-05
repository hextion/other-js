/**
 * Transform entry to string
 *
 * @param {object} entry entry
 * @returns {string} entry string
 */
function transform(entry) {
  return entry.char + (entry.count > 1 ? entry.count : '');
}

/**
 * RLE
 *
 * @param {string} str input
 * @returns {string} output
 */
function RLE(str) {
  if (!/^[A-Z]*$/.test(str)) throw new Error('Invalid string: ' + str);

  let entry = { char: '', count: 0 };
  let result = '';

  for (let i = 0; i < str.length; i++) {
    const char = str[i];
    if (entry.char === char) entry.count++;
    else {
      result += transform(entry);
      entry.char = char;
      entry.count = 1;
    }
  }

  result += transform(entry);

  return result;
}

module.exports = { RLE };

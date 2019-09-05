/**
 *
 * @param {string} str
 */
function isValidBrackets(str) {
  let after = str.replace(/[a-z]/gi, '');
  let before;
  do {
    before = after;
    after = after.replace(/(\[\]|{}|\(\))/g, '');
  } while (before !== after);
  return after.length === 0;
}

module.exports = { isValidBrackets };

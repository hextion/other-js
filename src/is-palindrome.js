/**
 * Check if string is palindrome
 *
 * @param {string} str string
 * @returns {boolean} whether string is palindrome
 */
function isPalindrome(str) {
  const regex = /[A-ZА-ЯЁ]/i;
  let head = 0;
  let tail = str.length - 1;
  while (head <= tail) {
    const headChar = str.at(head);
    if (!regex.test(headChar)) {
      head++;
      continue;
    }
    const tailChar = str.at(tail);
    if (!regex.test(tailChar)) {
      tail--;
      continue;
    }
    if (new RegExp(headChar, "i").test(tailChar)) {
      head++;
      tail--;
    } else return false;
  }
  return true;
}

module.exports = { isPalindrome };

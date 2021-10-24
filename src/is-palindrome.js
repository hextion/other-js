/**
 * Check if string is palindrome
 *
 * @param {string} str string
 * @returns {boolean} whether string is palindrome
 */
function isPalindrome(str) {
  const regex = /[a-zа-яё]/;
  let head = 0;
  let tail = str.length - 1;
  while (head <= tail) {
    const headChar = str[head].toLowerCase();
    if (!regex.test(headChar)) {
      head++;
      continue;
    }
    const tailChar = str[tail].toLowerCase();
    if (!regex.test(tailChar)) {
      tail--;
      continue;
    }
    if (headChar === tailChar) {
      head++;
      tail--;
    } else return false;
  }
  return true;
}

module.exports = { isPalindrome };

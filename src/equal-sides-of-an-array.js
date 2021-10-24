/**
 * equalsAt
 *
 * @param {number[]} numbers array
 * @returns {number} index
 */
function equalsAt(numbers) {
  let head = 0;
  let tail = numbers.length - 1;
  let headToTail = 0;
  let tailToHead = 0;

  while (head <= tail) {
    if (tailToHead < headToTail) tailToHead += numbers[tail--];
    if (headToTail < tailToHead) headToTail += numbers[head++];
    if (headToTail === tailToHead) {
      if (head === tail) return head;
      else headToTail += numbers[head++];
    }
  }

  return 0;
}

module.exports = { equalsAt };

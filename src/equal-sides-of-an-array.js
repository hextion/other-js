/**
 * equalsAt
 *
 * @param {number[]} numbers array
 * @returns {number} index
 */
function equalsAt(numbers) {
  let head = -1;
  let tail = numbers.length;
  let headToTail = 0;
  let tailToHead = 0;

  while (head < tail) {
    if (headToTail < tailToHead) headToTail += numbers.at(++head);
    else tailToHead += numbers.at(--tail);
  }

  return headToTail === tailToHead ? head /* or `tail`, no matter they are equal */ : -1;
}

module.exports = { equalsAt };

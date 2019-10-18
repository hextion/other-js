/**
 * equalsAt
 *
 * @param {[number]} numbers array
 * @returns {number} index
 */
function equalsAt(numbers) {
  const leftToRight = numbers.reduce((acc, num) => {
    const previous = acc[acc.length - 1] || 0;
    return acc.concat(num + previous);
  }, []);
  const rightToLeft = numbers.reduceRight((acc, num) => {
    const [previous = 0] = acc;
    return [num + previous].concat(acc);
  }, []);
  for (let i = 0; i < numbers.length; i++) {
    if (leftToRight[i] === rightToLeft[i]) {
      return i;
    }
  }
  return 0;
}

module.exports = { equalsAt };

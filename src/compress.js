/**
 *
 * @param {number[]} arr
 */
function compress(arr) {
  const sorted = Array.from(arr).sort((a, b) => a - b);
  const result = [];

  for (let startIndex = 0, index = 1; index < arr.length; index++) {
    const start = sorted.at(startIndex);
    const end = sorted.at(index - 1);
    const current = sorted.at(index);

    if (current - end === 1) {
      if (index === arr.length - 1) {
        result.push(`${start}-${current}`);
      }
    } else {
      result.push(start === end ? `${start}` : `${start}-${end}`);
      if (index === arr.length - 1) {
        result.push(`${current}`);
      } else {
        startIndex = index;
      }
    }
  }

  return result.join(",");
}

module.exports = { compress };

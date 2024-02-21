/**
 * @param {Array<Array<number>>} array
 */
function minWeight(array) {
  const result = [];

  for (let i = 0; i < array.length; i++) {
    const line = [];
    for (let j = 0; j < array.at(i).length; j++) {
      if (i === 0) {
        if (j === 0) {
          line.push(array.at(i).at(j));
        } else {
          line.push(array.at(i).at(j) + line.at(j - 1));
        }
      } else {
        if (j === 0) {
          line.push(array.at(i).at(j) + result.at(i - 1).at(j));
        } else {
          line.push(array.at(i).at(j) + Math.min(result.at(i - 1).at(j), line.at(j - 1)));
        }
      }
    }
    result.push(line);
  }

  return result.at(-1).at(-1);
}

module.exports = { minWeight };

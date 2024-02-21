/**
 * @param {*} data
 */
function printFs(data) {
  const stack = [[data][Symbol.iterator]()];
  const result = [];

  while (stack.length > 0) {
    const iterator = stack.at(-1);
    const { value, done } = iterator.next();
    if (done) {
      stack.pop();
    } else {
      result.push("  ".repeat(stack.length - 1).concat(value.name));
      if ("children" in value) {
        stack.push(value.children[Symbol.iterator]());
      }
    }
  }

  return result.join("\n");
}

module.exports = { printFs };

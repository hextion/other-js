const { reverse: reverseString } = require("./reverse-string");
const { reverse: reverseArray } = require("./reverse-array");

function reverseWords(str) {
  return reverseArray(reverseString(str).split(" ")).join(" ");
}

module.exports = { reverseWords };

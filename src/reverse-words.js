function reverseWords(str) {
  const result = [];
  for (let i = 0, start = -1; i < str.length; i++) {
    const char = str.at(i);
    const isLast = i === str.length - 1;
    const isSpace = char === " ";
    if (isSpace || isLast) {
      if (start === -1) {
        result.push(char);
      } else {
        for (let j = isLast ? i : i - 1; j >= start; j--) {
          result.push(str.at(j));
        }
        if (isSpace) {
          result.push(char);
        }
        start = -1;
      }
    } else if (start === -1 && !isSpace) {
      start = i;
    }
  }

  return result.join("");
}

module.exports = { reverseWords };

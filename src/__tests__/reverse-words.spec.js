const { reverseWords } = require("../reverse-words");

test("reverseWords", () => {
  expect(reverseWords(" ")).toBe(" ");
  expect(reverseWords("i")).toBe("i");
  expect(reverseWords("i love you")).toBe("i evol uoy");
  expect(reverseWords("i'll be back")).toBe("ll'i eb kcab");
  expect(reverseWords("you're     awesome")).toBe("er'uoy     emosewa");
  expect(reverseWords("     you're     awesome")).toBe("     er'uoy     emosewa");
});

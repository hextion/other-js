const { areAnagrams } = require("../are-anagrams");

it("returns true", () => {
  expect(areAnagrams("", "")).toBe(true);
  expect(areAnagrams("abc", "cba")).toBe(true);
  expect(areAnagrams("abc", "bca")).toBe(true);
});

it("returns false", () => {
  expect(areAnagrams("a", "")).toBe(false);
  expect(areAnagrams("abc", "cb")).toBe(false);
  expect(areAnagrams("abc", "ca")).toBe(false);
  expect(areAnagrams("abc", "abcc")).toBe(false);
  expect(areAnagrams("abc", "abcd")).toBe(false);
  expect(areAnagrams("abcd", "abce")).toBe(false);
  expect(areAnagrams("abcdd", "abcde")).toBe(false);
});

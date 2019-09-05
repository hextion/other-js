const { isValidBrackets } = require('./is-valid-brackets');

it('returns true', () => {
  expect(isValidBrackets('(foo)')).toBe(true);
  expect(isValidBrackets('(f[o]{o})')).toBe(true);
  expect(isValidBrackets('[(){}()()]')).toBe(true);
  expect(isValidBrackets('[(){}()()[][]{}]')).toBe(true);
});

it('returns false', () => {
  expect(isValidBrackets('(foo')).toBe(false);
  expect(isValidBrackets('{f[o}o]')).toBe(false);
});

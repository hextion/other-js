const { fuzzySearch } = require('./fuzzy-search');

it('returns true', () => {
  expect(fuzzySearch('', 'ab')).toBe(true);
  expect(fuzzySearch('a', 'ab')).toBe(true);
  expect(fuzzySearch('ab', 'ab')).toBe(true);
  expect(fuzzySearch('ab', 'ab')).toBe(true);
  expect(fuzzySearch('ac', 'abc')).toBe(true);
  expect(fuzzySearch('ac', 'abc')).toBe(true);
  expect(fuzzySearch('abc', 'abc')).toBe(true);
});

it('returns false', () => {
  expect(fuzzySearch('c', 'ab')).toBe(false);
  expect(fuzzySearch('d', 'ab')).toBe(false);
  expect(fuzzySearch('de', 'abcd')).toBe(false);
  expect(fuzzySearch('abcf', 'abcde')).toBe(false);
});

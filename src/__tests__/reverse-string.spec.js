const { reverse } = require('../reverse-string');

it('should return empty string', () => {
  expect(reverse('')).toBe('');
});

it('reverse sting', () => {
  expect(reverse('abc')).toBe('cba');
});

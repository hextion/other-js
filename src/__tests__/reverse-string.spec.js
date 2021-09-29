const { reverse } = require('../reverse-string');

it('reverse sting', () => {
  expect(reverse('abc')).toBe('cba');
});

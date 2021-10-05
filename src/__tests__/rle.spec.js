const { RLE } = require('../rle');

it('should return empty string', () => {
  expect(RLE('')).toBe('');
});

it('should pass', () => {
  expect(RLE('AAAABBBCCXYZDDDDEEEFFFAAAAAABBBBBBBBBBBBBBBBBBBBBBBBBBBB')).toBe('A4B3C2XYZD4E3F3A6B28');
});

it('should throw error', () => {
  expect(() => RLE('1AAAABBBCCXYZDDDDEEEFFFAAAAAABBBBBBBBBBBBBBBBBBBBBBBBBBBB')).toThrow('Invalid string');
});

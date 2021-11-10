const { RLE } = require("../rle");

it.each`
  input                                                         | output
  ${"A"}                                                        | ${"A"}
  ${"AA"}                                                       | ${"A2"}
  ${"AAB"}                                                      | ${"A2B"}
  ${"AABBC"}                                                    | ${"A2B2C"}
  ${"ABCCDDDEEEE"}                                              | ${"ABC2D3E4"}
  ${"AAAABBBCCXYZDDDDEEEFFFAAAAAABBBBBBBBBBBBBBBBBBBBBBBBBBBB"} | ${"A4B3C2XYZD4E3F3A6B28"}
`("returnes `$output` when called with `$input`", ({ input, output }) => {
  expect(RLE(input)).toBe(output);
});

it.each(["", "s", "1A", "#", "@A", "AAs", "12,321"])("should throw error with `%s`", (str) => {
  expect(() => RLE(str)).toThrow("Invalid string");
});

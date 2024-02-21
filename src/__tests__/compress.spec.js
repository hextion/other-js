const { compress } = require("../compress");

it.each`
  input                                        | output
  ${[0, 1, 2, 3, 4, 5]}                        | ${"0-5"}
  ${[0, 1, 2, 3, 4, 5, 7, 8, 9, 19]}           | ${"0-5,7-9,19"}
  ${[0, 1, 2, 3, 4, 5, 7, 8, 9, 11, 19]}       | ${"0-5,7-9,11,19"}
  ${[1, 3]}                                    | ${"1,3"}
  ${[1, 3, 5]}                                 | ${"1,3,5"}
  ${[0, 3, 4, 5, 7, 8, 9, 11, 19, 21, 22, 23]} | ${"0,3-5,7-9,11,19,21-23"}
`("returnes `$output` when called with `$input`", ({ input, output }) => {
  expect(compress(input)).toBe(output);
});

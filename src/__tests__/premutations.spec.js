const { permutations } = require("../permutations");

it("should pass", () => {
  expect(permutations("a")).toMatchObject(["a"]);
  expect(permutations("ab").sort()).toMatchObject(["ab", "ba"].sort());
  expect(permutations("aabb").sort()).toMatchObject(["aabb", "abab", "abba", "baab", "baba", "bbaa"].sort());
});

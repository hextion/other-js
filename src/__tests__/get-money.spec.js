const { getMoney } = require("../get-money");

it("should throw an error", () => {
  expect(() => {
    getMoney(6210);
  }).toThrow("no money");
  expect(() => {
    getMoney(6200, { 200: 0, 100: 0, 50: 0 });
  }).toThrow("no money");
});

it("should return money", () => {
  expect(getMoney(6200)).toMatchObject({ 5000: 1, 2000: 0, 1000: 1, 500: 0, 200: 1, 100: 0, 50: 0 });
});

it("should return money with limits", () => {
  expect(getMoney(6200, { 1000: 0 })).toMatchObject({ 5000: 1, 2000: 0, 1000: 0, 500: 2, 200: 1, 100: 0, 50: 0 });
});

const { printFs } = require("../print-fs");

test("printFs", () => {
  expect(
    printFs({
      name: "folder",
      children: [
        { name: "order.pdf" },
        {
          name: "photos",
          children: [
            {
              name: "vacation",
              children: [{ name: "yacht.jpg" }, { name: "dog.png" }],
            },
          ],
        },
        { name: "statement.pdf" },
      ],
    })
  ).toBe(
    `
folder
  order.pdf
  photos
    vacation
      yacht.jpg
      dog.png
  statement.pdf
`.trim()
  );
});

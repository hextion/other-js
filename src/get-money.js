function getMoney(amount, limits = {}) {
  const entries = [
    [5000, 0],
    [2000, 0],
    [1000, 0],
    [500, 0],
    [200, 0],
    [100, 0],
    [50, 0],
  ];
  let rest = amount;

  for (let i = 0; rest > 0 && i < entries.length; i++) {
    const [value] = entries.at(i);
    const actualCount = Math.floor(rest / value);
    const limit = limits[value];
    const count = limit != null ? Math.min(actualCount, limit) : actualCount;
    rest -= value * count;
    entries[i] = [value, count];
  }

  if (rest > 0) {
    throw new Error("no money");
  }

  return Object.fromEntries(entries);
}

module.exports = { getMoney };

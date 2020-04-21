const { merge } = require('./merge');

describe('merge', () => {
  it('should merge objects', () => {
    expect(merge()).toMatchObject({});
    expect(merge({ a: 1 }, { b: 2 })).toMatchObject({ a: 1, b: 2 });
    expect(merge({ a: 1, b: 1 }, { b: 2 })).toMatchObject({ a: 1, b: 2 });
  });

  it('should throw an error', () => {
    const error = '[merge]: arguments must be objects';
    expect(() => {
      merge('')
    }).toThrow(error);
    expect(() => {
      merge(1)
    }).toThrow(error);
    expect(() => {
      merge(false)
    }).toThrow(error);
    expect(() => {
      merge(null)
    }).toThrow(error);
    expect(() => {
      merge(undefined)
    }).toThrow(error);
  })
});

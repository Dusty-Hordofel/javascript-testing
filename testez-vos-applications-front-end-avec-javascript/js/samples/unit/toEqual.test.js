/**
 *
 * @param {number} a
 * @param {number} b
 * @returns number
 */
const makeSum = (a, b) => a + b;

describe("toEqual Unit Test Suites", () => {
  it("should return a 5", () => {
    expect(makeSum(2, 3)).toEqual(5);
  });

  it("should not return a 5", () => {
    expect(makeSum(2, 3)).not.toEqual(4);
  });
});

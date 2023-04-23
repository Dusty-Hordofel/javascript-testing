/**
 *
 * @param {number} a
 * @param {number} b
 * @returns {number}
 */
const makeSum = (a, b) => a + b;

/**
 *
 * @param {string} a
 * @param {number} b
 * @returns {string}
 */
const makeString = (a, b) => a * b;

describe("ToBeNan Unit Test Suites", () => {
  it("should not return a NaN", () => {
    expect(makeString(2, 3)).not.toBeNaN();
  });
  it("should  return a NaN", () => {
    expect(makeString("hi", 3)).toBeNaN();
  });
});

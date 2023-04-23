/**
 *
 * @returns {array}
 */
const getFriends = () => ["mike", "john", "lucie", "anna"];

describe("toContain Unit Test Suites", () => {
  it("should contain the name 'mike'", () => {
    expect(getFriends()).toContain("mike");
  });
  it("should not contain the name 'thomas'", () => {
    expect(getFriends()).not.toContain("thomas");
  });
});

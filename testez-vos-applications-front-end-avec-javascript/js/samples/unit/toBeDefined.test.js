const getName = () => "thomas";

const userAge = 31;

let eat;

describe("toBeDefined Unit Test Suites", () => {
  it("should return something", () => {
    expect(getName()).toBeDefined();
  });
  it("should return something", () => {
    expect(userAge).toBeDefined();
  });
  it("should not return something", () => {
    expect(eat).not.toBeDefined();
  });
});

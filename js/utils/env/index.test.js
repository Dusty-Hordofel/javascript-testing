import { isInTestEnv } from "./index";

describe("isInTestEnv Unit Test Suites", () => {
  it("should return true", () => {
    expect(isInTestEnv()).toBeTruthy();
  });
  it("should return false", () => {
    process.env.NODE_ENV = "dev";
    expect(isInTestEnv()).not.toBeTruthy();
  });
});

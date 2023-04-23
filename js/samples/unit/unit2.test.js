import { getAge } from "./unit2";

describe("getAge Unit Test Suit", () => {
  it("should return 'Vous avez actuellement 31 ans'", () => {
    const result = getAge(31);
    expect(result).toBe("vous avez actuellement 31 ans");
  });
});

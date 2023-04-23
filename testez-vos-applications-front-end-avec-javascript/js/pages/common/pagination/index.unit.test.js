import Pagination from "./index";

describe("Pagination Unit Test Suites", () => {
  it("should return something", () =>
    expect(Pagination.getNumberOfPages(12)).toBeDefined()); //to be defined means that the value is not undefined
  it("should return 0", () => expect(Pagination.getNumberOfPages(0)).toBe(0));
  it("should return 1", () => expect(Pagination.getNumberOfPages(8)).toBe(1));
  it("should not return 1", () =>
    expect(Pagination.getNumberOfPages(9)).not.toBe(1));
  it("should return 5", () => expect(Pagination.getNumberOfPages(40)).toBe(5));
});

//describe  vous permet de créer un bloc de tests (ou Test Suite)

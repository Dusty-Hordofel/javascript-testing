import { retrieveSensorsData } from "./index.js";
import { data } from "../../../../data/mock-homepage-data.js";

describe("sensorsApi Unit Test Suites", () => {
  it("should return the mocked data", () => {
    expect(retrieveSensorsData()).toEqual(data.facades);
  });
});

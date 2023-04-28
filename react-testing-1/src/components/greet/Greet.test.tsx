/**
 * Greet should render the text hello and if a name is passed into the component
 * it should render hello followed by name
 */

import { render, screen } from "@testing-library/react";
import Greet from "./Greet";

describe("suit of Greet Test", () => {});
test("Greet renders correctly", () => {
  render(<Greet />);
  const element = screen.getByText("Hello");
  expect(element).toBeInTheDocument();
});

test("Greet renders with the name", () => {
  render(<Greet name="Lolo" />);
  const element = screen.getByText("Hello Lolo");
  expect(element).toBeInTheDocument();
});

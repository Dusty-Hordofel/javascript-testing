import { render, screen } from "@testing-library/react";
import Greet from "./Greet";

test("Greet render correctly", () => {
  render(<Greet />); //to create a virtual DOM of a component
  const textElement = screen.getByText(/Hello/i);
  expect(textElement).toBeInTheDocument();
});

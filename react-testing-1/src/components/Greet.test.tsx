import { render, screen } from "@testing-library/react";
import Greet from "./Greet";
//1. name of the test, 2. Function that contains the expectation to test, 3. optional timeout value
test("Greet render correctly", () => {
  //create a virtual DOM of <Greet/> component using the render function from react-testing-library
  render(<Greet />);
  //query the virtual DOM for an element that contains the text "Hello"
  const greetElement = screen.getByText(/Hello/i); //screen from react testing library that allows us to query the virtual DOM. getByText is querying the virtual DOM for an element that contains the text "learn react"
  expect(greetElement).toBeInTheDocument();
});

//II. With TDD approach

import { render, screen } from "@testing-library/react";
import Greet from "./Greet";

/**Greet should render a text "hello" and if a name is passed into a component it's should render hello followed by name */

describe("Greet suit test", () => {
  test("Greet should render a text 'hello'", () => {
    render(<Greet />);
    const greetElement = screen.getByText(/hello/i);
    expect(greetElement).toBeInTheDocument(); //expect "text element to be in the document"
  });

  test("Greet should render a text 'hello' followed by name", () => {
    render(<Greet name="John" />);
    const greetElement = screen.getByText(/hello john/i);
    expect(greetElement).toBeInTheDocument();
  });
});

//I. Without TDD approach
// import { render, screen } from "@testing-library/react";
// import Greet from "./Greet";
// //1. name of the test, 2. Function that contains the expectation to test, 3. optional timeout value
// test("Greet render correctly", () => {
//   //create a virtual DOM of <Greet/> component using the render function from react-testing-library
//   render(<Greet />);
//   //query the virtual DOM for an element that contains the text "Hello"
//   const greetElement = screen.getByText(/Hello/i); //screen from react testing library that allows us to query the virtual DOM. getByText is querying the virtual DOM for an element that contains the text "learn react"
//   expect(greetElement).toBeInTheDocument();
// });
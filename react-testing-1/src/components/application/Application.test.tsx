import { render, screen } from "@testing-library/react";
import Application from "./Application";

describe("Application", () => {
  test("renders correctly the name", () => {
    render(<Application />); //redenring the application component in the virtual DOM
    const name = screen.getByRole("textbox"); //check if the input element is present
    //write the assertion
    expect(name).toBeInTheDocument(); //expect the input element to be in the document

    const jobLocation = screen.getByRole("combobox"); //check if the select element is present
    expect(jobLocation).toBeInTheDocument(); //expect the select element to be in the document

    const terms = screen.getByRole("checkbox"); //check if the checkbox element is present
    expect(terms).toBeInTheDocument(); //expect the checkbox element to be in the document

    const submit = screen.getByRole("button"); //check if the button element is present
    expect(submit).toBeInTheDocument(); //expect the button element to be in the document
  });
});

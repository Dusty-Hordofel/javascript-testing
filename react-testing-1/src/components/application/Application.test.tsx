import { render, screen } from "@testing-library/react";
import Application from "./Application";

describe("Application", () => {
  test("renders correctly the name", () => {
    render(<Application />); //redenring the application component in the virtual DOM
    const pageHeading = screen.getByRole("heading", {
      level: 1,
    }); //check if the heading element is present

    // const pageHeading = screen.getByRole("heading", {
    //   name: "Job application form",
    // }); //check if the heading element is present

    const sectionHeading = screen.getByRole("heading", { level: 2 }); //check if the heading element is present
    // const sectionHeading = screen.getByRole("heading", { name: "Section one" }); //check if the heading element is present
    expect(sectionHeading).toBeInTheDocument(); //expect the heading element to be in the document

    expect(pageHeading).toBeInTheDocument(); //expect the heading element to be in the document

    const name = screen.getByRole("textbox", { name: "Name" }); //check if the input element is present
    //write the assertion
    expect(name).toBeInTheDocument(); //expect the input element to be in the document

    const bio = screen.getByRole("textbox", { name: "Bio" }); //check if the textarea element is present
    expect(bio).toBeInTheDocument(); //expect the textarea element to be in the document

    const jobLocation = screen.getByRole("combobox"); //check if the select element is present
    expect(jobLocation).toBeInTheDocument(); //expect the select element to be in the document

    const terms = screen.getByRole("checkbox"); //check if the checkbox element is present
    expect(terms).toBeInTheDocument(); //expect the checkbox element to be in the document

    const submit = screen.getByRole("button"); //check if the button element is present
    expect(submit).toBeInTheDocument(); //expect the button element to be in the document
  });
});

### 1. First test

- create a [Greet](react-testing-1/src/components/Greet.tsx)

```tsx
const Greet = () => {
  return <div>Hello</div>;
};

export default Greet;
```

- test [Greet](react-testing-1/src/components/Greet.test.tsx)

```tsx
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
```

### 2. React TDD

- test [Greet](react-testing-1/src/components/Greet.test.tsx)

```tsx
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
```

- create a [Greet](react-testing-1/src/components/Greet.tsx)

```tsx
interface GreetProps {
  name?: string;
}

const Greet = ({ name }: GreetProps) => {
  return <div>Hello {name}</div>;
};

export default Greet;
```

### 3. Naming Convention

### 4. Code Coverage

### 5. Assertion

### 6. RTL Queries

### Every test we write generally involves the following basic steps 1. Render the component. 2. Find an element rendered by the component. 3. Assert against the element found in step 2 which will pass or fail the test. To render the component, we use the render method from RTL. For assertion, we use expect passing in a value and combine it with a matcher function from jest or jest-dom. Queries are the methods that Testing Library provides to find elements on the page. To find a single element on the page, we have - getBy.. - queryBy.. - findBy.. To find multiple elements on the page, we have - getAllBy.. - queryAlBy.. - findAllBy..The suffix can be one of Role, LabelText, PlaceHolder Text, Text, Display Value, AltText, Title and finally Testld

### 7. getByRole

Par défaut, de nombreux éléments sémantiques en HTML ont un rôle. L'élément Button a un rôle de bouton, l'élément anchor a un rôle de lien, les éléments h1 à h6 ont un rôle d'en-tête, les cases à cocher ont un rôle de case à cocher, les boutons radio ont un rôle de radio, etc.
Si vous travaillez avec des éléments qui n'ont pas de rôle par défaut ou si vous souhaitez spécifier un rôle différent, l'attribut role peut être utilisé pour ajouter le rôle souhaité Pour utiliser un élément anchor comme bouton dans la barre de navigation, vous pouvez ajouter role= 'button'.

- create [Application](react-testing-1/src/components/application/Application.tsx)

```js
import React from "react";

type Props = {};

const Application = (props: Props) => {
  return (
    <form>
      <div>
        <label htmlFor="name">Name</label>
        <input type="text" id="name" />
      </div>
      <div>
        <div>
          <label htmlFor="job-location">Job location</label>
          <select id="job-location">
            <option value="">Select a country</option>
            <option value="US">United State</option>
            <option value="GB">United Kingdom</option>
            <option value="CA">Canada</option>
            <option value="IN">India</option>
            <option value="AU">Australia</option>
          </select>
        </div>
      </div>
      <div>
        <label htmlFor="checkbox" id="terms">
          <input type="checkbox" id="checkbox" />I agree to the terms and
          conditions
        </label>
      </div>
      <button>Submit</button>
    </form>
  );
};

export default Application;
```

- test [Application](react-testing-1/src/components/application/Application.test.tsx)

```js
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
```

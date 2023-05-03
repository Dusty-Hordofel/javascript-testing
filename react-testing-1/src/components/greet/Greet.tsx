//with TDD approach

import { GreetProps } from "./greet.types";

const Greet = ({ name }: GreetProps) => {
  return <div>Hello {name ? name : "Guest"}</div>;
};

export default Greet;

//I. Without TDD approach
// const Greet = () => {
//   return <div>Hello</div>;
// };

// export default Greet;

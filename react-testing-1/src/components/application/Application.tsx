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

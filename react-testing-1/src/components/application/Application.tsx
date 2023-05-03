import React from "react";

type Props = {};

const Application = (props: Props) => {
  return (
    <>
      <h1>Job application form</h1>
      <h2>Section one</h2>
      <span title="close">X</span>
      <img
        src="https://plus.unsplash.com/premium_photo-1668241683760-154febd417ac?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
        alt="sophie"
      />
      <form>
        <div>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            placeholder="fullname"
            value="molomen"
            onChange={() => {}}
          />
        </div>
        <div>
          <label htmlFor="bio">Bio</label>
          <textarea name="bio" id="bio" />
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
    </>
  );
};

export default Application;

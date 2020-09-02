import React, { useState, useEffect } from "react";

const Search = () => {
  const [textInput, setTextInput] = useState("");

  // First argument of useEffect is always a function
  // Second arugment of useEffect is empty array, array with values, or nothing
  // [] means run at initial render,
  // nothing means run at initial render and after every rerender
  // [data] means run at initial render, and after every rerender IF data has changed since last render
  useEffect(() => {
    console.log("useEffect fired");
  }, []);

  return (
    <div className="ui container">
      <div className="ui form">
        <div className="field">
          <label>Enter Search Term</label>
          <input
            className="input"
            value={textInput}
            onChange={(e) => setTextInput(e.target.value)}
          />
        </div>
      </div>
    </div>
  );
};

export default Search;

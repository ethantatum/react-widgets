import React, { useState, useEffect } from "react";

const Search = () => {
  const [textInput, setTextInput] = useState("");
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

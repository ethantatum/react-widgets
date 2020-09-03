import React, { useState, useEffect } from "react";
import axios from "axios";

const Search = () => {
  const [textInput, setTextInput] = useState("");
  const [results, setResults] = useState([]);

  // First argument of useEffect is always a function (but can't use 'async/await')
  // Second arugment of useEffect is empty array, array with values, or nothing
  // [] means run at initial render,
  // nothing means run at initial render and after every rerender
  // [data] means run at initial render, and after every rerender IF data has changed since last render

  useEffect(() => {
    const search = async () => {
      const { data } = await axios.get("https://en.wikipedia.org/w/api.php", {
        params: {
          action: "query",
          list: "search",
          origin: "*",
          format: "json",
          srsearch: textInput,
        },
      });

      setResults(data.query.search);
    };
    if (textInput) {
      search();
    }
  }, [textInput]);


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

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
  // Only thing you can return from use effect is a function (i.e., cleanup)

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

    const timeoutId = setTimeout(() => {
      if (textInput) {
        search();
      }
    }, 500);

    return () => {
      clearTimeout(timeoutId);
    };
  }, [textInput]);

  const renderedResults = results.map((result) => {
    return (
      <div key={result.pageid} className="item">
        <div className="right floated content">
          <a
            className="ui button"
            href={`https://en.wikipedia.org?curid=${result.pageid}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            Go!
          </a>
        </div>
        <div className="content">
          <div className="header">{result.title}</div>
          {/* Be very careful using dangerouslySetInnerHTML - only use for 100% trusted parties */}
          <span dangerouslySetInnerHTML={{ __html: result.snippet }}></span>
        </div>
      </div>
    );
  });

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
      <div className="ui celled list">{renderedResults}</div>
    </div>
  );
};

export default Search;

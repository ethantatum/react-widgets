import React, { useState } from "react";
import Accordion from "./components/Accordion";
import Search from "./components/Search";
import Dropdown from "./components/Dropdown";

const items = [
  {
    title: "Klik-E-Mart",
    content: "Memory game built using React.js",
    url: "https://ethantatum.github.io/Klik-E-Mart/",
  },
  {
    title: "Giftastic",
    content: "Search for content using Giphy API, jQuery",
    url: "https://ethantatum.github.io/GifTastic/",
  },
  {
    title: "Sporty McScraper",
    content: "Web scraper of sports news with No-SQL database (MongoDB)",
    url: "https://fast-oasis-93811.herokuapp.com/",
  },
];

const options = [
  {
    label: "The Color Red",
    value: "red",
  },
  {
    label: "The Color Green",
    value: "green",
  },
  {
    label: "A Shade of Blue",
    value: "blue",
  },
];

export default () => {
  const [selected, setSelected] = useState(options[0]);
  return (
    <div>
      {/* <Accordion items={items}/> */}
      {/* <Search /> */}
      <Dropdown
        selected={selected}
        onSelectedChange={setSelected}
        options={options}
      />
    </div>
  );
};

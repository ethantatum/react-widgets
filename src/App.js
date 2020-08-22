import React from "react";
import Accordion from "./components/Accordion";
import Search from "./components/Search"

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

export default () => {
  return (
    <div>
      {/* <Accordion items={items}/> */}
      <Search />
    </div>
  );
};

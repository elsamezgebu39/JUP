"use client";

import { useState } from "react";
import Image from "next/image";
import { img, imgs } from "@app/page";
import { image } from "@app/product/page";

export default function Search({ setTrendingItems, setFeaturedItems }) {
  // Search states
  const [searchText, setSearchText] = useState("");
  const [searchTimeout, setSearchTimeout] = useState(null);
  const [searchedResults, setSearchedResults] = useState([]);

  const handleSearchChange = (e) => {
    // serch logic here
    let searchQuery = e.target.value;
    setSearchText(e.target.value);
  };
  const handleSearchClick = (e) => {
    const formattedSearchText = searchText.toLowerCase();
    let filtered = imgs.filter(
      (item) =>
        item.title.toLowerCase().includes(formattedSearchText) ||
        item.description.toLowerCase().includes(formattedSearchText)
    );
    setFeaturedItems(filtered);

    let filterdTrending = img.filter(
      (item) =>
        item.title.toLowerCase().includes(formattedSearchText) ||
        item.description.toLowerCase().includes(formattedSearchText)
    );
    setTrendingItems(filterdTrending);

    // let filterdItems = image.filter((item) =>
    //   item.title.toLowerCase().includes(formattedSearchText)
    // );
    // setItems(filterdItems);
  };

  return (
    <div>
      <div className="relative w-[16rem] sm:w-full flex-center">
        <input
          type="text"
          onChange={handleSearchChange}
          value={searchText}
          placeholder="Search for a product or a service"
          className="sm:input input-bordered input-md input-sm w-[16rem] sm:w-[100%] shadow-md"
        />
        <button
          type="button"
          onClick={handleSearchClick}
          className="btn absolute top-0 right-0 w-1/12  h-8 sm:h-12 btn-primary btn-xs text-white rounded-l-none"
        >
          <div class="icon-mask">
            <div className="w-10 h-10 bg-white" alt="search">
              .
            </div>
          </div>
        </button>
      </div>
    </div>
  );
}

"use client";

import { useState } from "react";
import Image from "next/image";
import { img, imgs } from "@app/page";

export default function Search({ setTrendingItems, setFeaturedItems }) {
  // Search states
  const [searchText, setSearchText] = useState("");
  const [searchTimeout, setSearchTimeout] = useState(null);
  const [searchedResults, setSearchedResults] = useState([]);

  const handleSearchChange = (e) => {
    // serch logic here
    let searchQuery = e.target.value;
    setSearchText(e.target.value);
    let filtered = imgs.filter(
      (item) =>
        item.title.includes(searchQuery) ||
        item.description.includes(searchQuery)
    );
    setFeaturedItems(filtered);
    console.log(filtered);

    let filterdTrending = img.filter(
      (item) =>
        item.title.includes(searchQuery) ||
        item.description.includes(searchQuery)
    );
    setTrendingItems(filterdTrending);
  };

  return (
    <div>
      <form className="relative w-full flex-center">
        <input
          type="text"
          onChange={handleSearchChange}
          value={searchText}
          placeholder="Search for a product or a service"
          className="input input-bordered input-md w-[100%] shadow-md"
        />
        <button className="btn absolute top-0 right-0 w-1/12 h-10 btn-primary text-white rounded-l-none">
          <div class="icon-mask">
            <div className="w-10 h-10 bg-white" alt="search">
              .
            </div>
          </div>
        </button>
      </form>
    </div>
  );
}

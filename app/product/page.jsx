"use client";
import Search from "@components/Search";
import Head from "@components/product/Head";
import PCard from "@components/product/card";
import { useState } from "react";
import Link from "next/link";
import {
  BsChevronCompactLeft,
  BsChevronCompactRight,
  BsWallet,
} from "react-icons/bs";
import { GiClothes } from "react-icons/gi";
import { useEffect, useMemo } from "react";

export const images = [
  {
    description: "Habesha Dresses Up To 30% Off",
    src: "/tibeb.jpg",
  },
  {
    description: "Cotton hand made new Ethiopian dress...",
    src: "/tibeb.jpg",
  },
  {
    description: "Cotton hand made new Ethiopian dress...",
    src: "/tibeb.jpg",
  },
  {
    description: "Cotton hand made new Ethiopian dress...",
    src: "/african.svg",
  },
  {
    description: "Cotton hand made new Ethiopian dress...",
    src: "/african.svg",
  },
];

export const image = [
  {
    id: 1,
    title: "fibeb",
    price: "3000",
    src: "/tibeb.jpg",
    category: "Traditional and Handwoven textile",
  },
  {
    id: 2,
    title: "aibeb",
    price: "5000",
    src: "/tibeb.jpg",
    category: "Traditional and Handwoven textile",
  },
  {
    id: 3,
    title: "yibeb",
    price: "500",
    src: "/african.svg",
    category: "Pottery",
  },
  {
    id: 4,
    title: "aibeb",
    price: "8000",
    src: "/tibeb.jpg",
    category: "Traditional and Handwoven textile",
  },
  {
    id: 5,
    title: "aibeb",
    price: "1000",
    src: "/tibeb.jpg",
    category: "Traditional and Handwoven textile",
  },
];

const categories = [
  "All", // Special "All" category to show all products
  "Traditional and Handwoven textile",
  "Pottery",
  "Wood work and Furniture",
  "Jewelry",
  "Metal work",
  "Leather Goods",
  "Traditional Crafts",
  "Traditional Arts",
  // Add more categories as needed
];
export default function product() {
  const [currentItem, setCurrentItem] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentItem((prevItem) => (prevItem + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [images]);

  const [filteredData, setFilteredData] = useState(image);
  const handleCategoryClick = (category) => {
    // Filter the data based on the clicked category
    const filteredResults = image.filter((item) => {
      console.log("Product category:", item.category);
      if (category === "All") {
        // If "all" is selected, show all items
        return true;
      } else {
        return item.category === category;
      }
    });
    setFilteredData(filteredResults);
  };

  const [count, setcount] = useState(null);
  function previous() {
    setcount((prevcount) => prevcount + 1);
  }

  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prevcount) => prevcount - 1);
  };
  const nextSlide = () => {
    if (currentIndex == headItems.length - 1) {
      setCurrentIndex(0);
    } else setCurrentIndex((prevcount) => prevcount + 1);
  };
  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };

  function prePage() {
    if (currentPage !== firstIndex) {
      setCurrentPage(currentPage - 1);
    }
  }

  function nextPage() {
    if (currentPage !== nPage) {
      setCurrentPage(currentPage + 1);
    }
  }

  function changeCPage(src) {
    setCurrentPage(src);
  }

  // Pagination
  const [sortOption, setSortOption] = useState("default");
  const [sortedImg, setSortedImg] = useState(image);
  const [currentPage, setCurrentPage] = useState(1);
  const recordsPerPage = 4;

  // sort by price

  const sortedFilteredData = useMemo(() => {
    if (sortOption === "default") {
      return filteredData;
    } else if (sortOption === "priceLowToHigh") {
      const sortedArray = [...filteredData].sort((a, b) => a.price - b.price);
      setSortedImg(sortedArray);
    } else if (sortOption === "priceHighToLow") {
      const sortedArray = [...filteredData].sort((a, b) => b.price - a.price);
      setSortedImg(sortedArray);
    }
  }, [sortOption, filteredData]);

  const handleSortChange = (event) => {
    setSortOption(event.target.value);
  };

  const lastIndex = currentPage * recordsPerPage;
  const firstIndex = lastIndex - recordsPerPage;
  const nPage = Math.ceil(filteredData.length / recordsPerPage);
  const numbers = [...Array(nPage + 1).keys()].slice(1);
  const displayedImg =
    filteredData && filteredData.slice(firstIndex, lastIndex);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const [headItems, setHeadItems] = useState(images);
  const [featuredItems, setFeaturedItems] = useState(images);
  const [Items, setItems] = useState(image);
  const [trendindItems, setTrendingItems] = useState(0);
  return (
    <div className="flex mr-[5rem] my-[2rem]">
      <div>
        <p className="text-[#912c2c] font-bold text-[20px] ml-[7rem]">
          Categories
        </p>
        <div className="ml-[5rem] my-1">
          {categories.map((category) => (
            <div className="border rounded-lg border-gray-300 p-4">
              <table
                key={category}
                className={`flex items-center cursor-pointer${
                  category === category ? "bg-[#f9e1e1] text-black" : ""
                }`}
                onClick={() => handleCategoryClick(category)}
              >
                <tr className="flex items-center w-full justify-between">
                  <div className="flex">
                    {category == "All" && <BsWallet size={30} />}
                    {category == "Traditional and Handwoven textile" && (
                      <GiClothes size={20} />
                    )}
                    {category == "Pottery" && <GiClothes size={30} />}
                    <p className="text-[15px] px-1">{category}</p>
                  </div>
                  <BsChevronCompactRight className="float-right font-semibold" />
                  <br />
                </tr>
              </table>
            </div>
          ))}
        </div>
      </div>
      <div className="-mt-5">
        <div className="max-w-[1400px] px-4 flex overflow-hidden w-[61rem] group">
          {headItems.map(({ description, src, price }) => (
            <div
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
              className="h-full w-full rounded-2xl bg-center bg-cover duration-500 transition-transform transform "
            >
              <img></img>
              <Head description={description} curr={src} price={price} />
            </div>
          ))}

          {/* left arrow */}
          <div className="hover: shadow-md absolute top-[17%] ml-[25rem] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
            <BsChevronCompactLeft size={30} onClick={prevSlide} />
          </div>
          {/* right arrow */}
          {
            <div className="hover: shadow-md absolute top-[17%] mr-[10rem] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
              <BsChevronCompactRight size={30} onClick={nextSlide} />
            </div>
          }
        </div>
        <div className="top-20 justify-center bg-[#f9ebeb] h-[1rem] w-[60rem] ml-[1rem]">
          <div className="flex items-center justify-center gap-2">
            {headItems.map((_, i) => (
              <div
                className={`transition-all w-2 h-2 bg-[#912c2c] rounded-full ${
                  currentIndex === i ? "p-1" : "bg-gray-300 ml-0"
                }`}
              />
            ))}
          </div>
        </div>
        {/* search bar */}
        <div className="w-2/4 mx-auto mt-10">
          <Search
            setFeaturedItems={setFeaturedItems}
            setTrendingItems={setTrendingItems}
            setItems={setItems}
          />
        </div>
        {/* number of items */}
        <p className="text-[#912c2c] text-2xl font-bold ml-[1rem]">
          # {Items.length} Items{" "}
        </p>
        <div className="ml-[3rem] mt-[1rem] flex">
          <button className="bg-[#f9ebeb] mr-[2rem] text-[#912c2c]/80 w-[8rem] h-[3rem] rounded-md font-bold">
            Clothes
          </button>
          <button className="bg-[#f9ebeb] mr-[2rem] text-[#912c2c]/80 w-[8rem] h-[3rem] rounded-md font-bold">
            Ornament
          </button>
          <div className="flex items-center ml-[26rem]">
            <p className="text-[#912c2c] font-semibold">Sort by</p>
            <select
              className="border-black/30 border-2 float-right"
              value={sortOption}
              onChange={handleSortChange}
            >
              <option value="default">&nbsp;</option>
              <option value="priceLowToHigh">Price: Low to High</option>
              <option value="priceHighToLow">Price: High to Low</option>
            </select>
          </div>
        </div>
        <div className="grid grid-cols-4 items-start w-[20rem] sm:w-[60rem] border-solid">
          {displayedImg.map(({ title, price, src, id }) => (
            <Link href={`/product/${id}`} key={id}>
              <div className="transition-transform duration-500 transform">
                <PCard key={title} title={title} price={price} curr={src} />
              </div>
            </Link>
          ))}
        </div>
        <div className="flex justify-center items-center mt-[2rem]">
          <div className="mx-[1rem] bg-[#f9ebeb] w-[5rem]">
            <Link
              href="#"
              className="text-[#912c2c]/80 font-bold items-center"
              onClick={prePage}
            >
              &lt;&lt;Prev
            </Link>
          </div>
          {numbers.map((n, i) => (
            <div
              className={`mx-[1rem] ${
                currentPage === n
                  ? "w-[2rem] rounded-md text-white bg-[#912c2c] font-bold"
                  : " w-[2rem] bg-[#f9ebeb] rounded-md text-[#912c2c]/80 font-bold"
              }`}
              key={i}
            >
              <Link
                href="#"
                className={`mx-[1rem] transition-all w-[2rem] rounded-md h-2 bg-[#912c2c] ${
                  currentPage === n ? "w-[2rem] bg-[#912c2c]" : "bg-[#f9ebeb]"
                }`}
                onClick={() => changeCPage(n)}
              >
                {n}
              </Link>
            </div>
          ))}
          <div className="mx-[1rem] bg-[#f9ebeb]  w-[5rem]">
            <Link
              href="#"
              className="text-[#912c2c]/80 font-bold items-center"
              onClick={nextPage}
            >
              Next &gt;&gt;
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

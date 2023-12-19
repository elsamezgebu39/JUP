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
import {
  GiClothes,
  GiWoodBeam,
  GiJewelCrown,
  GiMetalBar,
  GiLeatherVest,
  GiStoneCrafting,
  GiPalette,
  GiColumnVase,
} from "react-icons/gi";
import { useEffect, useMemo } from "react";
import {
  useAllProducts,
  useCreateProduct,
  useUpdateProduct,
  useDeleteProduct,
  useProduct,
} from "@lib/hooks/useProductHooks";
import {
  useAllSubCategories,
  useCreateSubCategory,
  useSubCategory,
  useUpdateSubCategory,
  useDeleteSubCategory,
} from "@lib/hooks/useSubCategoryHooks";

const images = [
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

// const categories = [
//   "All", //category to show all products
//   "Traditional Clothes",
//   "Traditional Shoes",
//   "Pottery",
//   "Wood work and Furniture",
//   "Jewelry",
//   "Metal work",
//   "Leather Goods",
//   "Traditional Crafts",
//   "Traditional Arts",
// ];

export default function product() {
  // const apiUri = "http://aadaa.omishtujoy.com/api/product";

  // // fetching api from wak

  // useEffect(() => {
  //   fetch(apiUri) // Fetch data from the API route
  //     .then((response) => response.json())
  //     .then((data) => setProductList(data))
  //     .catch((error) => console.error("Error fetching data:", error));
  // }, []);

  // console.log(productList);

  const { data: products, isLoading, isError, error } = useAllProducts();
  const { data: categories } = useAllSubCategories();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error: {error.message || "An error occurred"}</div>;
  }

  const [headItems, setHeadItems] = useState(images);
  const [featuredItems, setFeaturedItems] = useState(images);
  const [Items, setItems] = useState(products);
  const [trendindItems, setTrendingItems] = useState(0);

  const [sortOption, setSortOption] = useState("default");
  const [sortedImg, setSortedImg] = useState(products);
  const [currentPage, setCurrentPage] = useState(1);
  const recordsPerPage = 4; //number of cards that will be displayed in a page
  const [FilteredData, setFilteredData] = useState(products);
  const filteredData = products;
  const lastIndex = currentPage * recordsPerPage;
  const firstIndex = lastIndex - recordsPerPage;
  const nPage = Math.ceil(filteredData.length / recordsPerPage);
  const numbers = [...Array(nPage + 1).keys()].slice(1);
  // the product lists fetched from the api named as displayedImg
  const displayedImg =
    filteredData && filteredData.slice(firstIndex, lastIndex);

  const [currentItem, setCurrentItem] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentItem((prevItem) => (prevItem + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [images]);

  const handleCategoryClick = (categories) => {
    // Filter the data based on the clicked category
    const filteredResults = image.filter((item) => {
      console.log("Product category:", item.categories);
      if (categories === "All") {
        // If "all" is selected, show all items
        return true;
      } else {
        return item.categories === categories;
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

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };
  return (
    <div className="flex mr-[5rem] my-[2rem]">
      <div>
        <p className="text-[#912c2c] font-bold text-[20px] ml-[7rem]">
          Categories
        </p>
        <div className="ml-[5rem] my-1">
          {categories?.map((categories) => (
            <div
              className="border rounded-lg border-gray-300 p-4"
              key={categories}
            >
              <table
                key={categories}
                className={`flex items-center cursor-default${
                  categories === categories ? "bg-[#f9e1e1] text-black" : ""
                }`}
                onClick={() => handleCategoryClick(categories)}
              >
                <tbody className="flex  items-center w-full">
                  <td className="">
                    {categories == "All" && <BsWallet size={30} />}
                    {categories == "Traditional Clothes" && (
                      <GiClothes size={30} />
                    )}
                    {categories == "Pottery" && <GiColumnVase size={30} />}
                    {categories == "Wood work and Furniture" && (
                      <GiWoodBeam size={30} />
                    )}
                    {categories == "Jewelry" && <GiJewelCrown size={30} />}
                    {categories == "Metal work" && <GiMetalBar size={30} />}
                    {categories == "Leather Goods" && (
                      <GiLeatherVest size={30} />
                    )}
                    {categories == "Traditional Crafts" && (
                      <GiStoneCrafting size={30} />
                    )}
                    {categories == "Traditional Arts" && (
                      <GiPalette size={30} />
                    )}
                  </td>
                  <td>
                    <p className="text-[15px] px-1">{categories}</p>
                  </td>
                  <td className="float-right">
                    <BsChevronCompactRight className="float-right font-semibold" />
                  </td>
                  <br />
                </tbody>
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
          {/* # {productList.length} {" "} */}
          {products.length === 0
            ? "No Items"
            : productList.length === 1
            ? "#1 Item"
            : `# ${products.length} Items`}
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
          {displayedImg.map(({ product_name, price, product_image, id }) => (
            <Link href={`/product/${id}`} key={id}>
              <div className="transition-transform duration-500 transform">
                <PCard
                  key={id}
                  title={product_name}
                  price={price}
                  curr={product_image}
                />
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

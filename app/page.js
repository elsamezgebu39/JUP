"use client";
import { useState } from "react";
import Hero from "@components/Hero";
import Search from "@components/Search";
import Card from "@components/home/Card";
import Features from "@components/Features";
import AboutUS from "@components/home/AboutUs";
import Link from "next/link";

export const imgs = [
  {
    title: "fibeb",
    description:
      "Made from handwoven cotton. The use of cotton in the dress adds a touch of natural beauty and ensures breathability, making it ideal for the warm Ethiopian climate. ",
    price: "3000",
    src: "/tibeb.jpg",
  },
  {
    title: "Photo",
    description:
      "Made from handwoven cotton. The use of cotton in the dress adds a touch of natural beauty and ensures breathability, making it ideal for the warm Ethiopian climate. ",
    price: "3000",
    src: "/african.svg",
  },
  {
    title: "fibeb",
    description: "Cotton hand made new Ethiopian dress...",
    price: "3000",
    src: "/assets/images/cloth3.jpg",
  },
  {
    title: "aibeb",
    description: "Cotton hand made new Ethiopian dress...",
    price: "200",
    src: "/tibeb.jpg",
  },
  {
    title: "zibeb",
    description: "Cotton hand made new Ethiopian dress...",
    price: "6000",
    src: "/tibeb.jpg",
  },
];
export const img = [
  {
    title: "fibeb",
    description:
      "Made from handwoven cotton. The use of cotton in the dress adds a touch of natural beauty and ensures breathability, making it ideal for the warm Ethiopian climate. ",
    price: "3000",
    src: "/tibeb.jpg",
  },
  {
    title: "aibeb",
    description: "Cotton hand made new Ethiopian dress",

    price: "3000",
    src: "/tibeb.jpg",
  },
  {
    title: "yibeb",
    description: "Cotton hand made new Ethiopian dress...",
    price: "3000",
    src: "/tibeb.jpg",
  },
];
const imgss = ["/assets/images/cloth3.jpg", "/assets/images/cloth2.jpg"];
const AbtUs = [
  {
    description:
      "Absolutely love the shopping experience.The variety of stylish options is incredible, and the website is so easy to navigate",
    name: "Yonas Belay",
    type: "Customer",
    src: "assets/images/AbtUs.jpg",
  },
  {
    description:
      "Absolutely love the shopping experience.The variety of stylish options is incredible, and the website is so easy to navigate",
    name: "Yonas Belay",
    type: "Customer",
    src: "assets/images/AbtUs.jpg",
  },
  {
    description:
      "Absolutely love the shopping experience.The variety of stylish options is incredible, and the website is so easy to navigate",
    name: "Yonas Belay",
    type: "Customer",
    src: "assets/images/AbtUs.jpg",
  },
];

export default function Home() {
  // fuctionality of left and right icons
  const [count, setcount] = useState(null);
  const [Fcount, setFcount] = useState(null);
  const [Tcount, setTcount] = useState(null);
  const [Acount, setAcount] = useState(null);
  function previous() {
    setcount((prevcount) => prevcount - 1);
  }

  function next() {
    if (count == featuredItems.length - 3) {
      setcount(0);
    } else setcount((prevcount) => prevcount + 1);
  }
  // mobile version for featured items
  function FNext() {
    if (Fcount == featuredItems.length - 1) {
      setFcount(0);
    } else setFcount((prevcount) => prevcount + 1);
  }

  function TPrevious() {
    setTcount((prevcount) => prevcount - 1);
  }
  function TNext() {
    if (Tcount == trendingItems.length - 1) {
      setTcount(0);
    } else setTcount((prevcount) => prevcount + 1);
  }

  function APrevious() {
    setAcount((prevcount) => prevcount - 1);
  }
  function ANext() {
    if (Acount == aboutUs.length - 1) {
      setAcount(0);
    } else setAcount((prevcount) => prevcount + 1);
  }
  const [featuredItems, setFeaturedItems] = useState(imgs);
  const [trendingItems, setTrendingItems] = useState(img);
  const [aboutUs, setAboutUs] = useState(AbtUs);

  return (
    <div className="w-screen sm:w-[100vw]">
      {/* hero */}
      <Hero />

      {/* search bar */}
      <div className="w-2/4 mx-auto mt-10">
        <Search
          setFeaturedItems={setFeaturedItems}
          setTrendingItems={setTrendingItems}
          // setItems={setItems}
        />
      </div>

      {/* feature clothes*/}
      <p className="font-bold mt-[2rem] sm:text-4xl text-[20px] ">
        Featured Clothes
      </p>

      <div className="flex justify-center">
        {/* left icon */}
        <button onClick={previous} className="text-[3rem] mt-[2rem]">
          <div>
            <img
              className="w-[2rem] sm:w-[2rem] rounded-[50%]"
              src="/lessthan.jpg"
            />
          </div>
        </button>
        <div className="hidden sm:flex overflow-hidden items-start w-[20rem] sm:w-[60rem] border-solid">
          {featuredItems.map(({ title, description, price, src }) => (
            <div
              className="transition-transform duration-500 transform"
              style={{ transform: `translateX(-${count * 100}%)` }}
            >
              <Card
                key={title}
                title={title}
                description={description}
                price={price}
                curr={src}
              />
            </div>
          ))}
        </div>
        {/* mobile version */}
        <div className="sm:hidden flex overflow-hidden items-start w-[20rem] sm:w-[60rem] border-solid">
          {featuredItems.map(({ title, description, price, src }) => (
            <div
              className="transition-transform duration-500 transform"
              style={{ transform: `translateX(-${Fcount * 100}%)` }}
            >
              <Card
                key={title}
                title={title}
                description={description}
                price={price}
                curr={src}
              />
            </div>
          ))}
        </div>
        {/* right icon */}
        <button onClick={FNext} className="sm:hidden text-[3rem] mt-[2rem]">
          <div>
            <img
              className="w-[2rem] sm:w-[2rem] rounded-[50%]"
              src="/greaterthan.jpg"
            />
          </div>
        </button>
        {/* desktop version */}
        {/* right icon */}
        <button
          onClick={next}
          className="hidden sm:flex text-[3rem] mt-[13rem]"
        >
          <div>
            <img
              className="w-[2rem] sm:w-[2rem] rounded-[50%]"
              src="/greaterthan.jpg"
            />
          </div>
        </button>
      </div>

      <div className="ml-[5rem] sm:ml-[8rem] mt-[2rem]">
        <p className="font-bold sm:text-4xl text-xl text-[#912c2c]">
          Ethiopian Traditional Clothing
          <br />
          <span className="ml-[7rem]">Collections</span>
        </p>
        <div className="flex w-[30%vw] sm:w-[50%vw] mt-[1rem] mx-[1rem] sm:mx-[6rem]">
          <img
            className="h-[11rem] sm:h-[21rem]"
            src="assets/images/cloth.jpg"
          />
          <div className="grid sm:flex">
            <div className="mr-[2rem] h-[5rem] sm:h-[10rem] w-[5rem] sm:w-[10rem]">
              {imgss.map((curr) => {
                return (
                  <img
                    className="mb-[1rem] ml-[1rem] h-full w-full "
                    src={curr}
                  />
                );
              })}
            </div>
            <div className="mt-[5rem] sm:mt-0 sm:flex hidden">
              {/* fetaures */}
              <Features />
            </div>
          </div>
        </div>
      </div>

      <div className="sm:hidden mt-[1rem]">
        <Features horizontal={true} />
      </div>
      {/* desktop version */}
      {/* trending cloth */}
      <div className="w-full">
        <p className="font-bold text-[20px] sm:text-4xl ml-[5rem] mt-[2rem]">
          Trending Clothes
          <Link
            href="/product"
            className="btn-ghost text-[20px] sm:text-4xl ml-[3rem] sm:ml-[45rem] text-[#912c2c] "
          >
            see more...
          </Link>
        </p>
        <div className="mx-[2rem] sm:mx-[13rem]">
          <div className="hidden sm:flex items-start sm:grid-cols-3 mr-[2rem]">
            {trendingItems.map(({ title, description, price, src }) => (
              <Card
                key={title}
                title={title}
                description={description}
                price={price}
                curr={src}
              />
            ))}
          </div>
        </div>
      </div>
      {/* mobile version */}
      <div className="sm:hidden flex ml-[1rem]">
        {/* left icon */}
        <button onClick={TPrevious} className="text-[3rem] mt-[2rem]">
          <div>
            <img
              className="w-[2rem] sm:w-[2rem] rounded-[50%]"
              src="/lessthan.jpg"
            />
          </div>
        </button>
        <div className="flex overflow-hidden items-start w-[20rem] sm:w-[60rem] border-solid">
          {trendingItems.map(({ title, description, price, src }) => (
            <div
              className="transition-transform duration-500 transform"
              style={{ transform: `translateX(-${Tcount * 100}%)` }}
            >
              <Card
                key={title}
                title={title}
                description={description}
                price={price}
                curr={src}
              />
            </div>
          ))}
        </div>
        {/* right icon */}
        <button onClick={TNext} className="text-[3rem] mt-[2rem]">
          <div>
            <img
              className="w-[2rem] sm:w-[2rem] rounded-[50%]"
              src="/greaterthan.jpg"
            />
          </div>
        </button>
      </div>
      <div>
        {/* desktop version */}
        {/* about us */}
        <p className="font-bold text-[30px] ml-[5rem] mt-[2rem]">
          What are people saying about us?
        </p>
        <div className="mx-[2rem] sm:mx-[13rem]">
          <div className="hidden sm:flex items-start overflow-hidden sm:grid-cols-3 ">
            {AbtUs.map(({ description, name, type, src }) => (
              <AboutUS
                description={description}
                name={name}
                type={type}
                curr={src}
              />
            ))}
          </div>
        </div>
      </div>
      {/* mobile version */}
      <div className="sm:hidden flex ml-[1rem]">
        {/* left icon */}
        <button onClick={APrevious} className="text-[3rem] mt-[2rem]">
          <div>
            <img
              className="w-[2rem] sm:w-[2rem] rounded-[50%]"
              src="/lessthan.jpg"
            />
          </div>
        </button>
        <div className="items-start overflow-hidden flex w-[20rem] sm:w-[60rem] border-solid">
          {aboutUs.map(({ description, name, type, src }) => (
            <div
              className="transition-transform duration-500 transform"
              style={{ transform: `translateX(-${Acount * 100}%)` }}
            >
              <AboutUS
                description={description}
                name={name}
                type={type}
                curr={src}
              />
            </div>
          ))}
        </div>
        {/* right icon */}
        <button onClick={ANext} className="text-[3rem] mt-[2rem]">
          <div>
            <img
              className="w-[2rem] sm:w-[2rem] rounded-[50%]"
              src="/greaterthan.jpg"
            />
          </div>
        </button>
      </div>
    </div>
  );
}

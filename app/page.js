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
    description: "Cotton hand made new Ethiopian dress...",
    price: "3000",
    src: "/tibeb.jpg",
  },
  {
    title: "Photo",
    description: "Cotton hand made new Ethiopian dress...",
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
    description: "Cotton hand made new Ethiopian dress...",
    price: "3000",
    src: "/tibeb.jpg",
  },
  {
    title: "aibeb",
    description: "Cotton hand made new Ethiopian dress...",
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
  const [count, setcount] = useState(null);
  function previous() {
    setcount((prevcount) => prevcount - 1);
  }

  function next() {
    if (count == featuredItems.length - 3) {
      setcount(0);
    } else setcount((prevcount) => prevcount + 1);
  }
  const [featuredItems, setFeaturedItems] = useState(imgs);
  const [trendingItems, setTrendingItems] = useState(img);

  return (
    <div className="-mt-5 w-[100vw]">
      {/* hero */}
      <Hero />

      {/* search bar */}
      <div className="w-2/4 mx-auto mt-10">
        <Search
          setFeaturedItems={setFeaturedItems}
          setTrendingItems={setTrendingItems}
        />
      </div>

      {/* feature */}
      <p className="font-bold mt-[2rem]  ml-[5rem] text-[30px] ">
        Featured Clothes
      </p>

      <div className="flex justify-center">
        {/* left icon */}
        <div>
          <button onClick={previous} className="text-[3rem] mt-[12rem]">
            <div>
              <img className="w-[2rem] rounded-[50%]" src="/lessthan.jpg" />
            </div>
          </button>
        </div>
        <div className="w-[51rem] flex overflow-hidden">
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
        {/* right icon */}
        <div>
          <button onClick={next} className="text-[3rem] mt-[12rem]">
            <div>
              <img className="w-[2rem] rounded-[50%]" src="/greaterthan.jpg" />
            </div>
          </button>
        </div>
      </div>

      {/* fetaures */}
      <div className="ml-[5rem] mt-[2rem]">
        <p className="font-bold text-[30px] text-[#912c2c]">
          Ethiopian Traditional Clothing
          <br />
          <span className="ml-[7rem]">Collections</span>
        </p>
        <div className="flex w-[50%vw] mt-[1rem] ml-[12rem]">
          <img className="h-[21rem]" src="assets/images/cloth.jpg" />
          <div className="mr-[2rem]">
            {imgss.map((curr) => {
              return (
                <img
                  className="mb-[1rem] ml-[1rem] h-[10rem] w-[15vw]"
                  src={curr}
                />
              );
            })}
          </div>
          <div>
            <Features />
          </div>
        </div>
      </div>

      {/* trending cloth */}
      <div>
        <p className="font-bold text-[30px] ml-[5rem] mt-[2rem]">
          Trending Clothes
          <Link
            href="/product"
            className="btn-ghost ml-[50rem] text-[#912c2c] "
          >
            see more...
          </Link>
        </p>
        <div className="ml-[16rem] mr-[16rem]">
          <div className="grid grid-cols-3">
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
      <div>
        <p className="font-bold text-[30px] ml-[5rem] mt-[2rem]">
          What are people saying about us?
        </p>
        <div className="ml-[16rem] mr-[16rem]">
          <div className=" grid grid-cols-3">
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
    </div>
  );
}

"use client";
import { useState } from "react";
import Hero from "@components/Hero";
import Search from "@components/Search";
import Card from "@components/home/Card";
import Features from "@components/Features";

export const imgs = [
  {
    title: "fibeb",
    description: "Cotton hand made new Ethiopian dress...",
    price: "3000",
    src: "/tibeb.jpg",
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
  {
    title: "ribeb",
    description: "Cotton hand made new Ethiopian dress...",
    price: "3000",
    src: "/tibeb.jpg",
  },
];
const imgss = ["/assets/images/cloth3.jpg", "/assets/images/cloth2.jpg"];

export default function Home() {
  const [count, setcount] = useState(null);
  function previous() {
    setcount((prevcount) => prevcount + 1);
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

      <div className={`flex justify-center ml-[${count}px]`}>
        <img
          onClick={previous}
          className="w-[2rem] rounded-[50%] h-[2rem] mt-[7rem]  ml-[12rem]"
          src="/lessthan.jpg"
        />
        <div className="grid grid-cols-3 ">
          {featuredItems.map(({ title, description, price, src }) => (
            <Card
              key={title}
              title={title}
              description={description}
              price={price}
              curr={src}
            />
          ))}
        </div>
        <img
          src="/greaterthan.jpg"
          className=" w-[2rem] rounded-[50%] h-[2rem] mt-[7rem] mr-[12rem]"
        />
      </div>

      {/* fetaures */}
      <div className="ml-[5rem] mt-[2rem]">
        <p className="font-bold text-[30px]">
          Ethiopian Traditional Clothing
          <br />
          <span className="ml-[7rem]">Collections</span>
        </p>
        <div className="flex w-[50%vw] mt-[1rem]">
          <img className="h-[21rem]" src="assets/images/cloth.jpg" />
          <div className="">
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
        </p>
        <div className=" ml-[17.5rem] mr-[14.3rem] grid grid-cols-3 items-center">
          {trendingItems.map((curr) => {
            return (
              <div className="grid grid-cols-3 ">
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
            );
          })}
        </div>
      </div>
    </div>
  );
}

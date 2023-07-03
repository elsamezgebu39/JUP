"use client";

import { useState } from "react";
import Features from "@/components/Features";
import Hero from "@/components/Hero";
import Search from "@/components/Search";
import Card from "@components/home/Card";

const imgs = [
  {
    title: "Tibeb",
    description: "Cotton hand made new Ethiopian dress...",
    price: "3000",
    src: "/tibeb.jpg",
  },
  {
    title: "Tibeb",
    description: "Cotton hand made new Ethiopian dress...",
    price: "200",
    src: "/tibeb.jpg",
  },
  {
    title: "Tibeb",
    description: "Cotton hand made new Ethiopian dress...",
    price: "6000",
    src: "/tibeb.jpg",
  },
  {
    title: "Tibeb",
    description: "Cotton hand made new Ethiopian dress...",
    price: "3000",
    src: "/african.svg",
  },
];

const img = ["/tibeb.jpg", "/tibeb.jpg", "/tibeb.jpg", "/tibeb.jpg"];

export default function product() {
  const [count, setcount] = useState(null);
  function previous() {
    setcount((prevcount) => prevcount + 1);
  }
  return (
    <div className="-mt-5">
      {/* hero */}
      <Hero />
      {/* search bar */}
      <div className="w-2/4 mx-auto mt-10">
        <Search />
      </div>

      {/* feature */}
      <p className="font-bold mt-[2rem]  ml-[5rem] text-[30px] ">
        Featured Clothes
      </p>
      <div className={`flex justify-center p-[${count}px]`}>
        <img
          onClick={previous}
          className="w-[2rem] rounded-[50%] h-[2rem] mt-[7rem]  ml-[12rem]"
          src="/lessthan.jpg"
        />
        <div className="grid grid-cols-3 gap-6">
          {imgs.map(({ title, description, price, src }) => (
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

      {/* trending cloth */}
      <div>
        <p className="font-bold text-[30px] ml-[5rem] mt-[2rem]">
          Trending Clothes
        </p>
        <div className=" ml-[17.5rem] mr-[14.3rem] grid grid-cols-3 items-center">
          {img.map((curr) => {
            return (
              <div className="bg-white m-[1rem] shadow-xl hover:shadow-2xl rounded-[5%] w-[15rem]">
                <img
                  className="w-[10rem] h-[10rem]  m-[1rem] flex min-w-[2%]"
                  src={curr}
                />
                <p className=" pl-[2rem] text-[#912c2c] font-bold text-[20px]">
                  Tibeb
                  <br />
                </p>
                <p className="p-[10px]">
                  Cotton hand made new Ethiopian dress...{" "}
                </p>
                <br />
                <p className="text-[#912c2c] font-strong float-right mr-[5px]">
                  30000 Birr
                </p>
              </div>
            );
          })}
        </div>
      </div>
      {/* Features */}
      <Features horizontal={true} />
    </div>
  );
}

"use client";

import Features from "@/components/Features";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Search from "@/components/Search";
import { useState } from "react";

const imgs = ["/tibeb.jpg", "/tibeb.jpg", "/tibeb.jpg", "/african.svg"];
const img = ["/tibeb.jpg", "/tibeb.jpg", "/tibeb.jpg", "/tibeb.jpg"];

export default function Home() {
  const [count, setcount] = useState(null);
  function previous() {
    setcount((prevcount) => prevcount + 1);
  }
  return (
    <div>
      {/* navbar */}
      <Navbar />
      {/* hero */}
      <Hero />
      {/* search bar */}
      <Search />

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
        <div className="grid grid-cols-3">
          {imgs.map((curr) => {
            return (
              <div className="bg-white m-[1rem] shadow-2xl rounded-[5%] w-[15rem] ">
                <img
                  className="w-[10rem] h-[10rem]  m-[1rem] min-w-[2%]"
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
        <div className="flex ml-[17.5rem] mr-[14.3rem] flex-wrap items-center">
          {img.map((curr) => {
            return (
              <div className="bg-white m-[1rem] shadow-2xl rounded-[5%] w-[15rem]">
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
      <Features />
      {/* footer */}

      <Footer />
    </div>
  );
}

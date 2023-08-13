import React from "react";
import Image from "next/image";
import { FaStar } from "react-icons/fa";

export default function RelatedCard() {
  return (
    <div className="border bg-white my-3">
      <img
        src="/assets/images/cloth.jpg"
        alt="imgs"
        className=" w-full h-[125px] object-contain"
      />
      <div className="p-2">
        <h1 className="text-[#912c2c] font-semibold">Habesha Dresss</h1>
        <div className="flex items-center">
          <span className="pr-2 font-semibold">4.8</span>
          <div className="flex">
            <FaStar className="text-[#f5da42]" />
            <FaStar className="text-[#f5da42]" />
            <FaStar className="text-[#f5da42]" />
            <FaStar className="text-[#f5da42]" />
            <FaStar className="" />
          </div>
        </div>
        <div className="text-end">12000 Birr</div>
      </div>
    </div>
  );
}

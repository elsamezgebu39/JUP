"use client";
import React, { useState } from "react";
import { FaCaretDown, FaCaretRight } from "react-icons/fa";

export default function ProductInfo() {
  const [open, setopen] = useState(false);

  return (
    <div className="mt-4 mx-2">
      <div className="hidden md:block">
        <h1 className="text-2xl font-bold mb-3 text-[#912c2c] capitalize">
          Habesha Dressing
        </h1>
        <p className="font-semibold mb-3 ">
          <span className="font-bold mr-3 capitalize">price:</span>
          12000 ETB
        </p>
      </div>
      <p className="font-semibold mb-3 ">
        <span className="font-bold mr-3 capitalize">quantity in Stock:</span>8
      </p>
      {/* description */}
      <div className="relative">
        <div
          onClick={() => setopen(!open)}
          className="flex gap-8 cursor-pointer items-center"
        >
          <p className="font-bold">Description</p>
          {open ? <FaCaretRight size={30} /> : <FaCaretDown size={30} />}
        </div>
        {open && (
          <div className="absolute top-full left-0 z-10 bg-white p-2 border border-gray-300 shadow-md">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. In fugit
            sint tempora? Libero earum eius iure. Molestias laudantium facilis
            ullam.
          </div>
        )}
      </div>
    </div>
  );
}

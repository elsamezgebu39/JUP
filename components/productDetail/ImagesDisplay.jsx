"use client";

import React, { useState } from "react";
import Image from "next/image";

const imgs = [
  "cloth2.jpg",
  "cloth1.jpg",
  "cloth.jpg",
  "cloth3.jpg",
  "cloth1.jpg",
];

export default function ImagesDisplay() {
  const [index, setIndex] = useState(0);

  const handleImageClick = (clickedIndex) => {
    setIndex(clickedIndex);
  };

  return (
    <div>
      {/* main image */}
      <div className="flex flex-1 flex-col gap-3 justify-center items-center md:mb-4 mb-2">
        <img
          src={`/assets/images/${imgs[index]}`}
          alt="imgs"
          className=" object-fill w-[400px] h-[350px]"
        />
        {/* other images */}
        <div className="flex gap-2">
          {imgs.map((img, index) => (
            <img
              key={index}
              src={`/assets/images/${img}`}
              onClick={() => handleImageClick(index)}
              className="w-[50px] h-[50px] cursor-pointer"
              alt={`Image ${index}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

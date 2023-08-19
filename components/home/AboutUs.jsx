"use client";
import { useState } from "react";

export default function AboutUs({ description, name, type, src, curr }) {
  const [isExpanded, setIsExpanded] = useState(false);
  const line = description.split(" ");
  const lineLength = line.length;

  const toggleExpanded = () => {
    setIsExpanded(!isExpanded);
  };
  return (
    <div className="card w-[18rem] bg-base-100 shadow-xl hover:shadow-2xl transition-all mx-[1rem] mt-[1rem] items-center ">
      <figure className="rounded-full  h-[100px] w-[100px]">
        <img
          className="object-cover h-[100px] w-[100px]"
          src={curr}
          alt="Person"
        />
      </figure>
      <div className="card-body">
        <p className={`text-center ${isExpanded ? "block" : "line-clamp-3"}`}>
          {description}
        </p>
        <button
          className={`text-end font-semibold ${
            lineLength > 10 ? "visible" : "invisible"
          }`}
          onClick={toggleExpanded}
        >
          {isExpanded ? "Read Less" : "Read More"}
        </button>
        <h1 className="text-[#912c2c] text-center font-bold">{name}</h1>
        <p className="text-center">{type}</p>
      </div>
    </div>
  );
}

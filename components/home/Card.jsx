"use client";
import { useState } from "react";

export default function Card({ title, description, price, curr }) {
  const [isExpanded, setIsExpanded] = useState(false);
  const line = description.split(" ");
  const lineLength = line.length;

  const toggleExpanded = () => {
    setIsExpanded(!isExpanded);
  };
  return (
    <div className="card w-[18rem] h-[25rem] bg-base-100 shadow-xl hover:shadow-2xl transition-all mx-[1rem] border-s-4 mt-[1rem] ">
      <figure className="h-[70rem]">
        <img src={curr} className="h-full" alt={title} />
      </figure>
      <div className="card-body">
        <h2 className="sm:card-title font-bold uppercase text-[#912c2c]">
          {title}!
        </h2>
        <p
          className={`text-left sm:text-[16px] text-[12px] ${
            isExpanded ? "block" : "line-clamp-3"
          }`}
        >
          {description}
        </p>
        <button
          onClick={toggleExpanded}
          className={`text-end font-semibold ${
            lineLength > 10 ? "visible" : "invisible"
          }`}
        >
          {isExpanded ? "Read Less" : "Read More"}
        </button>
        <div className="card-actions justify-end">
          <button className="btn btn-xs sm:btn-sm">Buy Now</button>
        </div>
      </div>
    </div>
  );
}

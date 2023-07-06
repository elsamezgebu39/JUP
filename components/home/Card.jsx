"use client";
import { useState } from "react";

export default function Card({ title, description, price, curr }) {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpanded = () => {
    setIsExpanded(!isExpanded);
  };
  return (
    <div className="card w-[18rem] h-[25rem] bg-base-100 shadow-xl hover:shadow-2xl transition-all ml-[1rem] mr-[1rem] border-s-4 mt-[1rem] ">
      <figure className="h-[20rem] pt-[35px]">
        <img src={curr} className="h-48" alt={(title, description)} />
      </figure>
      <div className="card-body">
        <h2 className="card-title text-[#912c2c]">{title}!</h2>
        <p className={`text-center ${isExpanded ? "block" : "line-clamp-3"}`}>
          {description}
        </p>
        <button onClick={toggleExpanded} className="text-end font-semibold">
          {isExpanded ? "read less" : "read more"}
        </button>
        <div className="card-actions justify-end">
          <button className="btn">Buy Now</button>
        </div>
      </div>
    </div>
  );
}

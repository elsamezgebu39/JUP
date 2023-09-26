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
    <div className="card  w-[18rem] bg-base-100 h-[25rem]  shadow-xl hover:shadow-2xl transition-all mx-[1rem] border-s-4 mt-[1rem] ">
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
        <div className="flex flex-end w-full">
          <button
            onClick={toggleExpanded}
            className={`text-end font-semibold ${
              lineLength > 10 ? "visible" : "invisible"
            }`}
          >
            {isExpanded ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="22"
                height="22"
                viewBox="-2 -2 24 24"
              >
                <path
                  fill="#192c2c"
                  d="m15.398 7.23l1.472-1.472C18.749 6.842 20 8.34 20 10c0 3.314-4.958 5.993-10 6a14.734 14.734 0 0 1-3.053-.32l1.747-1.746c.426.044.862.067 1.303.066h.002c-.415 0-.815-.063-1.191-.18l1.981-1.982c.47-.202.847-.579 1.05-1.049l1.98-1.981A4 4 0 0 1 10.022 14C14.267 13.985 18 11.816 18 10c0-.943-1.022-1.986-2.602-2.77zm-9.302 3.645A4 4 0 0 1 9.993 6C5.775 5.985 2 8.178 2 10c0 .896.904 1.877 2.327 2.644L2.869 14.1C1.134 13.028 0 11.585 0 10c0-3.314 4.984-6.017 10-6c.914.003 1.827.094 2.709.262l-1.777 1.776c-.29-.022-.584-.035-.88-.038c.282.004.557.037.823.096l-4.78 4.779zM19.092.707a1 1 0 0 1 0 1.414l-16.97 16.97a1 1 0 1 1-1.415-1.413L17.677.708a1 1 0 0 1 1.415 0z"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="22"
                height="22"
                viewBox="0 0 256 256"
              >
                <path
                  fill="#192c2c"
                  d="M245.48 125.57c-.34-.78-8.66-19.23-27.24-37.81C201 70.54 171.38 50 128 50S55 70.54 37.76 87.76c-18.58 18.58-26.9 37-27.24 37.81a6 6 0 0 0 0 4.88c.34.77 8.66 19.22 27.24 37.8C55 185.47 84.62 206 128 206s73-20.53 90.24-37.75c18.58-18.58 26.9-37 27.24-37.8a6 6 0 0 0 0-4.88ZM128 194c-31.38 0-58.78-11.42-81.45-33.93A134.77 134.77 0 0 1 22.69 128a134.56 134.56 0 0 1 23.86-32.06C69.22 73.42 96.62 62 128 62s58.78 11.42 81.45 33.94A134.56 134.56 0 0 1 233.31 128C226.94 140.21 195 194 128 194Zm0-112a46 46 0 1 0 46 46a46.06 46.06 0 0 0-46-46Zm0 80a34 34 0 1 1 34-34a34 34 0 0 1-34 34Z"
                />
              </svg>
            )}
          </button>
        </div>
        <div className="card-actions justify-end">
          <button className="btn btn-xs sm:btn-sm">Buy Now</button>
        </div>
      </div>
    </div>
  );
}

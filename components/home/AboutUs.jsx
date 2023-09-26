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
    <div className="card w-[20rem] bg-base-100 shadow-xl hover:shadow-2xl transition-all mx-[1rem] mt-[1rem] items-center py-4">
      <figure className="rounded-full border-2 border-[#912c2c]  h-[120px] w-[120px] overflow-hidden">
        <img
          className="object-cover m-4 rounded-full h-[100px] w-[100px]"
          src={curr}
          alt="Person"
        />
      </figure>
      <div className="card-body">
        <p
          className={`text-center  : ${
            isExpanded ? "block" : "line-clamp-3 first-letter:text-2xl  "
          }`}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 16 16"
          >
            <path
              fill="#192c2c"
              d="M3.516 7a3.5 3.5 0 1 1-3.5 3.5L0 10a7 7 0 0 1 7-7v2a4.97 4.97 0 0 0-3.536 1.464a5.01 5.01 0 0 0-.497.578c.179-.028.362-.043.548-.043zm9 0a3.5 3.5 0 1 1-3.5 3.5L9 10a7 7 0 0 1 7-7v2a4.97 4.97 0 0 0-3.536 1.464a5.01 5.01 0 0 0-.497.578c.179-.028.362-.043.549-.043z"
            />
          </svg>
          {description}
        </p>
        <button onClick={toggleExpanded}>
          {isExpanded ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="12"
              height="12"
              viewBox="0 0 48 48"
            >
              <path
                fill="none"
                stroke="#000"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="4"
                d="M13 30L25 18L37 30"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="22"
              height="22"
              viewBox="0 0 48 48"
            >
              <path
                fill="none"
                stroke="#000"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="4"
                d="M36 18L24 30L12 18"
              />
            </svg>
          )}
        </button>

        <h1 className="text-[#912c2c] text-center font-bold ">{name}</h1>
        {/* <p className="text-center">{type}</p> */}
      </div>
    </div>
  );
}

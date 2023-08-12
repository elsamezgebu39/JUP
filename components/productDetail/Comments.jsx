"use client";
import { FaStar } from "react-icons/fa";
import { useEffect, useRef, useState } from "react";
export default function Comments() {
  const [isExpanded, setIsExpanded] = useState(false);
  const [displayButton, setDisplayButton] = useState(false);
  const contentRef = useRef(null);

  useEffect(() => {
    if (contentRef.current) {
      setDisplayButton(
        contentRef.current.scrollHeight !== contentRef.current.clientHeight
      );
    }
  }, []);
  return (
    <div className="border p-2 bg-white">
      <div className="flex items-center justify-between">
        <div className="flex">
          <FaStar className="text-[#f5da42]" />
          <FaStar className="text-[#f5da42]" />
          <FaStar className="text-[#f5da42]" />
          <FaStar className="text-[#f5da42]" />
          <FaStar className=" text-gray-500" />
        </div>
        <h2 className="font-semibold">yosep</h2>
      </div>
      <p
        ref={contentRef}
        className={`text-gray-700 ${
          isExpanded ? "overflow-auto max-h-full" : "line-clamp-2"
        }`}
      >
        Lorem ipsum dolor sit amet consectetur adipisicing elit. In fugit sint
        tempora? Libero earum eius iure. Molestias laudantium facilis ullam.
      </p>
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className={`font-semibold capitalize text-left text-blue-600 hover:text-blue-700 ${
          displayButton ? "visible" : "invisible"
        }`}
      >
        {isExpanded ? "see less" : "see more"}
      </button>
      <h2 className="text-end text-[#9B9A9A]">12/13/2013</h2>
    </div>
  );
}

"use client";
import { FaRegBell } from "react-icons/fa";
import { useState, useRef, useEffect } from "react";

export default function NotficationCard({ notification }) {
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
    <>
      <div className="border bg-white px-4 py-3 my-4 md:my-5 mx-2 flex gap-4 items-center">
        <div className="">
          <FaRegBell size={30} className=" text-[#912c2c] flex-grow-0" />
        </div>
        {/* notfication title */}
        <div className="flex flex-col justify-between w-full">
          <div className="font-bold text-[#912c2c] capitalize text-lg">
            {notification.title}
          </div>
          {/* notfication body */}
          <p
            ref={contentRef}
            className={`text-gray-700 ${
              isExpanded ? "overflow-auto max-h-full" : "line-clamp-2"
            }`}
          >
            {notification.body}
          </p>
          {/* button */}
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className={`font-semibold capitalize text-left text-blue-600 hover:text-blue-700 ${
              displayButton ? "visible" : "invisible"
            }`}
          >
            {isExpanded ? "see less" : "see more"}
          </button>
          {/* notfiacation date */}
          <p className=" text-right text-[#9B9A9A] text-sm pt-1">
            {notification.date}
          </p>
        </div>
      </div>
    </>
  );
}

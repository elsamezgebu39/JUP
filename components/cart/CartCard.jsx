"use client";
import { FaPlus, FaMinus, FaTrash } from "react-icons/fa";
import { useState } from "react";
export default function CartCard({ product }) {
  const [qty, setQty] = useState(product.qty);


  // remove a product 
 
  return (
    <div className="p-1 border mt-0 bg-white shadow flex gap-2 md:gap-5 justify-between pr-3">
      {/* left container */}
      <div className="flex gap-3">
        <div className="">
          <div className="p-0 w-[85px]">
            <img
              src={product.src}
              alt="Africa"
              className="w-full object-cover"
            />
          </div>
          <div className="flex md:hidden font-semibold gap-1">
            <span>12000</span>
            <span>ETB</span>
          </div>
        </div>
        {/* middle container */}
        <div className="flex flex-col justify-between font-semibold ">
          <div className="font-bold capitalize text-[#912c2c]">
            {product.product}
          </div>
          <div className="flex gap-7">
            <span>size:</span>
            <span className=" font-normal">{product.size}</span>
          </div>
          {/* <div className="flex gap-4">
            <span>color:</span>
            <span className=" font-normal">{product.color}</span>
          </div> */}
          <div className="hidden md:flex gap-1">
            <span>{product.price}</span>
            <span>ETB</span>
          </div>
          {/* qty on mobile version */}
          <div className="flex md:hidden gap-3 items-center">
            <h2 className="font-semibold capitalize">Qty:</h2>
            <div className="flex items-center gap-1 border px-2 py-1 rounded-2xl bg-white">
              {/* <FaMinus
                onClick={() => setQty(qty - 1)}
                size={20}
                className="text-[#912c2c] cursor-pointer"
              /> */}
              <span className="text-xl px-5 font-semibold">{product.qty}</span>
              {/* <FaPlus
                onClick={() => setQty(qty + 1)}
                size={20}
                className="text-[#912c2c] cursor-pointer"
              /> */}
            </div>
          </div>
        </div>
      </div>
      {/* right container */}
      <div className="flex flex-col justify-between items-end">
        <button className="flex gap-1 items-center text-[#912c2c] font-semibold">
          <span className="hidden md:block">Remove</span>
          <FaTrash />
        </button>
        {/* qty on desktop version */}
        <div className="hidden md:flex gap-4 items-center">
          <h2 className="font-semibold capitalize">Qty:</h2>
          <div className="flex items-center gap-3 border px-4 py-1 rounded-2xl bg-white">
            <FaMinus
              onClick={() => setQty(qty - 1)}
              size={20}
              className="text-[#912c2c] cursor-pointer"
            />
            <span className="text-xl px-5 font-semibold">{qty}</span>
            <FaPlus
              onClick={() => setQty(qty + 1)}
              size={20}
              className="text-[#912c2c] cursor-pointer"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

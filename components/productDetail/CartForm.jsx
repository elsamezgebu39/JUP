"use client";

import { useRef, useState } from "react";
import { FaPlus, FaMinus, FaCartPlus } from "react-icons/fa";


const colors = ["blue", "red", "white"];
const sizes = ["xl", "m", "xxl"];

export default function CartForm() {
  const [selectedSize, setSelectedSize] = useState("");
  const [qty, setQty] = useState(1);
  const color = useRef(null);

  const handleSubmit = (e) => {
    const cartItem = {
      selectedSize,
      qty,
      color,
    };
  };
  return (
    <div className="mt-2 md:mt-4 mx-2">
      {/* cart form */}
      <form onSubmit={handleSubmit} className="flex flex-col gap-3">
        {/* size input */}
        <div className="flex gap-6 items-center">
          <h2 className="font-bold capitalize">size:</h2>
          {sizes.map((size) => (
            <span onClick={()=>setSelectedSize(size)}
            className={`font-semibold text-xl px-1 md:px-2 py-1 border uppercase 
            cursor-pointer  rounded-md ${selectedSize == size ? "bg-[#912c2c] text-white":"bg-white text-[#912c2c]"}`}>
              {size}
            </span>
          ))}
        </div>
        {/* color input */}
        <div className="flex gap-6 items-center">
          <h2 className="font-bold  capitalize">colors:</h2>
          <select ref={color} className="border rounded p-2">
            {colors.map((color) => (
              <option
                className="font-semibold capitalize"
                value={color}
                key={color}
              >
                {color}
              </option>
            ))}
          </select>
        </div>
        {/* quantity input */}
        <div className="flex gap-6 items-center">
          <h2 className="font-bold capitalize">Qty:</h2>
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
        {/* button */}
        <button
          className="flex rounded-xl items-center justify-center p-2 bg-[#912c2c] w-full text-white "
          type="submit"
        >
          <span>Add to Cart</span>

          <FaCartPlus className="text-white" size={20} />
        </button>
      </form>
    </div>
  );
}

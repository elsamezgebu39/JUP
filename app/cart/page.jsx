'use client'
import CartCard from "@components/cart/CartCard";
import CheckoutCard from "@components/cart/CheckoutCard";
import { useEffect, useState } from "react";
import { FaTrash } from "react-icons/fa";

const savedCart = JSON.parse(localStorage.getItem("cart")) || [];


const Cart = () => {

 

  const [cartItems, setCartItems] = useState(savedCart);
 
  

  // const dummyProducts = [
  //   {
  //     title: "Product 1",
  //     price: 1940.99,
  //     qty: 10,
  //     color: "Blue",
  //     size: "M",
  //   },
  //   {
  //     title: "Product 2",
  //     price: 2900.99,
  //     qty: 5,
  //     color: "Red",
  //     size: "L",
  //   },
  //   {
  //     title: "Product 3",
  //     price: 9000.99,
  //     qty: 20,
  //     color: "Green",
  //     size: "S",
  //   },
  // ];
  return (
    <div className="w-full min-h-[75vh]">
    <div className="max-w-[1150px] mx-auto p-2 md:p-4 bg-white mt-4 space-y-4 grid md:grid-cols-3 gap-4">
      {/* products */}
      <div className="space-y-3 md:col-span-2">
        <div className="flex justify-between items-center ">
          <div className="text-[#912c2c] font-bold text-xl">Shopping Cart</div>
          <div className="">
            <button className="flex gap-1 items-center text-[#912c2c] font-semibold">
              <span className="">Remove All</span>
              <FaTrash />
            </button>
          </div>
        </div>
        {cartItems.map((product) => (
          <CartCard product={product} />
        ))}
      </div>
      {/* checkout */}
      <div className="">
        <CheckoutCard product={cartItems} />
      </div>
    </div>
    </div>
  );
};

export default Cart;

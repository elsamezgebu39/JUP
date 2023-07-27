"use client";
import { useState } from "react";
import { FaCaretDown,FaCaretRight } from "react-icons/fa";
import OrderList from "./orderLists"

export default function OrderCard({order}) {
  const [open, setopen] = useState(false);
  return (
    <div className="border bg-white p-3 my-4 md:my-5 mx-2">
      <div
        onClick={() => setopen(!open)}
        className="flex justify-between items-center "
      >
        <div className="flex gap-1">
          <div className="flex flex-col justify-between">
            <div className="font-semibold text-[#912c2c] capitalize">order Id:</div>
            <div className="font-semibold text-[#912c2c] capitalize">ordered Date:</div>
          </div>
          <div className="flex flex-col justify-between">
            <div className=" text-[#912c2c]">{order.order_id}</div>
            <div className="text-[#9B9A9A] text-sm">{order.ordered_date}</div>
          </div>
        </div>
        <div className="hidden md:block p-1 pl-2 pr-2 text-white font-semibold bg-green-700">success</div>
        <div className="">
          {
            open ?<FaCaretRight size={30} />:<FaCaretDown size={30} />
          }
          
        </div>
      </div>
      {/* Collapsable body */}
      {open && (
        <div className="">
            {/* single product card */}
            {
                order.products.map(product=><OrderList product={product}/>)
            }
          {/* Total price  */}
          <div className="">
            <div className=" p-1 gap-1 flex md:justify-end justify-between items-center">
              <div className="md:hidden ml-3 sm:ml-5 p-1 pl-2 pr-2 text-white font-semibold bg-green-700">success</div>
              <div className="flex gap-1 items-center">
                <div className="">
                  <div className="font-bold mr-1">Total:  </div>
                </div>
                <div className="">
                  <div className="font-semibold">BIRR <span>{order.total_price}</span></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

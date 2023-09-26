import { useState, useEffect } from "react"
import Link from "next/link";

export default function CheckoutCard({ product }) {

  const [total , setTotal ] =useState(0)

  const totalPrice = () => {
    const amount = product.reduce((total, item) => {
      return total + item.price * item.qty;
    }, 0); // Initialize total to 0

    setTotal(amount);
  };


  useEffect(() => {
    totalPrice()
  },[])

  console.log(total)
  return (
    <div className="flex items-center justify-center w-full">
      <div className="bg-white border shadow p-2 mx-2 flex flex-col w-full mt-0">
        <div className="flex mb-3  justify-center items-center gap-5">
          <div className="flex flex-col gap-2 font-bold">
            <h1>Items({product.length})</h1>
            <h1>Tax</h1>
            <h1>Discount</h1>
            <h1>Shipping</h1>

            
          </div>
          <div className="flex flex-col gap-2 ">
            <p>
              {total} <span>ETB</span>
            </p>
            <p>
              0 <span>(15%)</span>
            </p>
            <p>
              - 0 <span>ETB</span>
            </p>
            <p>
              360 <span>ETB</span>
            </p>
          </div>
        </div>
        <div className="h-[1px] bg-gray-500 w-[70%] mx-auto"></div>
        <div className="flex justify-center items-center gap-10 mt-2 mb-4">
          <h1 className="font-bold">Total</h1>
          <p>
            {total} <span>ETB</span>
          </p>
        </div>
        {/* checkout button */}
        <Link href='checkout' >
          <div className="rounded-xl mb-4 mx-4 text-center font-bold p-2 bg-[#912c2c] cursor-pointer text-white">
            CheckOut
          </div>
        </Link>
        <div className="font-semibold">We accept</div>
        <div className="flex flex-wrap gap-2">
          <img
            src="/mpesa.webp"
            alt="Africa"
            className="py-4 w-[100px] h-[100px] object-cover"
          />
          <img
            src="/assets/images/cbe.jpg"
            alt="Africa"
            className="py-4 w-[75px] h-[75px] object-cover"
          />
          <img
            src="/assets/images/telebirr.png"
            alt="Africa"
            className="py-4 w-[75px] h-[75px] object-cover"
          />
        </div>
      </div>
    </div>
  );
}

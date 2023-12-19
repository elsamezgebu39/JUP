import React from "react";

import CheckoutForm from "./../../components/checkout/CheckoutForm";
import StatusCard from "./../../components/checkout/StatusCard";

const Checkout: React.FC = () => {
  return (
    <div className="w-full my-7">
      <div className="grid md:grid-cols-2 max-w-[1100px] mx-auto gap-3">
        <div className="">
          <div className="font-bold m-2 text-white bg-[#912c2c] p-2 pl-4 mb-3 my-2 capitalize ">
            Shiping Info
          </div>
          <CheckoutForm />
        </div>
        <StatusCard />
      </div>
    </div>
  );
};

export default Checkout;

export default function OrderList({ product }) {
  return (
    <div className="">
      {/* single product card */}
      <div className="ml-3 sm:ml-5 flex md:justify-between p-2 mt-2">
        <div className="flex gap-2">
          {/* image */}
          <div className="">
            <img src="/tibeb.jpg" className="w-[70px] h-[70px]" alt="" />
          </div>
          {/* product details */}
          <div className="">
            <h3 className="font-semibold text-[#912c2c]">{product.title}</h3>
            <p className="md:hidden font-semibold">
              Qty:{" "}
              <span className=" font-normal">{product.product_quantity}</span>
            </p>
            <p className="md:hidden font-semibold">
              BIRR <span className="font-semibold">{product.total_price}</span>
            </p>
            <div className=" gap-1 hidden md:flex">
              <div className="font-semibold">
                <div className="">Size:</div>
                <div className="">Color:</div>
              </div>
              <div className="">
                <div className=" capitalize">{product.size}</div>
                <div className=" capitalize">{product.color}</div>
              </div>
            </div>
          </div>
        </div>
        <div className="hidden md:flex flex-col justify-between">
          <p className="font-semibold">
            Qty: <span className="font-normal">{product.product_quantity}</span>
          </p>
          <p className="font-semibold">
            BIRR <span className="">{product.total_price}</span>
          </p>
        </div>
      </div>
      <hr className="border-t-1 border-gray-400 my-1 px-2" />
    </div>
  );
}

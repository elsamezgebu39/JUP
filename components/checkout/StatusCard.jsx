export default function StatusCard() {
  return (
    <div>
      <div className="flex items-center justify-center w-full ">
        <div className="bg-white border shadow p-2 mx-2 flex flex-col w-full mt-0">
            <h1 className="font-bold text-2xl text-center text-[#912c2c] py-3">Summray</h1>
          <div className="flex mb-3  justify-center items-center gap-5">
            <div className="flex flex-col gap-2 font-bold">
              <h1>Items(36)</h1>
              <h1>Tax</h1>
              <h1>Discount</h1>
              <h1>Shipping</h1>
            </div>
            <div className="flex flex-col gap-2 ">
              <p>
                36000 <span>ETB</span>
              </p>
              <p>
                200 <span>(15%)</span>
              </p>
              <p>
                - 150 <span>ETB</span>
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
              36000 <span>ETB</span>
            </p>
          </div>
          {/* checkout button */}
        </div>
      </div>
    </div>
  );
}

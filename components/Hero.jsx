export default function Hero() {
  return (
    <div className="h-[38vh] bg-[#f9ebeb] px-[5rem] flex justify-between mb-[1rem]">
      <div className="pb-[3rem] mt-[1rem]">
        <p className="text-[30px] font-bold ">
          Discover Culture, <br /> Shop Ethiopian Heritage
        </p>
        <p className="text-[#979899]">
          Welcome To Our Online Marketplace, <br /> Dedicated To Bring You A
          Captivating Collection
          <br /> Of Cultural Materials.
        </p>
        <br />
        <div>
          <button className="w-[8rem] h-[2rem] rounded-[6px] bg-[#912c2c] text-white">
            Shop Now
            {/* <img className="w-[2rem]" src="cart.svg" /> */}
          </button>
        </div>
      </div>
      <div className="pl-[20rem] pb-[5rem] mr-[3rem]">
        <img className="h-[13rem] mt-[1rem] " src="/african.svg" />
      </div>
    </div>
  );
}

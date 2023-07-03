import Button from "./UI/Button";
import Image from "next/image";
export default function Hero() {
  return (
    <div className="h-1/3 bg-gradient-to-r from-[#f9ebeb] via-[#f9eeee] to-transparent px-[6rem] flex justify-between mb-[1rem]">
      <div className="pb-[3rem] mt-[1rem]">
        {/* <p className="text-[30px] font-bold ">
          Discover Culture, <br /> Shop Ethiopian Heritage
        </p>
        <p className="text-[#979899]">
          Welcome To Our Online Marketplace, <br /> Dedicated To Bring You A
          Captivating Collection
          <br /> Of Cultural Materials.
        </p> */}
        <h1 className="head_text">
          Discover Culture,
          <br className="max-md:hidden" />
          <span className="purpel_gradient text-center">
            Shop Ethiopian Heritage
          </span>
        </h1>
        <br />
        <p className="text-[#979899]">
          Welcome To Our Online Marketplace, <br /> Dedicated To Bring You A
          Captivating Collection
          <br /> Of Cultural Materials.
        </p>

        <br />
        <div>
          {/* <button className="w-[8rem] h-[2rem] rounded-[6px] bg-[#912c2c] text-white">
            Shop Now */}
          {/* <img className="w-[2rem]" src="cart.svg" /> */}
          {/* </button> */}
          <Button btn_class="btn-field" label="Shop now" />
        </div>
      </div>
      <div className="flex justify-center items-center">
        <Image src="/african.svg" width={170} height={170} alt="Africa" />
      </div>
    </div>
  );
}

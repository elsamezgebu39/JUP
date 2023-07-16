import Button from "./UI/Button";
import Image from "next/image";
import product from "@app/product/page";
import Link from "next/link";
export default function Hero() {
  return (
    <div className="h-1/3 bg-gradient-to-r from-[#f9ebeb] via-[#f9eeee] to-transparent px-[6rem] flex justify-between mb-[1rem]">
      <div className="pb-[3rem] mt-[1rem]">
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
          <Link href="/product" className="btn btn-primary" label="Shop now">
            Shop now
          </Link>
        </div>
      </div>
      <div className="flex justify-center items-center">
        <Image src="/african.svg" width={170} height={170} alt="Africa" />
      </div>
    </div>
  );
}

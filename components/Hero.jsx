import Button from "./UI/Button";
import Image from "next/image";
import Balancer from "react-wrap-balancer";
import { gsap } from "gsap";
import { useEffect, useState } from "react";


export default function Hero() {

  const images = useState([]);

  // useEffect(() => {
  //   const timeline = gsap.timeline();
  //   timeline.set('#mask', {
  //     backgroundColor: 'white',
  //     width: "100%"
  //   }).to('#mask', {
  //     width: "50%",
  //     duration: 2,
  //     translate:1
  //   }).to('#mask', {
  //     width: "0%",
  //     duration: 2,
  //     translate:1
  //   })
  // }, []);

  return (
    <section>
      {/* Desctop Section */}
      {/* <div className="sm:flex hidden h-1/3 bg-gradient-to-r from-[#f9ebeb] via-[#f9eeee] to-transparent px-2 md:px-[6rem] justify-between mb-[1rem] mt-6">
        <div className="pb-[3rem] mt-[1rem] w-[60vw]">
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
            <Button btn_class="btn-field" label="Shop now" />
          </div>
        </div>
        <div className="w-[30vw]">
          <img src="/twins.png" alt="Africa" class="object-cover w-full" />
        </div>
      </div> */}

      {/* Leul trial */}

      <div className="   bg-cc_bg bg-bottom bg-cover no-repeat w-screen h-[60vh] bg-fixed">
        <div id="mask" className=" h-full w-full flex-center bg-black/80">
           {/* search bar */}
     
        </div>
      </div>

      {/* Mobile Section */}
      <div className="sm:hidden h-1/3 bg-gradient-to-b from-[#f9ebeb] via-[#f9eeee] to-transparent z-10 w-full max-w-xl px-5 xl:px-0 flex flex-col justify-center items-center pt-3">
        <Image
          src="/african.svg"
          width={100}
          height={100}
          alt="Africa"
          className="py-4"
        />
        <h1
          className="animate animate-fade-up bg-gradient-to-br from-black to-stone-500 bg-clip-text text-center font-display text-4xl font-bold tracking-[-0.02em] text-transparent drop-shadow-sm md:text-7xl md:leading-[5rem]"
          style={{ animationDelay: "0.15s", animationFillMode: "backwards" }}
        >
          <Balancer>Discover Culture, Shop Ethiopian Heritage</Balancer>
        </h1>
        <p
          className="mt-6 animate-fade-up text-center text-gray-500 opacity-100 md:text-xl"
          style={{ animationDelay: "0.25s", animationFillMode: "forwards" }}
        >
          <Balancer>
            Welcome To Our Online Marketplace, <br /> Dedicated To Bring You A
            Captivating Collection Of Cultural Materials.
          </Balancer>
        </p>
        <div className="w-2/3 mx-auto my-5">
          <button className="btn btn-primary btn-block">Shop now</button>
        </div>
      </div>
    </section>
  );
}

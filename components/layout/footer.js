import Link from "next/link";

const imgs = [
  "/twitter.svg",
  "/facebook.svg",
  "/instagram.svg",
  "/telegram.svg",
];
export default function Footer() {
  var d = new Date();
  return (
    <footer className="bg-black text-white w-full">
      <div className="flex flex-col gap-5 sm:flex-row flex-wrap mx-[1rem] md:mx-[5rem] items-center justify-between pt-[1rem]">
        <p className="text-[30px] flex items-center text-white">
          <span className="text-[#912c2c] text-[50px] font-bold">A</span>sham
        </p>
        <div className="flex flex-col items-center">
          <ins className="font-bold">Menu</ins>

          <Link className="" href={"AboutUs"}>
            About Us
          </Link>

          <Link className="" href={"ConatctUs"}>
            Contact Us
          </Link>

          <Link className="" href={"Terms"}>
            Terms & Conditions
          </Link>
        </div>
        <div className="">
          <div className="flex flex-col items-center">
            <ins className="font-bold">Follow Us</ins>
            <div className="border-2 border-[#912c2c] bg-[#0e0606] border-opacity-5 rounded-[5px] flex ">
              {imgs.map((curr) => {
                return (
                  <div className="flex m-[5px]">
                    <img className="w-[2rem]" src={curr} />
                  </div>
                );
              })}
            </div>
          </div>
          <div className="flex items-center mt-[1rem]">
            <img className="w-[2rem]" src="/pho.png" />
            <p className="text-[15px]">Call Us +251901234567</p>
          </div>
        </div>
      </div>
      <p></p>
      <div className="m-auto w-[100%] flex items-center justify-center mb-5 mt-[1rem]">
        <img className="w-[2rem]" src="/copyright.svg" />
        <p>{d.getFullYear()} asham.com All Rights Reserved</p>
      </div>
    </footer>
  );
}

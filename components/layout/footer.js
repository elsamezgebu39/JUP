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
    <footer className="bg-black h-[50vh] text-white ">
      <div className="grid sm:flex mx-[1rem] sm:mx-[5rem] justify-between pt-[1rem]">
        <p className="text-xl flex items-center text-white">
          <span className="text-[#912c2c] text-[50px] font-bold">A</span>sham
        </p>
        <br />
        <p>
          <ins className="font-bold">Menu</ins>
          <br />
          <Link className="" href={"AboutUs"}>
            About Us
          </Link>
          <br />
          <Link className="" href={"ConatctUs"}>
            Contact Us
          </Link>
          <br />
          <Link className="" href={"Terms"}>
            Terms & Conditions
          </Link>
          <br />
        </p>
        <br />
        <div>
          <ins className="font-bold">Follow Us</ins>
          <br />
          <div className="border-2 border-[#912c2c] bg-[#0e0606] border-opacity-5 rounded-[5px] flex">
            {imgs.map((curr) => {
              return (
                <div className="flex m-[5px]">
                  <img className="w-[2rem]" src={curr} />
                </div>
              );
            })}
          </div>
          <br />
          <div className="flex items-center sm:mt-[1rem]">
            <img className="w-[2rem]" src="/pho.png" />
            <p className="text-[15px]">Call Us +251901234567</p>
          </div>
        </div>
      </div>
      <p></p>
      <div className="w-[100%] flex sm:items-center sm:justify-center mt-[1rem]">
        <img className="w-[2rem]" src="/copyright.svg" />
        <p>{d.getFullYear()} asham.com All Rights Reserved</p>
      </div>
    </footer>
  );
}

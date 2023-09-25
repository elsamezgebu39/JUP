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
    <footer className="footer-bg  text-white h-[40vh] ">
      <div className="grid grid-cols-4 mx-7 container">
        <div className="col-span-3">
          <p className="text-3xl font-cursive font-semibold">Aadaa</p>
          <div className="flex space-x-4">
            <p className="font-semibold text-white">Feature one </p>
            <p className="font-semibold text-white">Feature one </p>
            <p className="font-semibold text-white">Feature one </p>
          </div>
          <p>
            Absolutely love the shopping experience.The variety of stylish
            options is incredible,
          </p>

          <button className="rounded-2xl border px-2">Contact us</button>
        </div>

        <div>
          <p className="text-white font-semibold text-xl">Folow Us</p>
          <div className="flex space-x-3 py-4">
            <img src={imgs[0]} width={25} alt="" />
            <img src={imgs[1]} width={25} alt="" />
            <img src={imgs[2]} width={25} alt="" />
            <img src={imgs[3]} width={25} alt="" />

          </div>
        </div>
      </div>
    </footer>
  );
}

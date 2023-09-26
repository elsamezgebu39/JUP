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
    <footer className="footer-bg  text-white h-[40vh] flex items-center">
      <div className="flex justify-between  container ">
        <div className="w-[]">
          <p className="text-3xl font-cursive font-semibold ">Aadaa</p>
          <div className="flex space-x-4">
            <p className="font-semibold text-white">Feature one </p>
            <p className="font-semibold text-white">Feature one </p>
            <p className="font-semibold text-white">Feature one </p>
          </div>
          <p className="py-2">
            Absolutely love the shopping experience.The variety of stylish
            options is incredible,
          </p>

          <button className="rounded-2xl border px-3 py-1 hover:primaryBg">Contact us</button>
        </div>

        <div className="flex space-x-7">
          <div className="h-[30vh] w-[1px] bg-white"></div>
          <div>
            <p className="text-white font-semibold text-xl">Follow Us</p>
            <div className="flex space-x-3 py-4">
              <img src={imgs[0]} width={25} alt="" />
              <img src={imgs[1]} width={25} alt="" />
              <img src={imgs[2]} width={25} alt="" />
              <img src={imgs[3]} width={25} alt="" />

              <div className='py-2 text-xl'>
                <p>+251908883884</p>
                <p>+251908883884</p>
                <p>+251908883884</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

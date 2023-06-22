import Link from "next/link";

const icons = ["/alert.svg", "/cart.svg", "/person.png"];
const navmenu = [
  { name: "Home", link: "/home" },
  { name: "Product", link: "/product" },
  { name: "Category", link: "/category" },
  { name: "Contact Us", link: "/contactUs" },
  { name: "About Us", link: "/aboutUS" },
];

function TopNavBar() {
  return (
    <div className=" flex justify-between items-center px-[10px] sm:px-[5rem] bg-[#f9ebeb] fixed top-0 left-0 w-[100vw] shadow-2xl">
      <p className="text-[30px] flex items-center">
        <span className="text-[#912c2c] text-[50px] font-bold">A</span>sham
      </p>
      <div className="flex">
        {icons.map((cur) => (
          <img className="w-[2rem]  h-[2rem] mr-[10px]" src={cur} />
        ))}
        <p className="font-bold  ">Sign in</p>
      </div>
    </div>
  );
}

function BottomNavBar() {
  return (
    <ul className="flex justify-around h-[40px] bg-[#912c2c] px-[8rem]  pr-[190px] mt-[4.5rem]">
      {navmenu.map((curr) => {
        return (
          <div className="flex text-[white] items-center px-[3rem]">
            {curr.name == "Category" && (
              <img className="w-[2rem]" src="menu.svg" />
            )}
            <Link
              className="hover:bg-[#621e1e] hover:w-[95px] hover:"
              href={curr.link}
            >
              {curr.name}
            </Link>
          </div>
        );
      })}
    </ul>
  );
}

export default function Navbar() {
  return (
    <div>
      {/* Top nav bar */}
      <TopNavBar />
      {/* bottom nav bar */}
      <BottomNavBar />
    </div>
  );
}

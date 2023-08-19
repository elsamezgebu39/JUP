"use client";

import Image from "next/image";
import Link from "next/link";
import useScroll from "@/lib/hooks/use-scroll";
import { useSignInModal } from "./sign-in-modal";
import UserDropdown from "./user-dropdown";
import { signOut, useSession } from "next-auth/react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { useSideBarModal } from "./side-bar-modal";
import Popover from "@components/shared/popover";
const navmenu = [
  { name: "Home", link: "/" },
  { name: "Product", link: "/product" },
  { name: "Category", link: "/category" },
  { name: "Contact Us", link: "/contactUs" },
  { name: "About Us", link: "/aboutUs" },
];

// NavBar({ session })
export default function NavBar() {
  const { SignInModal, setShowSignInModal } = useSignInModal();
  const { SideModal, setShowSideModal } = useSideBarModal();
  const [openPopover, setOpenPopover] = useState(false);
  const scrolled = useScroll(50);

  const { data: session } = useSession();

  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };
  return (
    <>
      <SignInModal />
      <div
        className={`sm:fixed fixed top-0  w-screen sm:w-full ${
          scrolled
            ? "border-b border-gray-200 bg-white/50 backdrop-blur-xl"
            : "bg-white/0"
        } z-30 transition-all`}
      >
        <div className="mr-[2rem] ml-[1rem] flex h-16  items-center justify-between  sm:mx-2">
          {/* Logo */}
          <div className="flex-1 py-1 text-[30px] flex items-center">
            <Link className="btn btn-ghost normal-case text-xl" href="/">
              <span className="text-[#912c2c] text-[50px] font-bold">A</span>
              sham
            </Link>
          </div>
          <div className="float-right">
            {session?.user ? (
              <div className="flex flex-none justify-center items-center gap-2">
                <div className="dropdown dropdown-end">
                  <label tabIndex={0} className="btn btn-ghost btn-circle">
                    <div className="indicator">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                        />
                      </svg>
                      <span className="badge badge-sm badge-primary indicator-item">
                        8
                      </span>
                    </div>
                  </label>
                  <div
                    tabIndex={0}
                    className="mt-3 z-[1] card card-compact dropdown-content w-52 bg-base-100 shadow"
                  >
                    <div className="card-body">
                      <span className="font-bold text-lg">8 Items</span>
                      <span className="text-info">Subtotal: $999</span>
                      <div className="card-actions">
                        <Link
                          href="/cart"
                          className="btn btn-primary btn-block"
                        >
                          View cart
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>

                <button className="btn btn-ghost btn-circle">
                  <div className="indicator">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                      />
                    </svg>
                    <span className="badge badge-sm bg-gray-300 text-black indicator-item">
                      8
                    </span>
                  </div>
                </button>

                <div className="dropdown dropdown-end ml-2">
                  <label
                    tabIndex={0}
                    className="btn btn-ghost btn-circle avatar"
                  >
                    <div className="w-10 rounded-full">
                      <img src={session?.user.image} />
                    </div>
                  </label>
                  <ul
                    tabIndex={0}
                    className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
                  >
                    <li>
                      <a className="justify-between">
                        Profile
                        <span className="badge">New</span>
                      </a>
                    </li>
                    <li>
                      <a>Settings</a>
                    </li>
                    <li>
                      <a
                        onClick={() => {
                          signOut();
                        }}
                      >
                        Logout
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            ) : (
              <div className="flex flex-none justify-center items-center gap-2">
                <div className="dropdown dropdown-end">
                  <label tabIndex={0} className="btn btn-ghost btn-circle">
                    <div className="indicator">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                        />
                      </svg>
                    </div>
                  </label>
                  <div
                    tabIndex={0}
                    className="mt-3 z-[1] card card-compact dropdown-content w-52 bg-base-100 shadow"
                  >
                    <div className="card-body">
                      <div className="card-actions">
                        <button className="btn btn-primary btn-block">
                          Login
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                <button
                  className="ml-2 flex-none rounded-full border border-black bg-black p-1.5 px-4 text-sm text-white transition-all hover:bg-white hover:text-black"
                  onClick={() => setShowSignInModal(true)}
                >
                  Sign In
                </button>
              </div>
            )}
          </div>
        </div>

        {/* Desktop Navigation */}
        <div className="sm:flex hidden">
          <ul className="flex justify-center h-[40px] bg-[#912c2c] w-full gap-x-2">
            {navmenu.map((curr) => {
              return (
                <div className="flex text-[white] items-center px-[3rem]">
                  {curr.name == "Category" && <AiOutlineMenu size={20} />}
                  <Link
                    className="hover:bg-[#621e1e] h-[2rem] align-center transition-all"
                    href={curr.link}
                  >
                    {curr.name}
                  </Link>
                </div>
              );
            })}
          </ul>
        </div>

        {/* Mobile Navigation */}
        <div className="sm:hidden flex">
          <div className="flex justify-center items-center h-[40px] bg-[#912c2c] w-full">
            {/* Drawer Section */}
            <div className="drawer drawer-end z-50">
              <input
                id="my-drawer-4"
                type="checkbox"
                className="drawer-toggle"
              />
              <div className="drawer-content">
                <label
                  htmlFor="my-drawer-4"
                  className="icon icon-menu bg-white ml-2"
                  onClick={() => setShowSideModal(true)}
                ></label>
              </div>
            </div>

            {/* Category Section */}
            <button
              onClick={() => setOpenPopover(!openPopover)}
              className="flex w-40 items-center justify-between px-4 py-2 transition-all duration-75 hover:border-gray-800 focus:outline-none active:bg-gray-100"
            >
              <p className="text-white">Category</p>
              <ChevronDown
                className={`h-4 w-4 text-white transition-all ${
                  openPopover ? "rotate-180" : ""
                }`}
              />
            </button>
          </div>
        </div>
      </div>
      <SignInModal />

      <SideModal />

      <Popover
        content={
          <>
            <h1 className="font-semibold text-center mt-4">Select Category</h1>
            <p className="text-xs text-center mb-5 text-gray-500 opacity-90">
              Select Favorite Category
            </p>
            <div className="carousel carousel-center max-w-md space-x-4 w-full rounded-md bg-white p-2 sm:w-40 mb-8">
              <div className="carousel-item bg-gray-200 w-[5.5rem] h-[5.5rem] rounded-full flex flex-col justify-center items-center">
                <span className="icon icon-docs bg-primary text-xl" />
                <p className="text-sm font-semibold -mt-1">Tibeb</p>
              </div>
              <div className="carousel-item bg-gray-200 w-[5.5rem] h-[5.5rem] rounded-full flex flex-col justify-center items-center">
                <span className="icon icon-forum bg-primary text-xl" />
                <p className="text-sm font-semibold -mt-1">Tibeb</p>
              </div>
              <div className="carousel-item bg-gray-200 w-[5.5rem] h-[5.5rem] rounded-full flex flex-col justify-center items-center">
                <span className="icon icon-api bg-primary text-xl" />
                <p className="text-sm font-semibold -mt-1">Tibeb</p>
              </div>
              <div className="carousel-item bg-gray-200 w-[5.5rem] h-[5.5rem] rounded-full flex flex-col justify-center items-center">
                <span className="icon icon-docs bg-primary text-xl" />
                <p className="text-sm font-semibold -mt-1">Tibeb</p>
              </div>
              <div className="carousel-item bg-gray-200 w-[5.5rem] h-[5.5rem] rounded-full flex flex-col justify-center items-center">
                <span className="icon icon-docs bg-primary text-xl" />
                <p className="text-sm font-semibold -mt-1">Tibeb</p>
              </div>
            </div>
          </>
        }
        openPopover={openPopover}
        setOpenPopover={setOpenPopover}
      />
    </>
  );
}

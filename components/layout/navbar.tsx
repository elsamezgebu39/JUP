"use client";

import Image from "next/image";
import Link from "next/link";
import useScroll from "@/lib/hooks/use-scroll";
import { useSignInModal } from "./sign-in-modal";
import { signOut, useSession } from "next-auth/react";
import React, { useState } from "react";
import { ChevronDown } from "lucide-react";
import { useSideBarModal } from "./side-bar-modal";
import Popover from "@components/shared/popover";
import { useSignUpModal } from "./sign-up-modal";

const navmenu = [
  {
    name: "Home",
    link: "/",
    isProtectedRoute: "false",
    icon: "/assets/icons/mobile-home.svg",
  },
  {
    name: "Product",
    link: "/product",
    isProtectedRoute: "false",
    icon: "/assets/icons/mobile-api.svg",
  },
  {
    name: "Language",
    link: "/product",
    isProtectedRoute: "false",
    icon: "language.svg",
  },
  { name: "Cart", link: "/cart", icon: "mdi:cart-outline" },
];
// NavBar({ session })
export default function NavBar(): React.ReactNode {
  const { SignInModal, setShowSignInModal } = useSignInModal();
  const { SideModal, setShowSideModal } = useSideBarModal();
  const [openPopover, setOpenPopover] = useState(false);
  const { SignUpModal, setShowSignUpModal } = useSignUpModal();

  const { data: session } = useSession();
  const scrolled = useScroll(50);

  return (
    <>
      <nav
        className={`fixed top-0 w-full ${
          scrolled
            ? "border-b text-[#912c2c]  border-gray-200  bg-white/50 backdrop-blur-xl"
            : "border-b text-white border-gray-200 bg-[#912c2c]/50"
        } z-30 transition-all`}
      >
        <div className="mx-3 md:mx-auto flex h-16 max-w-screen-xl items-center justify-between">
          {/* Logo */}
          <div className="flex-1 py-1 text-[30px] flex items-center">
            <Link
              className="btn btn-ghost normal-case text-lg md:text-xl"
              href="/"
            >
              <p className="">
                {" "}
                <span className=" text-2xl md:text-[50px] font-bold md:font-bold">
                  A
                </span>
                adaa
              </p>
            </Link>
          </div>
          {/* Links */}
          <div className="sm:flex hidden">
            <ul className="flex justify-between  rounded-2xl  py-1 px-2 space-x-4">
              {navmenu.map((curr) => {
                return (
                  <div className="flex items-center ">
                    <Link
                      className="hover:bg-[#621e1e] py-1 px-3 hover:text-white  rounded-2xl align-center transition-all"
                      href={curr.link}
                    >
                      {curr.name}
                    </Link>
                  </div>
                );
              })}
            </ul>
          </div>
          {/* Decktop Nav Section */}
          <div>
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
                        <button className="btn btn-primary btn-block">
                          View cart
                        </button>
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
                        <img
                          src={session?.user.image as string}
                          alt="user image"
                        />
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
              </div>
            ) : (
              <div className="flex flex-none justify-center items-center gap-2">
                <div className="dropdown dropdown-end">
                  <label tabIndex={0} className="btn btn-ghost btn-circle">
                    <div className="indicator"></div>
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
                {/* <button
                  className="ml-2 flex-none rounded-full border border-black bg-black p-1.5 px-4 text-sm text-white transition-all hover:bg-white hover:text-black"
                  onClick={() => setShowSignUpModal(true)}
                >
                  Sign Up
                </button> */}
              </div>
            )}
          </div>
        </div>
        {/* Mobile Navigation */}
        <div className="sm:hidden flex">
          <div
            className={`fixed top-0 w-full ${
              scrolled
                ? "flex justify-center items-center bg-transparent"
                : "border-b border-gray-200 bg-transparent w-full flex justify-center items-center"
            } z-30 transition-all`}
          >
            {/* Drawer Section */}
            <div className="drawer drawer-end z-50">
              <input
                id="my-drawer-4"
                type="checkbox"
                className="drawer-toggle"
              />
              <div className="drawer-content">
                {/* <label htmlFor="my-drawer-4" className="icon icon-menu bg-white ml-2" onClick={() => setShowSideModal(true)}></label> */}
                <input
                  id="my-drawer-4"
                  type="checkbox"
                  className="drawer-toggle"
                />
                <div className="drawer-content">
                  <label
                    htmlFor="my-drawer-4"
                    className="icon icon-menu bg-white ml-2 text-2xl"
                    onClick={() => setShowSideModal(true)}
                  ></label>
                </div>
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
      </nav>

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
        children={undefined}
      />
    </>
  );
}

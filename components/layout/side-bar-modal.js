"use client";
import { signOut, useSession } from "next-auth/react";
import { usePathname } from "next/navigation";
import { useState, useCallback, useMemo } from "react";
import Link from "next/link";
import Image from "next/image";
import SideDrawer from "@components/shared/SideDrawer";

const navmenu = [
  // { name: "Home", link: "/", isProtectedRoute:"false", icon: "/assets/icons/mobile-home.svg" },
  {
    name: "Product",
    link: "/product",
    isProtectedRoute: "false",
    icon: "/assets/icons/mobile-api.svg",
  },
  {
    name: "Category",
    link: "/category",
    isProtectedRoute: "false",
    icon: "/assets/icons/mobile-docs.svg",
  },
  {
    name: "Contact Us",
    link: "/contactUs",
    isProtectedRoute: "false",
    icon: "/assets/icons/mobile-faq.svg",
  },
  {
    name: "About Us",
    link: "/aboutUS",
    isProtectedRoute: "false",
    icon: "/assets/icons/mobile-forum.svg",
  },
];

const SideModal = ({ showSideModal, setShowSideModal }) => {
  const { data: session } = useSession();
  let pathName = usePathname();
  return (
    <SideDrawer showModal={showSideModal} setShowModal={setShowSideModal}>
      <div className="w-full h-full bg-base-100">
        <div className="bg-[#6c152f] w-full h-1/4 flex flex-col justify-center items-center border-2 border-white pr-16">
          {session?.user ? (
            <>
              <Image
                src={session?.user.image}
                width={80}
                height={80}
                alt="users"
                className="rounded-full"
              />
              <h2 className="flex text-white my-2 text-lg">
                {session?.user.name}
              </h2>
            </>
          ) : (
            <div className="flex gap-x-8 items-center justify-center">
              <span className="icon icon-guest-profile bg-white text-6xl" />
              <button className="btn btn-outline text-white w-32">Login</button>
            </div>
          )}
        </div>

        <ul className="flex flex-col justify-start items-start text-black text-base font-semibold font-inter mt-6 ml-5">
          <li onClick={() => setViewModal(false)}>
            <Link
              href="/"
              className="flex gap-x-4 text-black font-bold mb-4 hover:text-red-950 items-center justify-center"
            >
              <span className="icon icon-home bg-black text-2xl" />
              Home
            </Link>
          </li>
          <div className="divider -mt-1" />
          {navmenu.map((nav) => (
            <li key={nav.name} onClick={() => setViewModal(false)}>
              <Link
                href={nav.isProtectedRoute && !session?.user ? "/" : nav.link}
                className={`flex gap-x-5 text-gray-900 mb-5 hover:text-red-950 ${
                  pathName === nav.link && "text-black contrast-125"
                }`}
                prefetch={true}
              >
                <Image
                  src={nav.icon}
                  width={27}
                  height={27}
                  alt="user"
                  className=""
                />
                {nav.name}
              </Link>
            </li>
          ))}
          {session?.user && (
            <>
              <div className="divider" />
              <ul>
                <li>
                  <Link
                    href="/profile"
                    className={`font-semibold flex gap-x-5 mb-4 hover:text-amber-300`}
                    onClick=""
                  >
                    <Image
                      src="/assets/icons/profile-login.svg"
                      width={25}
                      height={25}
                      alt="user"
                      className=""
                    />
                    Profile
                  </Link>
                </li>

                <li>
                  <Link
                    href="/profile"
                    className={`font-semibold flex gap-x-5 mb-3 hover:text-amber-300`}
                    onClick=""
                  >
                    <Image
                      src="/assets/icons/change-password.svg"
                      width={25}
                      height={25}
                      alt="user"
                      className=""
                    />
                    Change Password
                  </Link>
                </li>
              </ul>
              <button
                type="button"
                className="mt-5 w-3/4 btn btn-primary mx-auto ml-3"
              >
                <Image
                  src="/assets/icons/mobile-logout.svg"
                  width={25}
                  height={25}
                  alt="user"
                  className="mr-2"
                  onClick=""
                />
                Sign Out
              </button>
            </>
          )}
        </ul>
      </div>
    </SideDrawer>
  );
};

export function useSideBarModal() {
  const [showSideModal, setShowSideModal] = useState(false);

  const SideModalCallBack = useCallback(() => {
    return (
      <SideModal
        showSideModal={showSideModal}
        setShowSideModal={setShowSideModal}
      />
    );
  }, [showSideModal, setShowSideModal]);

  return useMemo(
    () => ({
      setShowSideModal: setShowSideModal,
      SideModal: SideModalCallBack,
    }),
    [setShowSideModal, SideModalCallBack]
  );
}

"use client";
import Image from "next/image";
import Link from "next/link";
import Logo from "../images/logo.png";
import ThemeButton from "./ThemeButton";
import { RiMenu2Line } from "react-icons/ri";
import { useState } from "react";
// import dynamic from 'next/dynamic'

// fix-2
// const ThemeButton = dynamic(() => import("./ThemeButton"), { ssr: false })

const Nav = () => {
  const [showNav, setShowNav] = useState(false);
  return (
    <div className="sticky  top-0 bg-white dark:bg-black/40 p-2 z-10">
      <div className="gradient" />
      <div className="flex items-center justify-between website pt-3 ">
        <div>
          <Link href="/" className="flex items-center">
            <Image
              src={Logo}
              placeholder="blur"
              width={40}
              height={40}
              alt="logo"
            />
            <h1 className="font-black pl-1 text-lg dark:text-darktext">
              PBlogs
            </h1>
          </Link>
        </div>

        <div className="right flex items-center justify-between relative">
          <RiMenu2Line
            onClick={() => setShowNav((prev) => !prev)}
            className="sm:hidden font-black text-2xl "
          />

          <div
            className={
              showNav
                ? "sm:items-center sm:justify-evenly flex sm:flex-row flex-col items-start justify-start gap-1 absolute right-0 top-full dark:bg-transparent   dark:border-gray-700 rounded-md  sm:rounded-none bg-white sm:bg-transparent sm:shadow-none  shadow-md dark:text-darktext font-semibold "
                : "items-center justify-evenly sm:flex  hidden dark:text-darktext font-semibold "
            }
          >
            <ThemeButton />
            <p className="sm:ml-2 cursor-pointer hover:bg-secondary sm:hover:bg-transparent sm:hover:text-secondary  px-2 sm:px-0">
              categories
            </p>
            <Link href="/write" className="w-full">
              <p className=" sm:ml-2 cursor-pointer hover:bg-secondary sm:hover:bg-transparent sm:hover:text-secondary  px-2 sm:px-0">
                write
              </p>
            </Link>
            <p className=" sm:ml-2 cursor-pointer sm:hover:text-secondary sm:hover:bg-transparent  hover:bg-secondary px-2 sm:px-0 w-full">
              login
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Nav;

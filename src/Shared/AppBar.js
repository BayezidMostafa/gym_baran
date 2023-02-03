import Head from "next/head";
import Link from "next/link";
import React, { useState } from "react";

const AppBar = () => {
  const [navbar, setNavbar] = useState(false);

  return (
    <div>
      <Head>
        <title></title>
        <meta name="" content="" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <nav className="w-full bg-transparent relative">
        <div className="justify-between mx-auto px-3 md:px-[50px] lg:px-[99px] md:items-center flex py-3 md:py-[42px] transition-all ease-in duration-500">
          <div className="flex justify-center items-center gap-1">
            <span className="border px-2 text-[20px] text-white rounded-lg bg-[#6765F0] sporting-grotesque">
              Gym
            </span>
            <span className="text-[20px] sporting-grotesque">baran</span>
          </div>
          <ul className="items-center justify-center space-y-8 md:flex hidden space-x-0 md:space-x-5 lg:space-x-10 text-[16px] md:space-y-0">
            <li className="text-black">
              <Link href="/">Home</Link>
            </li>
            <li className="text-black">
              <Link href="/program">Program</Link>
            </li>
            <li className="text-black">
              <Link href="/blog">Blog</Link>
            </li>
            <li className="text-black">
              <Link href="/aboutus">About Us</Link>
            </li>
            <button className="text-white bg-[#264373] px-[32px] py-[13px] rounded-[10px] border-none shadow">
              Log in
            </button>
          </ul>
          <div className="md:hidden flex">
            <div className="md:hidden">
              <button
                className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border"
                onClick={() => setNavbar(!navbar)}
              >
                {navbar ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6 text-black"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6 text-black"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                )}
              </button>
            </div>
            <div
              className={`${
                !navbar ? "hidden" : "flex"
              } absolute w-[90%] h-screen top-[72px] right-0 z-10 bg-white sidebar shadow-lg`}
            >
              <ul className="items-center w-[100%] pt-10 flex gap-3 flex-col">
                <li className="text-black text-3xl">Menu</li>
                <li className="text-black text-xl">
                  <Link href="/">Home</Link>
                </li>
                <li className="text-black text-xl">
                  <Link href="/program">Program</Link>
                </li>
                <li className="text-black text-xl">
                  <Link href="/blog">Blog</Link>
                </li>
                <li className="text-black text-xl">
                  <Link href="/aboutus">About us</Link>
                </li>
                <button className="w-[90%] rounded py-2 bg-[#264373] text-white">
                  Log in
                </button>
              </ul>
            </div>
          </div>
        </div>
        <div></div>
      </nav>
    </div>
  );
};

export default AppBar;

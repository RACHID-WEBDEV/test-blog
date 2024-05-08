/* eslint-disable @next/next/no-img-element */
"use client";
import React, { useState, useEffect, ReactNode } from "react";
import Link from "next/link";
// import ThemeToggle from '@/components/ThemeToggle';
import menu from "@/data/menu";
import classNames from "classnames";

// import Button from "./Form/Button";
import NavLink from "./NavLink";

import Image from "next/image";
import Button from "./Button";

function Menu({ children, open }: { children: ReactNode; open: boolean }) {
  return (
    <div
      className={classNames(
        "fixed top-0 z-50 backdrop-blur h-full max-h-screen overflow-y-auto text-gray-700 bg-white transition-all duration-700 ",
        { "w-full": open },
        { "w-0": !open }
      )}
    >
      {children}
    </div>
  );
}

function MenuContainer({ children }: { children: ReactNode }) {
  return (
    <div className="relative top-1/4 w-full mt-8 overflow-y-auto">
      {children}
    </div>
  );
}

export const Header = () => {
  const [open, setOpen] = useState(false);

  const toggle = () => {
    setOpen((prevState) => !prevState);
  };

  return (
    <>
      <div className={classNames(" w-full h-min lg:h-full lg:space-y-10")}>
        <header
          className={classNames(
            "bg-white backdrop-blur text-white fixed top-0 font-black z-40 w-full max-w-full transition-colors  "
          )}
        >
          <div className="flex items-center justify-between py-3 xl:py-3 xl:container xl:mx-auto px-4 md:px-12 lg:px-10 xl:px-5 ">
            <Link href="/">
              <div className="shrink-0 relative inline-flex items-center gap-2">
                <img src="/assets/Logo.svg" alt=" Logo" />
                <img src="/assets/hiring.svg" alt=" hiring" className="pt-1" />
              </div>
            </Link>

            {/* Menu / Actions */}
            <div className="invisible fixed inset-0 z-10 items-center opacity-0 lg:visible lg:relative lg:inset-auto lg:flex lg:bg-transparent lg:opacity-100 ">
              <nav className="navbar w-full">
                <ul className="font-medium flex items-center md:space-x-8 border-2 border-gray-800 p-2 px-6 rounded-full">
                  {menu.map(({ url, title }, index) => (
                    <NavLink key={index} url={url} title={title} />
                  ))}
                </ul>
              </nav>
            </div>
            <div className=" hidden lg:block">
              <Link href="/contact">
                <Button title="Login" />
              </Link>
            </div>
            {/* Mobile Menu Actions */}
            <div className=" flex lg:hidden group">
              {/* Mobile Menu on Toggle */}
              <button
                className="border-gray-400  group ml-2 flex h-10 w-10 items-center text-gray-600 fill-gray-600 justify-center rounded-full border bg-white transition-colors hover:border-transparent focus:border-transparent "
                aria-label="open mobile menu"
                onClick={toggle}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width={24}
                  height={24}
                  className="fill-jacarta-700 h-4 w-4 transition-colors group-hover:fill-bg lg:group-hover:fill-pink group-focus:fill-bg dark:fill-bg"
                >
                  <path fill="none" d="M0 0h24v24H0z" />
                  <path d="M18 18v2H6v-2h12zm3-7v2H3v-2h18zm-3-7v2H6V4h12z" />
                </svg>
              </button>
            </div>
          </div>
        </header>

        <Menu open={open}>
          <div className="sticky top-0 mx-4 z-50">
            <div className="flex z-50 items-center px-3 pb-3 pt-4 justify-between">
              <Link href="/">
                <span className="shrink-0">
                  <img src="/assets/Logo.svg" alt="logo" />
                </span>
              </Link>

              <button
                type="button"
                onClick={toggle}
                className="btn-close p-2 bg-gray-400/20 rounded-md "
                aria-label="Close"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width={24}
                  height={24}
                  className="fill-gray-900 h-6 w-6 "
                >
                  <path fill="none" d="M0 0h24v24H0z" />
                  <path d="M12 10.586l4.95-4.95 1.414 1.414-4.95 4.95 4.95 4.95-1.414 1.414-4.95-4.95-4.95 4.95-1.414-1.414 4.95-4.95-4.95-4.95L7.05 5.636z" />
                </svg>
              </button>
            </div>
          </div>
          <div className="relative mt-20 overflow-y-auto mx-7 ">
            <MenuContainer>
              <nav className="navbar w-full">
                <ul className="flex flex-col lg:flex-row text-gray-700">
                  {menu.map((item, index) => {
                    return (
                      <li
                        key={index}
                        className="list-none py-3 px-5 text-2xl  font-semibold opacity-100 transition-opacity"
                      >
                        <Link onClick={toggle} href={item.url}>
                          {item.title}
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </nav>
            </MenuContainer>
            <div className="text-center flex mt-10 items-center justify-center">
              <a href="#">
                <Button title="Let's work together" />
              </a>
            </div>
          </div>
        </Menu>
      </div>
    </>
  );
};
export default Header;

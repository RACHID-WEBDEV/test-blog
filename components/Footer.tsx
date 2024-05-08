/* eslint-disable @next/next/no-img-element */
"use client";

import Link from "next/link";
import React from "react";

import classNames from "classnames";
import { footer } from "@/data/footerData";

const Footer = () => {
  return (
    <>
      <section className="flex items-center justify-center px-4 relative">
        <picture className="pointer-events-none absolute -top-16 md:-top-28 lg:-top-60 -z-10 ">
          <img
            alt="background"
            className="h-full object-cover w-full"
            src=" /assets/net-bg-footer.svg"
          />
        </picture>
        <div id="footer" className="pt-28">
          <footer className=" border-t border-gray-100 text-gray-400 bg-bgColor p-4 lg:p-16  mb-6 rounded-3xl">
            <div className="grid grid-cols-12 lg:grid-cols-11 gap-6 md:gap-0">
              <div className="col-span-12 md:col-span-3 lg:col-span-3">
                <div className="flex flex-col lg:flex-row  lg:items-center justify-between gap-6 lg:border-b border-white py-6 md:block md:space-y-5 md:border-none md:py-0">
                  <Link href="/">
                    <div className="shrink-0 relative inline-flex items-center gap-2">
                      <img src="/assets/Logo-white.svg" alt=" Logo" />
                    </div>
                  </Link>
                  <p className="max-w-xs">
                    © 2022 Cal.com, Inc. All rights reserved. Need Help?
                    support@cal.com
                  </p>

                  <p className="flex items-center flex-wrap gap-6">
                    <img src="/assets/star-rate.svg" alt="star rate" />

                    <img src="/assets/slack.svg" alt="slack" />
                    <img src="/assets/twitter.svg" alt="twitter" />
                    <img src="/assets/github.svg" alt="github" />
                  </p>
                </div>
              </div>
              <div className=" col-span-12 lg:col-span-8 ">
                <div className="grid grid-cols-2 gap-6 pb-16 lg:pb-0 sm:grid-cols-4 md:grid-cols-4  md:pl-8 ">
                  {footer.columns.map(({ title, links, hideMobile }, index) => (
                    <div
                      key={index}
                      className={classNames({ "hidden lg:block": hideMobile })}
                    >
                      <h6 className="text-base font-medium text-white">
                        {title}
                      </h6>
                      <ul className="mt-4 list-inside space-y-4">
                        {links.map(({ name, link, leavesWebsite }, index) => (
                          <li key={index}>
                            {leavesWebsite ? (
                              <a
                                href={link}
                                className="transition hover:text-cyan-600"
                              >
                                {name}
                              </a>
                            ) : (
                              <Link
                                className="transition hover:text-cyan-600"
                                href={link}
                              >
                                {name}
                              </Link>
                            )}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </footer>
        </div>
      </section>
    </>
  );
};

export default Footer;

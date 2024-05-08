"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import classNames from "classnames";

const NavLink = ({ url, title }: { url: string; title: string }) => {
  const pathname = usePathname();
  const isActiveUrl = url === pathname;

  return (
    <li className={classNames("block py-2 underline-on-hover ")}>
      <Link
        className="text-gray-800 uppercase text-sm xl:text-base "
        href={url}
      >
        {title}
      </Link>
    </li>
  );
};

export default NavLink;

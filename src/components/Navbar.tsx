import React from "react";
import Link from "next/link";

const Navbar = () => {
  return (
    <div className="text-white w-full pt-[40px] md:pt-[56px] md:flex md:justify-between md:items-center  px-[27px]">
      <Link href='/'>
        <p className="hidden md:block text-5xl text-white text-center cursor-pointer">
          play<span className="text-purple">linkd</span>
        </p>
      </Link>
      <div className="flex justify-end items-center md:block">
        <Link href="/about">
          <p className="text-purple md:text-white hover:text-purple uppercase font-medium text-end md:text-2xl cursor-pointer">
            About
          </p>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;

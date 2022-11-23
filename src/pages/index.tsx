import React, { useState } from "react";
import { BsArrowRightCircle } from "react-icons/bs";
import Playlinkd from "@/components/Playlinkd";
import Link from "next/link";
import Footer from "@/components/Footer";

const index = () => {
  const [inFocus, setInFocus] = useState(false);
  const onFocus = () => {
    setInFocus(true);
  };
  return (
    <div className="bg-background h-screen w-screen flex flex-col justify-between origin pb-[60px]">
      <div>
        <Playlinkd />
        <div className="flex justify-center items-center mt-10">
          <div
            className={`w-full md:w-[506px] flex justify-between items-center bg-[#28213c] py-3 px-3 mx-[24px] rounded-md cursor-pointer ${
              inFocus && "border-2 border-purple"
            } `}
          >
            <input
              onFocus={onFocus}
              type="text"
              placeholder="Paste playlist link here"
              className="focus:outline-none bg-[#28213c] placeholder:text-light-purple placeholder:text-base py-2 text-light-purple text-sm w-[90%]"
            />
            <BsArrowRightCircle className="text-2xl text-purple cursor-pointer" />
          </div>
        </div>

        <Link href="/music">
          <div className="flex justify-center items-center mt-4">
            <div className="w-full md:w-[506px] mx-6 bg-white text-[#1D0361] py-3 rounded-full cursor-pointer hover:border-2 hover:border-purple hover:text-white hover:bg-yeah">
              <p className="text-center font-semibold">Get your playlist</p>
            </div>
          </div>
        </Link>
      </div>

      <div className="md:hidden">
        <Footer />
      </div>
    </div>
  );
};

export default index;

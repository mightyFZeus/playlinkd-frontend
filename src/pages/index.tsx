import React, { useState } from "react";
import { BsArrowRightCircle } from "react-icons/bs";
import { BiMusic } from "react-icons/bi";
import Navbar from "@/components/Navbar";
import Link from "next/link";
import Footer from "@/components/Footer";

const index = () => {
  const [inFocus, setInFocus] = useState(false);
  const [music, setMusic] = useState(false);
  const onFocus = () => {
    setInFocus(true);
  };

  const handleMusic = () => {
    setMusic(!music);
    setInFocus(false);
  };
  return (
    <div className="bg-background h-screen w-screen flex flex-col justify-between origin pb-[60px]">
      <div>
        <Navbar />
        <div className="mt-20">
          <p className="text-4xl text-white text-center md:hidden">
            play<span className="text-purple">linkd</span>
          </p>
          <p className="text-white text-center px-[33px] pt-4 text-sm sm:text-base md:text-[32px] md:leading-[50px]">
            All your dope playlists on your preferred <br />
            music streaming platform.
          </p>
        </div>
        <div className="flex justify-center items-center mt-10">
          <div
            className={`w-full md:w-[506px] flex justify-between items-center bg-[#28213c] py-3 px-3 mx-[24px] cursor-pointer ${
              music ? "!rounded-t-lg" : "rounded-lg"
            } ${inFocus && "border-2 border-yeahhh"}`}
          >
            <input
              onFocus={onFocus}
              type="text"
              placeholder="Paste playlist link here"
              className="focus:outline-none bg-[#28213c] placeholder:text-txt placeholder:text-base py-2 text-txt text-sm w-[90%]"
            />
            <BsArrowRightCircle className="text-2xl text-purple cursor-pointer" onClick={handleMusic} />
          </div>
        </div>

        {music && (
          <div className="flex justify-center items-center">
            <div className="w-full md:w-[506px] flex gap-5 items-center bg-yeah border-t-[1px] border-yeahhh py-5 px-4 mx-[24px] rounded-b-lg">
              <img src="/assets/Group 2.png" alt="" />
              <div>
                <p className="text-white text-base font-semibold pb-1">gbedu wey dey burst brain</p>
                <p className="text-txt text-xs pb-1">35 songs, 2h 45 mins</p>
                <div className="flex items-center gap-1 pb-2">
                  <div className="p-[1px] bg-white rounded">
                    <BiMusic />
                  </div>
                  <p className="text-white text-xs">Oreoluwa Shonibare</p>
                </div>
              </div>
            </div>
          </div>
        )}

        <Link href="/music">
          <div className="flex justify-center items-center mt-4">
            <div className="w-full md:w-[506px] mx-6 bg-white text-[#1D0361] py-3 rounded-full cursor-pointer hover:border-2 hover:border-purple hover:text-white hover:bg-yeah">
              <p className="text-center font-semisemibold">Get your playlist</p>
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

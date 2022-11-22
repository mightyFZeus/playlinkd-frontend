import React, { useState } from "react";
import { BsArrowRightCircle } from "react-icons/bs";

const index = () => {
  const [inFocus, setInFocus] = useState(false);
  const onFocus = () => {
    setInFocus(true);
  };
  return (
    <div className="bg-background h-screen w-screen flex flex-col justify-between">
      <div>
        <div className="text-white w-full pt-[56px] md:flex md:justify-between md:items-center  px-[27px]">
          <p className="hidden md:block text-5xl text-white text-center cursor-pointer">
            play<span className="text-purple">linkd</span>
          </p>
          <div className="flex justify-end items-center md:block">
            <p className="text-purple uppercase font-medium text-end md:text-2xl cursor-pointer">About</p>
          </div>
        </div>
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

        <div className="flex justify-center items-center mt-4">
          <div className="w-full md:w-[506px] mx-6 bg-white py-3 rounded-full cursor-pointer">
            <p className="text-center text-[#1D0361] font-semibold">Get your playlist</p>
          </div>
        </div>
      </div>

      <div>
        <div className="mb-[60px] border border-[rgba(228, 214, 245, 0.41)] mx-[80px] rounded-full py-6 cursor-pointer md:hidden bg-[#B4DDFF]">
          <p className="text-white text-center">We love feedback</p>
        </div>
      </div>
    </div>
  );
};

export default index;

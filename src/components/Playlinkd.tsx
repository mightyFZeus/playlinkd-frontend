import React from "react";

const Playlinkd = () => {
  return (
    <>
      <div className="text-white w-full pt-[56px] md:flex md:justify-between md:items-center  px-[27px]">
        <p className="hidden md:block text-5xl text-white text-center cursor-pointer">
          play<span className="text-purple">linkd</span>
        </p>
        <div className="flex justify-end items-center md:block">
          <p className="text-purple md:text-white hover:text-purple uppercase font-medium text-end md:text-2xl cursor-pointer">
            About
          </p>
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
    </>
  );
};

export default Playlinkd;

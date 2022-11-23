import MusicButton from "@/components/MusicButton";
import React from "react";
import { BiMusic } from "react-icons/bi";
import { HiOutlineClipboardCopy } from "react-icons/hi";
import Link from "next/link";

const Music = () => {
  return (
    <div className="bg-background  h-full w-full flex flex-col justify-between pb-24">
      <div>
        <div className="text-white w-full pt-[56px] flex justify-between items-center  px-[27px]">
          <p className="text-base md:text-5xl text-white text-center cursor-pointer">
            play<span className="text-purple">linkd</span>
          </p>
          <p className="text-purple md:text-white hover:text-purple uppercase font-medium text-end md:text-2xl cursor-pointer">
            About
          </p>
        </div>
        <div className="mt-20 hidden md:block">
          <p className="text-white text-center px-[33px] pt-4 text-sm sm:text-base md:text-[32px] md:leading-[50px]">
            All your dope playlists on your preferred <br />
            music streaming platform.
          </p>
        </div>
      </div>

      <div className="flex justify-center items-center pt-[52px]">
        <div className="bg-music bg-no-repeat bg-fit bg-center w-[526px] rounded-2xl py-[53px] border-2 border-yeahhh px-[83px]">
          <p className="font-bold text-white text-3xl ">
            gbedu wey dey <br />
            burst brain
          </p>
          <p className="text-white py-2">35 songs, 2h 45 mins</p>
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-1 pb-2">
              <div className="p-[1px] bg-white">
                <BiMusic />
              </div>
              <p className="text-white">Oreoluwa Shonibare</p>
            </div>
            <div className="flex items-center gap-2 text-txt border border-purple rounded-full px-3 py-2">
              <p>Copy link</p>
              <HiOutlineClipboardCopy />
            </div>
          </div>
          <MusicButton />
          <MusicButton />
          <p className="pt-2 text-txt text-sm">More platforms coming soon</p>
          <div className="mt-[14px] flex justify-between items-center">
            <Link href="/">
              <p className="text-white cursor-pointer hover:text-txt">Make another playlist</p>
            </Link>
            <div className="border bg-yeahh border-yeahhh rounded-full py-3 px-5 cursor-pointer">
              <p className="text-white text-center text-sm">We love feedback</p>
            </div>
          </div>
        </div>
      </div>

      <div>
        <div className="mb-[60px] border border-yeahhh mx-[80px] rounded-full py-6 cursor-pointer md:hidden">
          <p className="text-white text-center">We love feedback</p>
        </div>
      </div>
    </div>
  );
};

export default Music;

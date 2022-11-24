import MusicButton from "@/components/MusicButton";
import React from "react";
import { BiMusic } from "react-icons/bi";
import { HiOutlineClipboardCopy } from "react-icons/hi";
import Link from "next/link";
import Footer from "@/components/Footer";

const Music = () => {
  return (
    <div className="bg-background  h-full w-full flex flex-col justify-between pb-[60px] md:pb-24">
      <div>
        <div className="text-white w-full pt-[56px] flex justify-between items-center  px-[27px]">
          <p className="text-lg md:text-5xl text-white text-center cursor-pointer">
            play<span className="text-purple">linkd</span>
          </p>
          <Link href="/about">
            <p className="text-purple md:text-white hover:text-purple uppercase font-medium text-end md:text-2xl cursor-pointer">
              About
            </p>
          </Link>
        </div>
        <div className="mt-20 hidden md:block">
          <p className="text-white text-center px-[33px] pt-4 text-sm sm:text-base md:text-[32px] md:leading-[50px]">
            All your dope playlists on your preferred <br />
            music streaming platform.
          </p>
        </div>
      </div>

      <div className="flex justify-center items-center pt-[52px]">
        <div className="bg-music bg-no-repeat bg-cover bg-center md:w-[526px] w-full mx-5 rounded-2xl py-[53px] border border-yeahhh px-7 md:px-[83px]">
          <div className="flex justify-between items-center gap-2">
            <p className="font-semibold text-white text-2xl md:text-3xl font-semibold md:pr-10">
              gbedu wey dey burst brain
            </p>

            <div className="md:hidden">
              <img src="/assets/Group 2.png" alt="" />
            </div>
          </div>

          <p className="text-white py-2">35 songs, 2h 45 mins</p>
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-1 pb-2">
              <div className="p-[1px] rounded bg-white hidden md:block">
                <BiMusic />
              </div>
              <p className="text-white">Oreoluwa Shonibare</p>
            </div>
            <div className="md:flex items-center gap-2 text-txt border border-purple rounded-full px-3 py-2 hidden">
              <p>Copy link</p>
              <HiOutlineClipboardCopy />
            </div>
          </div>
          <MusicButton name="Apple Music" number="31 of 35 songs" />
          <MusicButton name="Youtube Music" number="35 of 35 songs" />
          <p className="md:pt-3 pt-5 text-txt text-sm text-center md:text-start">More platforms coming soon</p>
          <div className="mt-[14px] md:flex justify-between items-center hidden">
            <Link href="/">
              <p className="text-white cursor-pointer hover:text-txt">Make another playlist</p>
            </Link>
            <div className="border bg-yeahh border-yeahhh rounded-full py-3 px-5 cursor-pointer">
              <p className="text-white text-center text-sm">We love feedback</p>
            </div>
          </div>
          <div className="flex justify-center items-center pt-4 md:hidden">
            <div className="flex items-center gap-2 text-txt border border-purple rounded-full px-3 py-2 cursor-pointer">
              <p className="text-sm">Share</p>
              <HiOutlineClipboardCopy className="text-lg" />
            </div>
          </div>
        </div>
      </div>

      <div className="mt-10">
        <Link href="/">
          <p className="text-white cursor-pointer hover:text-txt text-center">Make another playlist</p>
        </Link>
      </div>

      <div className="mt-10 md:hidden">
        <Footer />
      </div>
    </div>
  );
};

export default Music;

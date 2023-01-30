import React, { useEffect, useState } from "react";
import { BsArrowRightCircle } from "react-icons/bs";
import { BiMusic } from "react-icons/bi";
import Navbar from "@/components/Navbar";
import Link from "next/link";
import Footer from "@/components/Footer";
import Wrapper from "@/HOC/Wrapper";
import { useGetPlaylistMutation } from "@/services/apis/playlist";
import { motion, useAnimationControls  } from "framer-motion";

const index = () => {
  const [inFocus, setInFocus] = useState(false);
  const [link, setLink] = useState("");
  const [music, setMusic] = useState(false);
  const onFocus = () => {
    setInFocus(true);
  };

  const [getPlayList, { data, error, isLoading }] = useGetPlaylistMutation();

  const handleMusic = () => {
    getPlayList(link);
  };

  const setData = () => {
    localStorage.setItem("playlistData", JSON.stringify(data?.data));
  };

  const controls = useAnimationControls()

  useEffect(() => {
    if (isLoading) {
      controls.start({
        pathLength:1
      })

    }
  }, [])

  return (
    <Wrapper>
      <div className="bg-background bg-opacity-70 h-screen w-full flex flex-col justify-between relative pb-[60px]">
        <div className="relative z-100">
          <Navbar />
          <div className="mt-10 md:mt-20">
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
                onChange={(e) => setLink(e.target.value)}
                className="focus:outline-none bg-[#28213c] placeholder:text-txt placeholder:text-base py-2 text-txt text-sm w-[90%]"
              />
              {/* <BsArrowRightCircle className="text-2xl text-purple cursor-pointer" onClick={handleMusic} /> */}
              <motion.svg
                onClick={handleMusic}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-6 h-6 text-purple"
              >
                <motion.path
                  initial={{pathLength:0}}
                  animate={{ pathLength: 1 }}
                  
                  transition={{
                    duration: 2,
                    ease: "easeInOut",
                    // repeat: Infinity,
                    repeatType: "loop",
                    repeatDelay: 1
                  }}
                  // strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12.75 15l3-3m0 0l-3-3m3 3h-7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </motion.svg>
            </div>
          </div>

          {data && (
            <div className="flex justify-center items-center">
              <div className="w-full md:w-[506px] flex gap-5 items-center bg-yeah border-t-[1px] border-yeahhh py-5 px-4 mx-[24px] rounded-b-lg">
                <img src="/assets/Group 2.png" alt="" />
                <div>
                  <p className="text-sm md:text-base text-white font-semibold pb-1">{data?.data?.title}</p>
                  <p className="text-txt text-xs pb-1">
                    {data?.data.numberOfSongs} songs, {(data?.data?.duration / 3600).toFixed(0)}h{" "}
                    {(data?.data?.duration / 60).toFixed(0)}mins
                  </p>

                  <div className="flex items-center gap-1 pb-2">
                    <div className="p-[1px] bg-white rounded hidden md:block">
                      <BiMusic />
                    </div>
                    <img src="/assets/spotify.png" className="h-4 my-auto md:hidden" />

                    <p className="text-white text-xs">Oreoluwa Shonibare</p>
                  </div>
                </div>
              </div>
            </div>
          )}

          <Link href={{
            pathname: "/music",
            query: {
              link:link
            }, // the data
          }}>
            <div
              onClick={setData}
              className={
                data?.data
                  ? "flex justify-center items-center mt-4"
                  : "flex justify-center items-center mt-4 pointer-events-none"
              }
            >
              <div className="w-full md:w-[506px] mx-6 bg-white text-[#1D0361] py-3 hover:py-[0.7rem] rounded-full cursor-pointer hover:border hover:border-purple hover:text-white hover:bg-yeah transition ease-in-out ">
                <p className="text-center font-semisemibold">Get your playlist</p>
              </div>
            </div>
          </Link>
        </div>

        <div className="md:hidden z-100 relative">
          <Footer />
        </div>
      </div>
    </Wrapper>
  );
};

export default index;

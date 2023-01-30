import MusicButton from "@/components/MusicButton";
import React, { useState, useEffect } from "react";
import { BiMusic } from "react-icons/bi";
import { HiOutlineClipboardCopy } from "react-icons/hi";
import Link from "next/link";
import Wrapper from "@/HOC/Wrapper";
import { IData } from "@/utils/payload";
import { useRouter } from "next/router";

const Music = () => {
  const [data, setData] = useState<IData>();
  const router = useRouter();
  const link = router.query;
  const [playlistUrl, setPlaylistUrl] = useState("");

  useEffect(() => {
    const parseData = JSON.parse(`${localStorage.getItem("playlistData")}`);
    setData(parseData);
  }, []);

  return (
    <Wrapper>
      <>
        <div className="bg-background bg-opacity-70 relative z-100 h-full w-full flex flex-col justify-between  pb-10 md:pb-24">
          <div>
            <div className="text-white w-full pt-[56px] flex justify-between items-center  px-[27px]">
              <Link href="/">
                <p className="text-lg md:text-5xl text-white text-center cursor-pointer">
                  play<span className="text-purple">linkd</span>
                </p>
              </Link>
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
            {data && (
              <div className="bg-music bg-no-repeat bg-cover bg-center md:w-[526px] w-full mx-5 rounded-2xl py-[53px] border border-yeahhh px-7 md:px-[83px]">
                <div className="flex justify-between items-center gap-2">
                  <p className="font-semibold text-white text-2xl md:text-3xl  md:pr-10">{data?.title}</p>

                  <div className="md:hidden">
                    <img src="/assets/Group 2.png" alt="" />
                  </div>
                </div>

                <p className="text-white py-2">
                  {data?.numberOfSongs} songs, {(data?.duration / 3600).toFixed(0)}h {(data?.duration / 60).toFixed(0)}
                  mins
                </p>
                <div className="flex justify-between items-center">
                  <div className="flex items-center gap-1 pb-2">
                    <div className="p-[1px] rounded bg-white hidden md:block">
                      <BiMusic />
                    </div>
                    <p className="text-white">Oreoluwa Shonibare</p>
                  </div>
                </div>
                <MusicButton
                  setPlaylistUrl={setPlaylistUrl}
                  link={link?.link}
                  name="Apple Music"
                  number="31 of 35 songs"
                  url="apple-playlist"
                />
                <MusicButton
                  setPlaylistUrl={setPlaylistUrl}
                  link={link?.link}
                  name="Youtube Music"
                  number="35 of 35 songs"
                  url="youtube-playlist"
                />
                <MusicButton
                  setPlaylistUrl={setPlaylistUrl}
                  link={link?.link}
                  name="Spotify Music"
                  number="35 of 35 songs"
                  url="spotify-playlist"
                />
                <p className="md:pt-4 pt-5 text-txt text-sm text-center md:text-start">More platforms coming soon</p>
                <div
                  onClick={() => navigator.clipboard.writeText(playlistUrl)}
                  className="flex justify-center items-center mt-8"
                >
                  <div className="w-full md:flex justify-center item-center gap-2 hidden  text-white py-2  rounded-full cursor-pointer border border-purple transition ease-in-out ">
                    <p className="text-center font-semisemibold">Copy Link</p>
                    <img src="/assets/copy.png" className="h-4 my-auto" />
                  </div>
                </div>

                <div
                  onClick={() => navigator.clipboard.writeText(playlistUrl)}
                  className="flex justify-center items-center md:pt-4 pt-1 md:hidden"
                >
                  <div className="flex items-center gap-2 text-txt border border-purple rounded-full px-3 py-2 cursor-pointer">
                    <p className="text-sm">Copy Link</p>
                    <img src="/assets/copy.png" className="h-4 my-auto" />
                  </div>
                </div>
              </div>
            )}
          </div>

          <div className="mt-[20px] md:flex justify-between items-center   md:w-[400px] mx-auto">
            <Link href="/">
              <p className="text-white cursor-pointer my-8 md:my-0 hover:text-txt font-bold">Make another playlist</p>
            </Link>
            <div className="border bg-yeahh border-yeahhh rounded-full py-[0.7rem] px-5 cursor-pointer">
              <p className="text-white text-center text-sm">We love feedback</p>
            </div>
          </div>

          {/* <div className="mt-10 md:hidden">
            <Footer />
          </div> */}
        </div>
      </>
    </Wrapper>
  );
};

export default Music;

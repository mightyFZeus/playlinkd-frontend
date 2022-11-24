import React from "react";
import Navbar from "@/components/Navbar";
import Link from "next/link";
import Footer from "@/components/Footer";

const About = () => {
  return (
    <div className="bg-background h-screen w-screen">
      <Navbar />
      <div className="mt-20">
        <p className="text-4xl text-white text-center md:hidden">
          play<span className="text-purple">linkd</span>
        </p>
        <p className="text-white text-center px-[33px] lg:px-[150px] xl:px-[300px] 2xl:px-[406px] pt-4 text-sm sm:text-base md:text-[22px] md:leading-[50px]">
          playlinkd is a free platform to help you listen to your favorite playlist on whatever music streaming platform
          you choose.
        </p>
        <p className="text-white text-center px-[33px] pt-4 text-sm sm:text-base md:text-[22px] md:leading-[50px]">
          Made with love by Evi and Jii.
        </p>
      </div>

      <Link href="/">
        <div className="flex justify-center items-center mt-10 mb-4">
          <div className="w-[190px] md:w-[308px] mx-6 bg-transparent text-txt py-3 rounded-full cursor-pointer border-2 border-txt hover:bg-txt hover:text-background">
            <p className="text-center font-semisemibold">Get your groove on</p>
          </div>
        </div>
      </Link>
      <Footer />
    </div>
  );
};

export default About;

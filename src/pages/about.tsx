import React from "react";
import Navbar from "@/components/Navbar";
import Link from "next/link";
import Footer from "@/components/Footer";
import Wrapper from "@/HOC/Wrapper";

const About = () => {
  return (
    <Wrapper>
      <div className="bg-background bg-opacity-70 z-100 relative h-screen w-screen">
        <Navbar />
        <div className="mt-20">
          <Link href='/'>
            <p className="text-lg md:text-5xl text-white text-center cursor-pointer">
              play<span className="text-purple">linkd</span>
            </p></Link>
          <p className="text-white text-center px-[33px] lg:px-[150px] xl:px-[300px] 2xl:px-[406px] pt-4 text-sm sm:text-base md:text-[22px] md:leading-[50px]">
            playlinkd is a free platform to help you listen to your favorite playlist on whatever music streaming
            platform you choose.
          </p>
          
          <Link href='https://twitter.com/eviodioko' target='_blank'>
            <p className="text-white text-center px-[33px] pt-4 text-sm sm:text-base md:text-[22px] md:leading-[50px]">
              Made with love by <span className="font-bold text-3xl cursor-pointer">Evi</span>.
            </p></Link>
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
    </Wrapper>
  );
};

export default About;

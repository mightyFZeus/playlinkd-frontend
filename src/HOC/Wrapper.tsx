import React, { PropsWithChildren } from "react";

const Wrapper = ({ children }: PropsWithChildren) => {
  return (
    <div className="bg-background h-full w-full relative">
      <div className="absolute bottom-0 w-full">
        <img src="/assets/Vector 2.png" alt="" className="w-full h-[500px] md:h-[600px] lg:h-[400px] object-fit" />
      </div>
      <div className="absolute bottom-0 h-[350px] md:h-[600px] lg:top-0 lg:h-full md:right-[100px]">
        <img src="/assets/Vector 5.png" alt="" className=" h-full object-cover md:object-fit" />
      </div>
      {children}
    </div>
  );
};

export default Wrapper;

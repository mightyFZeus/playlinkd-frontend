import React from "react";
import { BsCheck2 } from "react-icons/bs";

const MusicButton = ({ name, number }: { name: string; number: string }) => {
  return (
    <div className="flex justify-between items-center mt-3 px-4 py-3 rounded-lg border border-purple">
      <div>
        <p className="text-white">{name}</p>
        <div className="flex items-center gap-2 text-xs text-[#E4D6F5]">
          <p>{number}</p>
          <BsCheck2 />
        </div>
      </div>
      <button className="bg-white text-[#1D0361] px-3 py-[6px] rounded-full">Open</button>
    </div>
  );
};

export default MusicButton;

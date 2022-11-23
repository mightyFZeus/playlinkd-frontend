import React from "react";

const MusicButton = () => {
  return (
    <div className="flex justify-between items-center mt-2 px-4 py-2 rounded-lg border border-purple">
      <div>
        <p className="text-white">Apple Music</p>
        <p className="text-xs text-[#E4D6F5]">31 of 35 songs</p>
      </div>
      <button className="bg-white text-[#1D0361] px-3 py-[6px] rounded-full">Open</button>
    </div>
  );
};

export default MusicButton;

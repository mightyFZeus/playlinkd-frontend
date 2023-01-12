import { useLazyGetPlatformQuery } from "@/services/apis/platform";
import React from "react";
import { BsCheck2 } from "react-icons/bs";

const MusicButton = ({ name, number, url }: { name: string; number: string, url: string }) => {
  
  const [trigger, result] = useLazyGetPlatformQuery()

  const handleClick = () => {
    trigger(url)
  }

  return (
    <div className="flex justify-between items-center mt-3 px-4 py-3 rounded-lg border border-purple">
      <div>
        <p className="text-white font-semibold">{name}</p>
        <div className="flex items-center gap-2 text-xs text-[#E4D6F5]">
          <p>{number}</p>
          <BsCheck2 />
        </div>
      </div>
      <a href={`https://test-vxm7.onrender.com/${url}`}>
        <button className="bg-white text-[#1D0361] px-3 py-[6px] text-sm font-semibold rounded-full" >Open</button>

      </a>
    </div>
  );
};

export default MusicButton;

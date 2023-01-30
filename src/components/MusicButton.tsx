import { useGetPlatformMutation } from "@/services/apis/platform";
import React, { useEffect } from "react";
import { BsCheck2 } from "react-icons/bs";

interface IMusicButton {
  name: string;
  url: string;
  number: string;
  link: string | string[] | undefined;
  setPlaylistUrl: React.Dispatch<React.SetStateAction<string>>;
}

const MusicButton: React.FC<IMusicButton> = ({ name, number, url, link, setPlaylistUrl }) => {
  const [trigger, { isLoading, data }] = useGetPlatformMutation();

  const handleClick = () => {
    trigger({
      url,
      link,
    });
  };

  useEffect(() => {
    if (data) {
      setPlaylistUrl(data.data.playlistUrl);
    }
  }, [data]);

  return (
    <div className="flex justify-between items-center mt-3 px-4 py-3 rounded-lg border border-purple">
      <div>
        <p className="text-white font-semibold">{name}</p>
        <div className="flex items-center gap-2 text-xs text-[#E4D6F5]">
          <p>{number}</p>
          <BsCheck2 />
        </div>
      </div>
      <button onClick={handleClick} className="bg-white w-[80px]  rounded-full">
        {isLoading ? (
          <p className="px-3 py-[4px] text-[#1D0361] text-xl font-semibold ">. . .</p>
        ) : (
          <p className="px-3 py-[6px]  text-[#1D0361] text-sm font-semibold ">Open</p>
        )}
      </button>
    </div>
  );
};

export default MusicButton;

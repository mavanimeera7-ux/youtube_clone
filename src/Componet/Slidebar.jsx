
import React, { useState } from 'react';
import { SlHome } from "react-icons/sl";
import { MdOutlineExplore, MdOutlineSubscriptions } from "react-icons/md";
import { FiYoutube } from "react-icons/fi";
import { SiYoutubemusic } from "react-icons/si";

function Slidebar() {
  const [data] = useState([
    {
      icon: <SlHome />,
      title: 'Home',
    },
    {
      icon: <MdOutlineExplore />,
      title: 'Explore',
    },
    {
      icon: <MdOutlineSubscriptions />,
      title: 'Subscriptions',
    },
    {
      icon: <FiYoutube />,
      title: 'Originals',
    },
    {
      icon: <SiYoutubemusic />,
      title: 'Youtube Music',
    },
  ]);

  return (
    <>
      <div className="fixed flex flex-col gap-5 bg-white h-screen w-32">
        {data.map((val, index) => (
          <div key={index} className="flex flex-col items-center  hover:bg-gray-200  p-2 rounded-lg cursor-pointer gap-2">
            <div className="text-2xl ">{val.icon}</div>
            <div className="text-xs ">{val.title}</div>
          </div>
        ))}
      </div>
    </>
  );
}

export default Slidebar;

import React from 'react'
import { RxHamburgerMenu } from "react-icons/rx";
import { IoSearchOutline } from "react-icons/io5";
// import { FaMicrophone } from "react-icons/fa6";
import { MdOutlineMic } from "react-icons/md";

import { MdOutlineVideoCall } from "react-icons/md";
import { MdApps } from "react-icons/md";
import { IoIosNotificationsOutline } from "react-icons/io";





function Nav() {
  return (
    <>
      <div className='flex justify-between items-center '>
        <div className='flex items-center gap-15'>
          <div className='ms-15 text-2xl'><RxHamburgerMenu /></div>
          <div>
            <img className='w-25 h-20' src="public/youtube-logo.svg" alt="" />
          </div>
        </div>

        <div className='flex gap-4'>
          <div className="relative">
            <input
              className="w-96 z-0 h-10 rounded-full border-2 border-gray-300 px-4"
              type="text"
              placeholder="Search"
            />
            <button className="absolute z-10 right-0 top-0 h-10 w-12 rounded-r-full bg-gray-200 border border-gray-500 flex items-center justify-center">
              <IoSearchOutline />
            </button>
          </div>
          <button className='text-2xl  px-2  rounded-full bg-gray-200'><MdOutlineMic /> </button>
      
      </div>

      <div className='me-4'>
        <div className='flex justify-center items-center gap-5'>
          <div className='text-3xl'><MdOutlineVideoCall /></div>
          <div className='text-2xl'><MdApps /></div>
          <div className='text-2xl'><IoIosNotificationsOutline /></div>
          <div><img className='rounded-full h-8 w-8' src="public/profile.jpg" alt="" /></div>
        </div>
      </div>






    </div >
    </>
  )
}

export default Nav

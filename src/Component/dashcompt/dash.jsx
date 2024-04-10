import React from 'react'
import { CiSearch } from "react-icons/ci";
import { IoIosNotifications } from "react-icons/io";
import { FaRegUserCircle } from "react-icons/fa";

export default function dash() {
  return (
    <div className='border-[1px] h-[100vh] w-[100%] pl-[385px] bg-[#E1E1E1] pr-10 overflow-hidden'>
      <div className='flex flex-row justify-center gap-[29rem] items-center pt-[45px]'>
        <div className='w-[386px] h-[50px] rounded-[5px] bg border-1px border-red-900 bg-white flex flex-row gap-2 items-center'>
            <CiSearch className='w-[20px] h-[20px] ml-[10px]'/>
            <input type='text' placeholder='Search' className='w-[100%] h-[50px] rounded-[5px] outline-none text-18px font-normal text-[#5F5F5F]' />
        </div>

        <div className='flex flex-row gap-7'>
            <IoIosNotifications className='w-[24px] h-[24px] cursor-pointer '/>
            <FaRegUserCircle className='w-[24px] h-[24px] cursor-pointer'/>     
        </div>
      </div>

    </div>
  )
}

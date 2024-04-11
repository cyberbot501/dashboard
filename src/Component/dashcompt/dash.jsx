import React from 'react'
import { CiSearch } from "react-icons/ci";
import { IoIosNotifications } from "react-icons/io";
import { FaRegUserCircle } from "react-icons/fa";
import { LuMenuSquare } from "react-icons/lu";
import { MdOutlineMenuBook } from "react-icons/md";
import { PiCookingPotFill } from "react-icons/pi";
import { FaCartArrowDown } from "react-icons/fa6";
import CHART from '../../layout/chart'




const menuData = [
  {
    id: 1,
    dis: "Total Menu",
    number: '5',
    icon: <LuMenuSquare className='w-[24px] h-[24px] text-[#BE8213]'/>
  },

  {
    id: 2,
    dis: "Total Dish",
    number: '15',
    icon: <PiCookingPotFill className='w-[24px] h-[24px] text-[#BE8213]'/>
  },

  {
    id: 3,
    dis: "Menu Cart",
    number: '2',
    icon: <FaCartArrowDown className='w-[24px] h-[24px] text-[#BE8213]'/>
  },

  {
    id: 4,
    dis: "Active Dish",
    number: '12',
    icon: <PiCookingPotFill className='w-[24px] h-[24px] text-[#BE8213]'/>
  },

  {
    id: 5,
    dis: "Live Menu",
    number: '4',
    icon: <MdOutlineMenuBook className='w-[24px] h-[24px] text-[#BE8213]'/>
  }
]

export default function dash() {
  return (
    <div className='border-[1px] h-[100vh] w-[100%] pl-[360px] bg-[#E1E1E1] pr-[1px] overflow-hidden'>
      <div className='flex flex-row justify-center gap-[31rem] items-center pt-[45px]'>
        <div className='w-[386px] h-[50px] rounded-[5px] bg border-1px border-red-900 bg-white flex flex-row gap-2 items-center'>
            <CiSearch className='w-[20px] h-[20px] ml-[10px]'/>
            <input type='text' placeholder='Search' className='w-[100%] h-[50px] rounded-[5px] outline-none text-18px font-normal text-[#5F5F5F]' />
        </div>

        <div className='flex flex-row gap-7'>
            <IoIosNotifications className='w-[24px] h-[24px] cursor-pointer '/>
            <FaRegUserCircle className='w-[24px] h-[24px] cursor-pointer'/>     
        </div>
      </div>

      <div className='flex flex-row justify-evenly pt-10'>
        {menuData.map((menu, index) => 
          <div className='border-[1px] border-white bg-white w-[175px] h-[68px] rounded-[5px] shadow' key='index'>
              <div className='flex flex-row justify-evenly items-center'>
                <div className='flex flex-col gap-3'>
                  <p className=''>{menu.dis}</p>
                  <p className=''>{menu.number}</p>
                </div>
                <div>{menu.icon}</div>
              </div>
          </div>
        )}
      </div>


      <div className='flex flex-row justify-evenly mt-8'>
        <div className='border-[1px] border-white bg-[#ffffff] w-[481px] h-[379px] rounded-[15px] shadow'>
          <CHART />
        </div>


        <div className='border-[1px] border-white bg-white w-[481px] h-[379px] rounded-[15px] shadow'>
              
        </div>
      </div>

    </div>
  )
}



import React, { useState } from 'react';
import { NavLink } from "react-router-dom";
import { IoArrowBack } from "react-icons/io5";

export default function SideNav() {
  const [activeButton, setActiveButton] = useState('Dashboard'); 


  const handleButtonClick = (buttonName) => {
    setActiveButton(buttonName);
  };

  const buttonData = [
    { name: 'Dashboard', link: '/dashboard' },
    { name: 'Home', link: '/home' }, 
    { name: 'Order', link: '/order' },  
    { name: 'Menu', link: '/menu' },
    { name: 'Dishes', link: '/dishes' },
  ];

  return (
    <div className='w-[361px] h-[100vh] border-[1px] border-[#BE8213] fixed bg-[#BE8213] overflow-y-auto' style={{ backgroundImage: 'url(/yea.png)' }}>
      <div className='mt-[50px]'>
        <div className='flex flex-row justify-center items-center'>
          <NavLink to='/'><IoArrowBack className='w-[22px] h-[22px] ml-[-80px]' /></NavLink>
          <p className='font-black text-[20px]'>FOODEDEN</p>
        </div>

        <div className='flex flex-col gap-12 px-[55px] py-[60px]'>
          {buttonData.map((button, index) => (
            <NavLink key={index} to={button.link}>
              <button
                 className={`
                 border-[1px] border-[#E1E1E1]
                 ${activeButton === button.name ? 'hover:bg-white bg-white active:bg-[#BE8213] text-[#BE8213]' : 'hover:bg-white active:bg-[#BE8213] text-[#000000]'}
                 w-[241px] h-[50px] rounded-[5px] text-[16px] font-semibold
               `}
                onClick={() => handleButtonClick(button.name)}
              >
                {button.name}
              </button>
            </NavLink>
          ))}
        </div>
      </div>
    </div>
  );
}

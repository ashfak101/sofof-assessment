import React, { useState } from 'react';

import CartIcon from '../icons/CartIcon';
import HomeIcon from '../icons/HomeIcon';
import FrameIcon from '../icons/FrameIcon';
import MediaIcon from '../icons/MediaIcon';
import UserIcon from '../icons/UserIcon';

const BottomNavigation = () => {
  const [active, setActive] = useState('Home');

  const navItems = [
    { id: 'home', label: 'Home', icon: <HomeIcon />, path: '/' },
    {
      id: 'cart',
      label: 'Cart',
      icon: <CartIcon />,
      path: '/cart',
    },
    {
      id: 'orders',
      label: 'Orders',
      icon: <FrameIcon />,
      path: '/orders',
    },
    {
      id: 'media',
      label: 'Media',
      icon: <MediaIcon />,
      path: '/media',
    },
    {
      id: 'profile',
      label: 'Profile',
      icon: <UserIcon />,
      path: '/profile',
    },
  ];

  return (
    <div className=' my-10 mx-auto bottom-4  bg-white shadow-[0px_-20px_100px_0px_#65358A1A] rounded-full  flex justify-between md:gap-16 px-[25px] py-4 max-w-[492px] border border-[#65358A14]'>
      {navItems.map(({ label, icon: Icon }) => (
        <div
          key={label}
          onClick={() => setActive(label)}
          className='flex flex-col items-center justify-center text-xs text-gray-700 cursor-pointer relative group'>
          <div
            className={` flex items-center text-gray-700 justify-center l transition-all duration-200 ${
              active === label ? ' text-purple-700' : ''
            }`}>
            {Icon}
          </div>
          <span
            className={`mt-1 rounded-full w-1 h-1 duration-200 pointer-events-none
            ${active === label ? 'bg-[#65358A]' : ''}
            `}></span>
          <span
            className={`mt-1 text-xs md:text-xl  absolute bottom-[-50px] ${
              active === label ? 'text-[#65358A] font-medium' : 'text-[#222222]'
            }`}>
            {label}
          </span>
        </div>
      ))}
    </div>
  );
};

export default BottomNavigation;

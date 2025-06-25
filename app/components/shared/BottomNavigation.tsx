import React, { useState } from 'react';

import CartIcon from '../icons/CartIcon';
import HomeIcon from '../icons/HomeIcon';
import FrameIcon from '../icons/FrameIcon';
import MediaIcon from '../icons/MediaIcon';
import UserIcon from '../icons/UserIcon';
import { NavLink } from 'react-router'

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
      id: 'products',
      label: 'Products',
      icon: <FrameIcon />,
      path: '/Products',
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
      path: '/user-info',
    },
  ];

  return (
    <div
      className='fixed bottom-0 left-0 right-0 h-[136px] z-50 pt-4 '
      style={{
        backdropFilter: 'blur(8px)',
        background: '#FFFFFF1A',
      }}>
      <div className='mb-4 mx-auto bottom-4  bg-white shadow-[0px_-20px_100px_0px_#65358A1A] rounded-full  flex justify-between md:gap-16 px-[25px] py-4 max-w-[492px] border border-[#65358A14]'>
        {navItems.map(({ label, icon: Icon, path }) => (
          <NavLink
            key={label}
            to={path}
            className={({ isActive }) =>
              `flex flex-col items-center justify-center text-xs text-gray-700 cursor-pointer relative group`
            }>
            {({ isActive }) => (
              <>
                <div
                  className={`flex items-center justify-center transition-all duration-200 ${
                    isActive ? 'text-purple-700' : 'text-gray-700'
                  }`}>
                  {Icon}
                </div>
                <span
                  className={`mt-1 rounded-full w-1 h-1 duration-200 pointer-events-none
                    ${isActive ? 'bg-[#65358A]' : ''}
                  `}></span>
                <span
                  className={`mt-1 text-xs md:text-xl absolute bottom-[-50px] ${
                    isActive ? 'text-[#65358A] font-medium' : 'text-[#222222]'
                  }`}>
                  {label}
                </span>
              </>
            )}
          </NavLink>
        ))}
      </div>
      <div className='w-[134px] h-[5px] bg-[#222222] opacity-20 mx-auto mb-1 mt-8'></div>
    </div>
  );
};

export default BottomNavigation;

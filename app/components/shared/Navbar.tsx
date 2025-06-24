import React, { useState } from 'react';

import { FaBars, FaBell, FaGlobe, FaSignOutAlt } from 'react-icons/fa';
import { NavLink } from 'react-router';
import BellIcon from '../icons/BellIcon';
import { IoIosArrowDown } from 'react-icons/io';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLangDropdownOpen, setIsLangDropdownOpen] = useState(false);
  const [language, setLanguage] = useState('English');

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleLangDropdown = () => {
    setIsLangDropdownOpen(!isLangDropdownOpen);
  };

  const changeLanguage = (lang: string) => {
    setLanguage(lang);
    setIsLangDropdownOpen(false);
  };

  return (
    <nav className='bg-white pt-10'>
      <div className='max-w-[1344px] mx-auto px-4'>
        <div className='flex justify-between h-16'>
          {/* Left section - Hamburger menu */}
          <div className='flex items-center'>
            <button
              onClick={toggleMenu}
              className=' bg-[#F3EFF6] h-10 w-10  flex justify-center items-center border border-[#65358A26] rounded-full cursor-pointer hover:bg-[#65358A26] focus:outline-none'>
              <svg
                width='18'
                height='16'
                viewBox='0 0 18 16'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'>
                <path
                  d='M1 1H13M1 8H17M1 15H9'
                  stroke='currentColor'
                  stroke-width='1.5'
                  stroke-linecap='round'
                  stroke-linejoin='round'
                />
              </svg>
            </button>
          </div>

          {/* Middle section - Logo */}
          <div className='flex items-center justify-center flex-1'>
            <NavLink to='/' className='text-xl font-bold text-gray-800'>
              <img
                src='/assets/images/logo.png'
                className='h-10 w-auto'
                alt='Logo'
              />
            </NavLink>
          </div>

          {/* Right section - Notification, Language, Logout */}
          <div className='flex items-center space-x-4'>
            {/* Notification Icon */}
            <button className='  relative bg-[#F3EFF6] h-10 w-10  flex justify-center items-center  rounded-full cursor-pointer hover:bg-[#65358A26] focus:outline-none'>
              <BellIcon />
              <span className='absolute top-2 right-3 h-[8px] w-[8px] bg-[#C92C2C] rounded-full border border-white'></span>
            </button>

            {/* Language Dropdown */}
            <div className='relative'>
              <button
                onClick={toggleLangDropdown}
                className='flex items-center px-2 py-2 rounded-full hover:bg-[#65358A26] hover:text-gray-900 border border-[#65358A26]  focus:outline-none'>
                <img
                  src='/assets/images/_flagBase.png'
                  alt='eng'
                  className='h-5 w-5 mr-1 rounded-full'
                />
                <span className='hidden md:inline'>{language}</span>
                <IoIosArrowDown />
              </button>

              {isLangDropdownOpen && (
                <div className='absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-10'>
                  <button
                    onClick={() => changeLanguage('Eng')}
                    className='block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100'>
                    Eng
                  </button>
                  <button
                    onClick={() => changeLanguage('Español')}
                    className='block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100'>
                    Español
                  </button>
                  <button
                    onClick={() => changeLanguage('Français')}
                    className='block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100'>
                    Français
                  </button>
                </div>
              )}
            </div>

            {/* Logout Button */}
            <button className='flex items-center px-6 text-white cursor-pointer py-2 rounded-full bg-[#2B153C] hover:bg-[#65358A26] hover:text-gray-900 border border-[#65358A26]  focus:outline-none'>
              Logout
            </button>
          </div>
        </div>``
      </div>
    </nav>
  );
};

export default Navbar;

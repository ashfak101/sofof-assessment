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
    <nav className=' pt-4 sm:pt-6 md:pt-10  w-full top-0 z-50 '>
      <div className='max-w-[1344px] mx-auto px-2 sm:px-4'>
        <div className='flex justify-between h-14 sm:h-16'>
          {/* Left section - Hamburger menu */}
          <div className='flex items-center'>
            <button
              onClick={toggleMenu}
              className='bg-[#F3EFF6] h-8 w-8 sm:h-10 sm:w-10 flex justify-center items-center border border-[#65358A26] rounded-full cursor-pointer hover:bg-[#65358A26] focus:outline-none'>
              <svg
                width='16'
                height='14'
                viewBox='0 0 18 16'
                className='w-4 h-4 sm:w-5 sm:h-5'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'>
                <path
                  d='M1 1H13M1 8H17M1 15H9'
                  stroke='currentColor'
                  strokeWidth='1.5'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                />
              </svg>
            </button>
          </div>

          {/* Middle section - Logo */}
          <div className='flex items-center justify-center flex-1'>
            <NavLink to='/' className='text-xl font-bold text-gray-800'>
              <img
                src='/assets/images/logo.png'
                className='h-8 sm:h-10 w-auto'
                alt='Logo'
              />
            </NavLink>
          </div>

          {/* Right section - Notification, Language, Logout */}
          <div className='flex items-center space-x-2 sm:space-x-4'>
            {/* Notification Icon */}
            <button className='relative bg-[#F3EFF6] h-8 w-8 sm:h-10 sm:w-10 flex justify-center items-center rounded-full cursor-pointer hover:bg-[#65358A26] focus:outline-none'>
              <BellIcon className="w-4 h-4 sm:w-5 sm:h-5" />
              <span className='absolute top-1.5 right-2 sm:top-2 sm:right-3 h-[6px] w-[6px] sm:h-[8px] sm:w-[8px] bg-[#C92C2C] rounded-full border border-white'></span>
            </button>

            {/* Language Dropdown */}
            <div className='relative'>
              <button
                onClick={toggleLangDropdown}
                className='flex items-center px-1.5 sm:px-2 py-1.5 sm:py-2 rounded-full hover:bg-[#65358A26] hover:text-gray-900 border border-[#65358A26] focus:outline-none'>
                <img
                  src='/assets/images/_flagBase.png'
                  alt='eng'
                  className='h-4 w-4 sm:h-5 sm:w-5 mr-1 rounded-full'
                />
                <span className='hidden sm:inline text-sm'>{language}</span>
                <IoIosArrowDown className='w-3 h-3 sm:w-4 sm:h-4' />
              </button>

              {isLangDropdownOpen && (
                <div className='absolute right-0 mt-2 w-32 sm:w-48 bg-white rounded-md shadow-lg py-1 z-10'>
                  {['Eng', 'Español', 'Français'].map((lang) => (
                    <button
                      key={lang}
                      onClick={() => changeLanguage(lang)}
                      className='block w-full text-left px-4 py-2 text-xs sm:text-sm text-gray-700 hover:bg-gray-100'>
                      {lang}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Logout Button */}
            <button className='flex items-center px-3 sm:px-6 text-white cursor-pointer py-1.5 sm:py-2 rounded-full bg-[#2B153C] hover:bg-[#65358A26] hover:text-gray-900 border border-[#65358A26] focus:outline-none'>
              <span className='text-xs sm:text-sm'>Logout</span>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className='md:hidden fixed inset-0 top-[56px] sm:top-[64px] bg-white z-40'>
            <div className='px-2 pt-2 pb-3 space-y-1'>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  `block px-3 py-2 rounded-md text-base font-medium ${
                    isActive
                      ? 'bg-[#65358A26] text-[#2B153C]'
                      : 'text-gray-700 hover:bg-gray-100'
                  }`
                }>
                Home
              </NavLink>
              <NavLink
                to="/products"
                className={({ isActive }) =>
                  `block px-3 py-2 rounded-md text-base font-medium ${
                    isActive
                      ? 'bg-[#65358A26] text-[#2B153C]'
                      : 'text-gray-700 hover:bg-gray-100'
                  }`
                }>
                Products
              </NavLink>
              {/* Add more menu items as needed */}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
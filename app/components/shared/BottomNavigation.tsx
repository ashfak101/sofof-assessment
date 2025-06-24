import React, { useState } from 'react';
import { FaHome, FaShoppingCart, FaClipboardList, FaPhotoVideo, FaUser } from 'react-icons/fa';


const BottomNavigation = () => {
  const [activeTab, setActiveTab] = useState('home');

  const navItems = [
    { id: 'home', label: 'Home', icon: <FaHome size={20} />, path: '/' },
    { id: 'cart', label: 'Cart', icon: <FaShoppingCart size={20} />, path: '/cart' },
    { id: 'orders', label: 'Orders', icon: <FaClipboardList size={20} />, path: '/orders' },
    { id: 'media', label: 'Media', icon: <FaPhotoVideo size={20} />, path: '/media' },
    { id: 'profile', label: 'Profile', icon: <FaUser size={20} />, path: '/profile' },
  ];

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 flex justify-center">
      <div className="max-w-[492px] w-full bg-white border border-[#65358A14] shadow-[0px_-20px_100px_0px_#65358A1A]">
        <div className="flex justify-around items-center h-16">
          {navItems.map((item) => (
            <a
              href={item.path}
              key={item.id}
              onClick={() => setActiveTab(item.id)}
              className={`relative flex flex-col items-center justify-center h-full ${
                activeTab === item.id
                  ? 'text-[#65358A] w-[78px]'
                  : 'text-gray-500 w-full'
              }`}
            >
              {activeTab === item.id && (
                <div className="absolute inset-0 h-[64px] w-[78px] rounded-l-[32px] border-t border-b border-l border-[#65358A] opacity-30 bg-gradient-to-br from-[#65358A] to-transparent" />
              )}
              <div className="relative z-10">{item.icon}</div>
              <span className="relative z-10 text-xs mt-1">{item.label}</span>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BottomNavigation;
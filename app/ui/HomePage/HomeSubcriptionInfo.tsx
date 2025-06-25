import React from 'react';
import { FaStar } from 'react-icons/fa';
import { LuCircleCheckBig } from 'react-icons/lu';

const HomeSubcriptionInfo = () => {
  return (
    <div className='hidden md:block absolute w-full max-w-[305px] h-[180px] bg-gradient-to-r from-[#65358B] to-[#CFB4E4] px-12 py-6 rounded-br-[16px] rounded-tr-[16px] bottom-1/5'>
      <div className='flex items-center gap-2 text-white mb-2'>
        <FaStar className='text-amber-400' />
        <h3 className='text-white text-xl font-medium'>Premium</h3>
      </div>
      <p className='text-base font-medium text-white'>
        We have subscription, Do you want to subscribe?
      </p>
      <button
        className='mt-2 flex items-center gap-2 px-5 py-2 rounded-full text-white font-semibold text-base'
        style={{
          background:
            'linear-gradient(94.96deg, #65358A 0.14%, #2B153C 100.14%)',
        }}>
        <LuCircleCheckBig />
        Subscribe Now
      </button>
    </div>
  );
};

export default HomeSubcriptionInfo;

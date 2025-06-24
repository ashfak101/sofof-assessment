import React from 'react';

const MediaIcon = ({ ...props }) => {
  return (
    <svg
      width='32'
      height='32'
      viewBox='0 0 32 32'
      fill='none'
      { ...props }
      xmlns='http://www.w3.org/2000/svg'>
      <path
        d='M3.33301 16C3.33301 10.0289 3.33301 7.04336 5.18799 5.18836C7.04299 3.33337 10.0286 3.33337 15.9997 3.33337C21.9707 3.33337 24.9563 3.33337 26.8114 5.18836C28.6663 7.04336 28.6663 10.0289 28.6663 16C28.6663 21.9711 28.6663 24.9567 26.8114 26.8118C24.9563 28.6667 21.9707 28.6667 15.9997 28.6667C10.0286 28.6667 7.04299 28.6667 5.18799 26.8118C3.33301 24.9567 3.33301 21.9711 3.33301 16Z'
        stroke='currentColor'
        stroke-width='1.5'
      />
      <path
        d='M3.33301 9.33337H28.6663'
        stroke='currentColor'
        stroke-width='1.5'
        stroke-linejoin='round'
      />
      <path
        d='M3.33301 22.6666H28.6663'
        stroke='currentColor'
        stroke-width='1.5'
        stroke-linejoin='round'
      />
      <path
        d='M16 22.6667V9.33337'
        stroke='currentColor'
        stroke-width='1.5'
        stroke-linecap='round'
        stroke-linejoin='round'
      />
      <path
        d='M10.667 9.33333V4M21.3337 9.33333V4'
        stroke='currentColor'
        stroke-width='1.5'
        stroke-linecap='round'
        stroke-linejoin='round'
      />
      <path
        d='M10.667 28V22.6666M21.3337 28V22.6666'
        stroke='currentColor'
        stroke-width='1.5'
        stroke-linecap='round'
        stroke-linejoin='round'
      />
    </svg>
  );
};

export default MediaIcon;

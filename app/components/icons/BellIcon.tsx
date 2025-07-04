import React from 'react';

const BellIcon = ({ width = 20, ...props }) => {
  const height = (width * 20) / 20;
  return (
    <svg
      width={width}
      height={height}
      viewBox='0 0 20 20'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      {...props}>
      <path
        d='M7.49902 17.4991C8.16247 18.0168 9.03857 18.3315 9.99899 18.3315C10.9594 18.3315 11.8356 18.0168 12.499 17.4991'
        stroke='#222222'
        stroke-width='1.5'
        stroke-linejoin='round'
      />
      <path
        d='M16.2803 10.336V7.91187C16.2803 4.46376 13.4818 1.66852 10.0296 1.66852C6.5774 1.66852 3.77885 4.46376 3.77885 7.91187V10.336L2.11619 13.2054C2.09704 13.2385 2.10141 13.2791 2.12924 13.3053C4.54822 15.5817 12.5786 17.6041 17.8607 13.2882C17.8919 13.2627 17.9004 13.2182 17.8807 13.1831L16.2803 10.336Z'
        stroke='#222222'
        stroke-width='1.5'
      />
    </svg>
  );
};

export default BellIcon;

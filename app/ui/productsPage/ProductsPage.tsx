import React from 'react';
import { IoIosArrowDown } from 'react-icons/io';
import { Link } from 'react-router';
import DollarIcon from '~/components/icons/DollarIcon';
import ProductCard from '~/components/shared/ProductCard';
interface Product {
  id: number;
  name: string;
  product_subtitle: string;
  description: string;
  key_feature: string[];
  feature_image: string;
  image_gallery: string[];
  price: number;
  category: string;
  inStock: boolean;
}
const ProductsPage = ({ products }: { products: Product[] }) => {
  return (
    <div className='w-full max-w-[712px] px-4 sm:px-4 lg:px-0 mx-auto'>
      <div className='flex flex-col sm:flex-row items-start sm:items-center justify-between my-2 sm:my-4 gap-3 sm:gap-0'>
        <div className='flex items-center gap-2 sm:gap-4'>
          <div className='bg-[#F3EFF6] bg-opacity-70 rounded-full w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center cursor-pointer hover:bg-opacity-100'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='14'
              height='14'
              className='sm:w-5 md:w-6 sm:h-5 md:h-6'
              viewBox='0 0 24 24'
              fill='none'
              stroke='currentColor'
              strokeWidth='2'
              strokeLinecap='round'
              strokeLinejoin='round'>
              <path d='M15 18l-6-6 6-6' />
            </svg>
          </div>
          <h1 className='text-lg sm:text-xl md:text-2xl lg:text-[32px] xl:text-[40px] font-bold my-2 sm:my-4 md:my-6 text-[#222222] line-clamp-2 md:line-clamp-0'>
            Mecca mosques most needed
          </h1>
        </div>
        <button className='flex items-center gap-2 py-1.5 sm:py-2 px-2 sm:px-3 bg-[linear-gradient(94.96deg,_#65358A_0.14%,_#2B153C_100.14%)] text-white text-sm sm:text-base rounded-[24px] whitespace-nowrap cursor-pointer hover:shadow-lg hover:scale-105 transition-all duration-200 ease-in-out'>
          <DollarIcon /> SAR{' '}
          <IoIosArrowDown className='w-3 h-3 sm:w-4 sm:h-4' />
        </button>
      </div>
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4'>
        {products.map((product) => (
          <ProductCard product={product} key={product.id} />
        ))}
      </div>
    </div>
  );
};

export default ProductsPage;

import React, { useState } from 'react';
import { useNavigate } from 'react-router';
import { IoIosArrowBack, IoIosArrowDown } from 'react-icons/io';
import DollarIcon from '~/components/icons/DollarIcon';
import SimilarProducts from './SimilarProducts';

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

const ProductDetailPage = ({ product }: { product: Product }) => {
  const navigate = useNavigate();
  const [selectedImage, setSelectedImage] = useState(product.feature_image);

  return (
    <div className='w-full max-w-[712px] px-4 sm:px-4 lg:px-0 mx-auto pb-20'>
      {/* Back button and title */}
      <div className='flex  sm:flex-row items-start sm:items-center justify-between my-2 sm:my-4 gap-3 sm:gap-0'>
        <div className='flex items-center gap-2 sm:gap-4'>
          <div
            className='bg-[#F3EFF6] bg-opacity-70 rounded-full w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center cursor-pointer hover:bg-opacity-100'
            onClick={() => navigate('/products')}>
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
            Product Details
          </h1>
        </div>
        <button className='flex items-center gap-2 py-1.5 sm:py-2 px-2 sm:px-3 bg-[linear-gradient(94.96deg,_#65358A_0.14%,_#2B153C_100.14%)] text-white text-sm sm:text-base rounded-[24px] whitespace-nowrap cursor-pointer hover:shadow-lg hover:scale-105 transition-all duration-200 ease-in-out'>
          <DollarIcon /> SAR{' '}
          <IoIosArrowDown className='w-3 h-3 sm:w-4 sm:h-4' />
        </button>
      </div>
      {/* Product details - Grid container */}
      <div className=''>
        <div className='grid grid-cols-1 md:grid-cols-12 gap-6'>
          {/* Left column: Image section (5 parts) */}
          <div className='md:col-span-5 bg-[#F5F2F8] p-5 rounded-4xl'>
            {/* Main image */}
            <div className='bg-[#FFFFFF] rounded-xl p-4 mb-4'>
              <img
                src={selectedImage}
                alt={product.name}
                className='w-full h-auto rounded-lg object-contain mx-auto max-h-[400px]'
              />
            </div>

            {/* Image gallery */}
            <div className='relative'>
              <div className='flex gap-2 mb-6 md:mb-0 overflow-x-auto pb-2 max-w-[160px] mx-auto scrollbar-hide'>
                {[product.feature_image, ...product.image_gallery].map(
                  (image, index) => (
                    <div
                      key={index}
                      className={`min-w-[70px] h-[70px] flex-shrink-0 cursor-pointer bg-[#FFFFFF] rounded-xl p-1 `}
                      onClick={() => setSelectedImage(image)}>
                      <img
                        src={image}
                        alt={`${product.name} - view ${index + 1}`}
                        className='w-full h-full object-contain rounded-lg'
                      />
                    </div>
                  )
                )}
              </div>
            </div>
          </div>

          {/* Right column: Product information  */}
          <div className='md:col-span-7 space-y-4'>
            <div className=''>
              <div>
                <h2 className='text-2xl mb-4 font-medium text-[#222222]'>
                  {product.name}
                </h2>
                <p className='text-xl mb-5 text-[#616161]'>
                  {product.product_subtitle}
                </p>
              </div>
              <p className='text-xl font-bold text-[#222222]'>
                ﷼{product.price}
              </p>
              {/* Add to cart button */}
              <button
                className='bg-[#4C4C4C] text-white py-[10px] px-[16px] rounded-[18px] mt-4 font-medium hover:bg-opacity-90 transition-all duration-200 ease-in-out disabled:opacity-50 disabled:cursor-not-allowed'
                disabled={!product.inStock}>
                {product.inStock ? 'Add to Cart' : 'Out of Stock'}
              </button>
            </div>

            {/* Description */}
            <div>
              <h3 className='font-medium text-base mb-2 text-[#222222]'>
                Product Overview
              </h3>
              <p className='text-[#616161] text-base'>{product.description}</p>
            </div>

            {/* Key features */}
            <div>
              <h3 className='font-medium text-base mb-2 text-[#222222]'>
                Key Features
              </h3>
              <ul className='list-disc list-inside space-y-1'>
                {product.key_feature.map((feature, index) => (
                  <li key={index} className='text-[#616161] text-base'>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
      {/* Similar Product section */}
      <SimilarProducts />
    </div>
  );
};

export default ProductDetailPage;

import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
// Import required modules
import { Pagination, Navigation } from 'swiper/modules';

const HeroSection = () => {
  const carouselItems = [
    {
      id: 1,
      imageUrl: 'assets/images/slide-image-1.png', // Replace with your image URL
    },
    {
      id: 2,
      imageUrl: 'assets/images/slide-image-2.png',
    },
    {
      id: 3,
      imageUrl: 'assets/images/slide-image-1.png',
    },
    {
      id: 4,
      imageUrl: 'assets/images/slide-image-2.png',
    },
    {
      id: 5,
      imageUrl: 'assets/images/slide-image-1.png',
    },
  ];

  return (
    <div className='relative w-full h-[200px]  md:h-[200px] lg:h-[300px] overflow-hidden'>
      <Swiper
        slidesPerView={1.2}
        centeredSlides={false}
        initialSlide={0}
        spaceBetween={10}
        pagination={{
          clickable: true,
          dynamicBullets: true,
          bulletActiveClass: 'swiper-pagination-bullet-active-custom',
          bulletClass: 'swiper-pagination-bullet-custom',
        }}
        navigation={{
          nextEl: '.swiper-button-next-custom',
          prevEl: '.swiper-button-prev-custom',
        }}
        modules={[Pagination, Navigation]}
        className='h-full swiper-container-custom'
        loop={true}
        slideToClickedSlide={true}
        breakpoints={{
          320: {
            slidesPerView: 1.2,
            spaceBetween: 10,
          },
          480: {
            slidesPerView: 1.5,
            spaceBetween: 15,
          },
          640: {
            slidesPerView: 2.2,
            spaceBetween: 15,
          },
          768: {
            slidesPerView: 2.5,
            spaceBetween: 20,
          },
          1024: {
            slidesPerView: 3.2,
            spaceBetween: 20,
          },
          1280: {
            slidesPerView: 3.8,
            spaceBetween: 25,
          },
        }}>
        {carouselItems.map((item, index) => (
          <SwiperSlide key={item.id} className='swiper-slide-custom'>
            <div className='h-[200px]  transition-all duration-300'>
              <img
                src={item.imageUrl}
                alt={`Slide ${index + 1}`}
                loading='lazy'
                className='w-full  object-cover'
              />
            </div>
          </SwiperSlide>
        ))}

        {/* Custom navigation buttons */}
        <div className='swiper-button-prev-custom absolute left-2 sm:left-4 md:left-8 lg:left-16 top-[45%] z-10 transform -translate-y-1/2 bg-[#FFFFFFCC] bg-opacity-70 rounded-full w-8 h-8 md:w-10 md:h-10 flex items-center justify-center cursor-pointer hover:bg-opacity-100'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            width='16'
            height='16'
            className='md:w-6 md:h-6'
            viewBox='0 0 24 24'
            fill='none'
            stroke='currentColor'
            strokeWidth='2'
            strokeLinecap='round'
            strokeLinejoin='round'>
            <path d='M15 18l-6-6 6-6' />
          </svg>
        </div>

        <div className='swiper-button-next-custom absolute right-2 sm:right-4 md:right-8 lg:right-16 top-[45%] z-10 transform -translate-y-1/2 bg-[#FFFFFFCC] bg-opacity-70 rounded-full w-8 h-8 md:w-10 md:h-10 flex items-center justify-center cursor-pointer hover:bg-opacity-100'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            width='16'
            height='16'
            className='md:w-6 md:h-6'
            viewBox='0 0 24 24'
            fill='none'
            stroke='currentColor'
            strokeWidth='2'
            strokeLinecap='round'
            strokeLinejoin='round'>
            <path d='M9 18l6-6-6-6' />
          </svg>
        </div>

        {/* Pagination dots container */}
        <div className='swiper-pagination-custom absolute bottom-4 left-0 right-0 z-10 flex justify-center'></div>
      </Swiper>

      <style>{`
        .swiper-container-custom {
          overflow: visible;
          padding: 20px 0;
        }

        .swiper-slide-custom {
          transition: all 0.3s ease;
          opacity: 1;
          height: auto !important;
        }

        @media (max-width: 640px) {
          .swiper-slide-custom {
            height: 150px !important;
          }

          .swiper-container-custom {
            padding: 10px 0;
          }
        }

        @media (min-width: 641px) and (max-width: 1024px) {
          .swiper-slide-custom {
            height: 180px !important;
          }
        }

        @media (min-width: 1025px) {
          .swiper-slide-custom {
            width: calc(100% / 3.8) !important;
            height: 200px !important;
          }
        }

        .swiper-pagination-bullet-custom {
          width: 6px;
          height: 6px;
          margin: 0 3px;
          background-color: #ccc;
          opacity: 0.8;
          transition: all 0.2s ease;
          display: inline-block;
          border-radius: 50%;
          cursor: pointer;
        }

        @media (min-width: 768px) {
          .swiper-pagination-bullet-custom {
            width: 8px;
            height: 8px;
            margin: 0 4px;
          }
        }

        .swiper-pagination-bullet-active-custom {
          background-color: #65358A;
          width: 20px;
          height: 6px;
          border-radius: 3px;
          opacity: 1;
        }

        @media (min-width: 768px) {
          .swiper-pagination-bullet-active-custom {
            width: 32px;
            height: 8px;
            border-radius: 4px;
          }
        }
      `}</style>
    </div>
  );
};

export default HeroSection;

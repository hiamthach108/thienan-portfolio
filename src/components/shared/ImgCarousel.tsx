'use client';

import Image from 'next/image';

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

interface Props {
  images: string[];
}

const ImgCarousel = ({ images }: Props) => {
  return (
    <div className="w-full">
      <Swiper
        slidesPerView={1}
        spaceBetween={10}
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 20,
          },
        }}
        loop={true}
        autoplay={{
          delay: 1000,
          disableOnInteraction: false,
        }}
        onSlideChange={() => console.log('slide change')}
        onSwiper={(swiper) => console.log(swiper)}
      >
        {images.map((image, index) => (
          <SwiperSlide key={index} className="relative w-full h-auto aspect-video">
            <Image
              src={image}
              alt=""
              className="w-full h-72 object-cover object-center"
              fill={true}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ImgCarousel;

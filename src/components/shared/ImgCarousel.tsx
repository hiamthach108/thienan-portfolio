'use client';

import Image from 'next/image';

import { IconChevronLeft, IconChevronRight } from '@tabler/icons-react';
import React, { useRef, useState } from 'react';
import { Swiper, SwiperRef, SwiperSlide } from 'swiper/react';

interface Props {
  images: string[];
}

const ImgCarousel = ({ images }: Props) => {
  const [current, setCurrent] = useState(0);

  const swiperRef = useRef<SwiperRef>(null);

  const handleNextSlide = () => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slideNext();
    }
  };

  const handlePrevSlide = () => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slidePrev();
    }
  };

  return (
    <div className="w-full h-fit">
      <Swiper
        ref={swiperRef}
        slidesPerView={1}
        spaceBetween={10}
        loop={true}
        autoplay={{
          delay: 1000,
          disableOnInteraction: false,
        }}
        centeredSlides={true}
        tabIndex={current}
        onSlideChange={({ realIndex }) => setCurrent(realIndex)}
      >
        {images.map((image, index) => (
          <SwiperSlide key={index} className="w-full h-fit">
            <Image
              src={image}
              alt=""
              className="w-full h-auto aspect-video object-cover object-center rounded-img"
              width={600}
              height={400}
            />
          </SwiperSlide>
        ))}

        <div
          className="max-md:hidden absolute left-3 top-1/2 transform -translate-y-1/2 z-10 bg-white aspect-square w-[32px] rounded-full flex items-center justify-center cursor-pointer"
          onClick={handlePrevSlide}
        >
          <IconChevronLeft size={24} stroke={1.5} />
        </div>
        <div
          className="max-md:hidden absolute right-3 top-1/2 transform -translate-y-1/2 z-10 bg-white aspect-square w-[32px] rounded-full flex items-center justify-center cursor-pointer"
          onClick={handleNextSlide}
        >
          <IconChevronRight size={24} stroke={1.5} />
        </div>
      </Swiper>
    </div>
  );
};

export default ImgCarousel;

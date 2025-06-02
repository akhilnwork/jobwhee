'use client';
import React, { useRef } from 'react';
import ContractsSingle from './ContractsSingle';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import Image from 'next/image';

const HomePageContractSlider = () => {
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  return (
    <>
      <div className="contract-slider flex w-full xl:mt-5">
        <Swiper
          className="w-full"
          spaceBetween={0}
          slidesPerView={1}
          autoplay={{
            delay: 2500,
          }}
          breakpoints={{
            640: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            860: {
              slidesPerView: 2,
              spaceBetween: 12,
            },
            1200: {
              slidesPerView: 3,
              spaceBetween: 20,
            },
          }}
          modules={[Navigation]}
          navigation={{
            prevEl: prevRef.current,
            nextEl: nextRef.current,
          }}
          onBeforeInit={(swiper) => {
            swiper.params.navigation.prevEl = prevRef.current;
            swiper.params.navigation.nextEl = nextRef.current;
          }}
        >
          <SwiperSlide>
            <ContractsSingle />
          </SwiperSlide>
          <SwiperSlide>
            <ContractsSingle />
          </SwiperSlide>
          <SwiperSlide>
            <ContractsSingle />
          </SwiperSlide>
          <SwiperSlide>
            <ContractsSingle />
          </SwiperSlide>
        </Swiper>
      </div>
      <div className="absolute -bottom-20 left-1/2 z-10 flex -translate-x-1/2 gap-4">
        <button
          ref={prevRef}
          className="flex h-12 w-12 rotate-180 cursor-pointer items-center justify-center rounded-full bg-white shadow-lg"
        >
          <Image src="/arrow-slider.svg" alt="arrow" width={24} height={24} />
        </button>
        <button
          ref={nextRef}
          className="flex h-12 w-12 cursor-pointer items-center justify-center rounded-full bg-white shadow-lg"
        >
          <Image src="/arrow-slider.svg" alt="arrow" width={24} height={24} />
        </button>
      </div>
    </>
  );
};

export default HomePageContractSlider;

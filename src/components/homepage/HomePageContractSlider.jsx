"use client"

import ContractsSingle from "./ContractsSingle"
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

const HomePageContractSlider = () => {
  return (
    <div className="flex w-full contract-slider">
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
        navigation={true} modules={[Navigation]}
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
  )
}

export default HomePageContractSlider
'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import Image from 'next/image';
import bannerImage from '../../../public/young-woman-works-remotely-laptop-surrounded-by-plants.png';

// Import Swiper styles
import 'swiper/css';
const HomepageSlider = () => {
  return (
    <div className="relative w-full overflow-hidden">
      <Swiper
        className="h-[17.813rem] sm:h-[24.188rem] xl:h-[37.25rem] 2xl:h-[44.688rem]"
        pagination={true}
        modules={[Pagination]}
        spaceBetween={0}
        slidesPerView={1}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
      >
        <SwiperSlide>
          <Image
            src={bannerImage}
            fill={true}
            className="h-full object-cover"
            alt="Young woman works remotely laptop"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src={bannerImage}
            fill={true}
            className="h-full object-cover"
            alt="Young woman works remotely laptop"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src={bannerImage}
            fill={true}
            className="h-full object-cover"
            alt="Young woman works remotely laptop"
          />
        </SwiperSlide>
        ...
      </Swiper>
    </div>
  );
};

export default HomepageSlider;

import {
  HomeLeftSvg,
  HomeRightSvg,
} from '@/components/homepage/BannerOverlays';
import HomepageContracts from '@/components/homepage/HomepageContracts';
import HomePageContractSlider from '@/components/homepage/HomePageContractSlider';
import HomepageSlider from '@/components/homepage/HomepageSlider';
import SearchModule from '@/components/search/SearchModule';
import Image from 'next/image';

export default function Home() {
  return (
    <>
      <section className="banner-homwe relative mt-4 w-full">
        <div className="relative container mx-auto flex flex-col">
          <div className="clippedSlider h-[17.813rem] w-full sm:h-[24.188rem] xl:h-[37.25rem] 2xl:h-[44.688rem]">
            <HomepageSlider />
          </div>
          <div className="custom-shadow-box absolute top-64 bottom-auto left-1/2 z-50 flex h-10 w-52 -translate-x-1/2 items-center justify-center rounded-[60px] bg-white sm:top-auto xl:bottom-[1.9rem] 2xl:h-16 2xl:w-96 md:w-60 md:h-11 sm:bottom-0">
            <h3 className="justify-start text-xs leading-loose font-extrabold text-black uppercase 2xl:text-xl md:text-sm">
              Education and Tutoring
            </h3>
          </div>

          <HomeLeftSvg />
          <HomeRightSvg />
          <SearchModule />
        </div>
      </section>
      <section className="home-contracts mx-auto mt-8 pb-36">
        <div className="container mx-auto">
          <HomepageContracts />
          <HomePageContractSlider/>
        </div>
      </section>
    </>
  );
}

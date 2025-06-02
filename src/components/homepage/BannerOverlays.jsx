import Button from '../buttons/Button';

import Arrow from '../icons/Arrow';
<div className="h-40 w-[472.92px] rounded-3xl bg-neutral-500/5 backdrop-blur-[33.50px]" />;
const HomeLeftSvg = () => {
  return (
    <div className="static z-50 mx-auto mt-9 flex h-28 w-full max-w-72 overflow-hidden sm:absolute sm:top-7 sm:left-6 sm:mt-0 sm:w-[18.75rem] sm:max-w-[100%] xl:top-8 xl:left-8 xl:h-40 xl:w-[30rem] 2xl:top-10 2xl:left-10 2xl:h-48 2xl:w-[35.438rem]">
      <div className="relative h-full w-full">
        <div className="blackdrop absolute h-full w-full">
          <svg
            className="h-full w-full"
            width="568"
            fill="none"
            height="191"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 568 191"
            preserveAspectRatio="none"
          >
            <defs>
              <clipPath id="left-shape">
                <path d="M0,28C0,12.5,12.5,0,28,0h511.5c15.5,0,28,12.5,28,28v58.8c0,5.7-1.7,11.2-4.9,15.9l-52.4,76.2 c-5.2,7.6-13.9,12.1-23.1,12.1H28c-15.5,0-28-12.5-28-28V28z" />
              </clipPath>
            </defs>
            <foreignObject className="h-full w-full" x="0" y="0">
              <svg
                xmlns="http://www.w3.org/1999/xhtml"
                viewBox="0 0 568 191"
                style={{ clipPath: "url('#left-shape')" }}
                clipPath="url(#left-shape)"
                className="bg-treritary/50 h-full w-full sm:bg-transparent sm:backdrop-blur-2xl"
              >
                <rect
                  x="0"
                  y="0"
                  width="568"
                  height="191"
                  fill="none"
                  className="h-full w-full"
                />
              </svg>
            </foreignObject>
          </svg>
        </div>
        <div className="relative z-30 flex h-full w-full items-center justify-center bg-cover">
          <h2 className="xl:leading-[3.125rem] text-xl leading-relaxed font-extrabold text-white uppercase xl:text-3xl 2xl:text-4xl 2xl:leading-[3.813rem]">
            Find the <span className="text-primary-400">talent</span> sign up
            <br />& get The <span className="text-lime-300">job</span> done
          </h2>
        </div>
      </div>
    </div>
  );
};

<div className="w-96 h-32 origin-top-left rotate-180 bg-neutral-500/5 rounded-3xl backdrop-blur-[33.50px]" />

const HomeRightSvg = () => {
  return (
    <div className="static mx-auto mt-3 h-20 w-full max-w-72 rounded-3xl sm:absolute sm:top-28 sm:right-6 sm:mt-0 sm:h-20 sm:w-72 sm:max-w-[100%] md:w-[18.125rem] lg:h-28 2xl:top-30 2xl:right-[3.5rem] 2xl:z-50 2xl:h-36 2xl:w-[31rem] xl:w-[25.75rem] xl:h-32">
      <div className="relative h-full w-full">
        <div className="clippedRighttDiv relative z-30 bg-neutral-500/5 w-full h-full">
          <div className="flex h-full w-full items-center justify-center">
            <h2 className="text-xl xl:text-3xl xl:leading-[3.125rem] leading-[3.813rem] font-extrabold text-white uppercase 2xl:text-4xl pb-3 sm:pt-0">
              We &apos;ll <span className="text-primary-400">handle</span>
              that
            </h2>
          </div>
        </div>
        <div className="absolute right-4 bottom-[-1.375rem] z-30 flex gap-2.5 sm:right-[2.8rem] md:right-1 2xl:right-11 xl:right-4">
          <Button
            css="bg-primary-400  sm:min-w-44 w-44 h-10 text-xs xl:w-56 text-primary-900 lg:text-base"
            text="Sign Up for Contract"
          />
          <div className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-4xl bg-white lg:h-[3.188rem] lg:w-[3.188rem]">
            <Arrow type="block" direction="right" css="fill-black" />
          </div>
        </div>
        <div className="absolute top-0 left-0 h-full w-full">
          <svg
            width="497"
            height="145"
            viewBox="0 0 496.5 145"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="h-full w-full"
            preserveAspectRatio="none"
          >
            <defs>
              <clipPath id="right-shape">
                <path d="M496.5,117a28,28,0,0,1-28,28H28A28,28,0,0,1,0,117V83.3A27.7,27.7,0,0,1,7.3,64.5L57.4,9.2A28,28,0,0,1,78.2,0H468.5a28,28,0,0,1,28,28Z" />
              </clipPath>
            </defs>
            <foreignObject x="0" y="0" className="h-full w-full">
              <svg
                xmlns="http://www.w3.org/1999/xhtml"
                width="497"
                height="145"
                viewBox="0 0 497 145"
                style={{ clipPath: "url('#right-shape')" }}
                clipPath="url(#right-shape)"
                className="bg-treritary/50 h-full w-full sm:bg-transparent sm:backdrop-blur-2xl"
              >
                <rect
                  x="0"
                  y="0"
                  width="497"
                  height="145"
                  fill="none"
                  className="h-full w-full"
                />
              </svg>
            </foreignObject>
          </svg>
        </div>
      </div>
    </div>
  );
};

export { HomeLeftSvg, HomeRightSvg };

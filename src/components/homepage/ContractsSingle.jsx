import Image from 'next/image';
import Star from '../icons/Star';
import { cn } from '@/utils/cn';
const ContractsSingle = () => {
  return (
    <div className="relative mx-auto mt-8 min-h-40 w-full max-w-96 md:mx-0 md:max-w-full">
      <ContractsBg />
      <div className="flex w-full flex-col bg-[length:100%_100%] p-3">
        <div className="flex h-full w-full">
          <div className="flex w-5/12 justify-center">
            <h4 className="text-sm leading-tight font-black text-black sm:text-lg">
              CONTRACT
            </h4>
          </div>
          <div className="mr-2.5 flex w-7/12 flex-col items-end justify-end text-right">
            <h6 className="text-xs font-semibold text-black md:text-sm">
              Looking for Math Teacher
            </h6>
            <p className="text-[0.625rem] font-semibold md:text-xs">
              Payment Type: <span className="font-normal">Fixed Price</span>
            </p>
          </div>
        </div>
        <div className="mt-3 flex w-full gap-5">
          <ClientBlock type="Talent" />
          <ClientBlock type="Client" />
        </div>

        <div className="mt-4 flex flex-col sm:mt-5">
          <div className="flex items-center">
            <div className="relative mr-1.5 flex h-5 w-5 items-center justify-center rounded-full bg-black">
              <Image
                src="/description.svg"
                width="11"
                height="11"
                alt="Description"
                className="h-2.5 w-2.5"
              />
            </div>
            <div className="text-sm font-semibold text-black sm:text-base">
              Description
            </div>
          </div>
          <div className="mt-2.5 flex w-full">
            <p className="text-xs leading-tight font-normal text-zinc-700 sm:text-sm">
              We are looking for a teacher to provide one-on-one algebra and
              geometry tutoring, 60-minute sessions, twice weekly.
            </p>
          </div>
        </div>

        <div className="mt-4 flex flex-col sm:mt-5">
          <div className="flex items-center">
            <div className="relative mr-1.5 flex h-5 w-5 items-center justify-center rounded-full bg-black">
              <Image
                src="/job.svg"
                width="11"
                height="11"
                alt="Description"
                className="h-2.5 w-2.5"
              />
            </div>
            <div className="text-sm font-semibold text-black sm:text-base">
              Job Details
            </div>
          </div>
          <div className="mt-2.5 flex w-full flex-col">
            <div className="flex w-full">
              <div className="flex w-1/2 text-xs sm:text-sm">
                <span className="w-full font-semibold">Start Date: </span>
                <span className="w-full text-right font-normal text-zinc-700">
                  Jan 15, 2025.
                </span>
              </div>
              <div className="flex w-1/2 text-xs">
                <span className="w-full pl-[2%] font-semibold">Status: </span>
                <span className="w-full text-right font-normal text-zinc-700">
                  Ongoing
                </span>
              </div>
            </div>
            <div className="mt-1 flex w-full">
              <div className="flex w-1/2 text-xs">
                <span className="w-full font-semibold sm:text-sm">
                  End Date:{' '}
                </span>
                <span className="w-full text-right font-normal text-zinc-700">
                  Not Estimated
                </span>
              </div>
              <div className="flex w-1/2 text-xs">
                <span className="w-full pl-[2%] font-semibold">Budget: </span>
                <span className="w-full text-right font-normal text-zinc-700">
                  $ 2000
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-5 flex">
          <div className="relative w-full rounded-[0.625rem] bg-black p-3">
            <div className="w-full justify-start text-xs leading-tight font-normal text-white sm:text-sm xl:text-center">
              Fixed-priced contract under the protection of payment system.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export const ClientBlock = ({ type }) => {
  const css =
    type == 'Client'
      ? 'bg-primary-400 text-primary-800'
      : 'bg-grayBg text-black';
  return (
    <div className="flex h-full w-full flex-col rounded-[0.625rem] bg-[#F4F5F8] p-2.5">
      <div className="flex w-full">
        <div className="mr-1.5 flex h-12 w-12 min-w-12 overflow-hidden rounded-full border-stone-500">
          <Image src="/person-1.png" width={48} height={48} alt="Person" />
        </div>

        <div className="ml-auto flex w-full flex-col justify-end items-end sm:ml-0">
          <div
            className={cn(
              'flex h-6 w-20 items-center justify-center rounded-[3rem] text-center text-xs sm:w-full sm:text-sm max-w-24 lg:text-sm',
              css
            )}
          >
            {type}
          </div>
          <div className="mt-2 flex w-full justify-end">
            <Star />
            <span className="ml-1 text-xs font-bold text-black sm:text-sm">
              5.0
            </span>
          </div>
        </div>
      </div>
      <div className="mt-4 flex w-full flex-col">
        <h6 className="text-xs font-semibold sm:text-base">Edward Smith</h6>
        <p className="text-xs font-normal text-zinc-500 sm:text-sm">
          Founder of MathTech
        </p>
      </div>
    </div>
  );
};

export const ContractsBg = () => {
  return (
    <div className="absolute top-0 left-0 z-[-1] h-full w-full">
      <svg
        version="1.1"
        className="h-full w-full"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        x="0px"
        y="0px"
        viewBox="0 0 335 433"
        xmlSpace="preserve"
        preserveAspectRatio="none"
      >
        <path
          className="stroke stroke[#8BB1E1] fill-white"
          d="M335,22.5C335,10.1,324.9,0,312.5,0H169c-7.2,0-14,3.5-18.3,9.4L130.1,38c-4.2,5.9-11,9.4-18.3,9.4H22.5
	C10.1,47.3,0,57.4,0,69.8v340.7C0,422.9,10.1,433,22.5,433h290c12.4,0,22.5-10.1,22.5-22.5V22.5z"
        />
        <path
          className="stroke stroke[#8BB1E1] fill-white"
          d="M312.5,0.4H169c-7.1,0-13.8,3.4-18,9.2l-20.6,28.6c-4.3,6-11.2,9.5-18.6,9.5H22.5c-12.2,0-22.1,9.9-22.1,22.1
	v340.7c0,12.2,9.9,22.1,22.1,22.1h290c12.2,0,22.1-9.9,22.1-22.1v-388C334.6,10.3,324.7,0.4,312.5,0.4z"
        />
      </svg>
    </div>
  );
};

export default ContractsSingle;

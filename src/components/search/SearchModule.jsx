import SearchDropDown from './SearchDropDown';

const SearchModule = () => {
  return (
    <div className="static left-1/2 z-50 mx-auto mt-14 flex w-80 items-center justify-center sm:absolute sm:bottom-20 sm:mt-0 sm:w-115 sm:-translate-x-1/2 md:bottom-16 2xl:bottom-[8.438rem] xl:bottom-[7rem] 2xl:w-[34.6rem]">
      <div className="flex h-12 w-full rounded-[4.5rem] bg-white sm:h-14">
        <form className="flex h-full w-full items-center px-1">
          <button className="border-primary-400 flex h-10 w-10 items-center justify-center rounded-full border-2 bg-neutral-900 sm:h-12 sm:w-12">
            <svg
              width="26"
              height="26"
              viewBox="0 0 26 26"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
            >
              <path
                d="M22.0727 22.0727L18.0392 18.0392M20.0559 11.9889C20.0559 14.1284 19.206 16.1803 17.6932 17.6932C16.1803 19.206 14.1284 20.0559 11.9889 20.0559C9.8494 20.0559 7.79752 19.206 6.28466 17.6932C4.77179 16.1803 3.92188 14.1284 3.92188 11.9889C3.92188 9.8494 4.77179 7.79752 6.28466 6.28466C7.79752 4.77179 9.8494 3.92188 11.9889 3.92188C14.1284 3.92188 16.1803 4.77179 17.6932 6.28466C19.206 7.79752 20.0559 9.8494 20.0559 11.9889Z"
                stroke="white"
                strokeWidth="1.5"
                strokeMiterlimit="10"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
          <input
            type="text"
            placeholder="Find a job, talent or service"
            className="h-full flex-grow px-4 text-xs font-medium outline-none placeholder:text-neutral-500 sm:text-base"
          />
          <SearchDropDown />
        </form>
      </div>
    </div>
  );
};

export default SearchModule;

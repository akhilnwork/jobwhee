export default function () {
  return (
    <div className="flex w-full items-center justify-center xl:pt-5">
      <div className="relative">
        <div className="relative left-[1.125rem] justify-start text-center text-xl font-extrabold text-black sm:text-[1.625rem]">
          SUCCESSFUL
          <span className="after:bg-primary-400 relative after:absolute after:-bottom-1 after:left-0 after:h-0.5 after:w-full after:content-['']">
            CONTRACTS
          </span>
        </div>
        <div className="bg-primary-400 absolute top-2.5 -left-1.5 h-2.5 w-2.5 rounded-sm xl:rounded-[0.188rem] xl:w-3.5 xl:h-3.5"></div>
      </div>
    </div>
  );
}

'use client';
import React, { useState, useEffect, useRef } from 'react';
import Arrow from '../icons/Arrow';
import Talenticons from '../icons/Talenticons';
import { cn } from '@/lib/utils';

const SearchDropDown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);
  const showDropdown = isOpen ? 'flex' : 'hidden';

  return (
    <div className="relative h-10 w-20 sm:h-12 sm:w-32" ref={dropdownRef}>
      <div className="flex h-full w-full rounded-3xl border border-stone-300 bg-gray-100">
        <div
          className="flex w-full cursor-pointer items-center justify-center text-xs font-medium text-zinc-700 sm:text-sm"
          onClick={toggleDropdown}
        >
          Talent
          <div className="ml-1 overflow-hidden sm:ml-2">
            <Arrow type={'line'} css="fill-black " />
          </div>
        </div>
        <div
          className={cn(
            'absolute top-[3.4rem] right-0 w-60 rounded-xl bg-white text-black shadow-lg sm:right-auto sm:left-0',
            showDropdown
          )}
        >
          <ul className="w-full">
            <li className="pointer relative flex w-full cursor-pointer flex-col py-2 pl-10">
              <div className="icon absolute top-2 left-3 h-5.5 w-5.5">
                <Talenticons type="talent" />
              </div>
              <div className="mb-1.5 text-sm leading-tight font-medium">
                Talent
              </div>
              <div className="mb-2 w-full text-xs leading-none font-normal">
                Hire professionals effortlessly.
              </div>
            </li>
            <li className="relative flex w-full cursor-pointer flex-col py-2 pl-10">
              <div className="icon absolute top-2 left-3 h-5.5 w-5.5">
                <Talenticons type="client" />
              </div>
              <div className="mb-1.5 text-sm leading-tight font-medium">
                Client
              </div>
              <div className="mb-2 w-full text-xs leading-none font-normal">
                Apply to jobs posted by clients.
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default SearchDropDown;

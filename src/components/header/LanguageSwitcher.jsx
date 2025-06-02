'use client';
import React, { useState, useEffect, useRef } from 'react';
import Arrow from '../icons/Arrow';
import Flag from './Flag';
import { cn } from '@/lib/utils';

const LanguageSwitcher = () => {
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
    <div
      className="relative flex xl:h-14 cursor-pointer items-center justify-center rounded-[10rem] border border-white bg-transparent pr-[0.938rem] pl-[0.563rem] text-sm font-medium text-white md:w-24  md:h-10"
      ref={dropdownRef}
      onClick={toggleDropdown}
    >
      <Flag lang={'english'} /> <span className="pr-1.5 pl-2.5 uppercase">En</span>
      <Arrow type="line" direction="down" css="fill-white" />
      <ul
        className={cn(
          'absolute top-[3.75rem] left-1/2 z-50 h-auto w-[8.125rem] -translate-x-1/2 flex-col rounded-2xl border border-neutral-400/50 bg-black px-2 text-white shadow-lg',
          showDropdown
        )}
      >
        <li className="flex border-b border-b-neutral-400/50 py-2">
          <Flag lang={'english'} />
          <span className="pr-1.5 pl-2.5">English</span>
        </li>
        <li className="flex py-2">
          <Flag lang={'greek'} /> <span className="pr-1.5 pl-2.5">Greek</span>
        </li>
      </ul>
    </div>
  );
};

export default LanguageSwitcher;

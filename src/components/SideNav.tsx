import React, { useEffect, useRef, useState } from 'react';
import {
  MdHome,
  MdOutlineMenu,
  MdContactMail,
  MdArticle,
  MdComputer,
} from 'react-icons/md';

export function SideNav() {
  const [nav, setNav] = useState(false);
  const navRef = useRef<HTMLDivElement | null>(null);

  function handleNav() {
    setNav(!nav);
    console.log('side nav state change');
  }

  useEffect(() => {
    function handleClickOutside(event:MouseEvent): void {
      if (navRef.current && !navRef.current.contains(event.target as Node)) {
        setNav(false);
      }
    }

    if (nav) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [nav]);

  return (
    <div>
      {/* The menu icon for mobile view */}
      <MdOutlineMenu
        onClick={handleNav}
        className='absolute top-4 right-4 z-[99] md:hidden'
      />
      {nav ? (
        <div className='fixed w-full h-screen bg-white/90 flex flex-col justify-self-center items-center z-20'>
          {/* The items inside the menu */}
          <a
            onClick={handleNav}
            href='#main'
            className='w-3/4 flex justify-center items-center rounded-full shadow-md bg-gray-100 shadow-gray-500 m-2 p-4 cursor-pointer hover:scale-105 ease-in duration-200 '
          >
            <MdHome size={20} />
            <span className='pl-4'>Home</span>
          </a>
          <a
            href='#projects'
            className='w-1/2 flex justify-center items-center rounded-full shadow-md bg-gray-100 shadow-gray-500 m-2 p-4 cursor-pointer hover:scale-105 ease-in duration-200 '
          >
            <MdComputer size={20} />
            <span className='pl-4'>Projects</span>
          </a>
          <a
            href='#resume'
            className='w-1/2 flex justify-center items-center rounded-full shadow-md bg-gray-100 shadow-gray-500 m-2 p-4 cursor-pointer hover:scale-105 ease-in duration-200 '
          >
            <MdArticle size={20} />
            <span className='pl-4'>Resume</span>
          </a>
          <a
            href='#experience'
            className='w-1/2 flex justify-center items-center rounded-full shadow-md bg-gray-100 shadow-gray-500 m-2 p-4 cursor-pointer hover:scale-105 ease-in duration-200 '
          >
            <MdArticle size={20} />
            <span className='pl-4'>Experience</span>
          </a>
          <a
            href='#contact'
            className='w-1/2 flex justify-center items-center rounded-full shadow-md bg-gray-100 shadow-gray-500 m-2 p-4 cursor-pointer hover:scale-105 ease-in duration-200 '
          >
            <MdContactMail size={20} />
            <span className='pl-4'>Contact</span>
          </a>
        </div>
      ) : (
        <div />
      )}
      <div className='md:block hidden fixed top-1/4 z-10 space-y-4'>
        <div className='flex flex-col gap-8'>
          <a
            href='#main'
            className='rounded-full shadow-md bg-gray-100 shadow-gray-500 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200 '
          >
            <MdHome size={15} />
          </a>
          <a
            href='#projects'
            className='rounded-full shadow-md bg-gray-100 shadow-gray-500 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200 '
          >
            <MdComputer size={15} />
          </a>
          <a
            href='#resume'
            className='rounded-full shadow-md bg-gray-100 shadow-gray-500 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200 '
          >
            <MdArticle size={15} />
          </a>
          <a
            href='#contact'
            className='rounded-full shadow-md bg-gray-100 shadow-gray-500 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200 '
          >
            <MdContactMail size={15} />
          </a>
        </div>
      </div>
    </div>
  );
}

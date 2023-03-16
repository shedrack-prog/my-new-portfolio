import { BsArrowBarRight } from 'react-icons/bs';
import { FaTimes } from 'react-icons/fa';
import { CiLinkedin, CiTwitter } from 'react-icons/ci';
import { AiFillGithub } from 'react-icons/ai';
import { SiGmail } from 'react-icons/si';

import Link from 'next/link';
import { useState } from 'react';

const Header = () => {
  const [open, setOpen] = useState(false);
  return (
    <div
      id="top"
      className="flex items-center bg-black h-[60px] px-4 border-gray-700 border-b-[1px]"
    >
      <div className="flex justify-between items-center text-white w-full">
        <div className="text-white flex items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            className="w-[40px]"
          >
            <path
              fill="none"
              stroke="#841dc9"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="1.5"
              d="m3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75L12 13.5H3.75Z"
            />
          </svg>
          <span>Shedrack Tobiloba</span>
        </div>
        <div
          className={`md:hidden ${
            open
              ? 'rotate-180 transition-all duration-150'
              : 'transition-all duration-150'
          }`}
          onClick={() => {
            setOpen((prev) => !prev);
          }}
        >
          <BsArrowBarRight size={25} />
        </div>
        {/* sidebar right here */}
        <div
          className={` w-[250px] transition-all 
          duration-150  top-0 fixed z-50 h-screen bg-black 
          ${open ? 'left-0' : 'left-[-300px]'}`}
        >
          <div className="flex items-center justify-between px-2 h-[60px] border-b-2 border-gray-900">
            <div className="flex items-center ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                className="w-[40px]"
              >
                <path
                  fill="none"
                  stroke="#841dc9"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.5"
                  d="m3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75L12 13.5H3.75Z"
                />
              </svg>
              <span className="">Shedrack Tobiloba</span>
            </div>
            <FaTimes
              onClick={() => {
                setOpen((prev) => !prev);
              }}
              className="text-[22px]"
            />
          </div>
          <ul className="mt-[2rem] flex flex-col px-4 gap-5">
            <li
              className="text-[20px] text-gray-400 "
              onClick={() => {
                setOpen((prev) => !prev);
              }}
            >
              <a href="#home">Home</a>
            </li>
            <li
              className="text-[20px] text-gray-400 "
              onClick={() => {
                setOpen((prev) => !prev);
              }}
            >
              <a href="#about">About</a>
            </li>
            <li
              className="text-[20px] text-gray-400 "
              onClick={() => {
                setOpen((prev) => !prev);
              }}
            >
              <a href="#projects">Projects</a>
            </li>
            <li
              className="text-[20px] text-gray-400 "
              onClick={() => {
                setOpen((prev) => !prev);
              }}
            >
              <a href="#services">Services</a>
            </li>
            <li
              className="text-[20px] text-gray-400 "
              onClick={() => {
                setOpen((prev) => !prev);
              }}
            >
              <a href="#contact">Contact</a>
            </li>
          </ul>

          <span
            className="flex justify-between items-center px-2 py-3
          mt-[2rem] mx-auto bg-[#16191b] w-[80%]  rounded-lg"
          >
            <p className="text-gray-400 font-semibold">Appearance</p>

            <div className="p-[0.5rem] bg-[#e5e7eb1a] rounded-md">
              <BsArrowBarRight className={'rotate-180 transition-all'} />
            </div>
          </span>
        </div>
        <div className="hidden md:flex gap-6 items-center justify-center">
          <div className="flex text-gray-300 gap-4 items-center justify-center">
            <a href="#home" className="hover:text-gray-400">
              Home
            </a>
            <a href="#about" className="hover:text-gray-400">
              About
            </a>
            <a href="#projects" className="hover:text-gray-400">
              Projects
            </a>
            <a href="#services" className="hover:text-gray-400">
              Services
            </a>
            <a href="#contact" className="hover:text-gray-400">
              Contact
            </a>
          </div>
          <div className="flex items-center justify-center gap-3">
            <a href="#">
              <CiTwitter size={22} />
            </a>
            <a href="#">
              <AiFillGithub size={22} />
            </a>
            <a href="#">
              <SiGmail size={20} />
            </a>
            <a href="#">
              <CiLinkedin size={23} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;

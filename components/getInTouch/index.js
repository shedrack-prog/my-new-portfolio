import { inTouchData } from '@/data';
import Image from 'next/image';
import Link from 'next/link';
// import React from 'react';

export default function GetInTouch() {
  return (
    <div className="flex flex-col gap-[3.2rem] items-center justify-center md:mt-[6rem] mt-[4rem]">
      <div className="mt-[1rem]">
        <h1 className="text-4xl text-white">
          Let's get{' '}
          <span className="bg-gradient-to-r bg-clip-text from-purple-400 via-sky-300 to-purple-600 background-animate text-transparent">
            intouch
          </span>
        </h1>
      </div>
      <div className="flex flex-wrap gap-4 md:gap-6 items-center justify-center md:px-[6rem] px-5 text-white ">
        {inTouchData.map((item) => (
          <Link
            href={item.link}
            className="bg-[#242424] flex flex-col p-3 md:min-h-[300px] rounded-md md:max-w-[300px] max-w-[300px]"
          >
            <span
              className="text-[1.6rem] p-2 rounded-md
            mb-4 bg-[#313131] w-[18%] grid place-items-center"
            >
              <Image src={item.img} className="rounded-md bg-black" />
            </span>
            <h1 className="text-[1.5rem] font-bold">{item.name}</h1>
            <p className="font-semibold mt-2">{item.text}</p>
          </Link>
        ))}
      </div>
      <div className="text-white text-sm text-center px-3 mt-[2rem]">
        Created by{' '}
        <span className="bg-gradient-to-r animate-pulse bg-clip-text from-purple-400 via-sky-300 to-purple-600 background-animate text-transparent">
          Shedrach Tobiloba{' '}
        </span>{' '}
        ✨. All rights reserved @ 2023
      </div>
    </div>
  );
}

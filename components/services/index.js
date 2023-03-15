import { servicesData } from '@/data';
import React from 'react';
import { AiOutlineFileSearch } from 'react-icons/ai';
import { GiArrowScope, GiFlagObjective } from 'react-icons/gi';
import { BiTestTube } from 'react-icons/bi';

export default function Services() {
  return (
    <div className="flex mt-[3rem] md:mt-[5rem] flex-col lg:px-[6rem] items-center justify-center">
      <div className="">
        <h1 className="text-4xl mb-4 text-white">
          Services I{' '}
          <span
            className="bg-gradient-to-r bg-clip-text from-purple-400
            text-4xl via-sky-300 to-purple-600 background-animate text-transparent"
          >
            Offer
          </span>{' '}
        </h1>
      </div>

      <div
        className="flex flex-wrap items-center 
      gap-6 px-6 text-white justify-center"
      >
        {servicesData.map((item, i) => (
          <div
            className="flex flex-col  max-w-[300px]
          bg-[#242424]  justify-center rounded-md mt-5 px-3 py-3"
          >
            {i === 0 ? (
              <span
                className="text-[1.6rem] p-2 rounded-md
             mb-4 bg-[#313131] w-[17%] text-center"
              >
                <AiOutlineFileSearch size={32} fill="purple" />
              </span>
            ) : i === 1 ? (
              <span
                className="text-[1.6rem] p-2 rounded-md
             mb-4 bg-[#313131] w-[17%] text-center"
              >
                <GiFlagObjective size={32} fill="purple" />
              </span>
            ) : i === 2 ? (
              <span
                className="text-[1.6rem] p-2 rounded-md
             mb-4 bg-[#313131] w-[17%] text-center"
              >
                <GiArrowScope size={32} fill="purple" />
              </span>
            ) : (
              <span
                className="text-[1.6rem] p-2 rounded-md
             mb-4 bg-[#313131] w-[17%] text-center"
              >
                <BiTestTube size={32} fill="purple" />
              </span>
            )}
            <h1 className="text-[1.3rem] font-bold md:text-[1.5rem]">
              {item.title}
            </h1>
            <p className="mt-[1rem] leading-6 md:text-[13px] text-[15px] font-semibold">
              {item.text}{' '}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

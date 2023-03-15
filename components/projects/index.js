import { projectsData } from '@/data';
import React from 'react';
import Image from 'next/image';
import { BsArrowRightShort } from 'react-icons/bs';

const Project = () => {
  return (
    <div
      className="text-white mt-[8rem] px-[4rem] flex flex-col
     justify-center justify-self-center"
    >
      <div className="flex items-center justify-center">
        <h1 className="text-4xl text-white">
          My{' '}
          <span className="bg-gradient-to-r bg-clip-text from-purple-400 via-sky-300 to-purple-600 background-animate text-transparent">
            projects
          </span>
        </h1>
      </div>
      <div className="flex flex-wrap items-center mt-[4rem] gap-6 md:gap-8 px-6 justify-center">
        {projectsData.map((item, i) => (
          <div
            key={i}
            className=" flex flex-col items-center bg-[#242424] md:max-w-[350px]
          rounded-md px-2 md:px-4"
          >
            <div className=" mt-6 mb-4">
              <Image src={item.img} alt="" />
              <p className="text-xl lg:text-[1.3rem] mt-4 font-extrabold">
                {item.name}
              </p>
            </div>
            <div className="text-[17px] font-semibold leading-6 mb-3">
              <p className="mb-3 md:text-sm text-sm">{item.text}</p>
              <div className="flex gap-3 mt-6">
                <span className="text-xl">Stack: </span>
                {item.stacks.map((stack, i) => (
                  <Image
                    key={i}
                    src={stack.img}
                    alt=""
                    className="w-[33px] h-[33px] rounded-full object-cover"
                  />
                ))}
              </div>
              <div className="flex items-center justify-center gap-4 mt-4">
                <span
                  className="flex items-center justify-center gap-3 bg-[#313131] rounded-md px-5 py-3
                 md:py-2 md:px-2"
                >
                  <a
                    className="text-purple-700 text-[18px] md:text-[15px]"
                    href={item.link}
                  >
                    Preview
                  </a>
                  <BsArrowRightShort size={26} className="text-purple-700" />
                </span>
                <span className="flex  md:py-2 md:px-2 items-center justify-center gap-3 bg-[#313131] rounded-md px-5 py-3 ">
                  <a
                    className="text-purple-700  md:text-[15px] text-[18px]"
                    href={item.github}
                  >
                    Github
                  </a>
                  <BsArrowRightShort size={26} className="text-purple-700" />
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Project;

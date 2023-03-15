import { procedureData } from '@/data';
import React from 'react';

export default function Procedure() {
  return (
    <div className="flex flex-col mt-[4rem] md:mt-[7rem] items-center justify-center">
      <div>
        <h1 className="text-4xl text-white">
          My{' '}
          <span className="bg-gradient-to-r bg-clip-text from-purple-400 via-sky-300 to-purple-600 background-animate text-transparent">
            Procedures
          </span>
        </h1>
      </div>
      <div className="mt-[4rem] px-5 p-3 flex gap-10 flex-wrap items-center justify-center">
        {procedureData.map((item, i) => (
          <div
            key={i}
            className="md:max-w-[300px] max-w-[300px] flex flex-col justify-center"
          >
            <h1 className="text-[3.5rem] md:text-[3.6rem] font-bold text-purple-700">
              {item.num}
            </h1>
            <div>
              <h1 className="text-white text-[2rem] font-bold">{item.title}</h1>
              <p className="text-gray-300 mt-[1.2rem]">{item.text}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

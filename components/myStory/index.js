import { myStoryData } from '@/data';
import React from 'react';
import css3Logo from '../../public/images/css3.svg';
import ExpreesLogo from '../../public/images/Expressjs.png';
import Nodejs from '../../public/images/NodeJS.png';
import MongoDB_Logo from '../../public/images/MongoDB_Logo.png';
import React_native from '../../public/images/React_Native_Logo.png';
import javascript from '../../public/images/javascript.png';
import React_icon from '../../public/images/React-icon.svg';
import Html5 from '../../public/images/Html5.svg';
import Redux_Logo from '../../public/images/Redux_Logo.png';
import Tailwind from '../../public/images/Tailwind.svg';
import Image from 'next/image';

const MyStory = () => {
  return (
    <div
      id="about"
      className="text-white text-center mt-[4rem] md:px-[3rem] px-[2rem]"
    >
      <div>
        <h1 className="text-4xl text-white">
          My{' '}
          <span className="bg-gradient-to-r bg-clip-text from-purple-400 via-sky-300 to-purple-600 background-animate text-transparent">
            story
          </span>
        </h1>

        <div className="mt-10 flex flex-wrap gap-4 items-center justify-center">
          <div
            className="rounded-md  bg-[#242424] text-left 
           py-5 px-3  max-w-[300px] sm:min-h-[60vh] "
          >
            <span
              className="text-[1.6rem] p-2 rounded-md
            mb-4 bg-[#313131]"
            >
              ⚡
            </span>
            <h1 className="mt-3 text-lg font-bold">About me</h1>
            <p className="font-semibold text-sm sm:text-[13px]">
              My name is Shedrack Tobiloba, a Full-Stack Developer born in the
              great land of Nigeria and raised in the great city of Lagos. My
              interest in Technology started back in 2012 when I was a young boy
              trying to comprehend how the internet works. Ever since then I
              have admired the complexity of the Internet.
            </p>
          </div>
          <div className="rounded-md sm:text-[13px] sm:min-h-[60vh]  max-w-[300px] md: bg-[#242424] text-left  py-5 px-3 ">
            <span
              className="text-[1.6rem] p-2 rounded-md
            mb-4 bg-[#313131]"
            >
              💹
            </span>
            <h1 className="mt-3 text-lg font-bold">How can I help</h1>
            <p className="font-semibold text-sm">
              I help to modernize and innovate businesses by tackling complex
              technological challenges. I have the technical know-how and
              knowledge to provide your business with the full spectrum of web
              services such as Hosting, SEO, Web Development, Mobile App
              development and Testing.
            </p>
          </div>
          <div className="rounded-md sm:text-[13px] sm:min-h-[60vh] max-w-[300px] md: bg-[#242424] text-left  py-5 px-3 ">
            <span
              className="text-[1.6rem] p-2 rounded-md
            mb-4 bg-[#313131]"
            >
              🚀
            </span>
            <h1 className="mt-3 text-lg font-bold">My mission</h1>
            <p className="font-semibold text-sm">
              My mission is to translate user-focused designs into pixel-perfect
              websites and applications that run blazingly fast and to help your
              business and company thrive by helping you build the best products
              in the market that will generate more revenue, income, and turn
              your ideas into real life products.
            </p>
          </div>
        </div>

        {/* My tech stacks */}

        <div className="  styles_ticker__ps147 mt-[4rem] md:px-[5rem]">
          <h1 className="text-4xl mb-4">
            My{' '}
            <span
              className="bg-gradient-to-r bg-clip-text from-purple-400
            text-4xl via-sky-300 to-purple-600 background-animate text-transparent"
            >
              TechStack
            </span>{' '}
          </h1>
          <div
            className="flex  gap-10 styles_slideToLeft__skudD 
          items-center  mt-[2rem] px-[7rem]  "
          >
            <Image
              src={Nodejs}
              alt=""
              className="w-[7rem] p-2 object-contain"
            />
            <Image
              src={MongoDB_Logo}
              alt=""
              className="w-[7rem] p-2 object-contain"
            />
            <Image
              src={javascript}
              alt=""
              className="w-[7rem] h-[40px] p-2 object-contain"
            />
            <Image src={css3Logo} alt="" className="w-[7rem] h-[40px]  p-2" />
            <Image src={React_icon} alt="" className="w-[7rem] p-2 h-[40px]" />
            <Image
              src={React_native}
              alt=""
              className="w-[7rem] p-2 h-[40px] object-contain"
            />
            <Image
              src={Redux_Logo}
              alt=""
              className="w-[7rem] p-2 object-contain"
            />
            <Image
              src={Tailwind}
              alt=""
              className="w-[7rem] object-contain h-[60px] p-2"
            />
            <Image
              src={Html5}
              alt=""
              className="w-[7.5rem] p-2 h-[70px] object-contain"
            />
            <Image
              src={ExpreesLogo}
              alt=""
              className="w-[7rem] p-2 object-contain"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyStory;

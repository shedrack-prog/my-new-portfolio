import React from 'react';

const Hero = () => {
  return (
    <div
      id='home'
      className='mt-[3rem] flex items-center justify-center mx-auto sm:px-[3rem] md:px-[6rem] px-6'
    >
      <div className='text-white grid place-items-center'>
        <div
          className='bg-gradient-to-r bg-clip-border text-center from-purple-600
         via-[#508cda] to-purple-800 p-[2px] background-animate rounded-full '
        >
          <div className='bg-[#0E101] rounded-full py-1 px-8 text-center'>
            <a href='mailto:usheddy07@gmail.com' className='text-white'>
              Available for hire🚀. Hire me
            </a>
          </div>
        </div>
        <div className=''>
          <div
            className='text-white font-inter tracking-wide text-[20px] px-3 
            grid place-items-center mt-6'
          >
            <div className='text-center font-bold md:text-[2.4rem]'>
              Focus on running your{' '}
              <span
                className='
              bg-gradient-to-r bg-clip-text from-purple-400 via-sky-300 to-purple-600
                text-transparent animate-pulse'
              >
                business
              </span>
              , while I focus on{' '}
              <span
                className='
              bg-gradient-to-r bg-clip-text from-purple-400 via-sky-300 to-purple-600
                text-transparent animate-pulse'
              >
                growing
              </span>{' '}
              your business
            </div>
          </div>
        </div>
        <p className='text-center text-gray-400 mt-[1.4rem] sm:text-[13px] md:text-[18px] md:px-[7rem]'>
          I combine
          <span className='text-white font-semibold'>
            {' '}
            creativity{' '}
          </span> and{' '}
          <span className='text-white font-semibold'>
            process driven development{' '}
          </span>{' '}
          to create innovative products for businesses and companies
        </p>
        <div className='flex flex-col md:flex-row items-center mt-8 gap-4 sm:mt-8'>
          <a
            href='#about'
            className='px-4 text-center text-white  bg-purple-600
          hover:bg-purple-700 py-1.5 rounded-md w-48'
          >
            Get Started
          </a>
          <a
            href='https://drive.google.com/file/d/1piVsEfUzhz_azzL9toiR1WR5GKLt3CyZ/view?usp=sharing'
            className='py-1 text-center px-4 w-52 rounded-md border border-purple-500
          hover:border-purple-700 hover:bg-purple-700'
          >
            Resume
          </a>
        </div>
      </div>
      <a
        href='#top'
        className='fixed z-50 right-2 bottom-2 md:bottom-[3rem] md:right-[3rem] '
      >
        <svg
          xmlns='http://www.w3.org/2000/svg'
          viewBox='0 0 24 24'
          className='w-[40px]'
        >
          <path
            fill='#841dc9'
            stroke='#841dc9'
            stroke-linecap='round'
            stroke-linejoin='round'
            stroke-width='1.5'
            d='m3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75L12 13.5H3.75Z'
          />
        </svg>
      </a>
    </div>
  );
};

export default Hero;

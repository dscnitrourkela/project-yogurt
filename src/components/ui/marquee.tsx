import React from 'react';

import Image from 'next/image';

import { globeLogo } from '@/config/testimonials';

import ScrollVelocity from '../testimonials/scrollvelocity';

const ScrollMarquee = () => {
  return (
    <div className="relative w-full border overflow-x-clip">
      <div className="w-full bg-black text-white relative z-10">
        <ScrollVelocity
          texts={[
            <div key="student-run" className="flex items-center">
              <Image
                src={globeLogo}
                alt="Globe Logo"
                width={400}
                height={400}
                className="h-8 w-8 ml-4 2xl:ml-6 inline-block"
              />
              <span className="ml-4 2xl:ml-6 uppercase font-bold font-averta-std text-xl lg:text-3xl inline-block">
                student run
              </span>
            </div>,
          ]}
          velocity={-100}
          className="flex items-center h-16"
        />
      </div>
      <div className="absolute top-1/2 -translate-y-1/2 -left-5 -rotate-12 lg:-rotate-[8deg] bg-[#0617B0] text-white w-[110%]">
        <ScrollVelocity
          texts={[
            <div key="biggest-hackathon" className="flex items-center">
              <Image
                src={globeLogo}
                alt="Globe Logo"
                width={400}
                height={400}
                className="h-8 w-8 ml-4 2xl:ml-6 inline-block"
              />
              <span className="ml-4 2xl:ml-6 uppercase font-bold font-averta-std text-xl lg:text-3xl py-3 inline-block">
                biggest hackathon
              </span>
            </div>,
          ]}
          velocity={100}
          className="flex items-center h-16"
        />
      </div>
    </div>
  );
};

export default ScrollMarquee;

'use client';
import React from 'react';
import { text, textItems } from '@/config/gallery/background';
import { ParallaxScroll } from '../ui/parallax-scroll';
import { GALLERY_PARALLAX_IMAGES } from '@/config/gallery/parallax';
import Typography from '../Typography';

export default function Gallery() {
  const overlay = (
    <div className="w-full max-w-screen px-4 sm:px-[5vw] pt-24 md:pt-32 lg:pt-50 pb-28 md:pb-36 lg:pb-50 relative z-10">
      <div className="grid grid-cols-[auto_1fr_auto] items-start gap-4 sm:gap-6 md:gap-12 lg:gap-20">
        {/* Left Column */}
        <div className="flex flex-col items-center justify-center pt-2 md:pt-4 lg:pt-18">
          <div className="relative w-[clamp(2rem,6vw,6rem)] h-[clamp(2rem,6vw,6rem)]">
            <div className="absolute top-0 left-[40%] w-[clamp(0.8rem,2.5vw,2.75rem)] h-[clamp(0.8rem,3vw,2.75rem)] bg-[#EAEAEA]" />
            <div className="absolute bottom-0 right-[60%] w-[clamp(0.8rem,2.5vw,2.75rem)] h-[clamp(0.8rem,3vw,2.75rem)] bg-[#EAEAEA]" />
          </div>
        </div>

        {/* Middle Content */}
        <div className="flex flex-col items-center text-center max-w-[1000px] mx-auto px-1 sm:px-2">
          <div className="mb-6 sm:mb-10 lg:mb-14 w-full px-1 sm:px-2">
            <Typography.H2
              className="font-wc-rough-trad text-white leading-[0.95] tracking-tight 
                         text-[clamp(3rem,9vw,9rem)]
                         sm:text-[clamp(5rem,8vw,10rem)] 
                         md:text-[clamp(5rem,8vw,10rem)] 
                         lg:text-[clamp(5rem,7.5vw,10rem)] 
                         xl:text-[clamp(6rem,6.5vw,12rem)]
                         flex flex-col gap-[0.1em] sm:gap-[0.1em] md:gap-[0.1em] lg:gap-[0.1em] pt-[1.2em] md:pt-[1.2em] lg:pt-[1.2em]"
            >
              <span className="block">HOW'S THE</span>
              <span className="block">JOURNEY</span>
              <span className="block">SO FAR</span>
            </Typography.H2>
          </div>
          <Typography.P
            className="text-white font-averta-std font-normal leading-[1.4] 
            text-[clamp(0.8rem,2.3vw,1.5rem)] max-w-[65ch] mx-auto px-2 sm:px-4 lg:pb-[0.5em]"
          >
            {text.desc}
          </Typography.P>
        </div>

        {/* Right Column */}
        <div className="flex items-center justify-center font-averta-std pt-2 md:pt-4 lg:pt-18">
          <div className="flex flex-col items-center gap-1 sm:gap-2 xl:gap-5">
            {textItems.map((item, index) => (
              <div key={index} className="flex flex-col items-center">
                {item.text.split('').map((char, charIndex) => (
                  <div
                    key={charIndex}
                    className={`text-[#E2E2E2] text-center 
                      text-[clamp(0.4rem,1.2vw,0.9rem)] 
                      leading-snug ${item.isBold ? 'font-bold' : 'font-light'}`}
                  >
                    {char}
                  </div>
                ))}
              </div>
            ))}
            <div className="w-4 h-4 sm:w-6 sm:h-6 lg:w-8 lg:h-8 xl:w-[3vw] xl:h-[3vw] bg-[#EAEAEA] mt-1 sm:mt-2 xl:mt-4" />
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="relative w-full -z-10 bg-[#181818] pt-100 pb-100">
      <ParallaxScroll images={GALLERY_PARALLAX_IMAGES} overlay={overlay} />
    </div>
  );
}

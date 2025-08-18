'use client';
import React from 'react';
import Image from 'next/image';
import {
  GALLERY_BACKGROUND,
  text,
  textItems,
} from '@/config/gallery/background';
import { ParallaxScroll } from '../ui/parallax-scroll';
import { GALLERY_PARALLAX_IMAGES } from '@/config/gallery/parallax';

export default function Gallery() {
  const overlay = (
    <div className="flex flex-row px-[5vw] py-[15vh] z-10 relative">
      {/* Left Column */}
      <div className="flex flex-col h-[25dvh] justify-between pt-5 -mt-8 sm:mt-0 flex-shrink-0">
        <div className="relative w-[clamp(4rem,8vw,6.75rem)] h-[clamp(4rem,8vw,6.75rem)] mx-auto">
          <div className="absolute top-0 left-[40%] w-[clamp(2rem,3vw,3.38rem)] h-[clamp(2rem,4vw,3.38rem)] bg-[#EAEAEA]" />
          <div className="absolute bottom-0 right-[60%] w-[clamp(2rem,3vw,3.38rem)] h-[clamp(2rem,4vw,3.38rem)] bg-[#EAEAEA]" />
        </div>
      </div>

      {/* Middle Content */}
      <div className="flex-1 mx-auto p-2 xl:p-4 w-full max-w-[620px]">
        <div className="relative w-full h-[34vh] sm:h-[46vh] md:h-[52vh] lg:h-[55vh]">
          <Image
            src={GALLERY_BACKGROUND.image2}
            alt="gallery background"
            fill
            style={{ objectFit: 'contain' }}
            priority
          />
        </div>
        <p className="mt-3 lg:mt-8 text-white text-center font-averta-std text-[20px] sm:text-[24px] leading-[125%] font-normal max-w-[60ch] mx-auto px-3">
          {text.desc}
        </p>
      </div>

      {/* Right Column */}
      <div className="flex items-center justify-center font-averta-std px-[2vw] flex-shrink-0 z-10">
        <div className="flex flex-col items-center gap-2 xl:gap-5">
          {textItems.map((item, index) => (
            <div key={index} className="flex flex-col items-center">
              {item.text.split('').map((char, charIndex) => (
                <div
                  key={charIndex}
                  className={`text-[#E2E2E2] text-center text-[1.7vw] sm:text-[1.2vw] md:text-[0.9vw] leading-snug ${
                    item.isBold ? 'font-bold' : 'font-light'
                  }`}
                >
                  {char}
                </div>
              ))}
            </div>
          ))}
          <div className="w-8 h-8 xl:w-[3vw] xl:h-[3vw] bg-[#EAEAEA] mt-2 xl:mt-4" />
        </div>
      </div>
    </div>
  );

  return (
    <div className="relative w-full -z-10 bg-[#181818]">
      <ParallaxScroll images={GALLERY_PARALLAX_IMAGES} overlay={overlay} />
    </div>
  );
}

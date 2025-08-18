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
    <div className="flex flex-col items-center text-center">
      {/* Pinned Heading */}
      <h1 className="text-white font-averta-std font-bold text-[8vw] sm:text-[5vw] md:text-[4vw] leading-tight">
        HOW IT WAS LAST YEAR
      </h1>

      {/* Background image inside heading area */}
      <div className="relative w-full max-w-[600px] h-[40vh] sm:h-[50vh] mt-6">
        <Image
          src={GALLERY_BACKGROUND.image2}
          alt="gallery background"
          fill
          className="object-contain"
          priority
        />
      </div>

      {/* Supporting description */}
      <p className="mt-6 text-white text-[16px] sm:text-[20px] md:text-[22px] leading-snug max-w-[65ch] px-3">
        {text.desc}
      </p>

      {/* Side stacked words (mobile friendly: stacked below) */}
      <div className="mt-6 flex flex-wrap justify-center gap-4">
        {textItems.map((item, index) => (
          <div key={index} className="flex">
            {item.text.split('').map((char, i) => (
              <span
                key={i}
                className={`text-[#E2E2E2] text-[16px] sm:text-[20px] md:text-[22px] ${
                  item.isBold ? 'font-bold' : 'font-light'
                }`}
              >
                {char}
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <div className="relative w-full bg-[#181818]">
      <ParallaxScroll images={GALLERY_PARALLAX_IMAGES} overlay={overlay} />
    </div>
  );
}

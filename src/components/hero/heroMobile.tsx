import React from 'react';

import Image from 'next/image';

import {
  measurementData,
  textElements,
  textItems,
} from '@/config/hero/heroMobile';

import Typography from '../Typography';

export const HeroMobile = React.memo(() => {
  return (
    <div className="w-full overflow-hidden">
      <div className="flex flex-col">
        {/* Top Section */}
        <div className="flex flex-row justify-between items-center gap-10 mx-auto pt-4 pb-[4svh]">
          <div className="text-black text-center text-[3vw] font-light font-averta-std leading-[5vw] tracking-widest">
            LARGEST STUDENT
            <br />
            RUN HACKATHON
          </div>
          <div className="w-[16vw] h-[16vw] ">
            <div className="w-[8vw] h-[8vw] ml-[8vw] bg-[#EAEAEA]"></div>
            <div className="w-[8vw] h-[8vw]  bg-[#EAEAEA]"></div>
          </div>
        </div>

        {/* Main */}
        <div className="relative w-[100vw] pt-[37.09%] lg:pt-[39.09%] ">
          <div className="absolute top-0 left-0 w-[100vw] h-full ">
            {/* Measurement Lines */}
            {measurementData.lines.map((line) => {
              if (line.isSvg) {
                return (
                  <div key={line.id} className="absolute" style={line.style}>
                    <Image
                      src={line.src}
                      alt=""
                      fill
                      className="object-cover"
                    />
                  </div>
                );
              } else {
                return (
                  <div
                    key={line.id}
                    className="absolute bg-[#C7C7C7]"
                    style={line.style}
                  />
                );
              }
            })}

            {textElements.map((textEl) => {
              const TypographyComponent =
                Typography[textEl.type as keyof typeof Typography];
              return (
                <div
                  key={textEl.id}
                  className="absolute transform translate-x-1/2"
                  style={textEl.style}
                >
                  <TypographyComponent
                    className={`text-center mb-0 ${textEl.className}`}
                  >
                    {textEl.component}
                  </TypographyComponent>
                </div>
              );
            })}

            {/* Measurement Labels */}
            {measurementData.labels.map((item) => (
              <div
                key={item.id}
                className="absolute text-[#3a3a3a] text-right whitespace-nowrap font-museo transform -translate-x-1/2 -translate-y-1/2"
                style={{
                  fontWeight: 300,
                  letterSpacing: '3.01px',
                  fontSize: item.isSmall
                    ? 'clamp(0.5rem, 1.5vw, 0.75rem)'
                    : 'clamp(0.7rem, 2vw, 1rem)',
                  lineHeight: '1.4',
                  ...item.style,
                }}
              >
                {item.label}
              </div>
            ))}
          </div>
        </div>

        {/* Vertical Text on the Right */}
        <div className="absolute top-[18.85%] left-[90%] flex-shrink-0">
          <div className="flex flex-col items-center gap-[2.2vw] font-averta-std">
            {textItems.map((item) => (
              <div key={item.id} className="flex flex-col items-center">
                {item.text.split('').map((char, charIndex) => (
                  <div
                    key={`${item.id}-${charIndex}`}
                    className={`text-black text-center text-base leading-snug text-[clamp(0.5rem,1.7vw,5rem)] ${
                      item.isBold ? 'font-bold' : 'font-light'
                    }`}
                  >
                    {char}
                  </div>
                ))}
              </div>
            ))}
            <div className="w-[6vw] h-[6vw] bg-[#EAEAEA] mt-2 xl:mt-4" />
          </div>
        </div>
        <div className="mt-[50%] font-sketch-block text-[3.85vw] text-center">
          November <span className="text-[#0534C7]">1st–2nd</span>, 2025 | NIT
          Rourkela
        </div>
      </div>
    </div>
  );
});

HeroMobile.displayName = 'HeroMobile';

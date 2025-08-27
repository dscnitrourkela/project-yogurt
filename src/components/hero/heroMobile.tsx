import React from 'react';
import Typography from '../Typography';
import Image from 'next/image';
import {
  measurementData,
  textElements,
  textItems,
} from '@/config/hero/heroMobile';

export const HeroMobile = React.memo(() => {
  return (
    <div className="w-full">
      <div className="flex flex-col ">
        {/* Top Section */}
        <div className="flex flex-row justify-between items-center gap-10 mx-auto pt-8 pb-18">
          <div className="text-black text-center text-sm xl:text-base font-light font-averta-std leading-[22.4px] tracking-widest">
            LARGEST STUDENT
            <br />
            RUN HACKATHON
          </div>
          <div className="w-20 h-20 xl:w-[6.75rem] xl:h-[6.75rem]">
            <div className="w-10 h-10 xl:w-[3.38rem] xl:h-[3.38rem] ml-10 xl:ml-[3.38rem] bg-[#EAEAEA]"></div>
            <div className="w-10 h-10 xl:w-[3.38rem] xl:h-[3.38rem] bg-[#EAEAEA]"></div>
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
        <div className="absolute top-[16%] left-[90%] flex-shrink-0">
          <div className="flex flex-col items-center gap-4 font-averta-std">
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
      </div>
    </div>
  );
});

HeroMobile.displayName = 'HeroMobile';

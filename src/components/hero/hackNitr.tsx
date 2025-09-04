import React from 'react';

import Image from 'next/image';

import {
  measurementData,
  textElements,
  textItems,
} from '@/config/hero/heroDesktop';

import Typography from '../Typography';
import { DevfolioButton } from '@/components';

const filesToKeepAsImages = ['line-132.svg', 'line-134.svg', 'line-133.svg'];

export const HackNitr = () => {
  return (
    <div className="w-full overflow-hidden ">
      <div className="flex flex-row px-[5vw]">
        {/* Left Column */}
        <div className="flex flex-col h-[25dvh] justify-between  flex-shrink-0">
          <div className="text-black text-center text-[1vw]  font-light font-averta-std leading-[1.5vw] tracking-widest">
            LARGEST STUDENT
            <br />
            RUN HACKATHON
          </div>
          <div className="relative w-[8vw] h-[8vw] mx-auto">
            <div className="absolute top-0 left-[40%] w-[4vw] h-[4vw] bg-[#EAEAEA]" />
            <div className="absolute bottom-0 right-[60%] w-[4vw] h-[4vw] bg-[#EAEAEA]" />
          </div>
        </div>

        {/* Center Column */}
        <div className="flex-1  mx-auto ">
          <div className="relative w-full" style={{ paddingTop: '37.09%' }}>
            <div className="absolute top-0 -left-5 w-full h-full">
              {/* Measurement Lines */}
              {measurementData.lines.map((line, index) => {
                if (
                  filesToKeepAsImages.some((fileName) =>
                    line.src.includes(fileName)
                  )
                ) {
                  return (
                    <Image
                      key={`line-img-${index}`}
                      src={line.src || '/placeholder.svg'}
                      alt={`Measurement line ${index + 1}`}
                      style={{ position: 'absolute', ...line.style }}
                      className="object-cover"
                      width={0}
                      height={0}
                    />
                  );
                } else {
                  return (
                    <div
                      key={`line-div-${index}`}
                      style={{
                        position: 'absolute',
                        backgroundColor: '#C7C7C7',
                        ...line.style,
                      }}
                    />
                  );
                }
              })}

              {textElements.map((textEl, index) => {
                const TypographyComponent =
                  Typography[textEl.type as keyof typeof Typography];
                return (
                  <div
                    key={`text-${index}`}
                    className="absolute "
                    style={textEl.style}
                  >
                    <TypographyComponent
                      className={`text-center ${textEl.className} `}
                    >
                      {textEl.component}
                    </TypographyComponent>
                  </div>
                );
              })}

              {/* Measurement Labels */}
              {measurementData.labels.map((item, index) => (
                <div
                  key={`label-${index}`}
                  className="absolute text-[#3a3a3a] text-right whitespace-nowrap font-museo transform -translate-x-1/2 -translate-y-1/2"
                  style={{
                    fontWeight: 300,
                    letterSpacing: '3.01px',
                    fontSize: item.isSmall ? '1.1vw' : '1.1vw',
                    lineHeight: '1.4',
                    ...item.style,
                  }}
                >
                  {item.label}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Column */}
        <div className="flex items-center justify-center font-averta-std px-[2vw] flex-shrink-0">
          <div className="flex flex-col items-center gap-2 xl:gap-5">
            {textItems.map((item, index) => (
              <div key={index} className="flex flex-col items-center">
                {item.text.split('').map((char, charIndex) => (
                  <div
                    key={charIndex}
                    className={`
                      text-black text-center text-[0.9vw]  leading-snug
                      ${item.isBold ? 'font-bold' : 'font-light'}
                    `}
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
      <div className="-mt-[1vw] font-sketch-block text-[1.85vw] text-center mb-3">
        November <span className="text-[#0534C7]">1st–2nd</span>, 2025 | NIT
        Rourkela
      </div>
      <DevfolioButton />
    </div>
  );
};

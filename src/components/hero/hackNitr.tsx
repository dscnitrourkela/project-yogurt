import React from 'react';
import Typography from '../Typography';
import Image from 'next/image';
import {
  measurementData,
  textElements,
  textItems,
} from '@/config/hero/heroDesktop';

const filesToKeepAsImages = ['line-132.svg', 'line-134.svg', 'line-133.svg'];

export const HackNitr = () => {
  return (
    <div className="w-full overflow-hidden ">
      <div className="flex flex-row px-[5vw]">
        {/* Left Column */}
        <div className="flex flex-col h-[25dvh] justify-between pt-5  flex-shrink-0">
          <div className="text-black text-center text-[1vw]  font-light font-averta-std leading-[22.4px] tracking-widest">
            LARGEST STUDENT
            <br />
            RUN HACKATHON
          </div>
          <div className="relative w-[clamp(4rem,8vw,6.75rem)] h-[clamp(4rem,8vw,6.75rem)] mx-auto">
            <div className="absolute top-0 left-[40%] w-[clamp(2rem,3vw,3.38rem)] h-[clamp(2rem,4vw,3.38rem)] bg-[#EAEAEA]" />
            <div className="absolute bottom-0 right-[60%] w-[clamp(2rem,3vw,3.38rem)] h-[clamp(2rem,4vw,3.38rem)] bg-[#EAEAEA]" />
          </div>
        </div>

        {/* Center Column */}
        <div className="flex-1  mx-auto p-2 xl:p-4">
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
                    className="absolute transform -translate-x-1/2 -translate-y-1/2"
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
    </div>
  );
};

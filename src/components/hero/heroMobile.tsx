import React from 'react';
import Typography from '../Typography';
import Image from 'next/image';

const measurementData = {
  lines: [
    {
      id: 'l1',
      src: 'line-121.svg',
      style: { width: '78%', height: '1px', top: '21%', left: '10%' },
    },
    {
      id: 'l2',
      src: 'line-124.svg',
      style: { width: '78%', height: '1px', top: '75%', left: '10%' },
    },
    {
      id: 'l3',
      src: 'line-121.svg',
      style: { width: '78%', height: '1px', top: '95%', left: '10%' },
    },
    {
      id: 'l4',
      src: 'line-124.svg',
      style: { width: '78%', height: '1px', top: '150%', left: '10%' },
    },
    {
      id: 'l5',
      src: 'line-123.svg',
      style: { width: '1px', height: '210%', top: '0%', left: '84%' },
    },
    {
      id: 'l6',
      src: 'line-123.svg',
      style: { width: '1px', height: '170%', top: '1.9%', left: '18%' },
    },
    {
      id: 'l7',
      src: 'line-126.svg',
      style: { width: '24%', height: '1px', top: '162%', left: '62%' },
    },
    {
      id: 'l8',
      src: 'line-126.svg',
      style: { width: '24%', height: '1px', top: '200%', left: '62%' },
    },
    {
      id: 'l9',
      src: 'line-128.svg',
      style: { width: '1px', height: '51%', top: '158%', left: '64%' },
    },
    {
      id: 'l10',
      src: '/lines/line-132.svg',
      style: { width: '66.3%', height: '4.1%', top: '6.5%', left: '18%' },
      isSvg: true,
    },
    {
      id: 'l11',
      src: '/lines/line-133.svg',
      style: { width: '2.5%', height: '35.4%', top: '164.2%', left: '86.5%' },
      isSvg: true,
    },
    {
      id: 'l12',
      src: '/lines/line-133.svg',
      style: { width: '1.5%', height: '20.4%', top: '75.2%', left: '10.5%' },
      isSvg: true,
    },
  ],
  labels: [
    { id: 'lb1', label: '20cm', style: { top: '0%', left: '51.9%' } },
    {
      id: 'lb2',
      label: '0.5cm',
      style: { top: '85.4%', left: '6.1%' },
      isSmall: true,
    },
    { id: 'lb3', label: '5cm', style: { top: '183.6%', left: '96%' } },
  ],
};

const textElements = [
  {
    id: 'te1',
    component: 'Hack',
    style: { top: '6%', left: '-14.5%' },
    className: 'font-sketch-block font-normal text-primary text-[24.6vw]',
    type: 'Display',
  },
  {
    id: 'te2',
    component: 'NITR',
    style: { top: '80%', left: '-2%' },
    className: 'font-grutch-shaded font-normal text-[20vw]',
    type: 'Display',
  },
  {
    id: 'te3',
    component: '7.0',
    style: { top: '150%', left: '53.5%' },
    className: 'font-sketch-block font-normal text-[17vw]',
    type: 'H1',
  },
];

const textItems = [
  { id: 'ti1', text: 'THINK', isBold: false },
  { id: 'ti2', text: 'BUILD', isBold: true },
  { id: 'ti3', text: 'DISRUPT', isBold: false },
];

export const HeroMobile = React.memo(() => {
  return (
    <div className="w-full">
      <div className="flex flex-col ">
        {/* Top Section */}
        <div className="flex flex-row justify-between items-center gap-10 mx-auto pt-5 pb-18">
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
        <div className="relative w-full" style={{ paddingTop: '37.09%' }}>
          <div className="absolute top-0 left-0 w-full h-full">
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

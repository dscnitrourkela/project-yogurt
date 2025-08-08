import React from 'react';
import Typography from '../Typography';
import Image from 'next/image';

const measurementData = {
  lines: [
    {
      src: 'line-121.svg',
      style: { width: '78%', height: '1px', top: '21%', left: '10%' },
    },
    {
      src: 'line-124.svg',
      style: { width: '78%', height: '1px', top: '75%', left: '10%' },
    },
    {
      src: 'line-121.svg',
      style: { width: '78%', height: '1px', top: '95%', left: '10%' },
    },
    {
      src: 'line-124.svg',
      style: { width: '78%', height: '1px', top: '150%', left: '10%' },
    },
    {
      src: 'line-123.svg',
      style: { width: '1px', height: '210%', top: '0%', left: '84%' },
    },
    {
      src: 'line-123.svg',
      style: { width: '1px', height: '170%', top: '1.9%', left: '18%' },
    },

    {
      src: 'line-126.svg',
      style: { width: '24%', height: '1px', top: '162%', left: '62%' },
    },
    {
      src: 'line-126.svg',
      style: { width: '24%', height: '1px', top: '200%', left: '62%' },
    },
    {
      src: 'line-128.svg',
      style: { width: '1px', height: '51%', top: '158%', left: '64%' },
    },

    {
      src: '/lines/line-132.svg',
      style: { width: '66.3%', height: '4.1%', top: '6.5%', left: '18%' },
    },
    {
      src: '/lines/line-133.svg',
      style: { width: '2.5%', height: '35.4%', top: '164.2%', left: '86.5%' },
    },
    {
      src: '/lines/line-133.svg',
      style: { width: '1.5%', height: '20.4%', top: '75.2%', left: '10.5%' },
    },
  ],
  labels: [
    { label: '20cm', style: { top: '0%', left: '51.9%' } },
    { label: '0.5cm', style: { top: '85.4%', left: '6.1%' }, isSmall: true },
    { label: '5cm', style: { top: '183.6%', left: '96%' } },
  ],
};

const textElements = [
  {
    component: 'Hack',
    style: { top: '0%', left: '-15%' },
    className: 'font-sketch-block font-normal text-primary text-[23vw] ',
    type: 'Display',
  },
  {
    component: 'NITR',
    style: { top: '75%', left: '-9%' },
    className: 'font-grutch-shaded font-normal text-[21vw]',
    type: 'Display',
  },
  {
    component: '7.0',
    style: { top: '150%', left: '55%' },
    className: 'font-sketch-block font-normal text-[15vw] ',
    type: 'H1',
  },
];

const textItems = [
  { text: 'THINK', isBold: false },
  { text: 'BUILD', isBold: true },
  { text: 'DISRUPT', isBold: false },
];

const filesToKeepAsImages = ['line-132.svg', 'line-134.svg', 'line-133.svg'];

export const HeroMobile = () => {
  return (
    <div className="w-full overflow-hidden">
      {/* Desktop Layout */}
      <div className="flex flex-col px-4 min-h-screen">
        {/* Left Column */}
        <div className="flex flex-row md:flex-col pb-18 justify-between gap-10 mx-auto pt-5 ">
          <div className="text-black text-center text-sm xl:text-base font-light font-averta-std leading-[22.4px] tracking-widest">
            LARGEST STUDENT
            <br />
            RUN HACKATHON
          </div>
          <div className="w-20 h-20 xl:w-[6.75rem] xl:h-[6.75rem] mx-auto">
            <div className="w-10 h-10 xl:w-[3.38rem] xl:h-[3.38rem] ml-10 xl:ml-[3.38rem] bg-[#EAEAEA]"></div>
            <div className="w-10 h-10 xl:w-[3.38rem] xl:h-[3.38rem] bg-[#EAEAEA]"></div>
          </div>
        </div>

        {/* Center Column */}
        <div className="flex-1 max-w-5xl ">
          <div className="relative " style={{ paddingTop: '37.09%' }}>
            <div className="absolute top-0 left-0 w-full h-full">
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

              {/* Text Elements - Positioned with same percentage system */}
              {textElements.map((textEl, index) => {
                const TypographyComponent = Typography[textEl.type];
                return (
                  <div
                    key={`text-${index}`}
                    className="  absolute transform translate-x-1/2"
                    style={textEl.style}
                  >
                    <TypographyComponent
                      className={`text-center  mb-0 ${textEl.className}`}
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

        <div className="flex items-center justify-center  absolute top-[16%] left-[90%] font-averta-std  flex-shrink-0 ">
          <div className="flex flex-col items-center gap-4">
            {textItems.map((item, index) => (
              <div key={index} className="flex flex-col items-center">
                {item.text.split('').map((char, charIndex) => (
                  <div
                    key={charIndex}
                    className={`
                      text-black text-center text-base leading-snug text-[clamp(0.5rem,2vw,5rem)]
                      ${item.isBold ? 'font-bold' : 'font-light'}
                    `}
                  >
                    {char}
                  </div>
                ))}
              </div>
            ))}
            <div className="w-7 h-7  bg-[#EAEAEA] mt-2 xl:mt-4" />
          </div>
        </div>
      </div>
    </div>
  );
};

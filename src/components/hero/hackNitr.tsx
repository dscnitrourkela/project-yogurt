import React from 'react';
import Typography from '../Typography';
import Image from 'next/image';

const measurementData = {
  lines: [
    {
      src: 'line-121.svg',
      style: { width: '77%', height: '1px', top: '25.3%', left: '11%' },
    },
    {
      src: 'line-124.svg',
      style: { width: '77%', height: '1px', top: '57.3%', left: '11%' },
    },
    {
      src: 'line-123.svg',
      style: { width: '1px', height: '66.8%', top: '0%', left: '84%' },
    },
    {
      src: 'line-123.svg',
      style: { width: '1px', height: '66.8%', top: '1.9%', left: '14.7%' },
    },
    {
      src: 'line-130.svg',
      style: { width: '1px', height: '73.9%', top: '0.8%', left: '47.6%' },
    },
    {
      src: 'line-130.svg',
      style: { width: '1px', height: '73.9%', top: '0.8%', left: '50.6%' },
    },
    {
      src: 'line-126.svg',
      style: { width: '11.5%', height: '1px', top: '86.4%', left: '74%' },
    },
    {
      src: 'line-126.svg',
      style: { width: '11.5%', height: '1px', top: '68.5%', left: '74%' },
    },
    {
      src: 'line-128.svg',
      style: { width: '1px', height: '26.9%', top: '63.3%', left: '75%' },
    },
    {
      src: 'line-128.svg',
      style: { width: '1px', height: '26.9%', top: '63.3%', left: '84%' },
    },
    {
      src: '/lines/line-132.svg',
      style: { width: '33.2%', height: '4.1%', top: '13.3%', left: '50.8%' },
    },
    {
      src: '/lines/line-134.svg',
      style: { width: '2.9%', height: '1.9%', top: '70.6%', left: '47.7%' },
    },
    {
      src: '/lines/line-132.svg',
      style: { width: '32.8%', height: '4.1%', top: '6.5%', left: '14.8%' },
    },
    {
      src: '/lines/line-133.svg',
      style: { width: '1.5%', height: '17.4%', top: '69.2%', left: '84.5%' },
    },
  ],
  labels: [
    { label: '20cm', style: { top: '5%', left: '31%' } },
    { label: '25cm', style: { top: '11%', left: '67.3%' } },
    { label: '0.5cm', style: { top: '78%', left: '49.5%' }, isSmall: true },
    { label: '5cm', style: { top: '78%', left: '89%' } },
  ],
};

const textElements = [
  {
    component: 'Hack',
    style: { top: '48%', left: '31%' },
    className: 'font-sketch-block font-normal text-primary',
    type: 'Display',
  },
  {
    component: 'NITR',
    style: { top: '43%', left: '67.5%' },
    className: 'font-grutch-shaded font-normal',
    type: 'Display',
  },
  {
    component: '7.0',
    style: { top: '82%', left: '79.5%' },
    className: 'font-sketch-block font-normal',
    type: 'H1',
  },
];

const textItems = [
  { text: 'THINK', isBold: false },
  { text: 'BUILD', isBold: true },
  { text: 'DISRUPT', isBold: false },
];

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

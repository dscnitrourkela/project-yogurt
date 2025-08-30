'use client';

import React, { useEffect, useRef, useState } from 'react';

import { motion, useScroll, useTransform } from 'motion/react';
import Image from 'next/image';

import { svgs } from '@/config/timeline';
import { cn } from '@/lib/utils';

import Typography from '../Typography';

function Event({
  eventNumber,
  title,
  duration,
  description,
  className,
}: {
  className?: string | undefined;
  alignmentStyle?: { top: string; left: string } | undefined;
  eventNumber: number;
  title: string;
  duration: string;
  description: string;
}) {
  const ref = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start 60%', 'end 60%'],
  });

  const color = useTransform(scrollYProgress, [0, 0.4], ['#ADADAD', '#000000']);

  const { border } = svgs;
  const [isLgScreen, setIsLgScreen] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsLgScreen(window.innerWidth >= 864);
    };

    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);

    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  return (
    <>
      <div
        ref={ref}
        className={cn(
          'flex  lg:flex-row w-full max-w-[380px] sm:max-w-[540px] lg:max-w-[480px] xlg:max-w-[680px] xl:max-w-[750px] 2xl:max-w-[850px]  items-start',
          isLgScreen ? className : undefined
        )}
      >
        <div className=" sm:self-start  ">
          <motion.h2
            style={{ color }}
            className="  font-sketch-block font-normal text-[70px]  sm:text-[100px]  md:text-[130px] lg:text-[130px] xlg:text-[200px] xl:text-[220px] 2xl:text-[280px] leading-[120%] text-[#ADADAD]  tracking-[6px]"
          >
            {eventNumber}
          </motion.h2>
        </div>
        <div className=" lg:py-4 px-2 sm:px-6 flex flex-col">
          <Typography.H5
            className=" text-[#0617B0] leading-none pt-2 lg:pt-0 sm:leading-10 font-semibold
          text-base     sm:text-xl lg:text-xl xlg:text-3xl 2xl:text-4xl "
          >
            {title}
          </Typography.H5>
          <Image
            src={border.link}
            alt={border.alt}
            width={0}
            height={0}
            className="w-[54vw] "
          />
          <div className=" mt-3">
            <Typography.H6 className=" text-base sm:text-lg font-semibold text-[#454545] leading-none sm:leading-7">
              {duration}
            </Typography.H6>
            <Typography.P className="text-sm sm:text-base  font-normal text-[#454545] leading-none sm:leading-7">
              {description}
            </Typography.P>
          </div>
        </div>
      </div>
    </>
  );
}

export default Event;

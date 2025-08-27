'use client';
import { cn } from '@/lib/utils';
import { motion, MotionValue } from 'framer-motion';
import React from 'react';
import { useState, useEffect } from 'react';
import { svgs } from '@/config/timeline';
import Image from 'next/image';
const transition = {
  duration: 0,
  ease: 'linear' as const,
};

export const TimelineEffect = ({
  pathLengths,
  className,
}: {
  pathLengths: MotionValue[];
  className?: string;
}) => {
  const { pencil: PencilIcon, robot: RobotIcon } = svgs;

  const [isheight, setIsheight] = useState(0);
  const [isWidth, setIsWidth] = useState(0);
  useEffect(() => {
    const checkHeight = () => {
      setIsheight(window.innerHeight);
    };
    const checkWidth = () => {
      setIsWidth(window.innerWidth);
    };
    checkWidth();
    checkHeight();
    window.addEventListener('resize', checkWidth);
    window.addEventListener('resize', checkHeight);
    return () => (
      window.removeEventListener('resize', checkWidth),
      window.removeEventListener('resize', checkHeight)
    );
  }, []);

  return (
    <div
      className={cn(
        'relative mx-20 lg:top-32 xlg:top-40 xl:top-48 2xl:top-60 xl:mx-40 ',
        className
      )}
    >
      <Image
        src={PencilIcon.link}
        alt={PencilIcon.alt}
        width={0}
        height={0}
        className="   absolute lg:h-36 lg:w-36  xl:h-48 xl:w-48 
        2xl:h-56 2xl:w-56
        lg:-top-[118px] xlg:-top-[116px] xl:-top-[156px] 2xl:-top-[180px] lg:-left-[106px] xlg:-left-[104px] xl:-left-[145px] 2xl:-left-[164px] "
      ></Image>
      <Image
        src={RobotIcon.link}
        alt={RobotIcon.alt}
        height={0}
        width={0}
        className={cn(
          'absolute lg:h-60 lg:w-40 xl:w-50 xl:h-76',

          'lg:top-[42vw] xlg:top-[48vw] xl:top-[44vw] 2xl:top-[50vw]  ',
          'lg:-right-[7%] xl:-right-[14%] 2xl:-right-[7%] ',

          isheight > 800 && isheight < 1064 ? 'xl:-right-[6%]' : ''
        )}
      ></Image>

      <svg
        width="1189 "
        height="1038"
        viewBox=" 0 0 1189 1038"
        xmlns="http://www.w3.org/2000/svg"
        className="absolute  -left-5 xl:-left-8 h-auto w-full"
      >
        {/* dash dash path */}
        <path
          d="M9.00101 3.99977C9.00101 3.99977 -15.1548 65.4995 50.5004 133.499C116.155 201.499 229.557 204.076 294.5 296.499C352.121 378.502 348.348 441.21 440.5 511.999C550.5 596.499 710.501 479.853 862.001 535.003C985.501 579.959 1058.43 986.896 1184.5 1033.5"
          stroke="#ADADAD"
          strokeWidth="7.9875"
          strokeLinecap="round"
          strokeDasharray="15.98 15.98"
          fill="none"
        />
        {/* animated path */}
        <motion.path
          d="M9.00101 3.99977C9.00101 3.99977 -15.1548 65.4995 50.5004 133.499C116.155 201.499 229.557 204.076 294.5 296.499C352.121 378.502 348.348 441.21 440.5 511.999C550.5 596.499 710.501 479.853 862.001 535.003C985.501 579.959 1058.43 986.896 1184.5 1033.5"
          stroke="url(#paint0_linear_1738_19055)"
          strokeWidth="7.9875"
          strokeLinecap="round"
          fill="none"
          initial={{
            pathLength: 0,
          }}
          style={{
            pathLength: pathLengths[0],
          }}
          transition={transition}
        />

        <defs>
          <linearGradient
            xmlns="http://www.w3.org/2000/svg"
            id="paint0_linear_1738_19055"
            x1="1097.57"
            y1="212.909"
            x2="665.402"
            y2="707.481"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#ADADAD" />
            <stop offset="1" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
};

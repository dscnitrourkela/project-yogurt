'use client';
import React, { useEffect, useState } from 'react';

import { motion, MotionValue, useTransform } from 'motion/react';
import Image from 'next/image';

import { svgs } from '@/config/timeline';
import { cn } from '@/lib/utils';

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

  const [pathElement, setPathElement] = useState<SVGPathElement | null>(null);

  useEffect(() => {
    const checkHeight = () => {
      setIsheight(window.innerHeight);
    };

    checkHeight();

    window.addEventListener('resize', checkHeight);
    return () => window.removeEventListener('resize', checkHeight);
  }, []);

  const pathProgress = useTransform(pathLengths[0], [0, 1], [0, 1]);

  const getPointAtLength = (progress: number) => {
    if (!pathElement) return { x: 9, y: 4 }; // Start position

    const pathLength = pathElement.getTotalLength();
    const point = pathElement.getPointAtLength(pathLength * progress);
    return point;
  };

  const tipX = useTransform(pathProgress, (progress) => {
    const point = getPointAtLength(progress);
    return point.x;
  });

  const tipY = useTransform(pathProgress, (progress) => {
    const point = getPointAtLength(progress);
    return point.y;
  });

  return (
    <div
      className={cn(
        'relative mx-20 lg:top-32 xlg:top-36 xl:top-44 2xl:top-60 xl:mx-40 ',
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
        lg:-top-[96px] xlg:-top-[94px] xl:-top-[132px] 2xl:-top-[155px] 3xl:-top-[148px] 5xl:-top-[140px] 6xl:-top-[135px] lg:-left-[86px] xlg:-left-[82px] xl:-left-[124px] 2xl:-left-[136px] 3xl:-left-[130px] 5xl:-left-[122px] 6xl:-left-[110px] "
      />
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
      />

      <svg
        width="1189 "
        height="1038"
        viewBox="-25 -25 1240 1090"
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
          ref={setPathElement}
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

        <motion.g
          style={{
            x: tipX,
            y: tipY,
            transformOrigin: 'center',
          }}
          initial={{ scale: 0, opacity: 0 }}
          animate={{
            scale: 1,
            opacity: 1,
            transition: { delay: 0.2, duration: 0.3 },
          }}
        >
          <foreignObject x="-40" y="-40" width="80" height="80">
            <Image
              src="/logo.png"
              alt="Logo"
              width={80}
              height={80}
              className="rounded-full"
            />
          </foreignObject>
        </motion.g>

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

          {/* Gradient for the tip indicator */}
          <linearGradient id="tipGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#ff6b6b" />
            <stop offset="100%" stopColor="#4ecdc4" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
};

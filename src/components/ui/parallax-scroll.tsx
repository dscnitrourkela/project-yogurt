'use client';
import { useScroll, useTransform, motion } from 'motion/react';
import { useRef } from 'react';
import { cn } from '@/lib/utils';
import PortraitSVG from './portrait-svg';

interface ParallaxScrollProps {
  images: string[];
  overlay?: React.ReactNode;
}

export const ParallaxScroll = ({ images, overlay }: ParallaxScrollProps) => {
  const containerRef = useRef<HTMLDivElement | null>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  });

  // Parallax depths - create the staggered waterfall pattern like in the screenshot
  const colLeftY = useTransform(scrollYProgress, [0, 1], [500, -300]);
  const colCenterY = useTransform(scrollYProgress, [0, 1], [1800, -500]);
  const colRightY = useTransform(scrollYProgress, [0, 1], [950, -400]);

  // Fade in
  const fadeIn = useTransform(scrollYProgress, [0.05, 0.2], [0, 1]);

  // Build three columns with round-robin distribution
  const leftCol: string[] = [];
  const centerCol: string[] = [];
  const rightCol: string[] = [];
  images.forEach((img, idx) => {
    if (idx % 3 === 0) leftCol.push(img);
    else if (idx % 3 === 1) centerCol.push(img);
    else rightCol.push(img);
  });

  const renderColumn = (column: string[], colY: any, key: string) => (
    <div className="grid gap-12 md:gap-16 lg:gap-20">
      {column.map((el, idx) => (
        <motion.div
          key={`${key}-${idx}`}
          style={{ y: colY, opacity: fadeIn }}
          className="relative w-full h-72 sm:h-80 md:h-96 lg:h-[28rem] xl:h-[32rem]"
        >
          <PortraitSVG
            src={el}
            id={`${key}-${idx}`}
            className="w-full h-full"
          />
        </motion.div>
      ))}
    </div>
  );

  return (
    <div
      ref={containerRef}
      className={cn('relative w-full h-[300vh] bg-[#181818]')}
    >
      {/* Overlay (your Gallery content) */}
      <div className="sticky top-0 h-screen z-20 flex items-center justify-center">
        {overlay}
      </div>

      {/* Images layer ABOVE content */}
      <div className="absolute inset-0 z-30 pointer-events-none w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 grid grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10 pt-[25vh]">
        {renderColumn(leftCol, colLeftY, 'left')}
        {/* Center column only shows on lg+ screens */}
        <div className="hidden lg:block">
          {renderColumn(centerCol, colCenterY, 'center')}
        </div>
        {renderColumn(rightCol, colRightY, 'right')}
      </div>
    </div>
  );
};

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

  // Parallax depths (two columns only now)
  const colLeftY = useTransform(scrollYProgress, [0, 1], [250, -150]);
  const colRightY = useTransform(scrollYProgress, [0, 1], [350, -250]);

  // Fade in
  const fadeIn = useTransform(scrollYProgress, [0.05, 0.2], [0, 1]);

  // Build two columns by strict alternation so no two sequential images share a column
  const leftCol: string[] = [];
  const rightCol: string[] = [];
  images.forEach((img, idx) => {
    if (idx % 2 === 0) leftCol.push(img);
    else rightCol.push(img);
  });

  const renderColumn = (column: string[], colY: any, key: string) => (
    <div className="grid gap-8">
      {column.map((el, idx) => (
        <motion.div
          key={`${key}-${idx}`}
          style={{ y: colY, opacity: fadeIn }}
          className="relative w-full h-72 sm:h-80 md:h-96"
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
      <div className="absolute inset-0 z-30 pointer-events-none w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-10 grid grid-cols-2 gap-4 sm:gap-6 pt-[20vh]">
        {renderColumn(leftCol, colLeftY, 'left')}
        {renderColumn(rightCol, colRightY, 'right')}
      </div>
    </div>
  );
};

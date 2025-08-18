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

  // Parallax depths
  const col1Y = useTransform(scrollYProgress, [0, 1], [250, -150]);
  const col2Y = useTransform(scrollYProgress, [0, 1], [350, -250]);
  const col3Y = useTransform(scrollYProgress, [0, 1], [450, -350]);

  // Fade in / out
  const fadeIn = useTransform(scrollYProgress, [0.05, 0.2], [0, 1]);
  const fadeOut = useTransform(scrollYProgress, [0.8, 1], [1, 0]);

  const third = Math.ceil(images.length / 3);
  const col1 = images.slice(0, third);
  const col2 = images.slice(third, 2 * third);
  const col3 = images.slice(2 * third);

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
      <div className="absolute inset-0 z-30 pointer-events-none w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pt-[20vh]">
        {renderColumn(col1, col1Y, 'col1')}
        {renderColumn(col2, col2Y, 'col2')}
        {renderColumn(col3, col3Y, 'col3')}
      </div>
    </div>
  );
};

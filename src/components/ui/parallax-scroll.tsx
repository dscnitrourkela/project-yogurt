'use client';
import { useScroll, useTransform, motion } from 'motion/react';
import { useRef } from 'react';
import { cn } from '@/lib/utils';
import PortraitSVG from './portrait-svg';

interface ParallaxScrollProps {
  images: string[];
  overlay?: React.ReactNode; // Heading/text layer
}

export const ParallaxScroll = ({ images, overlay }: ParallaxScrollProps) => {
  const containerRef = useRef<HTMLDivElement | null>(null);

  // Scroll progress across the whole pinned region
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  });

  // Layered movement for depth
  const col1Y = useTransform(scrollYProgress, [0, 1], [200, -150]); // slower (background)
  const col2Y = useTransform(scrollYProgress, [0, 1], [300, -250]); // medium
  const col3Y = useTransform(scrollYProgress, [0, 1], [400, -350]); // fastest (foreground)

  // Fade effect for images
  const fadeIn = useTransform(scrollYProgress, [0.05, 0.2], [0, 1]);
  const fadeOut = useTransform(scrollYProgress, [0.8, 1], [1, 0]);

  const third = Math.ceil(images.length / 3);
  const col1 = images.slice(0, third);
  const col2 = images.slice(third, 2 * third);
  const col3 = images.slice(2 * third);

  const renderColumn = (column: string[], colY: any, colKey: string) => (
    <div className="grid gap-8">
      {column.map((el, idx) => (
        <motion.div
          key={`${colKey}-${idx}`}
          style={{
            y: colY, // vertical parallax motion
            opacity: fadeIn, // fade in early
          }}
          className="relative w-full h-72 sm:h-80 md:h-96"
        >
          <PortraitSVG
            src={el}
            id={`${colKey}-${idx}`}
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
      {/* Overlay pinned heading */}
      <div className="sticky top-0 h-screen flex flex-col items-center justify-center z-20 px-4">
        {overlay}
      </div>

      {/* Parallax photo layers */}
      <div className="absolute inset-0 w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pt-[20vh]">
        {renderColumn(col1, col1Y, 'col1')}
        {renderColumn(col2, col2Y, 'col2')}
        {renderColumn(col3, col3Y, 'col3')}
      </div>
    </div>
  );
};

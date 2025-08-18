'use client';
import { useScroll, useTransform } from 'motion/react';
import { useRef, useEffect } from 'react';
import { motion } from 'motion/react';
import { cn } from '@/lib/utils';
import PortraitSVG from './portrait-svg';

interface ParallaxScrollProps {
  images: string[];
  className?: string;
  /** Optional static content shown while images animate */
  overlay?: React.ReactNode;
  /** If true, images render above overlay; else behind */
  imagesOnTop?: boolean;
  /** If true, component takes full screen height; else uses natural height */
  fullScreen?: boolean;
}

// Pinned parallax: page scroll drives progress; images start below and move upward until done.
export const ParallaxScroll = ({
  images,
  className,
  overlay,
  imagesOnTop = true,
  fullScreen = true,
}: ParallaxScrollProps) => {
  const containerRef = useRef<HTMLDivElement | null>(null);

  // Observe scroll progress across the whole pinned region
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: fullScreen ? ['start end', 'end start'] : ['start 80%', 'end 20%'],
  });

  // Images start from below viewport and move up into view
  // Using viewport height to start images off-screen at bottom
  const viewportHeight =
    typeof window !== 'undefined' ? window.innerHeight : 800;
  const col1 = useTransform(
    scrollYProgress,
    [0, 1],
    fullScreen ? [viewportHeight + 200, -100] : [200, -100]
  );
  const col2 = useTransform(
    scrollYProgress,
    [0, 1],
    fullScreen ? [viewportHeight + 300, -50] : [300, -50]
  );
  const col3 = useTransform(
    scrollYProgress,
    [0, 1],
    fullScreen ? [viewportHeight + 150, -150] : [150, -150]
  );

  const third = Math.ceil(images.length / 3);
  const firstPart = images.slice(0, third);
  const secondPart = images.slice(third, 2 * third);
  const thirdPart = images.slice(2 * third);

  if (!images || images.length === 0) {
    return null;
  }

  // Columns markup extracted for reuse front/back layering
  const Columns = (
    <div className="w-full max-w-6xl mx-auto px-6 md:px-10">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        <div className="grid gap-10">
          {firstPart.map((el, idx) => (
            <motion.div key={`pcol1-${idx}`} style={{ y: col1 }}>
              <div className="h-80 w-full">
                <PortraitSVG
                  src={el}
                  id={`1-${idx}`}
                  className="w-full h-full"
                />
              </div>
            </motion.div>
          ))}
        </div>
        <div className="grid gap-10">
          {secondPart.map((el, idx) => (
            <motion.div key={`pcol2-${idx}`} style={{ y: col2 }}>
              <div className="h-80 w-full">
                <PortraitSVG
                  src={el}
                  id={`2-${idx}`}
                  className="w-full h-full"
                />
              </div>
            </motion.div>
          ))}
        </div>
        <div className="grid gap-10">
          {thirdPart.map((el, idx) => (
            <motion.div key={`pcol3-${idx}`} style={{ y: col3 }}>
              <div className="h-80 w-full">
                <PortraitSVG
                  src={el}
                  id={`3-${idx}`}
                  className="w-full h-full"
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );

  return (
    <div
      ref={containerRef}
      className={cn(
        'relative w-full',
        fullScreen ? 'h-screen' : 'h-auto',
        className
      )}
    >
      <div className="relative w-full h-full overflow-hidden flex items-center">
        {/* Behind layer if imagesOnTop is false */}
        {!imagesOnTop && (
          <div className="absolute inset-0 z-10 flex items-center pointer-events-none">
            {Columns}
          </div>
        )}
        {/* Overlay content */}
        {overlay && (
          <div
            className={cn(
              'absolute inset-0 z-20 flex flex-col justify-center',
              imagesOnTop ? 'pointer-events-auto' : 'pointer-events-auto'
            )}
          >
            {overlay}
          </div>
        )}
        {/* Images front layer */}
        {imagesOnTop && (
          <div className="absolute inset-0 z-30 flex items-center pointer-events-none">
            {Columns}
          </div>
        )}
        {/* Fallback if no overlay: still show columns */}
        {!overlay && (
          <div className="absolute inset-0 z-30 flex items-center pointer-events-none">
            {Columns}
          </div>
        )}
      </div>
    </div>
  );
};

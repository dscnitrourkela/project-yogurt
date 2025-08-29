'use client';

import { ComponentPropsWithoutRef, FC, ReactNode, useRef } from 'react';

import { motion, MotionValue, useScroll, useTransform } from 'motion/react';

import { cn } from '@/lib/utils';

import Typography from '../Typography';

export interface TextRevealProps extends ComponentPropsWithoutRef<'div'> {
  children: string;
}

export const TextReveal: FC<TextRevealProps> = ({ children, className }) => {
  const targetRef = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  if (typeof children !== 'string') {
    throw new Error('TextReveal: children must be a string');
  }

  const words = children.split(' ');
  const headingOpacity = useTransform(
    scrollYProgress,
    [0, 0.2, 0.8, 1],
    [0.5, 1, 1, 1]
  );

  return (
    <div ref={targetRef} className={cn('relative h-[200vh]', className)}>
      <div className="sticky top-0 flex h-[50%] items-center justify-center">
        <div className="mx-auto flex max-w-3xl flex-col items-center space-y-8 px-4">
          <motion.div
            className="w-full select-none"
            style={{ opacity: headingOpacity }}
          >
            <Typography.H1 className="text-center font-wc-rough-trad text-5xl text-black lg:text-6xl font-normal">
              <span className="block sm:inline">What is</span>
              <span className="font-wc-rough-trad text-[#150BDE] block sm:inline font-normal">
                {' '}
                Hack NITR &#63;
              </span>
            </Typography.H1>
          </motion.div>

          <div className="flex flex-wrap justify-center gap-x-2 gap-y-3 text-center text-lg font-normal md:text-xl lg:text-2xl">
            {words.map((word, i) => {
              const start = 0.6 + (i / words.length) * 0.4;
              const end = start + 0.4 / words.length;
              return (
                <Word key={i} progress={scrollYProgress} range={[start, end]}>
                  {word}
                </Word>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

interface WordProps {
  children: ReactNode;
  progress: MotionValue<number>;
  range: [number, number];
}

const Word: FC<WordProps> = ({ children, progress, range }) => {
  const opacity = useTransform(progress, range, [0, 1]);
  return (
    <span className="relative ">
      <span className="absolute opacity-30 dark:opacity-20">{children}</span>
      <motion.span
        style={{ opacity }}
        className="relative text-black dark:text-white"
      >
        {children}
      </motion.span>
    </span>
  );
};

'use client';
import React, { useLayoutEffect, useRef, useState, memo, useMemo } from 'react';

import {
  motion,
  useAnimationFrame,
  useMotionValue,
  useScroll,
  useSpring,
  useTransform,
  useVelocity,
} from 'motion/react';

interface VelocityMapping {
  input: [number, number];
  output: [number, number];
}

interface VelocityTextProps {
  children: React.ReactNode;
  baseVelocity: number;
  scrollContainerRef?: React.RefObject<HTMLElement>;
  className?: string;
  damping?: number;
  stiffness?: number;
  numCopies?: number;
  velocityMapping?: VelocityMapping;
  parallaxClassName?: string;
  scrollerClassName?: string;
  parallaxStyle?: React.CSSProperties;
  scrollerStyle?: React.CSSProperties;
  instanceId: string;
}

interface ScrollVelocityProps {
  scrollContainerRef?: React.RefObject<HTMLElement>;
  texts: React.ReactNode[];
  velocity?: number;
  className?: string;
  damping?: number;
  stiffness?: number;
  numCopies?: number;
  velocityMapping?: VelocityMapping;
  parallaxClassName?: string;
  scrollerClassName?: string;
  parallaxStyle?: React.CSSProperties;
  scrollerStyle?: React.CSSProperties;
}

function useElementWidth<T extends HTMLElement>(
  ref: React.RefObject<T | null>
): number {
  const [width, setWidth] = useState(0);

  useLayoutEffect(() => {
    function updateWidth() {
      if (ref.current) {
        setWidth(ref.current.offsetWidth);
      }
    }
    updateWidth();
    window.addEventListener('resize', updateWidth);
    return () => window.removeEventListener('resize', updateWidth);
  }, [ref]);

  return width;
}

// Memoized wrap function to avoid recreation
const wrap = (min: number, max: number, v: number): number => {
  const range = max - min;
  const mod = (((v - min) % range) + range) % range;
  return mod + min;
};

// Generate a unique ID for each component instance
let componentInstanceCounter = 0;

// Memoized VelocityText component - moved outside to prevent recreations
const VelocityText = memo(
  ({
    children,
    baseVelocity,
    scrollContainerRef,
    className = '',
    damping = 50,
    stiffness = 400,
    numCopies = 6,
    velocityMapping = { input: [0, 1000], output: [0, 5] },
    parallaxClassName,
    scrollerClassName,
    parallaxStyle,
    scrollerStyle,
    instanceId,
  }: VelocityTextProps) => {
    const baseX = useMotionValue(0);
    const scrollOptions = scrollContainerRef
      ? { container: scrollContainerRef }
      : {};
    const { scrollY } = useScroll(scrollOptions);
    const scrollVelocity = useVelocity(scrollY);
    const smoothVelocity = useSpring(scrollVelocity, {
      damping: damping ?? 50,
      stiffness: stiffness ?? 400,
    });
    const velocityFactor = useTransform(
      smoothVelocity,
      velocityMapping?.input || [0, 1000],
      velocityMapping?.output || [0, 5],
      { clamp: false }
    );

    const copyRef = useRef<HTMLSpanElement>(null);
    const copyWidth = useElementWidth(copyRef);

    const x = useTransform(baseX, (v) => {
      if (copyWidth === 0) return '0px';
      return `${wrap(-copyWidth, 0, v)}px`;
    });

    const directionFactor = useRef<number>(1);
    useAnimationFrame((t, delta) => {
      let moveBy = directionFactor.current * baseVelocity * (delta / 1000);

      if (velocityFactor.get() < 0) {
        directionFactor.current = -1;
      } else if (velocityFactor.get() > 0) {
        directionFactor.current = 1;
      }

      moveBy += directionFactor.current * moveBy * velocityFactor.get();
      baseX.set(baseX.get() + moveBy);
    });

    const spans = useMemo(() => {
      const result = [];
      for (let i = 0; i < numCopies!; i++) {
        result.push(
          <span
            className={`flex-shrink-0 ${className}`}
            key={`${instanceId}-span-${i}`}
            ref={i === 0 ? copyRef : null}
          >
            {children}
          </span>
        );
      }
      return result;
    }, [children, className, instanceId, numCopies]);

    return (
      <div
        className={`${parallaxClassName} relative overflow-hidden`}
        style={parallaxStyle}
      >
        <motion.div
          className={`${scrollerClassName} flex whitespace-nowrap text-center font-sans text-4xl font-bold tracking-[-0.02em] drop-shadow md:text-[5rem] md:leading-[5rem]`}
          style={{ x, ...scrollerStyle }}
        >
          {spans}
        </motion.div>
      </div>
    );
  },
  (prevProps, nextProps) => {
    // Custom comparison for memo optimization
    return (
      prevProps.children === nextProps.children &&
      prevProps.baseVelocity === nextProps.baseVelocity &&
      prevProps.className === nextProps.className &&
      prevProps.numCopies === nextProps.numCopies &&
      prevProps.instanceId === nextProps.instanceId
    );
  }
);

VelocityText.displayName = 'VelocityText';

export const ScrollVelocity: React.FC<ScrollVelocityProps> = ({
  scrollContainerRef,
  texts = [],
  velocity = 100,
  className = '',
  damping = 50,
  stiffness = 400,
  numCopies = 6,
  velocityMapping = { input: [0, 1000], output: [0, 5] },
  parallaxClassName,
  scrollerClassName,
  parallaxStyle,
  scrollerStyle,
}) => {
  // Generate a unique instance ID for this component (only once)
  const [instanceId] = useState(
    () => `scroll-velocity-${++componentInstanceCounter}`
  );

  // Memoize the mapped texts array
  const velocityTexts = useMemo(() => {
    return texts.map((text, index: number) => (
      <VelocityText
        key={`${instanceId}-text-${index}`}
        className={className}
        baseVelocity={index % 2 !== 0 ? -velocity : velocity}
        scrollContainerRef={scrollContainerRef}
        damping={damping}
        stiffness={stiffness}
        numCopies={numCopies}
        velocityMapping={velocityMapping}
        parallaxClassName={parallaxClassName}
        scrollerClassName={scrollerClassName}
        parallaxStyle={parallaxStyle}
        scrollerStyle={scrollerStyle}
        instanceId={instanceId}
      >
        {text}&nbsp;
      </VelocityText>
    ));
  }, [
    texts,
    className,
    velocity,
    scrollContainerRef,
    damping,
    stiffness,
    numCopies,
    velocityMapping,
    parallaxClassName,
    scrollerClassName,
    parallaxStyle,
    scrollerStyle,
    instanceId,
  ]);

  return <section>{velocityTexts}</section>;
};

export default ScrollVelocity;

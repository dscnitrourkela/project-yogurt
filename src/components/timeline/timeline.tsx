'use client';
import { useScroll, useTransform } from 'framer-motion';
import React from 'react';
import { TimelineEffect } from '../ui/ timeline-effect';
import TimelineEvents from './timeline-events';

export function Timeline() {
  const ref = React.useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });

  const pathLengthFirst = useTransform(scrollYProgress, [0.21, 0.9], [0, 1.2]);

  return (
    <div className=" my-20  lg:h-[128vw] xlg:h-[126vw] xl:h-[118vw] " ref={ref}>
      <TimelineEvents />
      <TimelineEffect
        className="  hidden lg:block"
        pathLengths={[pathLengthFirst]}
      />
    </div>
  );
}

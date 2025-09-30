'use client';
import React from 'react';

import { useScroll, useTransform } from 'motion/react';

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
    <div
      id="timeline"
      className=" mt-28 md:mt-56 mb-28  lg:h-[128vw] xlg:h-[126vw] xl:h-[118vw] "
      ref={ref}
    >
      <TimelineEvents />
      <TimelineEffect
        className="  hidden lg:block"
        pathLengths={[pathLengthFirst]}
      />
    </div>
  );
}

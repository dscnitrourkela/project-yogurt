import React, { useEffect, useState } from 'react';

import { timelineData } from '@/config/timeline';
import { cn } from '@/lib/utils';

import Typography from '../Typography';
import Event from './events';

function TimelineEvents() {
  const [isLgScreen, setIsLgScreen] = useState(false);
  useEffect(() => {
    const checkScreenSize = () => {
      setIsLgScreen(window.innerWidth >= 864);
    };
    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);
    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  return (
    <div className=" relative  mx-5 sm:mx-20  ">
      <div className=" flex items-center justify-center   ">
        <Typography.H1 className=" font-wc-rough-trad font-normal leading-none text-[clamp(3.5rem,5vw,6rem)] h-[15vw] text-[#150BDE] mb-10 md:mb-0">
          TIMELINE
        </Typography.H1>
      </div>

      <div
        className={cn(
          isLgScreen
            ? '  '
            : ' flex flex-col justify-center items-center gap-5 mt-10'
        )}
      >
        {timelineData.events.map((event, i) => (
          <Event
            key={i}
            className={event.className}
            eventNumber={event.eventNumber}
            title={event.title}
            duration={event.duration}
            description={event.description}
          />
        ))}
      </div>
    </div>
  );
}

export default TimelineEvents;

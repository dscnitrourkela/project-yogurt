import React, {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from 'react';

import { useInView, useMotionValue, useSpring } from 'motion/react';
import Image from 'next/image';

import {
  IMAGES,
  MOBILE_BREAKPOINT,
  MobileStatItemProps,
  StatItemProps,
  statsData,
} from '@/config/stats';

import Typography from '../Typography';

const useFramerCounter = (
  endValue: number | string,
  shouldAnimate: boolean
) => {
  const [displayValue, setDisplayValue] = useState<string>('0');

  const parseNumber = (value: string | number): number => {
    if (typeof value === 'number') return value;
    const cleanValue = value.replace(/[+,]/g, '');
    if (cleanValue.includes('K')) {
      return parseFloat(cleanValue.replace('K', '')) * 1000;
    }
    if (cleanValue.includes('M')) {
      return parseFloat(cleanValue.replace('M', '')) * 1000000;
    }
    return parseFloat(cleanValue) || 0;
  };

  const formatCount = (value: number, original: string | number): string => {
    const originalStr = original.toString();

    if (originalStr.includes('M')) {
      return (value / 1000000).toFixed(1) + 'M';
    }
    if (originalStr.includes('K')) {
      const hasDecimal = originalStr.includes('.');
      if (hasDecimal) {
        return (value / 1000).toFixed(1) + 'K';
      } else {
        return Math.floor(value / 1000) + 'K';
      }
    }
    if (originalStr.includes('+')) {
      return Math.floor(value).toLocaleString() + '+';
    }
    return Math.floor(value).toLocaleString();
  };

  const numericEndValue = parseNumber(endValue);
  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, {
    duration: 2000,
    bounce: 0,
  });

  useEffect(() => {
    if (shouldAnimate) {
      motionValue.set(numericEndValue);
    }
  }, [shouldAnimate, motionValue, numericEndValue]);

  useEffect(() => {
    const unsubscribe = springValue.on('change', (latest) => {
      const formatted =
        typeof endValue === 'string'
          ? formatCount(latest, endValue)
          : Math.floor(latest).toLocaleString();
      setDisplayValue(formatted);
    });

    return unsubscribe;
  }, [springValue, endValue]);

  return displayValue;
};

const StatItem = React.memo<StatItemProps & { shouldAnimate: boolean }>(
  ({ stat, index, isMobile, shouldAnimate }) => {
    const animatedNumber = useFramerCounter(stat.number, shouldAnimate);

    return (
      <div className="flex flex-col mt-auto">
        <div>
          <Typography.H3 className="font-wc-rough-trad font-normal text-center">
            {animatedNumber}
          </Typography.H3>
        </div>
        <Typography.P className="text-center font-semibold text-black">
          {stat.label}
        </Typography.P>
        <Image
          src={index % 2 === 0 ? IMAGES.barLong : IMAGES.barShort}
          alt="bar"
          width={100}
          height={20}
          className={`mx-auto mt-2 w-11 ${
            index % 2 === 0
              ? isMobile
                ? 'h-[300px]'
                : 'h-[350px]'
              : isMobile
                ? 'h-[200px]'
                : 'h-[250px]'
          }`}
        />
      </div>
    );
  }
);

StatItem.displayName = 'StatItem';

const MobileStatItem = React.memo<
  MobileStatItemProps & { shouldAnimate: boolean }
>(({ stat, index, statsData, shouldAnimate }) => {
  const animatedNumber = useFramerCounter(stat.number, shouldAnimate);
  const animatedFirstStat = useFramerCounter(
    statsData[0]?.number,
    shouldAnimate
  );
  const animatedLastStat = useFramerCounter(
    statsData[4]?.number,
    shouldAnimate
  );

  if (index !== 1 && index !== 2 && index !== 3) return null;

  return (
    <div className="flex flex-col mt-auto">
      {index === 1 && (
        <div className="mb-20">
          <div>
            <Typography.H3 className="font-wc-rough-trad font-normal text-[#11004E] text-center">
              {animatedFirstStat}
            </Typography.H3>
          </div>
          <Typography.P className="text-center font-semibold text-black -mt-5">
            {statsData[0]?.label}
          </Typography.P>
        </div>
      )}
      {index === 3 && (
        <div className="mb-20">
          <div>
            <Typography.H3 className="font-wc-rough-trad font-normal text-[#11004E] text-center">
              {animatedLastStat}
            </Typography.H3>
          </div>
          <Typography.P className="text-center font-semibold text-black -mt-5">
            {statsData[4]?.label}
          </Typography.P>
        </div>
      )}
      <div>
        <Typography.H3
          className={`font-wc-rough-trad font-normal text-[#11004E] text-center ${index === 2 ? 'scale-150' : 'scale-100'}`}
        >
          {animatedNumber}
        </Typography.H3>
      </div>
      <Typography.P
        className={`text-center font-semibold text-black ${index === 2 ? 'scale-120' : 'scale-100'}`}
      >
        {stat.label}
      </Typography.P>
      <Image
        src={index % 2 === 0 ? IMAGES.barLong : IMAGES.barShort}
        alt="bar"
        width={100}
        height={20}
        className={`mx-auto mt-2 w-16 ${
          index % 2 === 0 ? 'h-[280px]' : 'h-[200px]'
        }`}
      />
    </div>
  );
});

MobileStatItem.displayName = 'MobileStatItem';

const Stats: React.FC = () => {
  const [isMobile, setIsMobile] = useState<boolean>(true);
  const triggerRef = useRef<HTMLDivElement>(null);
  const shouldAnimateCounters = useInView(triggerRef, {
    once: true,
    margin: '-20%',
  });

  const handleResize = useCallback((): void => {
    setIsMobile(window.innerWidth <= MOBILE_BREAKPOINT);
  }, []);

  useEffect(() => {
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [handleResize]);

  const gridCols = useMemo(
    (): string => (isMobile ? 'grid-cols-3' : 'grid-cols-5'),
    [isMobile]
  );

  const renderStats = useMemo(() => {
    return statsData.map((stat, index) => (
      <React.Fragment key={stat.id}>
        {!isMobile ? (
          <StatItem
            stat={stat}
            index={index}
            isMobile={isMobile}
            shouldAnimate={shouldAnimateCounters}
          />
        ) : (
          <MobileStatItem
            stat={stat}
            index={index}
            statsData={statsData}
            shouldAnimate={shouldAnimateCounters}
          />
        )}
      </React.Fragment>
    ));
  }, [isMobile, shouldAnimateCounters]);

  return (
    <section className={`relative`} id="stats">
      <Typography.H1 className="text-center font-wc-rough-trad font-normal text-blue-800 text-[clamp(3.5rem,5vw,6rem)]">
        STATS
      </Typography.H1>

      <div className={`mt-20 grid ${gridCols} w-full`} ref={triggerRef}>
        {renderStats}
      </div>

      <Image
        src={IMAGES.clouds}
        alt="clouds"
        width={1920}
        height={1280}
        className="absolute scale-y-100 lg:scale-y-85 bottom-5 translate-y-1/2"
        priority
      />
    </section>
  );
};

export default Stats;

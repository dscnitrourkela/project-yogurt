import React, {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from 'react';

import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Image from 'next/image';

import {
  IMAGES,
  MOBILE_BREAKPOINT,
  MobileStatItemProps,
  StatItemProps,
  statsData,
} from '@/config/stats';

import Typography from '../Typography';

gsap.registerPlugin(ScrollTrigger);

const useGSAPCounter = (
  endValue: number | string,
  elementRef: React.RefObject<HTMLElement | null>
) => {
  const [displayValue, setDisplayValue] = useState<string>('0');

  useEffect(() => {
    if (!elementRef.current) return;

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
    const counterObj = { value: 0 };

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: elementRef.current,
        start: 'top 80%',
        end: 'bottom 20%',
        once: true,
      },
    });

    tl.to(counterObj, {
      value: numericEndValue,
      duration: 2,
      ease: 'power2.out',
      onUpdate: () => {
        const formatted =
          typeof endValue === 'string'
            ? formatCount(counterObj.value, endValue)
            : Math.floor(counterObj.value).toLocaleString();
        setDisplayValue(formatted);
      },
    });

    return () => {
      tl.kill();
    };
  }, [endValue, elementRef]);

  return displayValue;
};

const StatItem = React.memo<StatItemProps>(({ stat, index, isMobile }) => {
  const numberRef = useRef<HTMLDivElement>(null);
  const animatedNumber = useGSAPCounter(stat.number, numberRef);

  return (
    <div className="flex flex-col mt-auto">
      <div ref={numberRef}>
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
});

StatItem.displayName = 'StatItem';

const MobileStatItem = React.memo<MobileStatItemProps>(
  ({ stat, index, statsData }) => {
    const numberRef = useRef<HTMLDivElement>(null);
    const firstStatRef = useRef<HTMLDivElement>(null);
    const lastStatRef = useRef<HTMLDivElement>(null);

    const animatedNumber = useGSAPCounter(stat.number, numberRef);
    const animatedFirstStat = useGSAPCounter(
      statsData[0]?.number,
      firstStatRef
    );
    const animatedLastStat = useGSAPCounter(statsData[4]?.number, lastStatRef);

    if (index !== 1 && index !== 2 && index !== 3) return null;

    return (
      <div className="flex flex-col mt-auto">
        {index === 1 && (
          <div className="mb-20">
            <div ref={firstStatRef}>
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
            <div ref={lastStatRef}>
              <Typography.H3 className="font-wc-rough-trad font-normal text-[#11004E] text-center">
                {animatedLastStat}
              </Typography.H3>
            </div>
            <Typography.P className="text-center font-semibold text-black -mt-5">
              {statsData[4]?.label}
            </Typography.P>
          </div>
        )}
        <div ref={numberRef}>
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
  }
);

MobileStatItem.displayName = 'MobileStatItem';

const Stats: React.FC = () => {
  const [isMobile, setIsMobile] = useState<boolean>(true);

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
          <StatItem stat={stat} index={index} isMobile={isMobile} />
        ) : (
          <MobileStatItem stat={stat} index={index} statsData={statsData} />
        )}
      </React.Fragment>
    ));
  }, [isMobile]);

  return (
    <section className={`relative`} id="stats">
      <Typography.H1 className="text-center font-wc-rough-trad font-normal text-blue-800 text-[clamp(3.5rem,5vw,6rem)]">
        STATS
      </Typography.H1>

      <div className={`mt-20 grid ${gridCols} w-full`}>{renderStats}</div>

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

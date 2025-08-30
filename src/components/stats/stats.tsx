import React, { useCallback, useEffect, useMemo, useState } from 'react';

import Image from 'next/image';

import {
  IMAGES,
  MOBILE_BREAKPOINT,
  MobileStatItemProps,
  StatItemProps,
  statsData,
} from '@/config/stats';

import Typography from '../Typography';

// Memoized components
const StatItem = React.memo<StatItemProps>(({ stat, index, isMobile }) => (
  <div className="flex flex-col mt-auto">
    <Typography.H3 className="font-wc-rough-trad text-center">
      {stat.number}
    </Typography.H3>
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
));

StatItem.displayName = 'StatItem';

const MobileStatItem = React.memo<MobileStatItemProps>(
  ({ stat, index, statsData }) => {
    if (index !== 1 && index !== 2 && index !== 3) return null;

    return (
      <div className="flex flex-col mt-auto">
        {index === 1 && (
          <div className="mb-10">
            <Typography.H3 className="font-wc-rough-trad text-center">
              {statsData[0]?.number}
            </Typography.H3>
            <Typography.P className="text-center font-semibold text-black">
              {statsData[0]?.label}
            </Typography.P>
          </div>
        )}
        {index === 3 && (
          <div className="mb-10">
            <Typography.H3 className="font-wc-rough-trad text-center">
              {statsData[4]?.number}
            </Typography.H3>
            <Typography.P className="text-center font-semibold text-black">
              {statsData[4]?.label}
            </Typography.P>
          </div>
        )}
        <Typography.H3
          className={`font-wc-rough-trad text-center ${index === 2 ? 'scale-150' : 'scale-100'}`}
        >
          {stat.number}
        </Typography.H3>
        <Typography.P
          className={`text-center font-semibold text-black ${index === 2 ? 'scale-150' : 'scale-100'}`}
        >
          {stat.label}
        </Typography.P>
        <Image
          src={index % 2 === 0 ? IMAGES.barLong : IMAGES.barShort}
          alt="bar"
          width={100}
          height={20}
          className={`mx-auto mt-2 w-11 ${
            index % 2 === 0 ? 'h-[300px]' : 'h-[200px]'
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
    <div
      className={`relative ${isMobile ? 'h-[90vh]' : 'h-screen'}`}
      id="stats"
    >
      <Typography.H1 className="text-center font-normal font-wc-rough-trad text-blue-800 text-[clamp(3.5rem,5vw,6rem)]">
        STATS
      </Typography.H1>

      <div className={`absolute bottom-0 grid ${gridCols} w-full`}>
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
    </div>
  );
};

export default Stats;

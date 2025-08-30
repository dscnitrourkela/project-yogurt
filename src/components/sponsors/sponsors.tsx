import React from 'react';

import Image from 'next/image';
import Marquee from 'react-fast-marquee';

import {
  CROWN,
  PAPER_CRACK,
  PastSponsorsData,
  SponsorsData,
} from '@/config/sponsors';

import Typography from '../Typography';
import SponsorCard from './sponsor-card';

interface SponsorGridProps {
  sponsors: Array<{
    name: string;
    logo: string;
    category: string;
  }>;
  cardType: 'alpha' | 'beta' | 'delta';
}

const SponsorGrid: React.FC<SponsorGridProps> = ({ sponsors, cardType }) => {
  if (cardType === 'delta') {
    return (
      <>
        <div className="block md:hidden mr-[-6px] ml-[-3px]">
          <Marquee
            gradient={false}
            speed={50}
            pauseOnHover={false}
            className="w-full gap-x-8"
          >
            <div className="flex gap-8">
              {sponsors.map((sponsor) => (
                <SponsorCard
                  key={sponsor.category + sponsor.name}
                  sponsor={sponsor}
                  cardType="delta"
                />
              ))}
            </div>
          </Marquee>
        </div>

        <div className="hidden md:flex flex-row gap-10 justify-center items-center flex-wrap">
          {sponsors.map((sponsor) => (
            <SponsorCard
              key={sponsor.category + sponsor.name}
              sponsor={sponsor}
              cardType="delta"
            />
          ))}
        </div>
      </>
    );
  }

  return (
    <div className="flex flex-col md:flex-row gap-10 justify-center items-center">
      {sponsors.map((sponsor) => (
        <SponsorCard
          key={sponsor.category + sponsor.name}
          sponsor={sponsor}
          cardType={cardType}
        />
      ))}
    </div>
  );
};

export const Sponsors = () => {
  return (
    <div
      id="sponsors"
      className="min-h-screen pb-40 pt-32 relative mt-52 overflow-x-clip"
    >
      <Image
        src={PAPER_CRACK}
        width={1920}
        height={200}
        alt="paper cuttiong"
        className="absolute -top-0 -translate-y-[90%]"
      />
      <div
        className="flex w-fit justify-center mb-32 relative mx-auto"
        id="Sponsors"
      >
        <Image
          src={CROWN}
          height={100}
          width={100}
          alt="crown"
          className="absolute -top-1 left-0 md:-left-1 3xl:-top-2 3xl:-left-2 -translate-x-[10%] -translate-y-[60%] size-[8vw] smd:size-[6vw] md:h-[5vw] md:w-[5vw]"
        />

        <Typography.H1 className=" font-normal font-wc-rough-trad text-[#f2f3f7] text-[clamp(3.5rem,5vw,6rem)]">
          SPONSORS
        </Typography.H1>
      </div>
      <div>
        <Typography.H3 className="text-white font-semibold text-center mb-12">
          Alpha Sponsors
        </Typography.H3>
      </div>
      <div className="flex flex-col gap-4 md:gap-8 w-full">
        <SponsorGrid sponsors={SponsorsData.Alpha} cardType="alpha" />
      </div>

      <div className="flex w-full justify-center mb-12 mt-20" id="PastSponsors">
        <Typography.H3 className="text-white font-semibold">
          Past Sponsors
        </Typography.H3>
      </div>
      <div className="flex flex-col gap-4 md:gap-8 w-full mb-12 mx-auto max-w-7xl">
        <SponsorGrid sponsors={PastSponsorsData.Alpha} cardType="alpha" />
        <SponsorGrid sponsors={PastSponsorsData.Beta} cardType="beta" />
        <SponsorGrid sponsors={PastSponsorsData.Delta} cardType="delta" />
      </div>
    </div>
  );
};

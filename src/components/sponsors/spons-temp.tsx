import React from 'react';

import Image from 'next/image';

import { DEVFOLIO_LOGO, ETHINDIA_LOGO } from '@/config/sponsors';

import Typography from '../Typography';

const SponsTemp = () => {
  return (
    <section className="pb-40">
      <div className=" mx-auto px-6">
        <div className="text-center mb-12">
          <Typography.H2 className="text-3xl font-bold text-gray-900 mb-4">
            Our Sponsors
          </Typography.H2>
          <Typography.P className="text-gray-600 text-lg">
            Thanks to our amazing sponsors who make this event possible
          </Typography.P>
        </div>

        <div className="flex flex-wrap justify-center items-center gap-12 md:gap-16">
          <div className="flex items-center justify-center p-6">
            <Image
              src={DEVFOLIO_LOGO}
              height={200}
              width={500}
              alt="DEVFOLIO LOGO"
            />
          </div>

          <div className="flex items-center justify-center p-6">
            <Image
              src={ETHINDIA_LOGO}
              height={200}
              width={500}
              alt="ETHINDIA LOGO"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default SponsTemp;

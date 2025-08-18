import React from 'react';
import { HackNitr } from '@/components/hero/hackNitr';

import { HeroMobile } from '@/components/hero/heroMobile';

import Clouds from '@/components/hero/clouds';
import Gallery from '@/components/gallery/gallery';

export default function Page() {
  return (
    <>
      <div className="">
        <div className=" min-h-[90vh] hidden lg:flex justify-center items-center">
          <HackNitr />
        </div>
        <div className=" pb-[15svh] py-14 lg:hidden ">
          <HeroMobile />
        </div>

        <Clouds />
        <div className="h-[20vh] md:h-[40vh] lg:h-[20vh]" aria-hidden />
        <Gallery />
      </div>
    </>
  );
}

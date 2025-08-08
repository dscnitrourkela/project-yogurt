import React from 'react';
import { HackNitr } from '@/components/hero/hackNitr';

import { HeroMobile } from '@/components/hero/heroMobile';

import Clouds from '@/components/hero/clouds';

export default function Page() {
  return (
    <>
      <div className="">
        <div className=" min-h-screen py-10 hidden md:flex justify-center items-center">
          <HackNitr />
        </div>
        <div className=" min-h-screen py-10 md:hidden ">
          <HeroMobile />
        </div>

        <Clouds />
      </div>
    </>
  );
}

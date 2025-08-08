import React from 'react';
import { HackNitr } from '@/components/hero/hackNitr';

import { HeroMobile } from '@/components/hero/heroMobile';

export default function Page() {
  return (
    <>
      <div className=" min-h-screen py-10 hidden md:flex justify-center items-center">
        <HackNitr />
      </div>
      <div className=" min-h-screen py-10 md:hidden ">
        <HeroMobile />
      </div>
    </>
  );
}

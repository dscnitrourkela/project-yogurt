'use client';

import React from 'react';
import { HackNitr } from '@/components/hero/hackNitr';

import { HeroMobile } from '@/components/hero/heroMobile';
import { useEffect, useState } from 'react';
import Clouds from '@/components/hero/clouds';

export default function Page() {
  const [padCheck, setPadCheck] = useState(false);

  useEffect(() => {
    const checkScreen = () =>
      setPadCheck(window.innerHeight > window.innerWidth);
    checkScreen();
    window.addEventListener('resize', checkScreen);
    return () => window.removeEventListener('resize', checkScreen);
  }, []);

  return (
    <>
      <div className="">
        <div
          className={` min-h-[90vh] hidden ${padCheck ? '' : 'lg:flex'} justify-center items-center`}
        >
          <HackNitr />
        </div>

        <div className={`pb-[15svh] py-14 ${padCheck ? '' : 'lg:hidden'}`}>
          <HeroMobile />
        </div>

        <Clouds />
      </div>
    </>
  );
}

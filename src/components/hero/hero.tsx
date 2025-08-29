import { HackNitr } from '@/components/hero/hackNitr';
import { HeroMobile } from '@/components/hero/heroMobile';
import Clouds from '@/components/hero/clouds';
import React, { useEffect, useState } from 'react';

export default function Hero() {
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

        <div className={`pt-14 ${padCheck ? '' : 'lg:hidden'}`}>
          <HeroMobile />
        </div>

        <Clouds />
      </div>
    </>
  );
}

import React, { useEffect, useState } from 'react';

import Clouds from '@/components/hero/clouds';
import { HackNitr } from '@/components/hero/hackNitr';
import { HeroMobile } from '@/components/hero/heroMobile';

export default function Hero() {
  const [padCheck, setPadCheck] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const checkScreen = () =>
      setPadCheck(window.innerHeight > window.innerWidth);
    checkScreen();
    window.addEventListener('resize', checkScreen);
    return () => window.removeEventListener('resize', checkScreen);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const opacity = Math.max(0, 1 - scrollY / 500);

  return (
    <>
      <div id="hero">
        <div
          className={` min-h-[100vh] sticky top-0 hidden ${padCheck ? '' : 'lg:flex'} justify-center items-center`}
          style={{ opacity }}
        >
          <HackNitr />
        </div>

        <div
          className={`pt-14 max-h-[100vh] sticky top-0  ${padCheck ? '' : 'lg:hidden'}`}
          style={{ opacity }}
        >
          <HeroMobile />
        </div>

        <Clouds />
      </div>
    </>
  );
}

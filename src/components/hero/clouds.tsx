'use client';
import { useEffect, useState } from 'react';

import Image from 'next/image';

import { HERO_CLOUDS_CONFIG } from '@/config/hero/clouds';

export default function Clouds() {
  const [isSmall, setIsSmall] = useState(false);
  const repeatScale = isSmall ? 'scale-100' : 'scale-150';

  useEffect(() => {
    const checkScreen = () =>
      setIsSmall(
        window.innerWidth < 54 * 16 || window.innerHeight > window.innerWidth
      );
    checkScreen();
    window.addEventListener('resize', checkScreen);
    return () => window.removeEventListener('resize', checkScreen);
  }, []);

  return (
    <div
      className={`overflow-x-clip relative z-30 pointer-events-none ${
        isSmall ? ' -mt-[18svh]' : 'mt-20'
      } `}
    >
      <div
        className={`relative ${isSmall ? '  w-[150%]  min-h-[100svh] ' : ''} `}
      >
        <Image
          src={HERO_CLOUDS_CONFIG.backgrounds.desktop}
          alt="clouds"
          width={1920}
          height={1290}
          className={`mobileClouds ${isSmall ? 'absolute object-center  my-[19svh] left-[-7%]' : ' -my-[8%]'}`}
          priority
        />
        <Image
          src={HERO_CLOUDS_CONFIG.backgrounds.repeat}
          alt="clouds"
          width={2120}
          height={1280}
          className={`mobileClouds ${repeatScale} ${
            isSmall
              ? ' absolute object-center my-[37svh] left-[-5%]'
              : 'mx-[6%] -my-[17%]'
          }`}
          priority
        />
        <Image
          src={HERO_CLOUDS_CONFIG.backgrounds.repeat}
          alt="clouds"
          width={1920}
          height={1280}
          className={`mobileClouds ${repeatScale} ${
            isSmall
              ? 'absolute object-center my-[51svh] left-[-11%]'
              : ' mx-[8%] -my-[17%]'
          }`}
          priority
        />
        <Image
          src={HERO_CLOUDS_CONFIG.backgrounds.repeat}
          alt="clouds"
          width={1920}
          height={1280}
          className={`mobileClouds ${repeatScale} ${
            isSmall
              ? 'absolute object-center my-[60svh] left-[-18%]'
              : 'mx-[10%] -my-[17%]'
          }`}
          priority
        />
        <Image
          src={HERO_CLOUDS_CONFIG.backgrounds.repeat}
          alt="clouds"
          width={1920}
          height={1280}
          className={`mobileClouds ${repeatScale} ${
            isSmall
              ? 'absolute object-center my-[80svh] left-[-4%]'
              : '-mx-[10%] -my-[32%]'
          }`}
          priority
        />
        <Image
          src={HERO_CLOUDS_CONFIG.backgrounds.repeat}
          alt="clouds"
          width={1920}
          height={1280}
          className={`mobileClouds ${repeatScale} ${
            isSmall
              ? 'absolute object-center my-[70svh] left-[-25%]'
              : '-mx-[10%] -my-[5%]'
          }`}
          priority
        />
        <Image
          src={HERO_CLOUDS_CONFIG.backgrounds.repeat}
          alt="clouds"
          width={1920}
          height={1280}
          className={`mobileClouds ${repeatScale} ${
            isSmall
              ? 'absolute object-center my-[85svh] left-[-25%]'
              : '-mx-[10%] -my-[1%]'
          }`}
          priority
        />
        <Image
          src={HERO_CLOUDS_CONFIG.backgrounds.repeat}
          alt="clouds"
          width={1920}
          height={1280}
          className={`mobileClouds ${repeatScale} ${
            isSmall
              ? 'absolute object-center my-[95svh] left-[-5%]'
              : '-mx-[10%] -my-[15%]'
          }`}
          priority
        />
        <Image
          src={HERO_CLOUDS_CONFIG.backgrounds.repeat}
          alt="clouds"
          width={1920}
          height={1280}
          className={`mobileClouds ${repeatScale} ${
            isSmall
              ? 'absolute object-center my-[90svh] left-[-30%]'
              : 'mx-[15%] -my-[28%]'
          }`}
          priority
        />
      </div>
    </div>
  );
}

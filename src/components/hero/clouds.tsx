'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import { HERO_CLOUDS_CONFIG } from '@/config/hero/clouds';

export default function Clouds() {
  const [isSmall, setIsSmall] = useState(false);

  useEffect(() => {
    const checkScreen = () => setIsSmall(window.innerWidth < 640);
    checkScreen();
    window.addEventListener('resize', checkScreen);
    return () => window.removeEventListener('resize', checkScreen);
  }, []);

  return (
    <div className="w-full h-screen overflow-hidden">
      <div className="absolute inset-0 z-10 w-full h-[100vh] sm:h-[97vh] md:h-[97vh] lg:h-[97vh] xl:h-[100vh] ">
        <Image
          src={
            isSmall
              ? HERO_CLOUDS_CONFIG.backgrounds.mobile
              : HERO_CLOUDS_CONFIG.backgrounds.desktop
          }
          alt="clouds"
          fill
          style={{ objectFit: 'contain' }}
          className="object-bottom object-cover"
        />
      </div>

      <div
        className="absolute 
          top-[46%]
          sm:top-[47%] 
          md:top-[47%] 
          lg:top-[42%] 
          xl:top-[13%] 
          left-[46%] 
          transform -translate-x-1/2 
          z-5
          w-100 h-100 
          sm:w-100 sm:h-100 
          md:w-100 md:h-100 
          lg:w-100 lg:h-100 
          xl:w-120 xl:h-120"
      >
        <Image
          src={HERO_CLOUDS_CONFIG.robot}
          alt="robot"
          fill
          style={{ objectFit: 'contain' }}
        />
      </div>
    </div>
  );
}

'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import { HERO_CLOUDS_CONFIG } from '@/config/hero/clouds';

export default function Clouds() {
  const [isSmall, setIsSmall] = useState(false);

  useEffect(() => {
    const checkScreen = () => setIsSmall(window.innerWidth < 449);
    checkScreen();
    window.addEventListener('resize', checkScreen);
    return () => window.removeEventListener('resize', checkScreen);
  }, []);

  return (
    <div className="relative w-full h-screen overflow-hidden">
      <div className="absolute inset-0 z-10 w-full h-[88vh] sm:h-[110vh] md:h-[65vh] lg:h-[80vh] xl:h-[100vh]">
        <Image
          src={
            isSmall
              ? HERO_CLOUDS_CONFIG.backgrounds.mobile
              : HERO_CLOUDS_CONFIG.backgrounds.desktop
          }
          alt="clouds"
          fill
          style={{ objectFit: isSmall ? 'contain' : 'cover' }}
        />
      </div>
    </div>
  );
}

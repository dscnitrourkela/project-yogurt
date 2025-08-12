'use client';
import { useEffect, useState } from 'react';
import Image from 'next/image';
import { HERO_CLOUDS_CONFIG } from '@/config/hero/clouds';
import PreRegisterButton from '../pre-register/pre-register';

export default function Clouds() {
  const [isSmall, setIsSmall] = useState(false);

  useEffect(() => {
    const checkScreen = () => setIsSmall(window.innerWidth < 54 * 16);
    checkScreen();
    window.addEventListener('resize', checkScreen);
    return () => window.removeEventListener('resize', checkScreen);
  }, []);

  return (
    <div className="relative">
      <Image
        src={
          isSmall
            ? HERO_CLOUDS_CONFIG.backgrounds.mobile
            : HERO_CLOUDS_CONFIG.backgrounds.desktop
        }
        alt="clouds"
        width={19200}
        height={1280}
        className={`w-full object-cover h-full ${isSmall ? '' : '-my-[20%]'}`}
        priority
      />
      {isSmall && (
        <div className="absolute bottom-1/3 left-0 w-full flex justify-center items-center ">
          <PreRegisterButton />
        </div>
      )}
    </div>
  );
}

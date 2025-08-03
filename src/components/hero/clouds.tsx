'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';

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
              ? 'https://res.cloudinary.com/dscnitrourkela/image/upload/v1754168465/hacknitr/epu560uyf3sjdq0yh1ar.png'
              : 'https://res.cloudinary.com/dscnitrourkela/image/upload/v1754161201/hacknitr/nzfk0b1z8daed013mtep.png'
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
          src="https://res.cloudinary.com/dscnitrourkela/image/upload/v1754196559/hacknitr/fektho4mzqvef7pztkuh.png"
          alt="robot"
          fill
          style={{ objectFit: 'contain' }}
        />
      </div>
    </div>
  );
}

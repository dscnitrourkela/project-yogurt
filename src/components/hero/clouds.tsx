'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';

export default function Clouds() {
  const [isSmall, setIsSmall] = useState(false);

  useEffect(() => {
    const checkScreen = () =>
      setIsSmall(window.innerWidth < 450);
    checkScreen();
    window.addEventListener('resize', checkScreen);
    return () => window.removeEventListener('resize', checkScreen);
  }, []);

  return (
    <div className="w-full h-screen overflow-hidden">
      {/* Background clouds */}
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

      {/* Robot positioned above the clouds */}
      <div
        className="absolute 
          top-[67%]
          sm:top-[70%] 
          md:top-[63%] 
          lg:top-[55%] 
          xl:top-[30%] 
          left-[46%] 
          transform -translate-x-1/2 
          z-5
          w-60 h-60 
          sm:w-32 sm:h-40 
          md:w-40 md:h-52 
          lg:w-48 lg:h-64 
          xl:w-48 xl:h-75"
      >
        <Image
          src="https://res.cloudinary.com/dscnitrourkela/image/upload/v1754161214/hacknitr/oislvrabhocrrdfojsdq.png"
          alt="robot"
          fill
          style={{ objectFit: 'contain' }}
        />
      </div>
    </div>
  );
}

'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';

export default function Clouds() {
  const [isSmall, setIsSmall] = useState(false);

  useEffect(() => {
    const checkScreen = () =>
      setIsSmall(window.innerWidth < 640);
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
          top-[57%]
          sm:top-[57%] 
          md:top-[53%] 
          lg:top-[48%] 
          xl:top-[30%] 
          left-[46%] 
          transform -translate-x-1/2 
          z-5
          w-80 h-80 
          sm:w-80 sm:h-80 
          md:w-80 md:h-80 
          lg:w-80 lg:h-80 
          xl:w-80 xl:h-80"
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

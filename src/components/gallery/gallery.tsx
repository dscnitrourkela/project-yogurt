'use client';
import Image from 'next/image';
import { GALLERY_BACKGROUND } from '@/config/gallery/background';

export default function Gallery() {
  return (
    <div className="relative bg-[#181818] w-full h-[60vh] lg:h-[100vh]">
      <Image
        src={GALLERY_BACKGROUND.image}
        alt="background"
        fill
        style={{ objectFit: 'cover' }}
      />

      <div className="absolute inset-0 z-10 flex items-center justify-center pointer-events-none">
        <Image
          src={GALLERY_BACKGROUND.text}
          alt="foreground"
          fill
          style={{ objectFit: 'contain' }}
          priority
        />
      </div>
    </div>
  );
}

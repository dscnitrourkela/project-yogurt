import Image from 'next/image';

import { TEMP_HERO_CONFIG } from '@/config/hero/clouds';

export default function Home() {
  return (
    <main className="min-h-screen w-full flex flex-col">
      <div className="flex-1 flex items-center justify-center pt-16 ">
        <div className="flex items-center flex-col gap-20 px-8">
          <Image
            src={TEMP_HERO_CONFIG.main}
            height={500}
            width={500}
            alt="hero-main"
            className="scale-120 md:scale-150"
          />
          <Image
            src={TEMP_HERO_CONFIG.dates}
            height={100}
            width={500}
            className="scale-100"
            alt="dates"
          />
        </div>
      </div>
    </main>
  );
}

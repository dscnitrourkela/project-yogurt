import Image from 'next/image';

import SponsTemp from '@/components/sponsors/spons-temp';
import { TEMP_HERO_CONFIG } from '@/config/hero/clouds';

export default function Home() {
  return (
    <>
      <section className="min-h-screen w-full flex flex-col">
        <div className="grid place-items-center min-h-screen w-full">
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
            {/* <DevfolioButton
              hackathonSlug="hacknitr7"
              theme="light"
              className="mt-8"
            /> */}
          </div>
        </div>
      </section>
      <SponsTemp />
    </>
  );
}

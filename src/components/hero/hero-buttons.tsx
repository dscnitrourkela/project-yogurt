'use client';

import Image from 'next/image';

import Button from '@/components/ui/button';
import { DEVFOLIO_LINK, DISCORD_LINK } from '@/config/marginals';

import Typography from '../Typography';

export function handleRedirect(type: 'devfolio' | 'discord') {
  let dest = '';
  if (type == 'devfolio') dest = DEVFOLIO_LINK;
  else dest = DISCORD_LINK;
  window.open(dest, '_blank');
}
export default function DevfolioAndDiscordButtons() {
  return (
    <div
      className={`relative z-40 flex flex-col mt-10 xs:mt-5 xs:flex-row justify-center w-full scale-90 items-center gap-0 xs:gap-5`}
    >
      <Button
        className={
          'h-14  lg:h-20 xlg:h-14 xs:mb-0.5 !p-0 min-w-[320px] max-w-[400px] lg:!w-[400px]  my-auto flex flex-row items-center justify-center gap-4 '
        }
        onClick={() => handleRedirect('devfolio')}
      >
        <Image
          src={'./devfolio.svg'}
          alt={'Discord Button'}
          width={100}
          height={100}
          className={'size-7 block'}
        />

        <Typography.P className="text-white !text-[1.10rem] md:!text-xl lg:!text-2xl font-semibold text-center mb-0">
          Apply With Devfolio
        </Typography.P>
      </Button>

      <Button
        className={
          'h-20 xlg:h-14 mb-0.5 !p-0 min-w-[320px] xs:!min-w-20 mt-5 xs:mt-0  my-auto lg:flex flex-row items-center justify-center gap-2 hidden'
        }
        onClick={() => handleRedirect('discord')}
      >
        <Image
          src={'./discord.svg'}
          alt={'Discord Button'}
          width={100}
          height={100}
          className={'size-8 block'}
        />

        <Typography.P className="text-white text-lg font-semibold text-center mb-0 xs:hidden">
          Join Discord
        </Typography.P>
      </Button>
    </div>
  );
}

'use client';

import Button from '@/components/ui/button';
import Image from 'next/image';
import { DEVFOLIO_LINK, DISCORD_LINK } from '@/config/marginals';
import Typography from '../Typography';

export default function DevfolioAndDiscordButtons() {
  function handleClick(type: 'devfolio' | 'discord') {
    let dest = '';
    if (type == 'devfolio') dest = DEVFOLIO_LINK;
    else dest = DISCORD_LINK;
    window.open(dest, '_blank');
  }

  return (
    <div
      className={`flex flex-col mt-10 xs:mt-5 xs:flex-row justify-center w-full scale-90 items-center gap-0 xs:gap-5`}
    >
      <Button
        className={
          'h-10 xs:mb-0.5 !p-0 min-w-[320px] max-w-[350px] lg:!w-15 my-auto flex flex-row items-center justify-center gap-2 '
        }
        onClick={() => handleClick('devfolio')}
      >
        <Image
          src={'./devfolio.svg'}
          alt={'Discord Button'}
          width={100}
          height={100}
          className={'size-6 block'}
        />
        <span className={'font-bold text-lg'}></span>

        <Typography.P className="text-white text-lg font-semibold text-center mb-0">
          Apply With Devfolio
        </Typography.P>
      </Button>

      <Button
        className={
          'h-10 mb-0.5 !p-0 min-w-[320px] xs:!min-w-15 mt-5 xs:mt-0  my-auto flex flex-row items-center justify-center gap-2'
        }
        onClick={() => handleClick('discord')}
      >
        <Image
          src={'./discord.svg'}
          alt={'Discord Button'}
          width={100}
          height={100}
          className={'size-7 block'}
        />

        <Typography.P className="text-white text-lg font-semibold text-center mb-0 xs:hidden">
          Join Discord
        </Typography.P>
      </Button>
    </div>
  );
}

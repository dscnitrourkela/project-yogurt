'use client';

import { useState } from 'react';

import Image from 'next/image';

import {
  firstPrize,
  firstxori,
  prizeheader,
  secondPrize,
  thirdPrize,
} from '@/config/prizes';

import Typography from '../Typography';

export default function Prizes() {
  const [isClicked, setIsClicked] = useState(false);

  return (
    <section
      id="prizes"
      className="relative mt-20 mb-28 pb-32 [@media(max-width:764px)]:-mb-15 "
    >
      {/* <Image
        src={prizeheader.image}
        height={199}
        width={1786}
        alt="w"
        quality={100}
        className="absolute top-[1rem] -translate-y-full w-full z-10"
      /> */}
      <Typography.H1 className="text-center font-normal font-wc-rough-trad text-blue-800 text-[clamp(3.5rem,5vw,6rem)] md:mb-0 mb-10">
        {prizeheader.title}
      </Typography.H1>

      <div className="flex items-end relative justify-center gap-[10vw] w-auto h-auto mt-20 [@media(max-width:520px)]:-mb-35 [@media(max-width:764px)]:-mt-35 [@media(max-width:764px)]:scale-70 flex-wrap ">
        <div className="flex flex-col items-center [@media(max-width:1050px)]:order-2  justify-center flex-wrap mt-15">
          <Image
            src={secondPrize.image}
            height={216}
            width={143}
            quality={100}
            alt="prize2"
            className="hover:scale-110 transform transition duration-300"
          />
          <Typography.H1 className="text-[4rem] font-wc-rough-trad text-center text-blue-800 mt-5 mb-[-22] font-normal">
            {secondPrize.amount}
          </Typography.H1>
          <Typography.H1 className="text-[1.5rem] font-wc-rough-trad text-center text-blue-800 mt-0 font-medium">
            {secondPrize.amtype}
          </Typography.H1>
          <Typography.H5 className="font-wc-rough-trad text-center text-black mt-6 font-normal">
            {secondPrize.title}
          </Typography.H5>
        </div>
        <div className="relative flex flex-col items-center justify-center flex-wrap group pt-20 px-5 transform transition duration-300 [@media(max-width:1050px)]:order-1 [@media(max-width:1050px)]:mx-[20%] [@media(max-width:600px)]:mx-[0%]  [@media(max-width:764px)]:-mt-5 [@media(max-width:500px)]:-mt- ">
          <div
            className={`absolute -translate-y-56 group-hover:-translate-y-60 duration-300 ${
              isClicked ? '-translate-y-60' : ''
            }`}
          >
            <Image
              src={firstxori.image}
              height={77}
              width={97}
              quality={100}
              alt="xori"
              className=""
            />
          </div>
          <div
            onClick={() => setIsClicked(!isClicked)}
            className="z-10 flex flex-col items-center justify-center flex-wrap"
          >
            <Image
              src={firstPrize.image}
              height={293}
              width={224}
              className="bg-[#ffffff]"
              alt="prize1"
            />
            <Typography.H1 className="text-[4rem] font-wc-rough-trad text-blue-800 mt-0 mb-[-22] font-normal">
              {firstPrize.amount}
            </Typography.H1>
            <Typography.H1 className="text-[1.5rem] font-wc-rough-trad text-center text-blue-800 mt-0 p-0 font-normal">
              {secondPrize.amtype}
            </Typography.H1>
            <Typography.H4 className="font-wc-rough-trad text-center text-black mt-6 font-medium">
              {firstPrize.title}
            </Typography.H4>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center flex-wrap mt-15 [@media(max-width:1050px)]:order-3   ">
          <div className="flex flex-col items-center justify-center flex-wrap">
            <Image
              src={thirdPrize.image}
              height={162}
              width={117}
              alt="prize3"
              className="hover:scale-110 transform transition duration-300"
            />
            <Typography.H1 className="text-[4rem] font-wc-rough-trad text-center h-auto text-blue-800 mt-5 mb-[-22] p-0 font-normal">
              {thirdPrize.amount}
            </Typography.H1>
            <Typography.H1 className="text-[1.5rem] font-wc-rough-trad text-center h-auto text-blue-800 mt-0 p-0 font-normal">
              {secondPrize.amtype}
            </Typography.H1>
            <Typography.H5 className="font-wc-rough-trad text-center text-black mt-6 font-normal">
              {thirdPrize.title}
            </Typography.H5>
          </div>
        </div>
      </div>
    </section>
  );
}

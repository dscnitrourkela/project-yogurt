'use client';

import Image from 'next/image';
import Typography from '../Typography';
import { firstPrize } from '@/config/prizes';
import { secondPrize } from '@/config/prizes';
import { thirdPrize } from '@/config/prizes';
import { prizeheader } from '@/config/prizes';
import { firstxori } from '@/config/prizes';
import { useState } from 'react';

export default function Prizes() {
  const [isClicked, setIsClicked] = useState(false);

  return (
    <section
      id="prizes"
      className="relative mb-28 [@media(max-width:764px)]:-mb-15 "
    >
      <Image
        src={prizeheader.image}
        height={199}
        width={1786}
        alt="w"
        quality={100}
        className="absolute top-[1rem] -translate-y-full w-full z-10"
      />
      <Typography.H1 className="py-30 text-6xl sm:text-6xl md:text-8xl lg:text-9xl  font-wc-rough-trad text-center text-blue-800 [@media(max-width:511px)]:pb-10 font-medium">
        {prizeheader.title}
      </Typography.H1>

      <div className="flex items-center relative justify-center gap-[10vw] w-auto h-auto mt-20 [@media(max-width:520px)]:-mb-35 [@media(max-width:764px)]:-mt-35 [@media(max-width:764px)]:scale-70 flex-wrap ">
        <div className="flex flex-col items-center [@media(max-width:1050px)]:order-2  justify-center flex-wrap mt-15 transform transition duration-300 hover:scale-110 ">
          <Image
            src={secondPrize.image}
            height={316}
            width={243}
            quality={100}
            alt="prize2"
          />
          <Typography.H1 className="text-[5rem] font-wc-rough-trad text-center text-blue-800 mt-5 mb-[-22] font-normal">
            {secondPrize.amount}
          </Typography.H1>
          <Typography.H1 className="text-[1.75rem] font-wc-rough-trad text-center text-blue-800 mt-0 font-medium">
            {secondPrize.amtype}
          </Typography.H1>
          <Typography.H5 className="font-wc-rough-trad text-center text-black mt-6 font-normal">
            {secondPrize.title}
          </Typography.H5>
        </div>
        <div className="relative flex flex-col items-center justify-center flex-wrap relative group mt-5 transform transition duration-300 hover:scale-110 [@media(max-width:1050px)]:order-1 [@media(max-width:1050px)]:mx-[20%] [@media(max-width:600px)]:mx-[0%]  [@media(max-width:764px)]:-mt-5 [@media(max-width:500px)]:-mt- ">
          <div
            className={`absolute -translate-y-76 [@media(max-width:600px)]:top-65 group-hover:scale-150 group-hover:-translate-y-92 duration-300  ${isClicked ? '-translate-y-92 scale-120 duration-100 ' : ''}`}
          >
            <Image
              src={firstxori.image}
              height={107}
              width={127}
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
              height={393}
              width={324}
              className="bg-[#ffffff]"
              alt="prize1"
            />
            <Typography.H1 className="text-[5rem] font-wc-rough-trad text-blue-800 mt-5 mb-[-22] font-normal">
              {firstPrize.amount}
            </Typography.H1>
            <Typography.H1 className="text-[1.75rem] font-wc-rough-trad text-center text-blue-800 mt-0 p-0 font-normal">
              {secondPrize.amtype}
            </Typography.H1>
            <Typography.H4 className="font-wc-rough-trad text-center text-black mt-6 font-medium">
              {firstPrize.title}
            </Typography.H4>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center flex-wrap mt-15 transform transition duration-300 hover:scale-110 [@media(max-width:1050px)]:order-3   ">
          <div className="flex flex-col items-center justify-center flex-wrap">
            <Image
              src={thirdPrize.image}
              height={262}
              width={217}
              alt="prize3"
            />
            <Typography.H1 className="text-[5rem] font-wc-rough-trad text-center h-auto text-blue-800 mt-5 mb-[-22] p-0 font-normal">
              {thirdPrize.amount}
            </Typography.H1>
            <Typography.H1 className="text-[1.75rem] font-wc-rough-trad text-center h-auto text-blue-800 mt-0 p-0 font-normal">
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

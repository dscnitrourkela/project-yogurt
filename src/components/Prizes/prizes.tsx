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
    <section className=" relative py-20 bg-white flex-wrap">
      <Image
        src={prizeheader.image}
        height={199}
        width={1786}
        alt="w"
        quality={100}
        className="w-full mb-20 h-auto"
      />
      <Typography.H1 className="my-[2rem] text-6xl sm:text-6xl md:text-8xl lg:text-9xl  font-wc-rough-trad text-center text-blue-800 font-medium flex-wrap">
        {prizeheader.title}
      </Typography.H1>
      <div className="absolute top-[18rem] left-[8rem] w-[clamp(4rem,8vw,6.75rem)] h-[clamp(4rem,8vw,6.75rem)] mx-auto">
        <div className="absolute top-0 left-[40%] w-[clamp(2rem,3vw,3.38rem)] h-[clamp(2rem,4vw,3.38rem)] bg-[#EAEAEA]"></div>
        <div className="absolute bottom-0 right-[60%] w-[clamp(2rem,3vw,3.38rem)] h-[clamp(2rem,4vw,3.38rem)] bg-[#EAEAEA]"></div>
      </div>
      <div className="flex items-center justify-center gap-[10vw] w-auto h-auto mt-20 [@media(max-width:1050px)]:scale-70 [@media(max-width:1050px)]:gap-y-0 [@media(max-width:1050px)]:grid [@media(max-width:1050px)]:gap-x-[25vw] [@media(max-width:1050px)]:grid-cols-2  [@media(max-width:1050px)]:grid-rows-2 [@media(max-width:1050px)]:grid-flow-row  [@media(max-width:500px)]:grid-rows-3 [@media(max-width:500px)]:grid-cols-1  flex-wrap">
        <div className="flex flex-col items-center [@media(max-width:1050px)]:order-2 [@media(max-width:1050px)]:row-start-2 [@media(max-width:500px)]:col-span-2 [@media(max-width:1050px)]:col-start-1  justify-center flex-wrap mt-15 [@media(max-width:1050px)]:mt-0">
          <div className=" flex flex-col items-center justify-center flex-wrap">
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
        </div>
        <div className="relative flex flex-col items-center [@media(max-width:1050px)]:order-1 [@media(max-width:1050px)]:scale [@media(max-width:1050px)]:row-start-1 [@media(max-width:1050px)]:col-span-2  [@media(max-width:500px)]:col-start-1 justify-center flex-wrap relative group mt-15 ">
          <div
            className={`absolute -translate-y-76 group-hover:scale-150 group-hover:-translate-y-92 duration-3000 ease ${isClicked ? '-translate-y-92 scale-120 duration-300 ease' : ''}`}
          >
            <Image src={firstxori.image} height={107} width={127} alt="xori" />
          </div>
          <div
            onClick={() => setIsClicked(!isClicked)}
            className=" z-10 flex flex-col items-center justify-center flex-wrap bg-white"
          >
            <Image
              src={firstPrize.image}
              height={393}
              width={324}
              className=""
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
        <div className="flex flex-col items-center [@media(max-width:1050px)]:m-[-50px] [@media(max-width:1050px)]:order-3  [@media(max-width:1050px)]:row-start-2 [@media(max-width:500px)]:col-span-2 [@media(max-width:500px)]:row-start-3 [@media(max-width:1050px)]:col-start-2 [@media(max-width:500px)]:row-start-3 justify-center flex-wrap mt-15 [@media(max-width:1050px)]:mt-0 ">
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

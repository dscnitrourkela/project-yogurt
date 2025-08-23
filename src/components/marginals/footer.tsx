import { Typography } from '@/components';
import { Github, Linkedin, Instagram, Twitter } from 'lucide-react';
import Link from 'next/link';
import { SOCIALS } from '@/config/marginals/footer';

export default function Footer() {
  const leftSocials = SOCIALS.slice(0, 2);
  const rightSocials = SOCIALS.slice(2);
  return (
    <footer className="relative w-full flex flex-col justify-end min-h-screen lg:mt-25 xl:mt-30">
      <div
        className="hidden min-[900px]:flex w-full justify-between items-center 
  px-20 lg:px-15 xl:px-17 2xl:px-40  absolute 
  top-[46%] xl:top-[30%] 2xl:top-[20%] lg:top-[39%]
  [@media(min-width:1000px)_and_(max-width:1050px)]:top-[43%]
  [@media(min-width:1050px)_and_(max-width:1100px)]:top-[41%]
  [@media(min-width:1000px)_and_(max-width:1100px)]:px-4
  [@media(min-width:950px)_and_(max-width:1000px)]:top-[44%]
  [@media(min-width:900px)_and_(max-width:950px)]:top-[47%]
  [@media(min-width:900px)_and_(max-width:950px)]:px-4
  [@media(min-width:950px)_and_(max-width:1000px)]:px-2
  [@media(min-width:1150px)_and_(max-width:1250px)]:top-[35%]
  [@media(min-width:1250px)_and_(max-width:1300px)]:top-[33%]
  [@media(min-width:1300px)_and_(max-width:1400px)]:top-[31%]
  [@media(min-width:1400px)_and_(max-width:1500px)]:top-[28%]
  [@media(min-width:1400px)]:px-20
  [@media(min-width:1500px)]:top-[28%]"
      >
        <div className="flex min-[900px]:gap-10">
          {leftSocials.map((social) => (
            <Link
              key={social.name}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 min-[900px]:gap-1 text-black"
            >
              <img
                src={social.icon}
                alt={social.name}
                className="w-5 h-5 lg:w-6 lg:h-6 relative -top-[1px] min-[900px]:w-6 min-[900px]:h-6"
              />
              <Typography.H6
                className="m-0 p-0 flex items-center leading-none
                     text-[16px] md:text-[22px] lg:text-[24px] xl:text-[28px] 2xl:text-[30px]
                     min-[900px]:text-[20px]
                     [@media(min-width:900px)_and_(max-width:950px)]:text-[21px]"
              >
                {social.name.toUpperCase()}
              </Typography.H6>
            </Link>
          ))}
        </div>

        <div className="flex gap-6 min-[900px]:gap-10">
          {rightSocials.map((social) => (
            <Link
              key={social.name}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 min-[900px]:gap-1 text-black"
            >
              <img
                src={social.icon}
                alt={social.name}
                className="w-5 h-5 lg:w-6 lg:h-6 relative -top-[1px] min-[900px]:w-6 min-[900px]:h-6"
              />
              <Typography.H6
                className="m-0 p-0 flex items-center leading-none
                     text-[16px] md:text-[22px] lg:text-[24px] xl:text-[28px] 2xl:text-[30px]
                     min-[900px]:text-[14px]
                     [@media(min-width:900px)_and_(max-width:950px)]:text-[21px]"
              >
                {social.name.toUpperCase()}
              </Typography.H6>
            </Link>
          ))}
        </div>
      </div>

      <div className="hidden max-[900px]:grid grid-cols-4 gap-x-6 gap-y-6 px-6 max-[939px]:pt-[25%] max-[899px]:pt-[15%] max-[768px]:hidden">
        <div />
        <Link
          key={SOCIALS[0].name}
          href={SOCIALS[0].href}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center gap-y-2
          "
        >
          <img
            src={SOCIALS[0].icon}
            alt={SOCIALS[0].name}
            className="w-8 h-8
            [@media(min-width:864px)_and_(max-width:900px)]:w-10 
          [@media(min-width:860px)_and_(max-width:900px)]:h-10 "
          />
          <Typography.H6 className="text-32px sm:text-[30px] md:text-[32px] lg:text-[32px] leading-none text-center">
            {SOCIALS[0].name.toUpperCase()}
          </Typography.H6>
        </Link>
        <div />
        <Link
          key={SOCIALS[3].name}
          href={SOCIALS[3].href}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center gap-y-2"
        >
          <img
            src={SOCIALS[3].icon}
            alt={SOCIALS[3].name}
            className="w-8 h-8
            [@media(min-width:864px)_and_(max-width:900px)]:w-10 
          [@media(min-width:860px)_and_(max-width:900px)]:h-10"
          />
          <Typography.H6 className="text-28px sm:text-[30px] md:text-[32px] lg:text-[32px] leading-none text-center">
            {SOCIALS[3].name.toUpperCase()}
          </Typography.H6>
        </Link>

        <Link
          key={SOCIALS[1].name}
          href={SOCIALS[1].href}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center gap-y-2"
        >
          <img
            src={SOCIALS[1].icon}
            alt={SOCIALS[1].name}
            className="w-8 h-8
            [@media(min-width:864px)_and_(max-width:900px)]:w-10 
          [@media(min-width:860px)_and_(max-width:900px)]:h-10"
          />
          <Typography.H6 className="text-28px sm:text-[30px] md:text-[32px] lg:text-[32px] leading-none text-center">
            {SOCIALS[1].name.toUpperCase()}
          </Typography.H6>
        </Link>
        <div />
        <Link
          key={SOCIALS[2].name}
          href={SOCIALS[2].href}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center gap-y-2"
        >
          <img
            src={SOCIALS[2].icon}
            alt={SOCIALS[2].name}
            className="w-8 h-8
            [@media(min-width:864px)_and_(max-width:900px)]:w-9
          [@media(min-width:860px)_and_(max-width:900px)]:h-9"
          />
          <Typography.H6 className="text-28px sm:text-[30px] md:text-[32px] lg:text-[32px] leading-none text-center">
            {SOCIALS[2].name.toUpperCase()}
          </Typography.H6>
        </Link>
        <div />
      </div>

      <div className="flex max-[768px]:flex w-full justify-center gap-6 px-2 py-4 min-[768px]:hidden">
        {SOCIALS.map((social) => (
          <Link
            key={social.name}
            href={social.href}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center "
          >
            <img
              src={social.icon}
              alt={social.name}
              className="w-8 h-8
            [@media(min-width:450px)_and_(max-width:650px)]:w-10 
          [@media(min-width:450px)_and_(max-width:650px)]:h-10  
          
          [@media(min-width:650px)_and_(max-width:768px)]:w-11 
          [@media(min-width:650px)_and_(max-width:768px)]:h-11"
            />
          </Link>
        ))}
      </div>

      <div className="w-full flex items-center justify-center xl:pb-10 lg:pb-8 relative z-0">
        <div className="relative flex items-center justify-center">
          <div className="hidden min-[900px]:flex items-center gap-6 relative -translate-y-13 max-[899px]:translate-y-0">
            <Typography.Display className="text-center font-sketch-block font-normal text-primary text-[17vw] leading-none">
              Hack
            </Typography.Display>
            <Typography.Display className="text-center font-grutch-shaded font-normal text-[17vw] leading-none">
              NITR
            </Typography.Display>
          </div>

          <div className="flex min-[900px]:hidden flex-col items-center relative mt-[5vh] max-[899px]:mt-[2vh]">
            <div className="flex flex-col items-center">
              <img
                src="https://res.cloudinary.com/dscnitrourkela/image/upload/v1755437147/hacknitr/si7ci7j5xowo2ytkj54q.png"
                alt="HackNITR Logo"
                className="min-[900px]:block absolute left-1/2 top-1/2 -translate-x-[45%] -translate-y-[36%] w-[50vw] pointer-events-none"
              />
              <Typography.Display className="text-center font-sketch-block font-normal text-primary text-[30vw] leading-none">
                Hack
              </Typography.Display>
              <Typography.Display className="text-center font-grutch-shaded font-normal text-[30vw] leading-none -mt-2 sm:-mt-3">
                NITR
              </Typography.Display>
            </div>
          </div>

          <img
            src="https://res.cloudinary.com/dscnitrourkela/image/upload/v1755437147/hacknitr/si7ci7j5xowo2ytkj54q.png"
            alt="HackNITR Logo Overlay"
            className="hidden min-[900px]:block absolute left-1/2 top-1/2 -translate-x-[45%] -translate-y-[70%] w-[37vw] pointer-events-none"
          />
        </div>
      </div>

      <div className="w-full flex justify-center items-end">
        <Typography.Lead className="text-xs sm:text-sm lg:text-lg xl:text-xl 2xl:text-2xl text-black text-center leading-snug">
          Crafted with <span className="text-pink-500">❤️</span> by HackNITR
          Team
        </Typography.Lead>
      </div>
    </footer>
  );
}

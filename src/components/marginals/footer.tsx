import { Typography } from '@/components';
import { Github, Linkedin, Instagram, Twitter } from 'lucide-react';
import Link from 'next/link';
import { SOCIALS } from '@/config/marginals/footer';

export default function Footer() {
  const leftSocials = SOCIALS.slice(0, 2);
  const rightSocials = SOCIALS.slice(2);
  return (
    <footer className="relative w-full flex flex-col justify-end min-h-screen lg:mt-25 xl:mt-30">
      <div className="hidden min-[940px]:flex w-full justify-between px-8 absolute xl:top-[20%] lg:top-[20%] lg:px-20 py-6">
        <div className="flex gap-6">
          {leftSocials.map((social) => (
            <Link
              key={social.name}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-6 text-black"
            >
              <img src={social.icon} alt={social.name} className="w-6 h-6" />
              <Typography.H6 className="lg:text-[26px] xl:text-[32px] 2xl:text-[32px] leading-none relative -top-[-5px]">
                {social.name.toUpperCase()}
              </Typography.H6>
            </Link>
          ))}
        </div>
        <div className="flex gap-6">
          {rightSocials.map((social) => (
            <Link
              key={social.name}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-5 text-black"
            >
              <img src={social.icon} alt={social.name} className="w-6 h-6" />
              <Typography.H6 className="lg:text-[26px] xl:text-[32px] 2xl:text-[32px] leading-none relative -top-[-5px]">
                {social.name.toUpperCase()}
              </Typography.H6>
            </Link>
          ))}
        </div>
      </div>

      {/* Grid for devices below 940px */}
      <div className="hidden max-[939px]:grid grid-cols-4 gap-x-6 gap-y-6 px-6 max-[939px]:pt-[25%] max-[899px]:pt-[15%]">
        {/* First row */}
        <div /> {/* empty */}
        <Link
          key={SOCIALS[0].name}
          href={SOCIALS[0].href}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center"
        >
          <img
            src={SOCIALS[0].icon}
            alt={SOCIALS[0].name}
            className="w-6 h-6"
          />
          <Typography.H6 className="text-28px sm:text-[30px] md:text-[32px] leading-none text-center">
            {SOCIALS[0].name.toUpperCase()}
          </Typography.H6>
        </Link>
        <div /> {/* empty */}
        <Link
          key={SOCIALS[3].name}
          href={SOCIALS[3].href}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center"
        >
          <img
            src={SOCIALS[3].icon}
            alt={SOCIALS[3].name}
            className="w-6 h-6"
          />
          <Typography.H6 className="text-28px sm:text-[30px] md:text-[32px] leading-none text-center">
            {SOCIALS[3].name.toUpperCase()}
          </Typography.H6>
        </Link>
        {/* Second row */}
        <Link
          key={SOCIALS[1].name}
          href={SOCIALS[1].href}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center"
        >
          <img
            src={SOCIALS[1].icon}
            alt={SOCIALS[1].name}
            className="w-6 h-6"
          />
          <Typography.H6 className="text-28px sm:text-[30px] md:text-[32px] leading-none text-center">
            {SOCIALS[1].name.toUpperCase()}
          </Typography.H6>
        </Link>
        <div /> {/* empty */}
        <Link
          key={SOCIALS[2].name}
          href={SOCIALS[2].href}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center"
        >
          <img
            src={SOCIALS[2].icon}
            alt={SOCIALS[2].name}
            className="w-6 h-6"
          />
          <Typography.H6 className="text-28px sm:text-[30px] md:text-[32px] leading-none text-center">
            {SOCIALS[2].name.toUpperCase()}
          </Typography.H6>
        </Link>
        <div /> {/* empty */}
      </div>

      {/* HackNITR Logo & Text */}
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
        <Typography.Lead className="text-xs sm:text-sm lg:text-lg text-black text-center leading-snug">
          Crafted with <span className="text-pink-500">❤️</span> by HackNITR
          Team
        </Typography.Lead>
      </div>
    </footer>
  );
}

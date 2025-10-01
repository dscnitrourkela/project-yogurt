'use client';
import { useEffect, useState } from 'react';

import { X } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

import { hamburgerIcon, logo, navItems } from '@/config/marginals';

import { handleRedirect } from '../hero/hero-buttons';
import Typography from '../Typography';
import Button from '../ui/button';

const SCROLL_OFFSET = 80;
const handleScrollToSection = (href: string) => {
  if (href.startsWith('/#')) {
    const targetId = href.substring(2);
    const currentPage = window.location.pathname;
    if (currentPage !== '/') window.location.href = '/#' + targetId;
    const element = document.getElementById(targetId);
    if (element) {
      const elementPosition =
        element.getBoundingClientRect().top + window.pageYOffset;
      const offsetPosition = elementPosition - SCROLL_OFFSET;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  } else {
    window.open(href, '_blank');
  }
};

function DesktopNavbar({ isBlackSection }: { isBlackSection: boolean }) {
  return (
    <div className="hidden relative lg:flex w-full items-center justify-between py-3">
      <div className="absolute left-0 h-full">
        <Link href={logo.href}>
          <Image
            src={logo.src}
            alt={logo.alt}
            width={logo.width}
            height={logo.height}
          />
        </Link>
      </div>
      <div className=" h-full flex justify-center mx-auto">
        <div className="flex gap-[5vw] w-full justify-center">
          {navItems.map((item: { name: string; href: string }) => (
            <button
              key={item.name}
              onClick={(e) => {
                e.preventDefault();
                handleScrollToSection(item.href);
              }}
              className="transition-colors cursor-pointer"
            >
              <Typography.P
                className="!text-sm md:!text-base mb-0 text-center font-semibold transition-colors duration-300"
                style={{
                  color: isBlackSection ? 'white' : 'rgb(55, 65, 81)',
                }}
              >
                {item.name}
              </Typography.P>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

function MobileNavbar({
  isOpen,
  setIsOpen,
  isBlackSection,
}: {
  isOpen: boolean;
  setIsOpen: (open: boolean) => void;
  isBlackSection: boolean;
}) {
  return (
    <>
      <div className="flex lg:hidden w-full items-center justify-between h-full">
        <Link href={logo.href}>
          <Image
            src={logo.src}
            alt={logo.alt}
            width={logo.width}
            height={logo.height}
          />
        </Link>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="z-50 transition-colors duration-300"
          style={{
            color: isBlackSection ? 'white' : 'rgb(55, 65, 81)',
          }}
        >
          {isOpen ? (
            <X size={24} className={`text-black`} />
          ) : (
            <Image
              src={hamburgerIcon.src}
              alt={hamburgerIcon.alt}
              width={hamburgerIcon.width}
              height={hamburgerIcon.height}
              style={{
                filter: isBlackSection ? 'brightness(0) invert(1)' : 'none',
              }}
            />
          )}
        </button>
      </div>
      <div
        className={`fixed inset-0 bg-white z-40 flex flex-col justify-center items-center space-y-6 px-4 transition-opacity duration-300 ease-in-out lg:hidden ${
          isOpen
            ? 'opacity-100 pointer-events-auto'
            : 'opacity-0 pointer-events-none'
        }`}
      >
        {navItems.map((item: { name: string; href: string }) => (
          <button
            key={item.name}
            onClick={(e) => {
              e.preventDefault();
              handleScrollToSection(item.href);
              setIsOpen(false);
            }}
            className="transition-colors"
          >
            <Typography.P className="text-gray-800 text-xl font-semibold text-center hover:text-primary">
              {item.name}
            </Typography.P>
          </button>
        ))}

        <Button
          className={
            'h-14 mb-0.5 !p-0 min-w-[320px] mt-5 xs:mt-0  my-auto flex flex-row items-center justify-center gap-4'
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

          <Typography.P className="text-white text-[1.10rem] font-semibold text-center mb-0">
            Join Discord
          </Typography.P>
        </Button>
      </div>
    </>
  );
}

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isBlackSection, setIsBlackSection] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const blackSections = ['gallery', 'faqs', 'testimonials', 'sponsors'];
      const whiteSections = ['hero', 'about', 'prizes', 'footer'];

      const viewportHeight = window.innerHeight;
      const scrollPosition = window.scrollY + viewportHeight / 5;

      let currentSection = '';
      let minDistance = Infinity;

      [...blackSections, ...whiteSections].forEach((sectionId) => {
        const element = document.getElementById(sectionId);
        if (element) {
          const rect = element.getBoundingClientRect();
          const elementTop = rect.top + window.scrollY;
          const elementBottom = elementTop + rect.height;

          if (scrollPosition >= elementTop && scrollPosition <= elementBottom) {
            const distance = Math.abs(
              scrollPosition - (elementTop + rect.height / 2)
            );
            if (distance < minDistance) {
              minDistance = distance;
              currentSection = sectionId;
            }
          }
        }
      });

      setIsBlackSection(blackSections.includes(currentSection));
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className="fixed top-0 left-0 w-full z-50 py-2 transition-all duration-500 ease-out"
      style={{
        backgroundColor: isBlackSection ? '#141414' : '#ffffff',
      }}
    >
      <div className="px-4 sm:px-6 lg:px-10">
        <DesktopNavbar isBlackSection={isBlackSection} />
        <MobileNavbar
          isOpen={isOpen}
          setIsOpen={setIsOpen}
          isBlackSection={isBlackSection}
        />
      </div>
    </nav>
  );
}

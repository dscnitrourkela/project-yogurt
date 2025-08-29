'use client';
import { useState } from 'react';

import { X } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

import { hamburgerIcon, logo, navItems } from '@/config/marginals';

import Typography from '../Typography';
import Button from '../ui/button';

function DesktopNavbar() {
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
        <div className="flex gap-5 w-full justify-center">
          {navItems.map((item: { name: string; href: string }) => (
            <Link
              key={item.name}
              href={item.href}
              className="transition-colors"
            >
              <Typography.P className="!text-sm md:!text-base text-gray-700 hover:text-primary mb-0 text-center font-semibold">
                {item.name}
              </Typography.P>
            </Link>
          ))}
        </div>
      </div>
      <div className="absolute right-0 flex justify-end items-center ml-auto">
        <Button>Brochure</Button>
      </div>
    </div>
  );
}

function MobileNavbar({
  isOpen,
  setIsOpen,
}: {
  isOpen: boolean;
  setIsOpen: (open: boolean) => void;
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
          className="text-gray-700 z-50"
        >
          {isOpen ? (
            <X size={24} />
          ) : (
            <Image
              src={hamburgerIcon.src}
              alt={hamburgerIcon.alt}
              width={hamburgerIcon.width}
              height={hamburgerIcon.height}
            />
          )}
        </button>
      </div>
      <div
        className={`fixed inset-0 bg-white z-40 flex flex-col justify-center items-center space-y-6 px-4 transition-opacity duration-300 ease-in-out min-[800px]:hidden ${
          isOpen
            ? 'opacity-100 pointer-events-auto'
            : 'opacity-0 pointer-events-none'
        }`}
      >
        {navItems.map((item: { name: string; href: string }) => (
          <Link
            key={item.name}
            href={item.href}
            onClick={() => setIsOpen(false)}
            className="transition-colors"
          >
            <Typography.P className="text-gray-800 text-xl font-semibold text-center hover:text-primary">
              {item.name}
            </Typography.P>
          </Link>
        ))}
      </div>
    </>
  );
}

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 py-2 bg-neutral-100">
      <div className="px-4 sm:px-6 lg:px-10">
        <DesktopNavbar />
        <MobileNavbar isOpen={isOpen} setIsOpen={setIsOpen} />
      </div>
    </nav>
  );
}
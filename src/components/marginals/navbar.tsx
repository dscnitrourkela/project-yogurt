'use client';
import { useState } from 'react';

import { X } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

import { hamburgerIcon, logo, navItems } from '@/config/marginals';

import PreRegisterButton from '../pre-register/pre-register';
import Typography from '../Typography';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white fixed top-0 left-0 w-full z-50">
      <div className="px-4 sm:px-6 lg:px-16 py-2">
        <div className="flex items-center justify-between h-full ">
          <div className="flex-1/3  h-full">
            <Link href={logo.href}>
              <Image
                src={logo.src}
                alt={logo.alt}
                width={logo.width}
                height={logo.height}
              />
            </Link>
          </div>

          {/* <div className="flex-1/3 h-full hidden lg:flex">
            <div className="flex gap-5 w-full justify-center">
              {navItems.length > 0 &&
                navItems.map((item: { name: string; href: string }) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="transition-colors"
                  >
                    <Typography.P className="!text-sm md:!text-base  text-gray-700 hover:text-primary mb-0 text-center font-semibold">
                      {item.name}
                    </Typography.P>
                  </Link>
                ))}
            </div>
          </div> */}

          <div className="hidden lg:flex justify-end items-center flex-1/3">
            <div className="transform scale-90 lg:scale-100">
              <PreRegisterButton />
            </div>
          </div>

          <div className="flex lg:hidden z-50">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700"
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
        </div>
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
    </nav>
  );
}

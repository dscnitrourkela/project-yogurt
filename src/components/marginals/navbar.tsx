'use client';
import Link from 'next/link';
import { useState } from 'react';
import { X } from 'lucide-react';
import PreRegisterButton from '../pre-register/pre-register';
import Typography from '../Typography';
import Image from 'next/image';
import { navItems, logo, hamburgerIcon } from '@/config/marginals';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white fixed top-0 mt-2 left-0 w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex-shrink-0">
            <Link href={logo.href}>
              <Image
                src={logo.src}
                alt={logo.alt}
                width={logo.width}
                height={logo.height}
              />
            </Link>
          </div>

          <div className="hidden min-[800px]:flex flex-1 justify-center">
            <div className="flex gap-5 max-w-[720px] w-full justify-center">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="transition-colors"
                >
                  <Typography.P className="text-sm sm:text-base md:text-lg text-gray-700 hover:text-primary mb-0 text-center">
                    {item.name}
                  </Typography.P>
                </Link>
              ))}
            </div>
          </div>

          <div className="hidden min-[800px]:flex items-center px-2">
            <div className="transform scale-90 lg:scale-100">
              <PreRegisterButton />
            </div>
          </div>

          <div className="flex min-[800px]:hidden z-50">
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
        {navItems.map((item) => (
          <Link
            key={item.name}
            href={item.href}
            onClick={() => setIsOpen(false)}
            className="transition-colors"
          >
            <Typography.P className="text-gray-800 text-xl font-medium text-center hover:text-primary">
              {item.name}
            </Typography.P>
          </Link>
        ))}
      </div>
    </nav>
  );
}

'use client';
import Link from 'next/link';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import PreRegisterButton from '../pre-register/pre-register';
import Typography from '../Typography';
import Image from 'next/image';
import { navItems, logo, hamburgerIcon } from '@/config/marginals';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white fixed top-0 mt-2 left-0 w-full z-50">
      <div className="max-w-7xl mx-auto px-2 sm:px-4 md:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20 relative">
          {/* Left: Logo */}
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

          {/* Center: Nav Items (Desktop only) */}
          <div className="hidden md:flex absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 gap-4 md:gap-6">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="transition-colors"
              >
                <Typography.P className="text-sm sm:text-base md:text-lg text-gray-700 hover:text-primary mb-0">
                  {item.name}
                </Typography.P>
              </Link>
            ))}
          </div>

          <div className="hidden md:flex items-center h-full px-2">
            <div className="transform scale-90 lg:scale-100">
              <PreRegisterButton />
            </div>
          </div>

          {/* Hamburger Icon (Mobile only) */}
          <div className="flex md:hidden z-50">
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

      {/* Mobile Menu Overlay (always rendered for fade animation) */}
      <div
        className={`fixed inset-0 bg-white z-40 flex flex-col justify-center items-center space-y-6 px-4 transition-opacity duration-300 ease-in-out ${
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

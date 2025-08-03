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
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
          <div className="hide-on-mobile absolute left-1/2 transform -translate-x-1/2 space-x-6">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="transition-colors"
              >
                <Typography.P className="text-gray-700 hover:text-primary mb-0">
                  {item.name}
                </Typography.P>
              </Link>
            ))}
          </div>

          {/* Right: Pre-register (Desktop only) */}
          <div className="hide-on-mobile flex items-center h-full px-2">
            <PreRegisterButton />
          </div>

          {/* Hamburger Icon (Mobile only) */}
          <div className="show-on-mobile z-50">
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

      {/* Fullscreen Mobile Overlay Menu */}
      {isOpen && (
        <div className="fixed inset-0 bg-white z-40 flex flex-col justify-center items-center space-y-6 px-4">
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
      )}
    </nav>
  );
}

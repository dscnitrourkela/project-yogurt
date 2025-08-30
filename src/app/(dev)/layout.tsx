'use client';

import { useState } from 'react';

import { Menu, X } from 'lucide-react';
import Link from 'next/link';

import { Typography } from '@/components/Typography';
import { playgroundMenu } from '@/config/marginals';

export default function DevLayout({ children }: { children: React.ReactNode }) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div>
      <div className="flex flex-col min-h-screen">
        <div className=" fixed bottom-6 right-6 z-50">
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="bg-gray-800 text-white p-3 rounded-full shadow-lg hover:bg-gray-700 transition-colors"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          {isMobileMenuOpen && (
            <div className="absolute bottom-16 right-0 w-48 bg-gray-800 rounded-md shadow-xl py-2 text-amber-400">
              {playgroundMenu.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="block px-4 py-2 text-white hover:bg-gray-700"
                >
                  <Typography.P className="text-white">
                    {item.name}
                  </Typography.P>
                </Link>
              ))}
            </div>
          )}
        </div>
        <main className="flex-1">{children}</main>
      </div>
    </div>
  );
}

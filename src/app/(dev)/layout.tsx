'use client';
import Link from 'next/link';
import { Typography } from '@/components';
import Navbar from '@/components/marginals/navbar';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';

export default function DevLayout({ children }: { children: React.ReactNode }) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div>
      <div className="flex flex-col min-h-screen">
        <Navbar />

        <nav className="bg-gray-800 text-white p-4 mt-24 hidden lg:flex">
          <ul className="flex space-x-4">
            <li>
              <Link href="/playground" className="hover:underline">
                <Typography.P className="text-white">Playground</Typography.P>
              </Link>
            </li>
            <li>
              <Link href="/fonts" className="hover:underline">
                <Typography.P className="text-white">Fonts</Typography.P>
              </Link>
            </li>
            <li>
              <Link href="/typography" className="hover:underline">
                <Typography.P className="text-white">Typography</Typography.P>
              </Link>
            </li>
            <li>
              <Link href="/upload" className="hover:underline">
                <Typography.P className="text-white">Upload Asset</Typography.P>
              </Link>
            </li>
            <li>
              <Link href="/admin" className="hover:underline">
                <Typography.P className="text-white">Admin</Typography.P>
              </Link>
            </li>
          </ul>
        </nav>

        <div className="lg:hidden fixed bottom-6 right-6 z-50">
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="bg-gray-800 text-white p-3 rounded-full shadow-lg hover:bg-gray-700 transition-colors"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          {isMobileMenuOpen && (
            <div className="absolute bottom-16 right-0 w-48 bg-gray-800 rounded-md shadow-xl py-2">
              <Link
                href="/playground"
                className="block px-4 py-2 text-white hover:bg-gray-700"
              >
                <Typography.P>Playground</Typography.P>
              </Link>
              <Link
                href="/fonts"
                className="block px-4 py-2 text-white hover:bg-gray-700"
              >
                <Typography.P>Fonts</Typography.P>
              </Link>
              <Link
                href="/typography"
                className="block px-4 py-2 text-white hover:bg-gray-700"
              >
                <Typography.P>Typography</Typography.P>
              </Link>
              <Link
                href="/upload"
                className="block px-4 py-2 text-white hover:bg-gray-700"
              >
                <Typography.P>Upload Asset</Typography.P>
              </Link>
              <Link
                href="/admin"
                className="block px-4 py-2 text-white hover:bg-gray-700"
              >
                <Typography.P>Admin</Typography.P>
              </Link>
            </div>
          )}
        </div>

        <main className="flex-1">{children}</main>
      </div>
    </div>
  );
}

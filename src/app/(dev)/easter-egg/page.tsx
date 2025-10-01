'use client';

import Treasure from '@/components/treasure/treasure';
import React from 'react';

export default function EasterEggPage() {
  return (
    <main className="relative min-h-screen w-full overflow-x-hidden bg-white">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)]"></div>

      <div className="mx-auto flex min-h-screen max-w-screen-2xl flex-col items-center justify-center px-4 py-16 sm:px-6 lg:px-8">
        <div className="w-full">
          <Treasure />
        </div>
      </div>
    </main>
  );
}

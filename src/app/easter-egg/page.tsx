'use client';

import Treasure from '@/components/treasure/treasure';
import React from 'react';

export default function EasterEggPage() {
  return (
    <main>
      <div className="mx-auto flex min-h-screen max-w-screen-2xl flex-col items-center justify-center px-4 py-16 sm:px-6 lg:px-8">
        <div className="w-full">
          <Treasure />
        </div>
      </div>
    </main>
  );
}

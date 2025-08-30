'use client';

import PlaygroundBurger from '@/components/marginals/playground-hamburger';

export default function DevLayout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <div className="flex flex-col min-h-screen">
        <PlaygroundBurger />

        <main className="flex-1">{children}</main>
      </div>
    </div>
  );
}

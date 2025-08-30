'use client';
import { ReactLenis } from 'lenis/react';

import Footer from '../marginals/footer';
import Navbar from '../marginals/navbar';

function HOC({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Navbar />
      <ReactLenis
        root
        options={{
          duration: 1.5,
          easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
          touchMultiplier: 1.5,
        }}
      >
        {children}
      </ReactLenis>
      <Footer />
    </>
  );
}

export default HOC;

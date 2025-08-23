import React from 'react';
import Hero from '@/components/hero/hero';
import Gallery from '@/components/gallery/gallery';

export default function Page() {
  return (
    <>
      <Hero />
      <div className="lg:h-[30vh]"></div>
      <Gallery />
      <div className="lg:h-[30vh]"></div>
    </>
  );
}

import React from 'react';
import About from '@/components/about/about';
import Hero from '@/components/hero/hero';
import Prizes from '@/components/Prizes/prizes';
import Gallery from '@/components/gallery/gallery';

export default function Page() {
  return (
    <>
      <Hero />
      <Gallery />
      <Prizes />
    </>
  );
}

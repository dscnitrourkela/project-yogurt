import React from 'react';
import About from '@/components/about/about';
import Hero from '@/components/hero/hero';
import Gallery from '@/components/gallery/gallery';
import Footer from '@/components/marginals/footer';

import { Timeline } from '@/components/timeline/timeline';

export default function Page() {
  return (
    <>
      <Hero />
      <About />
      <Timeline />
      <Gallery />
      <Footer />
    </>
  );
}

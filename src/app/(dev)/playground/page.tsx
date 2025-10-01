'use client';

import React, { useEffect } from 'react';

import About from '@/components/about/about';
import AsciiLogger from '@/components/ASCII/ASCIIlog';
import { FaqList } from '@/components/faq/faq-list';
import Gallery from '@/components/gallery/gallery';
import Hero from '@/components/hero/hero';
import Prizes from '@/components/prizes/prizes';
import { Sponsors } from '@/components/sponsors/sponsors';
import Stats from '@/components/stats/stats';
import Testimonials from '@/components/testimonials/testimonials';
import { Timeline } from '@/components/timeline/timeline';
import ScrollMarquee from '@/components/ui/marquee';

export default function Page() {
  useEffect(() => {
    fetch('/api/clue')
      .then((res) => res.json())
      .then((data) => console.log('API response:', data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <>
      <Hero />
      <About />
      <Stats />
      <div className="bg-on-black">
        <Gallery />
      </div>
      <ScrollMarquee />

      <Prizes />
      <ScrollMarquee />
      <Timeline />

      <div className="bg-on-black">
        <Sponsors />
        <ScrollMarquee />
        <Testimonials />
        <div className="py-20">
          <ScrollMarquee />
        </div>
        <FaqList />
      </div>
      <ScrollMarquee />
      <AsciiLogger />
    </>
  );
}

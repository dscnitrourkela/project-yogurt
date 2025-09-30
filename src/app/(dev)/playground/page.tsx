'use client';

import React from 'react';

import About from '@/components/about/about';
import { FaqList } from '@/components/faq/faq-list';
import Gallery from '@/components/gallery/gallery';
import Hero from '@/components/hero/hero';
import Prizes from '@/components/prizes/prizes';
import { Sponsors } from '@/components/sponsors/sponsors';
import Stats from '@/components/stats/stats';
import Testimonials from '@/components/testimonials/testimonials';
import { Timeline } from '@/components/timeline/timeline';
import ScrollMarquee from '@/components/ui/marquee';
import AsciiLogger from '@/components/ASCII/ASCIIlog';

export default function Page() {
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

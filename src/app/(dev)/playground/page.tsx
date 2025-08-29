'use client';

import React from 'react';

import About from '@/components/about/about';
import { FaqList } from '@/components/faq/faq-list';
import Prizes from '@/components/Prizes/prizes';
import Gallery from '@/components/gallery/gallery';
import Hero from '@/components/hero/hero';
import Testimonials from '@/components/testimonials/testimonials';
import ScrollMarquee from '@/components/ui/marquee';
import Footer from '@/components/marginals/footer';
import { Timeline } from '@/components/timeline/timeline';
import Stats from '@/components/stats/stats';

export default function Page() {
  return (
    <>
      <Hero />
      <About />
      <Stats />
      <div className="bg-on-black">
        <Gallery />
      </div>
      <Prizes />
      <ScrollMarquee />
      <Timeline />
      <div className="bg-on-black">
        <ScrollMarquee />
        <Testimonials />
        <div className="py-20">
          <ScrollMarquee />
        </div>
        <FaqList />
      </div>
      <ScrollMarquee />
      <Footer />
    </>
  );
}

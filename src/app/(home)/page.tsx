
import { Typography } from '@/components';
import { useEffect } from "react";
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
import React from 'react';

export default function Home() {
  

  useEffect(() => {
    fetch("/api/clue")
      .then((res) => res.json())
      .then((data) => console.warn("help me pleaseee!"));
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

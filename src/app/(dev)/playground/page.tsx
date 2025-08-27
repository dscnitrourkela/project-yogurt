import React from 'react';

import About from '@/components/about/about';
import { FaqList } from '@/components/faq/faq-list';
import Gallery from '@/components/gallery/gallery';
import Hero from '@/components/hero/hero';
import Footer from '@/components/marginals/footer';
import Testimonials from '@/components/testimonials/testimonials';
import ScrollMarquee from '@/components/ui/marquee';

export default function Page() {
  return (
    <>
      <Hero />
      <About />
      <div className="bg-on-black">
        <Gallery />
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

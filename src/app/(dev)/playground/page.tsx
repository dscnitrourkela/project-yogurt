import React from 'react';
import About from '@/components/about/about';
import Hero from '@/components/hero/hero';
import { FaqList } from '@/components/faq/faq-list';
import Gallery from '@/components/gallery/gallery';
import Footer from '@/components/marginals/footer';
import Testimonials from '@/components/testimonials/testimonials';
import ScrollMarquee from '@/components/ui/marquee';

export default function Page() {
  return (
    <>
      <Hero />
      <About />
      <Gallery />
      <Testimonials />
      <div className="py-20 bg-on-black">
        <ScrollMarquee />
      </div>
      <FaqList />
      <ScrollMarquee />
      <Footer />
    </>
  );
}

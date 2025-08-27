import React from 'react';
import About from '@/components/about/about';
import Hero from '@/components/hero/hero';
import { FaqList } from '@/components/faq/faq-list';
import Gallery from '@/components/gallery/gallery';
import Footer from '@/components/marginals/footer';

export default function Page() {
  return (
    <>
      <Hero />
      <FaqList />
      <About />
      <Gallery />
      <Footer />
    </>
  );
}

import React from 'react';
import Hero from '@/components/hero/hero';
import { FaqList } from '@/components/faq/faq-list';
import Footer from '@/components/marginals/footer';

export default function Page() {
  return (
    <>
      <Hero />
      <FaqList />
      <Footer />
          
    </>
  );
}

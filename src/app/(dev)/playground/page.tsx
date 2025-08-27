import React from 'react';
import Hero from '@/components/hero/hero';

import { Timeline } from '@/components/timeline/timeline';

export default function Page() {
  return (
    <>
      <Hero />
      <Timeline />
      <Hero />
    </>
  );
}

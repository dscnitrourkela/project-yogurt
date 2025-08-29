'use client';
import React, { useRef } from 'react';

import { TextReveal } from '@/components/ui/text-reveal';
import { aboutConfig } from '@/config/about';

const About: React.FC = () => {
  const textRevealRef = useRef<HTMLDivElement>(null);
  return (
    <section
      className=" -mt-[55vw] grid place-items-center min-h-screen  pt-10"
      id="about"
    >
      <div ref={textRevealRef} className="w-full flex justify-center">
        <TextReveal className="text-black font-averta-std !text-sm sm:!text-base md:!text-lg lg:!text-xl leading-relaxed">
          {aboutConfig.description}
        </TextReveal>
      </div>
    </section>
  );
};

export default About;

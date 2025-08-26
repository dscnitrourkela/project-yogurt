'use client';
import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

import { config } from '@/config/about';
import { TextReveal } from '@/components/magicui/text-reveal';

const About: React.FC = () => {
  const textRevealRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: textRevealRef,
    offset: ['start end', 'end start'],
  });
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0.7]);

  return (
    <section className=" grid place-items-center min-h-screen  pt-10">
      <div ref={textRevealRef} className="w-full flex justify-center">
        <TextReveal className="text-black font-averta-std !text-sm sm:!text-base md:!text-lg lg:!text-xl leading-relaxed">
          {config.description}
        </TextReveal>
      </div>
    </section>
  );
};

export default About;

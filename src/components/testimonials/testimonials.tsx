'use client';
import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Image from 'next/image';
import { globeLogo, testimonialInfo, twitterLogo } from '@/config/testimonials';
import { H1, Muted, P, Small } from '../Typography';
import Marquee from 'react-fast-marquee';
import ScrollVelocity from './scrollvelocity';
import ScrollMarquee from './marquee';

gsap.registerPlugin(ScrollTrigger);

const ScrollingCards: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<(HTMLLIElement | null)[]>([]);
  const headingRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (cardsRef.current.length > 0) {
      const cards = cardsRef.current.filter(Boolean) as HTMLLIElement[];

      cards.forEach((card, index) => {
        gsap.fromTo(
          card,
          { y: 100 },
          {
            y: 0,
            opacity: 1,
            duration: 0.5,
            scrollTrigger: {
              trigger: card,
              start: 'top 60%',
              end: '+=300',
              toggleActions: 'play none none none',
            },
          }
        );
      });
    }

    if (headingRef.current && cardsRef.current.length > 0) {
      const firstCard = cardsRef.current[0];
      if (firstCard) {
        gsap.to(headingRef.current, {
          opacity: 1,
          scrollTrigger: {
            trigger: firstCard,
            start: 'top center',
            end: 'bottom center',
            scrub: true,
          },
        });
      }
    }

    return () => {
      ScrollTrigger.getAll().forEach((instance) => instance.kill());
    };
  }, []);

  const addToRefs = (el: HTMLLIElement | null, index: number) => {
    if (el && !cardsRef.current.includes(el)) {
      cardsRef.current[index] = el;
    }
  };

  return (
    <div className="bg-[#181818] min-h-screen font-sans relative">
      <ScrollMarquee />

      <div className="sticky top-0 h-screen flex items-center justify-center pointer-events-none z-0">
        <div ref={headingRef} className="text-center">
          <H1 className="text-4xl sm:text-7xl lg:text-8xl 2xl:text-9xl uppercase text-white font-wc-rough-trad font-normal">
            Testimonials
          </H1>
        </div>
      </div>

      <div
        ref={containerRef}
        className="container w-[300px] sm:w-[420px] 2xl:w-[560px] mx-auto py-8 relative z-10 px-4"
      >
        <ul
          id="cards"
          className="list-none p-0 grid grid-cols-1 gap-[36vh] pb-[calc(var(--cards)_*_1.5em)] mb-[4vw]"
        >
          {testimonialInfo.map((cardNum, index) => (
            <li
              key={`card${cardNum.id}`}
              ref={(el) => addToRefs(el, index)}
              id={`card${cardNum}`}
              className="card sticky top-[30vh]"
              style={{
                paddingTop: `calc(${index + 1} * 1.5em)`,
                rotate: index % 2 === 0 ? '-5deg' : '5deg',
                marginTop: `${index * 5}vh`,
              }}
            >
              <div
                className={`card-body box-border p-6 2xl:p-10 rounded-xl shadow-[0_0_30px_0_rgba(0,0,0,0.3)] flex justify-center items-center transition-all duration-500 bg-white border border-black`}
              >
                <div className="w-full flex flex-col gap-6">
                  <div className="flex justify-between w-full">
                    <div className="flex gap-6">
                      <div className="w-[48px] h-[48px] 2xl:w-[64px] 2xl:h-[64px] bg-[#D9D9D9] rounded-[50%]"></div>
                      <div>
                        <H1 className="font-averta-std font-[600] text-sm sm:text-base 2xl:text-2xl">
                          {cardNum.title}
                        </H1>
                        <Muted className="text-[#919191] font-averta-std text-sm sm:text-base 2xl:text-2xl">
                          {cardNum.subtitle}
                        </Muted>
                      </div>
                    </div>
                    <div>
                      <Image
                        src={twitterLogo}
                        alt=""
                        width={300}
                        height={300}
                        className="sm:h-[2vw] sm:w-[2vw] h-6 w-6 "
                      />
                    </div>
                  </div>
                  <div>
                    <P className="font-averta-std text-sm sm:text-base 2xl:text-xl">
                      {cardNum.content}
                    </P>
                  </div>
                  <div className="flex gap-[1vw] font-averta-std text-[#9B9B9B] text-sm sm:text-base 2xl:text-xl">
                    <Small>{cardNum.time}</Small>
                    <Small>{cardNum.date}</Small>
                    <Small>{cardNum.hacknitr}</Small>
                  </div>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>

      <ScrollMarquee />
    </div>
  );
};

export default ScrollingCards;

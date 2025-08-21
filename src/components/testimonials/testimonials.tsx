'use client';
import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Image from 'next/image';
import { twitterLogo } from '@/config/testimonials';

gsap.registerPlugin(ScrollTrigger);

const ScrollingCards: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<(HTMLLIElement | null)[]>([]);

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
    <div className="bg-[#181818] min-h-screen font-sans">
      <h1 className="text-5xl md:text-7xl lg:text-8xl uppercase fixed text-white font-wc-rough-trad top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%]">
        Testimonials
      </h1>
      <div
        ref={containerRef}
        className="container w-[300px] sm:w-[420px] mx-auto py-8 pt-[20vh]"
      >
        <ul
          id="cards"
          className="list-none p-0 grid grid-cols-1 gap-[36vh] pb-[calc(var(--cards)_*_1.5em)] mb-[4vw]"
        >
          {[1, 2, 3, 4].map((cardNum, index) => (
            <li
              key={`card${cardNum}`}
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
                className={`card-body box-border p-6 rounded-xl shadow-[0_0_30px_0_rgba(0,0,0,0.3)] flex justify-center items-center transition-all duration-500 bg-white border border-black`}
              >
                <div className="w-full flex flex-col gap-6">
                  <div className="flex justify-between w-full">
                    <div className="flex gap-[2vw]">
                      <div className="w-[48px] bg-[#D9D9D9] rounded-[50%]"></div>
                      <div>
                        <h1 className="font-averta-std font-[600] text-sm sm:text-base">
                          Alexendro
                        </h1>
                        <h2 className="text-[#919191] font-averta-std text-sm sm:text-base">
                          @sora_47
                        </h2>
                      </div>
                    </div>
                    <div>
                      <Image
                        src={twitterLogo}
                        alt=""
                        width={300}
                        height={300}
                        className="sm:h-[2vw] sm:w-[2vw] h-6 w-6"
                      />
                    </div>
                  </div>
                  <div>
                    <p className="font-averta-std text-sm sm:text-base">
                      Thank you for this truly AMAZING event! It was so nice
                      meeting with everyone and hearing such inspiring talks!!!
                      Can’t wait for the next one already!
                    </p>
                  </div>
                  <div className="flex gap-[1vw] font-averta-std text-[#9B9B9B] text-sm sm:text-base">
                    <h1>2:21 PM</h1>
                    <h1>Jul 12, 2024</h1>
                    <h1>HackNITR 5.0</h1>
                  </div>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ScrollingCards;

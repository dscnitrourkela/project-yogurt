'use client';

import { useState } from 'react';
import { motion } from 'motion/react';
import confetti from 'canvas-confetti';
import React from 'react';
import Typography from '../Typography';

export default function Treasure() {
  const [isSuccess, setIsSuccess] = useState(false);
  const discordLink = 'YOUR_DISCORD_LINK_HERE';

  const handleSubmit = async (answer: string) => {
    try {
      const response = await fetch('/api/solve', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ answer }),
      });

      const data = await response.json();

      if (data.success) {
        setIsSuccess(true);
        confetti({
          particleCount: 100,
          spread: 70,
          origin: { y: 0.6 },
        });
      } else {
        alert("Not quite right! Keep trying, you're getting closer!");
      }
    } catch (error) {
      console.error('Error:', error);
      alert('Something went wrong. Please try again.');
    }
  };

  React.useEffect(() => {
    const answer = prompt('Enter your answer:');
    if (answer) {
      handleSubmit(answer);
    }
  }, []);

  if (!isSuccess) {
    return (
      <section className="flex min-h-screen items-center justify-center bg-gradient-to-b from-white to-gray-100">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <Typography.H2 className="text-center font-wc-rough-trad text-2xl sm:text-3xl font-bold text-[#150BDE]">
            Verifying your answer...
          </Typography.H2>
        </div>
      </section>
    );
  }

  return (
    <section className="relative flex min-h-screen w-full items-center justify-center overflow-hidden bg-gradient-to-b from-white to-gray-100">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16">
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center justify-center text-center"
        >
          <Typography.H1 className="mb-6 sm:mb-8 lg:mb-10 font-wc-rough-trad text-4xl xs:text-4xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-[#150BDE] max-w-[90vw] sm:max-w-[80vw] md:max-w-3xl">
            <span className="block sm:inline">Congratulations</span>{' '}
            <span className="block sm:inline">Explorer!</span>
          </Typography.H1>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="mx-auto w-full max-w-3xl space-y-4 sm:space-y-6 px-4 sm:px-6"
          >
            <Typography.P className="text-base sm:text-lg md:text-xl text-gray-700 whitespace-pre-line">
              The stars have led, the traffic spoke, yet secrets lie where
              vaults don't choke. In whispered paths and hidden streams, unfold
              the truth behind the scenes.
            </Typography.P>

            <Typography.P className="mb-8 sm:mb-10 lg:mb-12 text-base sm:text-lg md:text-xl text-gray-700">
              Your journey begins — connect and explore, join our Discord to
              unlock more!
            </Typography.P>

            <motion.div
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 1 }}
              className="flex flex-col items-center gap-4 w-full"
            >
              <motion.a
                href={discordLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block rounded-lg bg-[#150BDE] px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg md:text-xl font-semibold text-white transition-all hover:bg-[#0F08A8] hover:shadow-lg"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Join the HackNITR Community
              </motion.a>

              <motion.a
                href="/playground"
                className="inline-block rounded-md border-2 border-[#150BDE] bg-transparent px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg md:text-xl font-semibold text-[#150BDE] transition-all hover:bg-[#150BDE] hover:text-white hover:shadow-lg"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 1.2 }}
              >
                Return to Home
              </motion.a>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

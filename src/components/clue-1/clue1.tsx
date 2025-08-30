'use client';

import { useEffect } from 'react';

export default function Clue() {
  useEffect(() => {
    console.error(`Error 404: Help Xori Reach Home`);
    console.warn(`clue-a 
    Two letters lead the way.One begins Javascript,the other starts Tools.Put them side by side to begin your journey`);
    console.warn(`clue-b
    Three Stars Shine, but only one is bright. The number of the brightest is the one you see.
    `);
    console.log(`For next clue
        check network tab`);
  }, []);
  return null;
}

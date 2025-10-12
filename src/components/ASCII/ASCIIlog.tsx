'use client';

import { useEffect } from 'react';

export default function AsciiLogger() {
  function addClue3() {
    const CLUE_3_MESSAGE =
      'Sometimes, the clearest path is hidden in plain sight. Seek out the source—explore the GitHub repository for this website to uncover where you need to proceed.';

    const clue1 =
      'I am a letter of the alphabet, but also a word that means you. What am I?';

    const clue2 =
      'I am a sequence where each number is the sum of the two that came before it. If my path is 0, 1, 1, 2, 3, 5... what is the next step on my journey?';
    localStorage.setItem('message', CLUE_3_MESSAGE);
    localStorage.setItem('clue1', clue1);
    localStorage.setItem('clue2', clue2);
  }
  useEffect(() => {
    console.log(
      `%c
    +++++++++++++++++++++    
  #+---------------------++  
  +--+#################+--+  
#++-+###################--+++
+++-+####+#########+####--+-+
+-+-+##    #######    ##--+-+
++#-+###+-+#######+-+###--+-+
#+#-+###################--#+#
  #--###################--#  
  #+-------------------+++#  
   ##+++++++++++++++++++#+   
      #+#############+#      
   ##+++++#########++++++

The console spoke, but its voice grows faint.
If you wish to find the next clue’s paint,
Follow the path where whispers travel,
Requests and answers slowly unravel`,
      'font-family: monospace; white-space: pre;'
    );

    console.error(`Error 404: Help Xori Reach Home`);
    console.info(`You get two clues here`);
    console.warn(`clue-a 
    Two letters lead the way.One begins Javascript,the other starts Tools.Put them side by side to begin your journey`);
    console.warn(`clue-b
    Three Stars Shine, but only one is bright. The number of the brightest is the one you see.
    `);

    console.warn(
      'Please reload to be able to continue to next clue while keeping the inspect tab open!'
    );
    addClue3();
  }, []);

  return null;
}

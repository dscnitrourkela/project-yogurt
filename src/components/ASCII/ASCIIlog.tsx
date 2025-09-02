'use client';

import { useEffect } from 'react';
import Clue from '../clue-1/clue1';

export default function AsciiLogger() {
  function addClue3() {
    const CLUE_3_MESSAGE = 'Xori has found his way! Navigate to /final';

    // Step 5 riddle (Answer: U)
    const clue1 =
      'I am a letter of the alphabet, but also a word that means you. What am I?';

    // Step 6 riddle (Answer: 8)
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
       HACKNITR 7.0`,
      'font-family: monospace; white-space: pre; line-height: 1.2;'
    );
    addClue3();
  }, []);

  return <Clue />;
}

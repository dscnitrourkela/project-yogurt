'use client';

import { useEffect } from 'react';

export default function AsciiLogger() {
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
Requests and answers slowly unravel`,
      'font-family: monospace; white-space: pre; line-height: 1.2;'
    );
    console.error(`Error 404: Help Xori Reach Home`);
    console.info(`You get two clues here`);
    console.warn(`clue-a 
    Two letters lead the way.One begins Javascript,the other starts Tools.Put them side by side to begin your journey`);
    console.warn(`clue-b
    Three Stars Shine, but only one is bright. The number of the brightest is the one you see.
    `);
  }, []);

  return null;
}

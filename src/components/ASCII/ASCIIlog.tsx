'use client';

import { useEffect } from 'react';
import Clue from '../clue-1/clue1';

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
       HACKNITR 7.0`,
      'font-family: monospace; white-space: pre; line-height: 1.2;'
    );
  }, []);

  return <Clue />;
}

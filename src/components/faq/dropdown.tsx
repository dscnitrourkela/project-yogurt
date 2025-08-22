'use client';

import React, { useState } from 'react';
import { Plus } from 'lucide-react';
import Typography from '../Typography';

type DropdownProps = {
  question: string;
  answer: string;
};

export const Dropdown: React.FC<DropdownProps> = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isHover, setIsHover] = useState(false);

  return (
    <div className=" relative w-full max-w-2xl mx-auto mb-4 mt-10 px-4 ">
      <div className="relative">
        <div>
          {/* Blue Tab */}
          <div
            className={`absolute -top-9 left-0 right-120 h-12 bg-[#0617B0] rounded-t-2xl 
            border-t-2 border-l-2 border-r-2 border-[#ACACAC] min-w-20 z-1`}
          ></div>
          <div
            className={`absolute -top-4.5 left-0 right-10 h-9.5 bg-[#0617B0] border-l-2  border-[#ACACAC] z-1 min-w-20`}
          ></div>
          <div
            className={`absolute -top-5 left-0 right-0 bg-[#0617B0] rounded-t-2xl 
            border-t-2 border-l-2 border-r-2 border-[#ACACAC] min-w-60 z-0
            transition-all duration-200 ease-in ${!isOpen ? 'h-10' : 'h-60'} `}
          ></div>
          <div
            className={`absolute left-10 right-10 bg-white rounded-t-2xl z-1 min-w-40
            transition-all duration-200 ease-in ${!isOpen ? 'h-8' : 'h-60'} 
            transition-all duration-100 ${!isHover ? '-top-1' : '-top-3'}
            justify-center
            `}
          >
            <Typography.P className={`mt-5 ml-5 nr-5`}>{answer}</Typography.P>
          </div>
        </div>
        {/* Main Card */}
        <div
          className={`relative bg-[#181818] rounded-2xl px-4 py-4 border-2 border-[#ACACAC] min-h-[80px] min-w-60 z-10
            transition-all duration-200 ease-in ${!isOpen ? 'mb-0 -bottom-0' : 'mb-40 -bottom-40'}`}
          onClick={() => setIsOpen(!isOpen)}
          onMouseEnter={() => setIsHover(true)}
          onMouseLeave={() => setIsHover(false)}
        >
          <div className="w-full flex items-center justify-between relative top-[0.4em] z-1">
            <Typography.H6 className="text-white">{question}</Typography.H6>
            <div>
              <Plus
                size={32}
                color="white"
                className={`relative -top-[0.3em] transition-transform duration-300 origin-center 
                ${!isHover ? 'rotate-0' : 'rotate-135'}`}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

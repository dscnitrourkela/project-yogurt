import React from 'react';

import { Typography } from '@/components';
import { Dropdown } from '@/components/faq/dropdown';
import { questions } from '@/config/faq';

export const FaqList: React.FC = () => {
  return (
    <section
      className="min-h-screen flex flex-col items-center justify-center py-24 w-full"
      id="faqs"
    >
      <div className="relative w-full">
        {/* Squares fixed at top-left */}
        <div className="absolute top-5 left-6 sm:top-9 sm:left-15 md:top-20 md:left-20">
          <div className="relative w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20">
            {/* First square */}
            <div className="absolute top-0 left-0 w-6 h-6 sm:w-10 sm:h-10 md:w-12 md:h-12 bg-gray-700"></div>
            {/* Second square (shifted down-right) */}
            <div className="absolute top-6 left-6 sm:top-10 sm:left-10 md:top-12 md:left-12 w-6 h-6 sm:w-10 sm:h-10 md:w-12 md:h-12 bg-gray-700"></div>
          </div>
        </div>

        {/* Centered FAQ Title */}
        <div className="flex items-center justify-center p-8 w-full text-center">
          <Typography.H1 className=" font-normal font-wc-rough-trad text-[#f2f3f7] text-[clamp(3.5rem,5vw,6rem)]">
            FAQ's
          </Typography.H1>
        </div>
      </div>

      <div className="w-full max-w-2xl flex flex-col gap-4 mt-32">
        {questions.map((question, index) => (
          <Dropdown
            key={`question` + index}
            question={question.question}
            answer={question.answer}
            finalHeightAnswer={question.answerStyle}
            finalHeightQuestion={question.questionStyle}
            fontSizeScaling={question.fontSizeScaling}
          />
        ))}
      </div>
    </section>
  );
};

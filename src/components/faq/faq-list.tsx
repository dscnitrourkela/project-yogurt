import React from 'react';
import { Dropdown } from '@/components/faq/dropdown';
import { questions } from '@/config/faq';
import { Typography } from '@/components';

export const FaqList: React.FC = () => {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center py-20 w-full bg-on-black mt-60">
      <div className="relative w-full">
        {/* Squares fixed at top-left */}
        <div className="absolute top-5 left-10 sm:top-9 sm:left-15 md:top-20 md:left-20">
          <div className="relative w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20">
            {/* First square */}
            <div className="absolute top-0 left-0 w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 bg-gray-700"></div>
            {/* Second square (shifted down-right) */}
            <div className="absolute top-8 left-8 sm:top-10 sm:left-10 md:top-12 md:left-12 w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 bg-gray-700"></div>
          </div>
        </div>

        {/* Centered FAQ Title */}
        <div className="flex items-center justify-center p-8 w-full text-center">
          <Typography.H1 className="font-wc-rough-trad text-[#f2f3f7] ">
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

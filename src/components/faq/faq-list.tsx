import React from 'react';
import { Dropdown } from '@/components/faq/dropdown';
import { questions } from '@/config/faq';
import { Typography } from '@/components';

export const FaqList: React.FC = () => {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center py-20 w-full bg-on-black mt-60">
      <div className="relative w-full">
        {/* Squares in the top-left corner */}
        <div className="absolute top-4 left-4 md:top-8 md:left-8 flex mt-5 ml-20">
          <div className="w-12 h-12 md:w-14 md:h-14 bg-gray-700 border-2 border-black mt-14"></div>
          <div className="w-12 h-12 md:w-14 md:h-14 bg-gray-700 border-2 border-black"></div>
        </div>

        {/* FAQ Title */}
        <div className="flex items-center justify-center gap-4 p-8 w-full text-center">
          <Typography.H1 className="font-wc-rough-trad text-[#f2f3f7]">
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
          />
        ))}
      </div>
    </section>
  );
};

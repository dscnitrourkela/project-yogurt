import React from 'react';
import { Dropdown } from '@/components/faq/dropdown';
import { questions } from '@/config/faq';
import { Typography } from '@/components';

export const FaqList: React.FC = () => {
  return (
    <section className="min-h-screen flex items-center justify-center py-20 w-full bg-on-black mt-60 ">
      <div className="flex flex-col items-center justify-start p-8 w-full">
        <Typography.H1 className={'font-wc-rough-trad text-[#f2f3f7] relative'}>
          FAQ's
        </Typography.H1>
        <div className="w-full max-w-2xl flex flex-col gap-4 min-300 mt-32">
          {questions.map((question, index) => (
            <Dropdown
              key={`question` + index}
              question={question.question}
              answer={question.answer}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export interface Question {
  question: string;
  answer: string;
  answerStyle: string;
  questionStyle: string;
  fontSizeScaling?: string;
}

export const questions: Question[] = [
  {
    question: 'What are the dates for HackNITR 7.0?',
    answer:
      'HackNITR 7.0 will be held on 31st Oct 1st Nov and 2nd Nov 2025. We will be waiting for you with a warm welcome.\n',
    answerStyle: 'h-35',
    questionStyle: 'mb-25 -bottom-25',
    fontSizeScaling: 'text-[clamp(.85rem,2vw,1rem)]',
  },
  {
    question: 'What could be the size of the team?',
    answer:
      "We're only looking for groups of 2 to 4 heroes this time. No solo adventurers allowed. Gather your buddies and get ready for an epic adventure together!\n",
    answerStyle: 'h-40',
    questionStyle: 'mb-30 -bottom-30',
    fontSizeScaling: 'text-[clamp(0.8rem,3vw,1rem)]',
  },
  {
    question: 'What is the participation fee?',
    answer:
      'Only a creative mind, enthusiasm, and interest are required to participate in the hackathon. In short, the hackathon is entirely free and without monetary charges.',
    answerStyle: 'h-40',
    questionStyle: 'mb-30 -bottom-30',
    fontSizeScaling: 'text-[clamp(0.72rem,3vw,1rem)]',
  },
  {
    question: 'Will my travel expenses be reimbursed?',
    answer:
      'Since HackNITR 7.0 is a student-run hackathon, we will not be able to cover your travel expenses.',
    answerStyle: 'h-30',
    questionStyle: 'mb-22 -bottom-22',
    fontSizeScaling: 'text-[clamp(0.78rem,2vw,1rem)]',
  },
  {
    question: 'Who can participate?',
    answer:
      'Any student with a zeal to innovate and have some fun with creativity can apply. But the status of your application can be changed anytime by the organizing team. ' +
      'The final decision is vested with the organizing team and the candidature can be changed based on the undertaking.',
    answerStyle: 'h-60',
    questionStyle: 'mb-45 -bottom-45',
    fontSizeScaling: 'text-[clamp(0.75rem,3vw,1rem)]',
  },
  {
    question: 'Can I participate online?',
    answer:
      'No, since HackNITR 7.0 is a completely offline hackathon, online participation is not encouraged.',
    answerStyle: 'h-30',
    questionStyle: 'mb-22 -bottom-22',
    fontSizeScaling: 'text-[clamp(0.8rem,3vw,1rem)]',
  },
  {
    question:
      'What all things do you need to with while attending the hackathon?',
    answer:
      'Although we will provide you with a lot of things, you should bring your laptop, chargers, extension cords, and any other hardware you might need. Furthermore it is mandatory' +
      ' to bring a physical copy of your undertaking form signed by your college authority and the hacker ID assigned to you within 24 hrs before the event along with a valid govt. ID. ' +
      'For further information please look at Things to carry for HackNITR 7.0 notion link. Students failing to submit the MoU within the stipulated time will be disqualified from the event.',
    answerStyle: 'h-85',
    questionStyle: 'mb-73 -bottom-73',
    fontSizeScaling: 'text-[clamp(0.7rem,3.4vw,.9rem)]',
  },
  {
    question: 'Will food be provided at the hackathon?',
    answer:
      'Of course!! Meals, water, snacks and most importantly- Coffee, will be provided FREE OF COST.',
    answerStyle: 'h-30',
    questionStyle: 'mb-22 -bottom-22',
    fontSizeScaling: 'text-[clamp(0.85rem,3vw,1rem)]',
  },
];

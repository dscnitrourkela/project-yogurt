export interface Brochure {
  id: number;
  title: string;
  pdfUrl: string | null;
  description: string;
  comingSoon: boolean;
}

export const brochures: Brochure[] = [
  {
    id: 2,
    title: 'Sponsorship Brochure',
    pdfUrl:
      'https://drive.google.com/file/d/1UId3i8KPrWFJC-oQAYoguCMD8l3ynI2L/view',
    description: 'Partnership and sponsorship opportunities',
    comingSoon: false,
  },
  {
    id: 1,
    title: 'Event Brochure',
    pdfUrl: null,
    description: 'Complete details about HackNITR 7.0',
    comingSoon: true,
  },
];

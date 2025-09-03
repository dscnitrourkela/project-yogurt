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
      'https://drive.google.com/file/d/1-3HYx8s8zRwyLSNof3UXHn-xJRBKLaT2/view',
    description: 'Partnership and sponsorship opportunities',
    comingSoon: false,
  },
  {
    id: 1,
    title: 'Event Brochure',
    pdfUrl: 'https://drive.google.com/file/d/1xUPlUUJJGuch4gge_73uZGEAJRjaAoPW/view',
    description: 'Complete details about HackNITR 7.0',
    comingSoon: false,
  },
];

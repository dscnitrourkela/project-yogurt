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
      'https://drive.google.com/file/d/1paMq5jSud4C4f_EqQg2kWnuCxSt0hWBL/view?usp=sharing',
    description: 'Partnership and sponsorship opportunities',
    comingSoon: false,
  },
  {
    id: 1,
    title: 'Event Brochure',
    pdfUrl:
      'https://drive.google.com/file/d/1avGeNfGIVMoP0B0rxqmwkWCPKD1tkOsN/view?usp=sharing',
    description: 'Complete details about HackNITR 7.0',
    comingSoon: false,
  },
];

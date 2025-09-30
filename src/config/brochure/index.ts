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
      'https://drive.google.com/file/d/1pO6DZykZnhjN11n-KmyEHZcQL0G1Dy4L/view?usp=sharing',
    description: 'Partnership and sponsorship opportunities',
    comingSoon: false,
  },
  {
    id: 1,
    title: 'Event Brochure',
    pdfUrl:
      'https://drive.google.com/file/d/1ozZv-LzvMh9MeOiZbGd_7sQ4rHk3JPQl/view?usp=sharing',
    description: 'Complete details about HackNITR 7.0',
    comingSoon: false,
  },
];

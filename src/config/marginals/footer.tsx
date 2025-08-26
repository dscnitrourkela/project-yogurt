export type Social = {
  name: string;
  href: string;
  icon: string;
};

export const SOCIALS: Social[] = [
  {
    name: 'INSTAGRAM',
    href: 'https://www.instagram.com/hacknitr/',
    icon: 'https://res.cloudinary.com/dscnitrourkela/image/upload/v1755710454/hacknitr/cd0lyrhdlzfrevhbgluk.png',
  },
  {
    name: 'LINKEDIN',
    href: 'https://www.linkedin.com/company/hacknitr/',
    icon: 'https://res.cloudinary.com/dscnitrourkela/image/upload/v1755710453/hacknitr/ljpzd4qbjttmkqrz3se0.png',
  },
  {
    name: 'X',
    href: 'https://x.com/hacknitr',
    icon: 'https://res.cloudinary.com/dscnitrourkela/image/upload/v1755710453/hacknitr/wi5kohs8crycruil6pfk.png',
  },
  {
    name: 'GITHUB',
    href: 'https://github.com/dscnitrourkela/project-yogurt',
    icon: 'https://res.cloudinary.com/dscnitrourkela/image/upload/v1755710453/hacknitr/xspkjzkj2uhjgiypnefh.png',
  },
];

export const HERO_IMAGES = {
  main: {
    desktop:
      'https://res.cloudinary.com/dscnitrourkela/image/upload/v1755437147/hacknitr/si7ci7j5xowo2ytkj54q.png',
    mobile:
      'https://res.cloudinary.com/dscnitrourkela/image/upload/v1755437147/hacknitr/si7ci7j5xowo2ytkj54q.png',
  },
  overlay: {
    desktop:
      'https://res.cloudinary.com/dscnitrourkela/image/upload/v1755437147/hacknitr/si7ci7j5xowo2ytkj54q.png',
    mobile:
      'https://res.cloudinary.com/dscnitrourkela/image/upload/v1755437147/hacknitr/si7ci7j5xowo2ytkj54q.png',
  },
};

export const FOOTER_TEXT = [
  {
    text: (
      <>
        Crafted with <span className="text-pink-500">💖</span> by HackNITR Team
      </>
    ),
  },
];

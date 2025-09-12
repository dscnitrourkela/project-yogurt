export const navItems = [
  // { name: 'Home', href: '/' },
  // { name: 'About', href: '#about' },
  { name: 'Stats', href: '/#stats' },
  { name: 'Prizes', href: '/#prizes' },
  { name: 'Timeline', href: '/#timeline' },
  { name: 'Sponsors', href: '/#sponsors' },
  { name: 'FAQs', href: '/#faqs' },
  // { name: 'Coming Soon', href: '/#' },
];

export const logo = {
  href: '/#hero',
  src: '/logo.svg',
  alt: 'HackNITR Logo',
  width: 50,
  height: 50,
};

export const hamburgerIcon = {
  src: '/hamburger.svg',
  alt: 'Menu',
  width: 30,
  height: 30,
};

export const DISCORD_LINK = 'https://discord.gg/KhuxUg9vkt';
export const DEVFOLIO_LINK = 'https://hacknitr7.devfolio.co/';

export const background =
  'https://res.cloudinary.com/dscnitrourkela/image/upload/v1754225393/hacknitr/kih0gsyskoslbgd9frvz.png';

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
    name: 'TWITTER',
    href: 'https://x.com/hacknitr',
    icon: 'https://res.cloudinary.com/dscnitrourkela/image/upload/v1756584254/hacknitr/ba7wbkcwr2ukb9lk8snm.png',
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

export const FOOTER_TEXT = 'Crafted with ❤️ by HackNITR Team';

export const playgroundMenu = [
  { name: 'Home', href: '/' },
  { name: 'Playground', href: '/playground' },
  // { name: 'Admin', href: '/admin' },
  // { name: 'Fonts', href: '/fonts' },
  // { name: 'Typography', href: '/typography' },
  // { name: 'Upload Asset', href: '/upload' },
];

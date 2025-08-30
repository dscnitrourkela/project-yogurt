const images = [
  'https://hacknitr.com/logo.png',
  'https://res.cloudinary.com/dscnitrourkela/image/upload/v1752326964/hacknitr/zblorl5fuiaulxica9cu.png',
];
const description =
  'HackNITR 7.0 is happening on 1st and 2nd November 2025! Get ready for an exciting hackathon where creativity meets technology to solve real-world challenges. Join a vibrant community of tech enthusiasts for innovation, collaboration, and unforgettable experiences. Stay tuned for more details about HackNITR 7.0!';

const title = { default: 'HackNITR 7.0', template: `%s | HackNITR 7.0` };
const url = 'https://hacknitr.com/';
const metadataBase = new URL(url);

export const metaDataObject = {
  metadataBase: metadataBase,
  title: title,
  openGraph: {
    url: url,
    description: description,
    images: images,
  },
  description: description,
};

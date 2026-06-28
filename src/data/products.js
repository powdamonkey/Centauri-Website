const base = import.meta.env.BASE_URL;

export const products = [
  {
    id: 'hypnos-tee',
    name: 'HYPNOS TEE',
    price: 65,
    image: `${base}images/hypnos-tee-back.png`,
    images: [`${base}images/hypnos-tee-back.png`, `${base}images/hypnos-tee-front.png`],
    description: 'Oversized heavyweight tee in natural cream. Greek mythology inspired graphic on the back.',
    collection: "SUMMER '26 COLLECTION",
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
  },
];

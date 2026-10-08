export interface Project {
  number: string;
  name: string;
  type: string;
  /** Short line shown on the home page card. */
  description: string;
  /** Longer summary shown on the projects page. */
  summary: string;
  image: string;
  alt: string;
  imageClass: string;
}

export const projects: Project[] = [
  {
    number: '01',
    name: 'Fieldnotes',
    type: 'Brand platform · Digital product',
    description: 'A calmer way for curious people to collect the things they notice.',
    summary: 'A reflective journaling platform built to make everyday observation feel calmer and more intentional.',
    image: 'https://images.unsplash.com/photo-1499750310107-5fef28a66643?auto=format&fit=crop&w=1200&q=85',
    alt: 'A notebook and coffee on a sunlit desk',
    imageClass: 'saturate-[0.72]',
  },
  {
    number: '02',
    name: 'Openhouse',
    type: 'Product design · Development',
    description: 'Making the search for a place to belong feel a little more human.',
    summary: 'A human-centered place-finding experience designed to help people feel welcome before they even arrive.',
    image: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1200&q=85',
    alt: 'A warm, thoughtfully designed living room',
    imageClass: 'saturate-[0.76]',
  },
  {
    number: '03',
    name: 'Goodside',
    type: 'Art direction · E-commerce',
    description: 'A bright new home for everyday essentials, made to last.',
    summary: 'An editorial e-commerce concept focused on beautiful essentials, useful storytelling, and trusted quality.',
    image: 'https://images.unsplash.com/photo-1602143407151-7111542de6e8?auto=format&fit=crop&w=1200&q=85',
    alt: 'A reusable water bottle in soft afternoon light',
    imageClass: 'saturate-[0.7]',
  },
];

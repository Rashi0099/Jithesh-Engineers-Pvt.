export interface NavItem {
  label: string;
  targetId: string;
  path: string;
}

export interface SocialLink {
  name: string;
  url: string;
}

export interface CompanyInfo {
  name: string;
  legalName: string;
  tagline: string;
  established: number;
  founder: string;
  headquarters: string;
  address: string;
  email: string;
  phone: string;
  workingHours: string;
  stats: {
    label: string;
    value: string;
  }[];
}

export const NAV_ITEMS: NavItem[] = [
  { label: 'Home', targetId: 'home', path: '#home' },
  { label: 'About', targetId: 'about', path: '#about' },
  { label: 'Services', targetId: 'services', path: '#services' },
  { label: 'Projects', targetId: 'projects', path: '#projects' },
  { label: 'Careers', targetId: 'careers', path: '#careers' },
  { label: 'Contact', targetId: 'contact', path: '#contact' },
];

export const COMPANY_INFO: CompanyInfo = {
  name: 'Jithesh Engineers',
  legalName: 'Jithesh Engineers Pvt. Ltd.',
  tagline: 'Engineering Structures for a Better Tomorrow',
  established: 2008,
  founder: 'K. Jithesh, MTech (Structural Engineering), MIE, CEng',
  headquarters: 'Calicut, Kerala, India',
  address: 'Karaparamba, Kozhikode, Kerala, India - 673010',
  email: 'info@jitheshengineers.com',
  phone: '+91 98765 43210',
  workingHours: 'Mon - Sat: 8:00 AM – 6:00 PM',
  stats: [
    { label: 'Years of Experience', value: '18+' },
    { label: 'Year Established', value: '2008' },
    { label: 'Regions', value: 'India & Saudi Arabia' },
    { label: 'Projects Delivered', value: '100+' },
  ],
};

export const SOCIAL_LINKS: SocialLink[] = [
  { name: 'LinkedIn', url: 'https://linkedin.com' },
  { name: 'Instagram', url: 'https://instagram.com' },
  { name: 'Twitter', url: 'https://x.com' },
];

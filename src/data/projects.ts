export type ProjectCategory =
  | 'All'
  | 'Residential'
  | 'Commercial'
  | 'Industrial'
  | 'Institutional'
  | 'Specialized';

export interface ProjectItem {
  id: string;
  title: string;
  category: Exclude<ProjectCategory, 'All'>;
  location: string;
  image: string;
  year?: string;
  client?: string;
  scope?: string;
  description: string;
}

export const PROJECT_CATEGORIES: ProjectCategory[] = [
  'All',
  'Residential',
  'Commercial',
  'Industrial',
  'Institutional',
  'Specialized',
];

export const PROJECTS_DATA: ProjectItem[] = [
  {
    id: 'pentium-eternia-calicut',
    title: 'Pentium Eternia',
    category: 'Residential',
    location: 'Karaparamba, Kozhikode',
    image:
      'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=1200&q=85&auto=format&fit=crop',
    year: '2023',
    scope: 'G+14 RCC Framing & Shear Walls',
    description:
      'G+14 premium residential development engineered with high-strength concrete shear walls, deep pile foundation, and seismic zone safety detailing.',
  },
  {
    id: 'business-complex-kozhikode',
    title: 'Business Complex',
    category: 'Commercial',
    location: 'Kozhikode, Kerala',
    image:
      'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1200&q=85&auto=format&fit=crop',
    year: '2022',
    scope: 'High-Rise RCC Frame & Deep Foundations',
    description:
      'G+12 commercial tower with multi-level basement parking and energy-efficient structural shell configuration.',
  },
  {
    id: 'private-residence-calicut',
    title: 'Luxury Private Residence',
    category: 'Residential',
    location: 'Calicut, Kerala',
    image:
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200&q=85&auto=format&fit=crop',
    year: '2023',
    scope: 'RCC Cantilevers & Framed Substructure',
    description:
      'Multi-level contemporary residence featuring expansive cantilevers and minimalist structural column footprints.',
  },
  {
    id: 'educational-institution-malappuram',
    title: 'Educational Institution',
    category: 'Institutional',
    location: 'Malappuram, Kerala',
    image:
      'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=1200&q=85&auto=format&fit=crop',
    year: '2021',
    scope: 'Large Clear-Span Lecture Auditoriums',
    description:
      'Campus academic blocks featuring large clear-span lecture halls, laboratories, and an administrative hub.',
  },
  {
    id: 'industrial-facility-kerala',
    title: 'Industrial Facility',
    category: 'Industrial',
    location: 'Palakkad, Kerala',
    image:
      'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1200&q=85&auto=format&fit=crop',
    year: '2023',
    scope: 'Steel PEB & Dynamic Crane Loading',
    description:
      'Heavy manufacturing plant designed for dynamic machinery vibrations and overhead crane girder loadings.',
  },
  {
    id: 'space-frame-saudi',
    title: 'Space Frame Canopy',
    category: 'Specialized',
    location: 'Riyadh, Saudi Arabia',
    image:
      'https://images.unsplash.com/photo-1513694203232-719a280e022f?w=1200&q=85&auto=format&fit=crop',
    year: '2023',
    scope: '60m Clear Span Tubular Space Truss',
    description:
      'Specialized large clear-span architectural space truss with spherical node joints designed for extreme wind loads.',
  },
  {
    id: 'commercial-hub-calicut',
    title: 'Retail & Commercial Hub',
    category: 'Commercial',
    location: 'Calicut, Kerala',
    image:
      'https://images.unsplash.com/photo-1555636222-cae831e670b3?w=1200&q=85&auto=format&fit=crop',
    year: '2024',
    scope: 'Post-Tensioned Flat Slabs',
    description:
      'Multi-level commercial mall featuring post-tensioned flat slabs for wide, column-free retail floor spans.',
  },
  {
    id: 'apartment-complex-kochi',
    title: 'Twin Towers Residential',
    category: 'Residential',
    location: 'Kochi, Kerala',
    image:
      'https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?w=1200&q=85&auto=format&fit=crop',
    year: '2024',
    scope: 'Coastal Shear Wall & Deep Piling',
    description:
      'Twin high-rise residential towers engineered for marine coastal corrosion resistance and seismic resilience.',
  },
  {
    id: 'logistics-park-saudi',
    title: 'Logistics & Warehousing Park',
    category: 'Industrial',
    location: 'Riyadh, Saudi Arabia',
    image:
      'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=1200&q=85&auto=format&fit=crop',
    year: '2023',
    scope: 'Pre-Engineered Steel Frames',
    description:
      'Heavy-duty logistics facility featuring high-clearance pre-engineered steel frames and high-capacity industrial flooring.',
  },
];

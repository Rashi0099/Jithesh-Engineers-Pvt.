export interface ClientItem {
  id: string;
  name: string;
  category: string;
  logo: string;
}

export const CLIENTS_DATA: ClientItem[] = [
  // Primary Row 1 (Matching User Reference)
  {
    id: 'snpl',
    name: 'SNPL Group',
    category: 'Commercial & Infrastructure',
    logo: '/clients/client-snpl.png',
  },
  {
    id: 'silvercastle',
    name: 'Silver Castle Homes',
    category: 'ISO 9001-2015 Certified Builder',
    logo: '/clients/client-9-silvercastle.png',
  },
  {
    id: 'ksbc',
    name: 'Kerala State Beverages Corporation',
    category: 'Govt. of Kerala Undertaking',
    logo: '/clients/client-ksbc.png',
  },
  {
    id: 'landmark',
    name: 'Calicut Landmark Builders',
    category: 'Leading Real Estate Developer',
    logo: '/clients/client-1-landmark.png',
  },
  {
    id: 'elixir',
    name: 'LIXIR Properties',
    category: 'Corporate Infrastructure',
    logo: '/clients/client-4-elixir.png',
  },

  // Primary Row 2 (Matching User Reference)
  {
    id: 'shadow',
    name: 'Shadow Builders',
    category: 'Residential Towers',
    logo: '/clients/client-13-shadow.png',
  },
  {
    id: 'nate',
    name: 'Nate Builders Pvt. Ltd.',
    category: 'Residential & Commercial',
    logo: '/clients/client-7-nate.png',
  },
  {
    id: 'lichen',
    name: 'Lichen Builders & Developers',
    category: 'Urban Infrastructure',
    logo: '/clients/client-8-lichen.png',
  },
  {
    id: 'daliya',
    name: 'Daliya Homes',
    category: 'Premium Residential Living',
    logo: '/clients/client-10-daliya.png',
  },
  {
    id: 'hillcrest',
    name: 'Hill Crest Developers',
    category: 'Townships & Developments',
    logo: '/clients/client-hillcrest.png',
  },

  // Leading Institutional & Real Estate Partners
  {
    id: 'asset',
    name: 'Asset Homes',
    category: 'Leading Housing Brand',
    logo: '/clients/client-5-asset.png',
  },
  {
    id: 'pentium',
    name: 'Pentium Construction Pvt. Ltd.',
    category: 'Commercial & Residential Developers',
    logo: '/clients/client-3-pentium.png',
  },
  {
    id: 'mellow',
    name: 'Mellow Builders',
    category: 'Civil Infrastructure',
    logo: '/clients/client-2-mellow.png',
  },
];

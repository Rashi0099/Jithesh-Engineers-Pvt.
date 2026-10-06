export interface ServiceItem {
  id: string;
  number: string;
  title: string;
  shortTitle: string;
  subtitle: string;
  image: string;
  software: string[];
  tags: string[];
  codes: string[];
}

export const SERVICES_DATA: ServiceItem[] = [
  {
    id: 'structural-design',
    number: '01',
    title: 'Structural Analysis & Design',
    shortTitle: 'Analysis & Design',
    subtitle: 'RCC & structural steel framing for multi-story residential towers, commercial complexes, and public infrastructure.',
    image: 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=1200&q=80&auto=format&fit=crop',
    software: ['ETABS', 'STAAD.Pro', 'SAFE', 'SAP2000'],
    tags: ['High-Rise RCC Frames', 'Seismic Zone Modeling', 'Wind Tunnel Analysis', 'Raft & Deep Pile Foundations'],
    codes: ['IS 456', 'IS 1893', 'IS 875', 'ACI 318'],
  },
  {
    id: 'structural-detailing',
    number: '02',
    title: 'Structural Detailing & BIM',
    shortTitle: 'BIM & Detailing',
    subtitle: 'Precision rebar detailing, 3D clash-coordinated building information models, and shop drawings for direct site execution.',
    image: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=1200&q=80&auto=format&fit=crop',
    software: ['Revit Structures', 'Tekla Structures', 'AutoCAD'],
    tags: ['Revit 3D BIM Coordination', 'Bar Bending Schedules (BBS)', 'Precast Elements Detailing', 'Clash Resolution'],
    codes: ['SP 34', 'IS 13920', 'BS 8666'],
  },
  {
    id: 'steel-structures',
    number: '03',
    title: 'Steel & PEB Structures',
    shortTitle: 'Steel & PEB',
    subtitle: 'Engineered steel systems, pre-engineered buildings, long-span industrial sheds, and heavy factory frame design.',
    image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1200&q=80&auto=format&fit=crop',
    software: ['STAAD.Pro', 'IDEA StatiCa', 'Tekla'],
    tags: ['Pre-Engineered Buildings (PEB)', 'Overhead Crane Girders', 'Tubular Trusses', 'High-Strength Bolted Joints'],
    codes: ['IS 800', 'AISC 360', 'MBMA Standards'],
  },
  {
    id: 'structural-inspection',
    number: '04',
    title: 'Structural Audits & NDT',
    shortTitle: 'Audits & NDT',
    subtitle: 'On-site forensic evaluations, non-destructive testing, stability certifications, and residual lifespan assessments.',
    image: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?w=1200&q=80&auto=format&fit=crop',
    software: ['UPV Testing', 'Rebound Hammer', 'Core Extraction', 'Crack Scanners'],
    tags: ['Non-Destructive Testing (NDT)', 'Ultrasonic Pulse Velocity', 'Load Capacity Validation', 'Distress Mapping'],
    codes: ['IS 13311', 'IS 516', 'NDT Protocols'],
  },
  {
    id: 'retrofitting-strengthening',
    number: '05',
    title: 'Retrofitting & Rehabilitation',
    shortTitle: 'Retrofitting',
    subtitle: 'Engineered structural interventions to restore load-bearing capacity, correct distress, and upgrade seismic compliance.',
    image: 'https://images.unsplash.com/photo-1590381105924-c72589b9ef3f?w=1200&q=80&auto=format&fit=crop',
    software: ['FRP Composites', 'Section Jacketing', 'Post-Tension Anchors'],
    tags: ['RCC Column Jacketing', 'FRP Carbon Fiber Wrapping', 'Steel Plate Bonding', 'Seismic Upgrades'],
    codes: ['IS 15988', 'ACI 440.2R', 'FEMA 547'],
  },
  {
    id: 'specialized-structures',
    number: '06',
    title: 'Specialized Spatial Structures',
    shortTitle: 'Spatial Grids',
    subtitle: 'Complex geometric space frames, clear-span atriums, architectural tensile canopies, and transmission towers.',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1200&q=80&auto=format&fit=crop',
    software: ['SpaceFrame FEA', 'SAP2000', 'Grasshopper'],
    tags: ['Tubular Space Trusses', 'Geodesic Domes', 'Clear-Span Canopies (60m+)', 'Atrium Skylights'],
    codes: ['Space Frame Codes', 'Wind Dynamic Codes'],
  },
];

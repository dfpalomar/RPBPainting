export type ProjectCategory = 'Residential' | 'Commercial' | 'Exterior' | 'Specialty'

export type Project = {
  category: ProjectCategory
  colorClassName: string
  description: string
  id: string
  isFeatured?: boolean
  location: string
  sizeClassName: string
  title: string
  type: string
}

export const projects: Project[] = [
  {
    id: 'melbourne-estate-interior',
    title: 'Lake Washington Estate Interior',
    location: 'Melbourne',
    category: 'Residential',
    type: 'Interior Repaint',
    description: 'Complete interior repaint with trim detailing and low-VOC finishes.',
    colorClassName: 'bg-navy-800',
    sizeClassName: 'h-[360px]',
    isFeatured: true,
  },
  {
    id: 'palm-bay-office-refresh',
    title: 'Palm Bay Office Refresh',
    location: 'Palm Bay',
    category: 'Commercial',
    type: 'Tenant Improvement',
    description: 'After-hours repaint for a multi-suite office with minimal disruption.',
    colorClassName: 'bg-navy-200',
    sizeClassName: 'h-[240px]',
  },
  {
    id: 'viera-home-exterior',
    title: 'Viera Home Exterior Update',
    location: 'Viera',
    category: 'Exterior',
    type: 'Exterior Painting',
    description: 'Full exterior coating refresh with pressure wash prep and trim accents.',
    colorClassName: 'bg-brass-100',
    sizeClassName: 'h-[260px]',
  },
  {
    id: 'melbourne-beach-condo',
    title: 'Beachside Condo Renewal',
    location: 'Melbourne Beach',
    category: 'Residential',
    type: 'Interior + Cabinets',
    description: 'Interior walls, ceilings, and cabinet refinishing for a coastal condo.',
    colorClassName: 'bg-navy-100',
    sizeClassName: 'h-[320px]',
  },
  {
    id: 'suntree-retail-suite',
    title: 'Suntree Retail Suite Rebrand',
    location: 'Suntree',
    category: 'Commercial',
    type: 'Retail Interior',
    description: 'Brand-aligned repaint for storefront and sales floor wall systems.',
    colorClassName: 'bg-navy-300',
    sizeClassName: 'h-[220px]',
  },
  {
    id: 'indialantic-coastal-exterior',
    title: 'Coastal Exterior Protection',
    location: 'Indialantic',
    category: 'Exterior',
    type: 'Exterior Masonry',
    description: 'Weather-resistant exterior coating package for coastal exposure.',
    colorClassName: 'bg-brass-200',
    sizeClassName: 'h-[280px]',
  },
  {
    id: 'rockledge-feature-wall',
    title: 'Rockledge Feature Wall Program',
    location: 'Rockledge',
    category: 'Specialty',
    type: 'Faux Finish',
    description: 'Decorative specialty finishes and accent wall texture package.',
    colorClassName: 'bg-brass-200',
    sizeClassName: 'h-[210px]',
  },
  {
    id: 'cocoa-office-exterior',
    title: 'Cocoa Office Exterior',
    location: 'Cocoa',
    category: 'Exterior',
    type: 'Commercial Exterior',
    description: 'Exterior repaint for professional office facade and entry elements.',
    colorClassName: 'bg-navy-100',
    sizeClassName: 'h-[300px]',
  },
  {
    id: 'west-melbourne-residence',
    title: 'West Melbourne Residence',
    location: 'West Melbourne',
    category: 'Residential',
    type: 'Whole-Home Interior',
    description: 'Whole-home interior repaint with smooth finish touchups and trim.',
    colorClassName: 'bg-brass-100',
    sizeClassName: 'h-[250px]',
  },
  {
    id: 'viera-medical-office',
    title: 'Viera Medical Office',
    location: 'Viera',
    category: 'Commercial',
    type: 'Interior Repaint',
    description: 'Fast-turn repaint for patient areas and administrative spaces.',
    colorClassName: 'bg-brass-100',
    sizeClassName: 'h-[270px]',
  },
  {
    id: 'melbourne-wallpaper-removal',
    title: 'Historic Home Wallcovering Update',
    location: 'Melbourne',
    category: 'Specialty',
    type: 'Wallpaper Removal',
    description: 'Wallpaper removal, surface prep, and premium finish repaint.',
    colorClassName: 'bg-navy-200',
    sizeClassName: 'h-[230px]',
  },
  {
    id: 'palm-bay-floor-coating',
    title: 'Palm Bay Garage Floor Coating',
    location: 'Palm Bay',
    category: 'Specialty',
    type: 'Abrasive Floor Coating',
    description: 'Anti-slip floor coating system with durable topcoat application.',
    colorClassName: 'bg-brass-200',
    sizeClassName: 'h-[290px]',
  },
  {
    id: 'brevard-community-center',
    title: 'Community Center Refresh',
    location: 'Brevard County',
    category: 'Commercial',
    type: 'Interior + Exterior',
    description: 'High-traffic repaint project for a local community facility.',
    colorClassName: 'bg-navy-300',
    sizeClassName: 'h-[260px]',
  },
]

export const filterCategories: Array<'All' | ProjectCategory> = [
  'All',
  'Residential',
  'Commercial',
  'Exterior',
  'Specialty',
]

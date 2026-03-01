export type Testimonial = {
  id: string
  location: string
  name: string
  quote: string
  role: string
}

export const testimonials: Testimonial[] = [
  {
    id: 'melbourne-home-interior',
    name: 'Elaine Turner',
    role: 'Homeowner',
    location: 'Melbourne',
    quote:
      '“The crew kept every room clean, communicated each day, and left us with a finish that feels bright and polished without feeling overdone.”',
  },
  {
    id: 'palm-bay-office-refresh',
    name: 'Marcus Delaney',
    role: 'Office Manager',
    location: 'Palm Bay',
    quote:
      '“We scheduled around business hours and everything stayed on track. The new color scheme made the whole office feel more professional the next morning.”',
  },
  {
    id: 'viera-exterior-update',
    name: 'Olivia Rojas',
    role: 'Homeowner',
    location: 'Viera',
    quote:
      '“After years of sun and weather, our exterior finally looks consistent again. Prep work was thorough and the final coat looks smooth from every angle.”',
  },
  {
    id: 'space-coast-retail',
    name: 'Noah Whitman',
    role: 'Retail Owner',
    location: 'Brevard County',
    quote:
      '“They worked quickly, stayed organized, and helped us reopen on time. Customers have already commented on how clean and updated the space looks.”',
  },
  {
    id: 'melbourne-wallpaper-removal',
    name: 'Danielle Price',
    role: 'Homeowner',
    location: 'Melbourne',
    quote:
      '“Wallpaper removal and repainting were both handled with care. The walls look seamless now, and the whole process felt straightforward from start to finish.”',
  },
]

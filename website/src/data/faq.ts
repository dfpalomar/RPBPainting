export type FAQItem = {
  answer: string
  id: string
  question: string
}

export const faqItems: FAQItem[] = [
  {
    id: 'service-area',
    question: 'What areas do you serve?',
    answer:
      'RPB Painting LLC serves all of Brevard County, including Melbourne, Palm Bay, Viera, and surrounding Space Coast areas.',
  },
  {
    id: 'paint-brands',
    question: 'What paint brands do you use?',
    answer:
      'We work with premium paint brands, including Sherwin-Williams and Benjamin Moore, selected for durability and finish quality.',
  },
  {
    id: 'project-types',
    question: 'Do you handle both residential and commercial projects?',
    answer:
      'Yes. We provide interior and exterior painting for homes and commercial properties, plus specialty services when projects need custom finishes.',
  },
  {
    id: 'surface-prep',
    question: 'How do you prepare surfaces before painting?',
    answer:
      'Preparation is tailored to each surface and may include cleaning, drywall repairs, texture work, wallpaper removal, and power washing before paint is applied.',
  },
  {
    id: 'specialty-services',
    question: 'Can you help with wallpaper and textured finishes?',
    answer:
      'Yes. We offer wallpaper hanging and removal, faux finishes, and texturing options such as knockdown, orange peel, and popcorn texture.',
  },
  {
    id: 'timeline',
    question: 'How long does a typical painting project take?',
    answer:
      'Timeline depends on project size, surface condition, and scope. After reviewing your space, we provide a clear schedule before work begins.',
  },
  {
    id: 'pricing',
    question: 'How is pricing determined?',
    answer:
      'Pricing is based on the project scope, surface conditions, service type, and material requirements. We provide project-specific quotes so expectations are clear up front.',
  },
  {
    id: 'business-hours',
    question: 'When can I contact your team?',
    answer:
      'Our listed business hours are Monday through Friday, 8:00 AM to 5:00 PM. You can call us at (401) 365-8336.',
  },
  {
    id: 'licensed-insured',
    question: 'Are you licensed and insured?',
    answer:
      'Yes. RPB Painting LLC is a licensed contractor and insured, with operations in Brevard County since 2012.',
  },
]

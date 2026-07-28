

export const TEMPLATES = [
  {
    id: 'classic',
    name: 'Classic',
    description: 'Clean, professional, blue accent.',
  },
  {
    id: 'modern',
    name: 'Modern',
    description: 'Bold dark header band.',
  },
  {
    id: 'minimal',
    name: 'Minimal',
    description: 'Understated, lots of whitespace.',
  },
  {
    id: 'bold',
    name: 'Bold',
    description: 'Vibrant color block, high contrast.',
  },
  {
    id: 'corporate',
    name: 'Corporate',
    description: 'Formal letterhead layout.',
  },
]

// Handy default so components never crash if something goes wrong.
export const DEFAULT_TEMPLATE_ID = TEMPLATES[0].id

// Project gallery data. Real, verified projects are marked verified: true.
// Placeholder/example categories are marked verified: false and must never
// be presented as completed Zee Steel work — see ProjectCard.jsx.
//
// To add a real project once photography is available:
// { title, category, location, description, image, verified: true }

export const projectFilters = [
  'All',
  'Residential',
  'Commercial',
  'Malls',
  'Industrial',
  'Government & Public',
  'Sculptures',
  'Architectural',
]

export const projects = [
  {
    title: 'Shipra Mall',
    category: 'Malls',
    location: 'Ghaziabad, Uttar Pradesh',
    description: 'Commercial and mall steel installation work.',
    image: 'mall-installation',
    verified: true,
  },
  {
    title: 'Now North India Mall',
    category: 'Malls',
    location: 'Indirapuram, Ghaziabad',
    description: 'Commercial and mall steel installation work.',
    image: 'commercial-project',
    verified: true,
  },
  {
    title: 'Merry Cinema Mall',
    category: 'Malls',
    location: 'Ghaziabad, Uttar Pradesh',
    description: 'Commercial and mall steel installation work.',
    image: 'mall-installation',
    verified: true,
  },
  {
    title: 'More Mall',
    category: 'Malls',
    location: 'Ghaziabad, Uttar Pradesh',
    description: 'Commercial and mall steel installation work.',
    image: 'commercial-project',
    verified: true,
  },
  {
    title: 'Luxury Steel Gate',
    category: 'Residential',
    location: 'Placeholder example',
    description: 'Example of a premium residential gate installation.',
    image: 'luxury-gate',
    verified: false,
  },
  {
    title: 'Architectural Railing',
    category: 'Architectural',
    location: 'Placeholder example',
    description: 'Example of an architectural staircase railing.',
    image: 'architectural-railing',
    verified: false,
  },
  {
    title: 'Industrial Fabrication',
    category: 'Industrial',
    location: 'Placeholder example',
    description: 'Example of heavy-duty industrial steel fabrication.',
    image: 'industrial-fabrication',
    verified: false,
  },
  {
    title: 'Outdoor Steel Sculpture',
    category: 'Sculptures',
    location: 'Placeholder example',
    description: 'Example of a large-scale outdoor sculpture installation.',
    image: 'steel-sculpture',
    verified: false,
  },
  {
    title: 'Storage Tank Fabrication',
    category: 'Industrial',
    location: 'Placeholder example',
    description: 'Example of an industrial storage tank build.',
    image: 'storage-tank',
    verified: false,
  },
  {
    title: 'Recreational Play Structure',
    category: 'Government & Public',
    location: 'Placeholder example',
    description: 'Example of a custom recreational and play structure.',
    image: 'recreational-structure',
    verified: false,
  },
]

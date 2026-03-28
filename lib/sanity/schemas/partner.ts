const partner = {
  name: 'partner',
  title: 'Partner',
  type: 'document',
  fields: [
    { name: 'name', title: 'Name', type: 'string' },
    { name: 'logo', title: 'Logo', type: 'image', options: { hotspot: true } },
    { name: 'description', title: 'Description', type: 'text' },
    { name: 'url', title: 'Website URL', type: 'url' },
    { name: 'service', title: 'Service Category', type: 'string' },
    { name: 'order', title: 'Display Order', type: 'number' },
  ],
}

export default partner

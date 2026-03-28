const article = {
  name: 'article',
  title: 'Article',
  type: 'document',
  fields: [
    { name: 'title', title: 'Title', type: 'string' },
    { name: 'slug', title: 'Slug', type: 'slug', options: { source: 'title' } },
    {
      name: 'category',
      title: 'Category',
      type: 'string',
      options: {
        list: [
          'Aviation',
          'Yachting',
          'Automotive',
          'Finance & Wealth',
          'Destinations',
          'Lifestyle',
        ],
      },
    },
    { name: 'excerpt', title: 'Excerpt', type: 'text', rows: 3 },
    { name: 'body', title: 'Body', type: 'array', of: [{ type: 'block' }] },
    { name: 'coverImage', title: 'Cover Image', type: 'image', options: { hotspot: true } },
    {
      name: 'author',
      title: 'Author',
      type: 'reference',
      to: [{ type: 'author' }],
    },
    { name: 'publishedAt', title: 'Published At', type: 'datetime' },
    { name: 'readTime', title: 'Read Time (minutes)', type: 'number' },
    { name: 'seoTitle', title: 'SEO Title', type: 'string' },
    { name: 'seoDescription', title: 'SEO Description', type: 'text' },
  ],
}

export default article

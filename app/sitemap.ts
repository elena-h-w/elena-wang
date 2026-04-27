import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://elenahw.com',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 1,
    },
    {
      url: 'https://elenahw.com/writing',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: 'https://elenahw.com/writing/what-building-three-apps-taught-me',
      lastModified: new Date('2026-04-27'),
      changeFrequency: 'yearly',
      priority: 0.7,
    },
    {
      url: 'https://elenahw.com/writing/build-two-products-in-eight-weeks',
      lastModified: new Date('2026-03-19'),
      changeFrequency: 'yearly',
      priority: 0.7,
    },
  ]
}

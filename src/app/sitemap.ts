import { MetadataRoute } from 'next';

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL || 'https://www.wallm.dev';

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date().toISOString();

  const staticPages = [
    {
      url: BASE_URL,
      lastModified: now,
      changeFrequency: 'weekly' as const,
      priority: 1,
    },
    {
      url: `${BASE_URL}/pt`,
      lastModified: now,
      changeFrequency: 'weekly' as const,
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/en`,
      lastModified: now,
      changeFrequency: 'weekly' as const,
      priority: 0.9,
    },
  ];

  const blogPages = [
    {
      url: `${BASE_URL}/blog/pull-requests-falam-pouco`,
      lastModified: '2025-09-25',
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/blog/por-tras-da-ia`,
      lastModified: '2025-09-25',
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/en/blog/pull-requests-falam-pouco`,
      lastModified: '2025-09-25',
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/en/blog/por-tras-da-ia`,
      lastModified: '2025-09-25',
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    },
  ];

  const projectPages = [
    {
      url: `${BASE_URL}/projects/pr-ai-assistant`,
      lastModified: now,
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/en/projects/pr-ai-assistant`,
      lastModified: now,
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    },
  ];

  return [...staticPages, ...blogPages, ...projectPages];
}

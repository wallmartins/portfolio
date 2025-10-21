import { Metadata } from 'next';

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL || 'https://www.wallm.dev';
const AUTHOR = 'Wallace Martins';

interface MetadataParams {
  title: string;
  description: string;
  slug?: string;
  language?: 'pt' | 'en';
  image?: string;
  type?: 'website' | 'article';
  publishedDate?: string;
  modifiedDate?: string;
  tags?: string[];
}

export function generateMetadata({
  title,
  description,
  slug,
  language = 'pt',
  image = `${BASE_URL}/og-image.png`,
  type = 'website',
  publishedDate,
  modifiedDate,
  tags,
}: MetadataParams): Metadata {
  const fullTitle = `${title} | Wallace Martins`;
  const url = slug ? `${BASE_URL}${language === 'en' ? '/en' : ''}${slug}` : BASE_URL;

  const keywords = [
    'Wallace Martins',
    'desenvolvedor',
    'engenheiro de software',
    'frontend',
    'fullstack',
    'React',
    'TypeScript',
    'AI',
    'IA',
  ];

  if (tags) {
    keywords.push(...tags);
  }

  return {
    title: fullTitle,
    description,
    keywords,
    metadataBase: new URL(BASE_URL),
    alternates: {
      canonical: url,
      languages: {
        'pt-BR': `${BASE_URL}${slug || ''}`,
        'en': `${BASE_URL}/en${slug || ''}`,
      },
    },
    openGraph: {
      type: type as 'website' | 'article',
      locale: language === 'en' ? 'en_US' : 'pt_BR',
      title: fullTitle,
      description,
      url,
      siteName: 'Wallace Martins - Portfolio',
      images: [
        {
          url: image,
          width: 1200,
          height: 630,
          alt: title,
          type: 'image/png',
        },
      ],
      ...(publishedDate && { publishedTime: publishedDate }),
      ...(modifiedDate && { modifiedTime: modifiedDate }),
      ...(type === 'article' && { authors: [AUTHOR] }),
    },
    twitter: {
      card: 'summary_large_image',
      title: fullTitle,
      description,
      images: [image],
      creator: '@wallmartins',
    },
    robots: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1,
    },
  };
}

export function getStructuredData(
  type:
    | 'Person'
    | 'Service'
    | 'BlogPosting'
    | 'Project'
    | 'BreadcrumbList'
) {
  const baseSchema = {
    '@context': 'https://schema.org',
    '@type': type,
  };

  switch (type) {
    case 'Person':
      return {
        ...baseSchema,
        name: 'Wallace Martins',
        url: BASE_URL,
        image: `${BASE_URL}/about.jpg`,
        sameAs: [
          'https://github.com/wallmartins',
          'https://linkedin.com/in/wallmartins',
          'https://twitter.com/wallmartins',
        ],
        jobTitle: 'Senior Software Engineer',
        knowsAbout: [
          'Web Development',
          'Frontend Development',
          'Full Stack Development',
          'Artificial Intelligence',
          'React',
          'TypeScript',
          'Node.js',
          'API Integration',
          'Performance Optimization',
          'SEO',
        ],
        description:
          'Coding Digital Realities that Revolutionize - Senior Software Engineer specialized in building efficient interfaces and AI-powered solutions',
      };

    case 'Service':
      return {
        ...baseSchema,
        provider: {
          '@type': 'Person',
          name: 'Wallace Martins',
          url: BASE_URL,
        },
        areaServed: 'BR',
        availableLanguage: ['pt-BR', 'en'],
      };

    case 'BlogPosting':
      return {
        ...baseSchema,
        author: {
          '@type': 'Person',
          name: 'Wallace Martins',
        },
        publisher: {
          '@type': 'Person',
          name: 'Wallace Martins',
        },
      };

    case 'Project':
      return {
        ...baseSchema,
        creator: {
          '@type': 'Person',
          name: 'Wallace Martins',
        },
      };

    case 'BreadcrumbList':
      return baseSchema;

    default:
      return baseSchema;
  }
}

export function generateBreadcrumbSchema(items: Array<{ name: string; url: string }>) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: `${BASE_URL}${item.url}`,
    })),
  };
}

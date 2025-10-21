"use client";

import Link from "next/link";
import { generateBreadcrumbSchema } from "@/lib/seo";

interface BreadcrumbItem {
  label: string;
  url: string;
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
  className?: string;
}

export function Breadcrumb({ items, className = "" }: BreadcrumbProps) {
  const schema = generateBreadcrumbSchema(items.map(item => ({
    name: item.label,
    url: item.url,
  })));

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <nav
        aria-label="Breadcrumb"
        className={`flex flex-wrap gap-2 text-sm ${className}`}
      >
        {items.map((item, index) => (
          <div key={item.url} className="flex items-center gap-2">
            {index > 0 && <span className="text-gray-400">/</span>}
            {index === items.length - 1 ? (
              <span className="text-gray-200">{item.label}</span>
            ) : (
              <Link
                href={item.url}
                className="text-blue-400 hover:text-blue-300 underline"
              >
                {item.label}
              </Link>
            )}
          </div>
        ))}
      </nav>
    </>
  );
}

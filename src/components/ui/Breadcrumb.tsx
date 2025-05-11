'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

interface BreadcrumbProps {
  homeLabel?: string;
  separator?: React.ReactNode;
  basePath?: string;
  excludePaths?: string[];
  overrides?: { [key: string]: string };
}

/**
 * Breadcrumb component that automatically generates navigation based on the current URL path
 */
export default function Breadcrumb({
  homeLabel = 'Home',
  separator = '/',
  basePath = '',
  excludePaths = [],
  overrides = {}
}: BreadcrumbProps) {
  const pathname = usePathname();
  if (!pathname) return null;
  
  // Remove trailing slash and basePath
  let path = pathname.endsWith('/') && pathname !== '/' 
    ? pathname.slice(0, -1) 
    : pathname;
    
  if (basePath && path.startsWith(basePath)) {
    path = path.slice(basePath.length);
  }
  
  // Split path into segments
  const segments = path
    .split('/')
    .filter(Boolean)
    .filter(segment => !excludePaths.includes(segment));

  if (segments.length === 0) return null;
  
  // Build breadcrumb items
  const breadcrumbs = [
    { label: homeLabel, href: '/', current: pathname === '/' }
  ];

  let currentPath = '';
  segments.forEach((segment, i) => {
    currentPath += `/${segment}`;
    
    // Human-readable label (replace hyphens with spaces and capitalize)
    let label = overrides[segment] || 
      segment.replace(/-/g, ' ')
        .replace(/\b\w/g, char => char.toUpperCase());
    
    breadcrumbs.push({
      label,
      href: currentPath,
      current: i === segments.length - 1
    });
  });

  return (
    <nav className="flex" aria-label="Breadcrumb" itemScope itemType="https://schema.org/BreadcrumbList">
      <ol className="inline-flex items-center space-x-1 md:space-x-2">
        {breadcrumbs.map((item, index) => (
          <li 
            key={index}
            className="inline-flex items-center"
            itemScope 
            itemType="https://schema.org/ListItem" 
            itemProp="itemListElement"
          >
            {index > 0 && (
              <span className="mx-2 text-gray-400" aria-hidden="true">
                {separator}
              </span>
            )}
            
            <meta itemProp="position" content={`${index + 1}`} />
            
            {item.current ? (
              <span 
                className="text-gray-700 font-medium"
                aria-current="page"
                itemProp="name"
              >
                {item.label}
              </span>
            ) : (
              <Link 
                href={item.href}
                className="text-blue-600 hover:text-blue-800 hover:underline"
                itemProp="item"
              >
                <span itemProp="name">{item.label}</span>
              </Link>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}

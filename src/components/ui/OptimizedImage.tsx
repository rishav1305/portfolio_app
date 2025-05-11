'use client';

import React from 'react';
import Image from 'next/image';

interface OptimizedImageProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  fill?: boolean;
  sizes?: string;
  className?: string;
  priority?: boolean;
  quality?: number;
  objectFit?: 'cover' | 'contain' | 'fill' | 'none' | 'scale-down';
  objectPosition?: string;
  borderRadius?: string;
  index?: number; // Used to determine lazy loading
  aboveTheFold?: boolean; // Explicitly mark as above the fold
  useWebP?: boolean; // Whether to attempt WebP format when possible
  placeholder?: 'blur' | 'empty'; // Add blur effect for better LCP
  blurDataURL?: string; // Custom blur data URL
  fetchPriority?: 'high' | 'low' | 'auto'; // Resource fetch priority hint
  structuredData?: {
    contentUrl?: string; // URL for structured data
    caption?: string; // Image caption for accessibility and SEO
    license?: string; // License information
    creator?: string; // Creator/author name
    datePublished?: string; // Publication date
    keywords?: string[]; // Image keywords for search
    contentLocation?: string; // Location where the image was taken
  };
}

const OptimizedImage: React.FC<OptimizedImageProps> = ({
  src,
  alt,
  width,
  height,
  fill = false,
  sizes = '100vw',
  className = '',
  priority = false,
  quality = 85,
  objectFit = 'cover',
  objectPosition = 'center',
  borderRadius = 'rounded',
  index = 0,
  aboveTheFold = false,
  useWebP = true,
  placeholder,
  blurDataURL,
  fetchPriority: customFetchPriority,
  structuredData
}) => {
  // Determine if this image should be lazy loaded
  // Above the fold images or first 2 images load eagerly, others load lazily
  const loading = priority || aboveTheFold || index < 2 ? 'eager' : 'lazy';

  // Determine fetch priority based on importance
  const fetchPriority = customFetchPriority || (priority || aboveTheFold ? "high" : "auto");
  
  // Use WebP format when possible for better performance
  // Next.js Image component already handles WebP conversion automatically
  
  const imageStyle: React.CSSProperties = {
    objectFit,
    objectPosition,
  };

  return (
    <div 
      className={`overflow-hidden ${borderRadius} ${className}`} 
      style={{ position: 'relative' }}
      itemScope={structuredData ? true : undefined}
      itemType={structuredData ? "https://schema.org/ImageObject" : undefined}
    >
      {structuredData && (
        <>
          <meta itemProp="contentUrl" content={structuredData.contentUrl || src} />
          <meta itemProp="name" content={alt} />
          {structuredData.caption && <meta itemProp="caption" content={structuredData.caption} />}
          {structuredData.license && <meta itemProp="license" content={structuredData.license} />}
          {structuredData.creator && <meta itemProp="creator" content={structuredData.creator} />}
          {structuredData.datePublished && <meta itemProp="datePublished" content={structuredData.datePublished} />}
          {structuredData.contentLocation && <meta itemProp="contentLocation" content={structuredData.contentLocation} />}
          {structuredData.keywords && structuredData.keywords.map((keyword, i) => (
            <meta key={i} itemProp="keywords" content={keyword} />
          ))}
        </>
      )}
      
      {fill ? (
        <Image
          src={src}
          alt={alt}
          fill={fill}
          sizes={sizes}
          quality={quality}
          loading={loading}
          style={imageStyle}
          className={className}
          priority={priority || aboveTheFold}
          fetchPriority={fetchPriority}
          placeholder={placeholder}
          blurDataURL={blurDataURL}
        />
      ) : (
        <Image
          src={src}
          alt={alt}
          width={width}
          height={height}
          sizes={sizes}
          quality={quality}
          loading={loading}
          style={imageStyle}
          className={className}
          priority={priority || aboveTheFold}
          fetchPriority={fetchPriority}
          placeholder={placeholder}
          blurDataURL={blurDataURL}
        />
      )}
    </div>
  );
};

export default OptimizedImage;

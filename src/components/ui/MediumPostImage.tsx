'use client';

import Image from 'next/image';
import { useState } from 'react';

interface MediumPostImageProps {
  src: string;
  alt: string;
  priority?: boolean;
}

export default function MediumPostImage({ src, alt, priority = false }: MediumPostImageProps) {
  const [imgSrc, setImgSrc] = useState(src);
  const [isError, setIsError] = useState(false);
  
  const handleError = () => {
    setIsError(true);
    setImgSrc("https://miro.medium.com/max/1200/1*jfdwtvU6V6g99q3G7gq7dQ.png");
  };
  
  if (isError || !src) {
    return (
      <div className="w-full h-full bg-gray-200 dark:bg-gray-700 flex items-center justify-center">
        <div className="text-center p-4">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 mx-auto text-gray-400 dark:text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
          </svg>
          <p className="mt-2">Medium Article</p>
        </div>
      </div>
    );
  }
  
  return (
    <div className="relative w-full h-full">
      <Image 
        src={imgSrc} 
        alt={alt}
        fill
        style={{ objectFit: 'cover' }}
        priority={priority}
        onError={handleError}
      />
    </div>
  );
}
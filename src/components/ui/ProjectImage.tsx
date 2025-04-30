'use client';

import React, { useState } from 'react';

interface ProjectImageProps {
  src: string;
  alt: string;
  className?: string;
  fallbackSrc?: string;
}

export default function ProjectImage({ 
  src, 
  alt, 
  className = "w-full h-32 object-cover rounded-md", 
  fallbackSrc = '/images/projects/thumbnail/aws_logo.png' 
}: ProjectImageProps) {
  const [imgSrc, setImgSrc] = useState(src);
  
  const handleError = () => {
    setImgSrc(fallbackSrc);
  };
  
  return (
    <img 
      src={imgSrc} 
      alt={alt} 
      className={className} 
      onError={handleError}
    />
  );
}
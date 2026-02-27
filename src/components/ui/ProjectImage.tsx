'use client';

import React, { useState } from 'react';
import Image from 'next/image';

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

  return (
    <div className={`relative ${className}`}>
      <Image
        src={imgSrc}
        alt={alt}
        fill
        sizes="(max-width: 768px) 100vw, 33vw"
        className="object-cover"
        onError={() => setImgSrc(fallbackSrc)}
      />
    </div>
  );
}

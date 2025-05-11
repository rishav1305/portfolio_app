'use client';

import React from 'react';
import Image from 'next/image';

interface ProjectCardProps {
  title: string;
  description: string;
  imageUrl: string;
  techStack: string[];
  link: string;
  index: number;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  description,
  imageUrl,
  techStack,
  link,
  index
}) => {
  return (
    <article 
      className="bg-white rounded-xl shadow-lg overflow-hidden flex flex-col h-full"
      itemScope
      itemType="https://schema.org/SoftwareSourceCode"
    >
      <div className="w-full h-48 relative">
        <Image
          src={imageUrl}
          alt={`Screenshot of ${title}`}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover object-top"
          loading={index < 2 ? "eager" : "lazy"}
          itemProp="image"
        />
      </div>
      
      <div className="p-6 flex-grow">
        <h3 className="text-xl font-bold mb-3 text-gray-800" itemProp="name">{title}</h3>
        <p className="text-gray-600 mb-4" itemProp="description">{description}</p>
        
        <div className="mb-4">
          <h4 className="text-sm font-semibold mb-2 text-gray-700">Tech Stack:</h4>
          <div className="flex flex-wrap gap-2">
            {techStack.map((tech, i) => (
              <span 
                key={i} 
                className="px-2 py-1 bg-blue-100 text-blue-800 text-xs font-medium rounded"
                itemProp="programmingLanguage"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
      
      <div className="px-6 pb-6 mt-auto">
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 hover:text-blue-800 flex items-center font-medium text-sm"
          itemProp="codeRepository"
          aria-label={`View ${title} project details`}
        >
          View Project
          <svg 
            className="w-4 h-4 ml-1" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24" 
            aria-hidden="true"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
          </svg>
        </a>
        <meta itemProp="author" content="Rishav Chatterjee" />
      </div>
    </article>
  );
};

export default ProjectCard;

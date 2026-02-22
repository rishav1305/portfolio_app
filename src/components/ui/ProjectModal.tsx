'use client';

import type { Project } from '@/types/portfolio';
import Image from 'next/image';
import { useEffect, useRef } from 'react';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export default function ProjectModal({ project, onClose }: ProjectModalProps) {
  const modalRef = useRef<HTMLDivElement>(null);
  
  // Close modal when clicking outside of it
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
        onClose();
      }
    }
    
    // Close on escape key press
    function handleEscKey(event: KeyboardEvent) {
      if (event.key === 'Escape') {
        onClose();
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('keydown', handleEscKey);
    
    // Prevent body scrolling when modal is open
    document.body.style.overflow = 'hidden';
    
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleEscKey);
      document.body.style.overflow = 'auto';
    };
  }, [onClose]);

  if (!project) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-75 z-50 flex items-center justify-center p-4">
      <div 
        ref={modalRef}
        className="bg-white rounded-lg shadow-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
      >
        {/* Modal header with close button */}
        <div className="flex justify-between items-center p-6 border-b">
          <h2 className="text-2xl font-bold text-gray-900">{project.title}</h2>
          <button 
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700 focus:outline-none"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        
        {/* Modal body */}
        <div className="p-6">
          {/* Project image */}
          <div className="mb-8 relative h-[300px] md:h-[400px]">
            <Image
              src={project.image}
              alt={project.title}
              fill
              className="object-cover rounded-lg"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
          
          {/* Project details */}
          <div className="mb-8">
            <h3 className="text-xl font-semibold mb-3 text-gray-800">Project Description</h3>
            <p className="text-gray-700">{project.description}</p>
          </div>
          
          {/* Tech stack */}
          <div className="mb-8">
            <h3 className="text-xl font-semibold mb-3 text-gray-800">Technologies Used</h3>
            <div className="flex flex-wrap gap-2">
              {project.techStack.map((tech, index) => (
                <span 
                  key={index} 
                  className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
          
          {/* Additional information */}
          {(project.company || project.clients) && (
            <div className="mb-8">
              <h3 className="text-xl font-semibold mb-3 text-gray-800">Additional Information</h3>
              
              {project.company && (
                <div className="mb-2">
                  <span className="font-medium text-gray-700">Company: </span>
                  <span className="text-gray-600">{project.company}</span>
                </div>
              )}
              
              {project.clients && (
                <div>
                  <span className="font-medium text-gray-700">Client: </span>
                  <span className="text-gray-600">{project.clients}</span>
                </div>
              )}
            </div>
          )}
          
          {/* External link */}
          {project.link && project.link !== '#' && (
            <div className="mt-8">
              <a 
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
              >
                Visit Project
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
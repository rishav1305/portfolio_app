import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import portfolioData from "@/data/portfolioData";

// Helper function to format date as Month Year
function formatMonthYear(dateString: string): string {
  if (!dateString) return '';
  const date = new Date(dateString);
  return date.toLocaleDateString('en-US', { month: 'long', year: 'numeric' });
}

// Helper function to calculate project duration in months
function calculateDuration(startDate: string, endDate: string): string {
  if (!startDate) return '';
  
  const start = new Date(startDate);
  const end = endDate ? new Date(endDate) : new Date(); // Use current date if project is ongoing
  
  const diffTime = Math.abs(end.getTime() - start.getTime());
  const diffMonths = Math.ceil(diffTime / (1000 * 60 * 60 * 24 * 30.44)); // Average days per month
  
  if (diffMonths < 12) {
    return `${diffMonths} month${diffMonths !== 1 ? 's' : ''}`;
  } else {
    const years = Math.floor(diffMonths / 12);
    const months = diffMonths % 12;
    return `${years} year${years !== 1 ? 's' : ''}${months > 0 ? ` ${months} month${months !== 1 ? 's' : ''}` : ''}`;
  }
}

// Let Next.js 15 handle the types
export default function ProjectDetails({ params }) {
  // Find the project by slug
  const slug = params?.slug || '';
  const project = portfolioData.projects.find(
    p => p.title.replace(/\s+/g, '-').toLowerCase() === decodeURIComponent(slug)
  );
  
  // If project not found, show 404
  if (!project) {
    notFound();
  }

  // Format dates and calculate duration
  const startDate = project.start_date ? formatMonthYear(project.start_date) : '';
  const endDate = project.end_date ? formatMonthYear(project.end_date) : 'Present';
  const duration = project.start_date ? calculateDuration(project.start_date, project.end_date || '') : '';

  return (
    <div className="min-h-screen bg-gray-50 pt-24 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Breadcrumb Navigation */}
        <div className="mb-8">
          <nav className="flex" aria-label="Breadcrumb">
            <ol className="flex items-center space-x-2">
              <li>
                <Link href="/" className="text-gray-500 hover:text-gray-700">
                  Home
                </Link>
              </li>
              <li>
                <span className="text-gray-500 mx-2">/</span>
                <Link href="/projects" className="text-gray-500 hover:text-gray-700">
                  Projects
                </Link>
              </li>
              <li>
                <span className="text-gray-500 mx-2">/</span>
                <span className="text-gray-900 font-medium">{project.title}</span>
              </li>
            </ol>
          </nav>
        </div>

        {/* Project Header with solid background */}
        <div className="mb-8 bg-gradient-to-r from-blue-600 to-indigo-700 rounded-lg p-8 text-white">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between">
            <h1 className="text-3xl font-bold mb-4 md:mb-0">{project.title}</h1>
            <span className="inline-block bg-white text-blue-700 px-3 py-1 rounded-full text-sm">
              {project.category}
            </span>
          </div>
          
          {/* Project timeline info - only show if start_date exists */}
          {startDate && (
            <div className="mt-4 text-white/90">
              <p>{startDate} - {endDate}</p>
              {duration && <p className="text-sm">{duration}</p>}
            </div>
          )}
        </div>

        {/* Project Image */}
        <div className="mb-10 relative h-[400px] rounded-lg overflow-hidden shadow-lg">
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 800px"
            priority
          />
        </div>

        {/* Project Information */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-10">
          <div className="prose max-w-none">
            <h2 className="text-2xl font-bold mb-4 text-gray-800">Project Overview</h2>
            <p className="text-gray-700 mb-6">{project.description}</p>
            
            {/* Project Timeline Section - only show if start_date exists */}
            {startDate && (
              <div className="mt-8">
                <h3 className="text-xl font-bold mb-3 text-gray-800">Project Timeline</h3>
                <div className="bg-blue-50 p-4 rounded-lg mb-6">
                  <div className="flex flex-wrap gap-x-8 gap-y-2">
                    <div>
                      <span className="font-medium text-gray-700">Start Date: </span>
                      <span className="text-gray-600">{startDate}</span>
                    </div>
                    <div>
                      <span className="font-medium text-gray-700">End Date: </span>
                      <span className="text-gray-600">{endDate}</span>
                    </div>
                    <div>
                      <span className="font-medium text-gray-700">Duration: </span>
                      <span className="text-gray-600">{duration}</span>
                    </div>
                  </div>
                </div>
              </div>
            )}
            
            {/* Tech Stack Section */}
            <div className="mt-8">
              <h3 className="text-xl font-bold mb-3 text-gray-800">Technologies Used</h3>
              <div className="flex flex-wrap gap-2 mb-6">
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
            
            {/* Company & Client Information */}
            {(project.company || project.clients) && (
              <div className="mt-8 border-t border-gray-200 pt-6">
                <h3 className="text-xl font-bold mb-3 text-gray-800">Project Details</h3>
                
                {project.company && (
                  <div className="mb-3">
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
          </div>
        </div>
        
        {/* Project Link (if available) */}
        {project.link && project.link !== '#' && (
          <div className="mb-10">
            <a 
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            >
              Visit Project
              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>
          </div>
        )}
        
        {/* Back to Projects Button */}
        <div className="text-center mb-10">
          <Link 
            href="/projects"
            className="inline-flex items-center justify-center px-6 py-3 bg-gray-200 text-gray-800 rounded-lg hover:bg-gray-300 transition-colors"
          >
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Back to All Projects
          </Link>
        </div>
      </div>
    </div>
  );
}
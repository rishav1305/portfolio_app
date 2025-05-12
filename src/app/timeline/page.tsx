import React from 'react';
import portfolioData from "@/data/portfolioData";
import ProjectImage from '@/components/ui/ProjectImage';
import Breadcrumb from '@/components/ui/Breadcrumb';

// Define interface for project timeline events
interface ProjectTimelineEvent {
  title: string;
  company: string;
  client: string;
  description: string;
  startDate: Date;
  endDate: Date;
  period: string;
  techStack: string[];
  image: string;
  link: string;
  short_description?: string;
}

export default function Timeline() {
  const { projects } = portfolioData;
  
  // Parse dates from strings to Date objects and create timeline events
  const timelineEvents: ProjectTimelineEvent[] = projects.map(project => {
    // Extract dates from project data if available, or use placeholder dates
    const startDate = project.start_date ? new Date(project.start_date) : new Date('2018-01-01');
    const endDate = project.end_date ? new Date(project.end_date) : new Date('2018-06-01');
    
    // Calculate period string if not provided
    const period = `${startDate.toLocaleString('default', { month: 'short' })} ${startDate.getFullYear()} - ${endDate.toLocaleString('default', { month: 'short' })} ${endDate.getFullYear()}`;
    
    return {
      title: project.title,
      company: project.company || '',
      client: project.clients || '',
      description: project.description,
      short_description: project.short_description,
      startDate,
      endDate,
      period,
      techStack: project.techStack,
      image: project.thumbnail || project.image,
      link: project.link
    };
  }).sort((a, b) => b.startDate.getTime() - a.startDate.getTime()); // Sort by date descending
  
  return (
    <div className="min-h-screen bg-gray-100 pt-24 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-6">
          <Breadcrumb overrides={{ timeline: 'Project Timeline' }} />
        </div>
        <h1 className="text-4xl font-bold text-center mb-16 text-gray-800">Project Timeline</h1>
        
        <div className="relative py-8">
          {/* Main vertical timeline line */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-1.5 bg-gradient-to-b from-blue-500 via-purple-500 to-pink-500 rounded-full"></div>
          
          {/* Year markers along the timeline */}
          <div className="space-y-32">
            {['2020', '2019', '2018'].map((year, yearIndex) => (
              <div key={year} className="relative mb-16">
                {/* Year marker - Moved to the side instead of center */}
                <div className="hidden md:block absolute left-1/2 transform -translate-x-[80px] top-0 -mt-6">
                  <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold py-1 px-4 rounded-full shadow-lg">
                    {year}
                  </div>
                </div>
                
                <h2 className="md:hidden text-2xl font-bold mb-8 text-gray-800 bg-white inline-block px-4 py-2 rounded-lg shadow">{year}</h2>
                
                {/* Projects from this year */}
                <div className="space-y-16 mt-8">
                  {timelineEvents
                    .filter(event => event.startDate.getFullYear().toString() === year)
                    .map((project, projectIndex) => (
                      <div key={projectIndex} className="relative">
                        {/* Project marker on the timeline */}
                        <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-5 h-5 rounded-full bg-white border-4 border-purple-500 z-10"></div>
                        
                        {/* Project card container */}
                        <div className={`md:flex ${projectIndex % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                          {/* Empty space for opposite side on desktop */}
                          <div className="hidden md:block md:w-1/2"></div>
                          
                          {/* Project card */}
                          <div 
                            className={`bg-white rounded-xl shadow-xl p-0 overflow-hidden md:w-5/12 
                              ${projectIndex % 2 === 0 ? 'md:ml-8' : 'md:mr-8'} 
                              transform transition-all duration-300 hover:shadow-2xl hover:-translate-y-1`}
                          >
                            {/* Project image */}
                            <div className="relative h-48 w-full overflow-hidden">
                              <ProjectImage
                                src={project.image}
                                alt={project.title}
                                className="w-full h-48 object-cover"
                              />
                              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                              <div className="absolute bottom-0 left-0 right-0 p-4">
                                <span className="inline-block bg-blue-600 text-white text-xs px-3 py-1 rounded-full uppercase tracking-wide font-semibold mb-2">
                                  {project.period}
                                </span>
                                <h3 className="text-xl font-bold text-white">{project.title}</h3>
                              </div>
                            </div>
                            
                            <div className="p-5">
                              {/* Client and company */}
                              <div className="mb-3">
                                {project.client && (
                                  <p className="text-gray-700 font-medium">Client: {project.client}</p>
                                )}
                                {project.company && (
                                  <p className="text-gray-500 text-sm">at {project.company}</p>
                                )}
                              </div>
                              
                              {/* Tech stack */}
                              <div className="flex flex-wrap gap-1 mb-4 mt-3">
                                {project.techStack.slice(0, 3).map((tech, i) => (
                                  <span key={i} className="bg-gray-100 text-gray-600 text-xs px-2 py-1 rounded">
                                    {tech}
                                  </span>
                                ))}
                                {project.techStack.length > 3 && (
                                  <span className="bg-gray-100 text-gray-600 text-xs px-2 py-1 rounded">
                                    +{project.techStack.length - 3} more
                                  </span>
                                )}
                              </div>
                              
                              {/* Description and link */}
                              <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                                {project.short_description || project.description.slice(0, 120) + '...'}
                              </p>
                              
                              <a 
                                href={`/${project.link}`}
                                className="inline-block bg-gradient-to-r from-blue-500 to-purple-600 text-white text-sm px-4 py-2 rounded-lg font-medium hover:from-blue-600 hover:to-purple-700 transition-all"
                              >
                                View Project Details
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                </div>
              </div>
            ))}
          </div>
          
          {/* Timeline start point */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 top-0 -mt-4">
            <div className="w-8 h-8 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 shadow-lg"></div>
          </div>
          
          {/* Timeline end point */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 bottom-0 -mb-4">
            <div className="w-8 h-8 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 shadow-lg flex items-center justify-center">
              <div className="w-3 h-3 bg-white rounded-full"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
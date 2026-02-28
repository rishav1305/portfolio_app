import React from 'react';
import Link from 'next/link';
import portfolioData from "@/data/portfolioData";
import { getProjects } from '@/services/projects'; // Import Fetcher
import Breadcrumb from '@/components/ui/Breadcrumb';

// Helper function to get category badge color
const getCategoryBadgeColor = (category: string) => {
  switch (category) {
    case 'Completed':
      return 'bg-emerald-500';
    case 'Ongoing':
      return 'bg-yellow-500';
    default:
      return 'bg-[#CA8A04]';
  }
};

export default async function Projects() {
  const { personalInfo } = portfolioData;
  const projects = await getProjects(); // Fetch from Supabase
  const categories = [...new Set(projects.map(project => project.category))];

  return (
    <div className="min-h-screen bg-[#0F172A] pt-24 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="mb-6">
          <Breadcrumb overrides={{ projects: 'Projects Portfolio' }} />
        </div>
        <div className="text-center mb-16">
          <h1 className="text-4xl font-serif font-bold text-[#F8FAFC] mb-4">Projects Portfolio</h1>
          <p className="text-lg text-[#94A3B8] max-w-3xl mx-auto">
            A collection of data engineering, analytics, and visualization projects showcasing my expertise in transforming data into actionable insights.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          <button className="px-4 py-2 bg-[#CA8A04] text-[#020617] rounded-md hover:bg-[#EAB308] transition-colors font-medium">
            All Projects
          </button>
          {categories.map((category, index) => (
            <button
              key={index}
              className="px-4 py-2 border border-[#1E293B] text-[#94A3B8] rounded-md hover:border-[#CA8A04] hover:text-[#CA8A04] transition-colors"
            >
              {category}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {projects.map((project, index) => (
            <div
              key={index}
              className="glass-card overflow-hidden flex flex-col"
            >
              <div className="px-6 pt-4">
                <span className={`${getCategoryBadgeColor(project.category)} text-[#020617] text-xs font-bold px-2 py-1 rounded`}>
                  {project.category}
                </span>
              </div>
              <div className="p-6 flex-grow">
                <h3 className="text-xl font-bold mb-2 text-[#F8FAFC]">{project.title}</h3>
                <p className="text-[#94A3B8] mb-4">{project.short_description || project.description}</p>
              </div>
              <div className="px-6 pb-4">
                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-[#64748B] mb-2">Technologies Used:</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.techStack.slice(0, 4).map((tech, i) => (
                      <span key={i} className="bg-[#1E293B] text-[#64748B] px-2 py-1 rounded text-xs">
                        {tech}
                      </span>
                    ))}
                    {project.techStack.length > 4 && (
                      <span className="bg-[#1E293B] text-[#64748B] px-2 py-1 rounded text-xs">
                        +{project.techStack.length - 4} more
                      </span>
                    )}
                  </div>
                </div>
                <Link
                  href={`/${project.link}`}
                  className="inline-block text-[#CA8A04] font-medium hover:text-[#EAB308] hover:underline"
                >
                  View Project Details &rarr;
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* GitHub Section */}
        <div className="glass-card p-8 mb-16">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="mb-6 md:mb-0 md:mr-8">
              <h2 className="text-2xl font-serif font-bold mb-4 text-[#F8FAFC]">More Projects on GitHub</h2>
              <p className="text-[#94A3B8] mb-4">
                Explore my open source contributions and personal projects on GitHub. From data processing utilities to visualization tools,
                my repositories showcase my coding style and problem-solving approach.
              </p>
              <a
                href={personalInfo.socialMedia.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center bg-[#CA8A04] text-[#020617] px-6 py-3 rounded-lg hover:bg-[#EAB308] transition-colors font-medium"
              >
                <svg className="w-5 h-5 mr-2" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
                Visit My GitHub
              </a>
            </div>
            <div className="bg-[#020617] border border-[#1E293B] p-4 rounded-lg w-full md:w-auto">
              <div className="text-center">
                <h3 className="font-bold text-[#F8FAFC]">GitHub Stats</h3>
                <p className="text-sm text-[#64748B] mb-4">@{personalInfo.socialMedia.github.split('/').pop()}</p>
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-[#0F172A] p-3 rounded border border-[#1E293B]">
                    <span className="block text-2xl font-bold text-[#CA8A04]">20+</span>
                    <span className="text-sm text-[#64748B]">Repositories</span>
                  </div>
                  <div className="bg-[#0F172A] p-3 rounded border border-[#1E293B]">
                    <span className="block text-2xl font-bold text-emerald-400">150+</span>
                    <span className="text-sm text-[#64748B]">Contributions</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Contact for Collaboration */}
        <div className="glass-card p-8 text-center">
          <h2 className="text-2xl font-serif font-bold mb-4 text-[#F8FAFC]">Interested in Collaboration?</h2>
          <p className="mb-6 max-w-2xl mx-auto text-[#94A3B8]">
            I&apos;m always open to discussing new projects, creative ideas or opportunities to be part of your vision.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-[#CA8A04] text-[#020617] px-6 py-3 rounded-lg font-medium hover:bg-[#EAB308] transition-colors"
          >
            Get in Touch
          </Link>
        </div>
      </div>
    </div>
  );
}

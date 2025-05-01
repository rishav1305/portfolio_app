import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
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

export default function PortfolioAppProject() {
  // Get the portfolio app project (first in the array after our update)
  const project = portfolioData.projects[0];
  
  // Format dates and calculate duration
  const startDate = project.start_date ? formatMonthYear(project.start_date) : '';
  const endDate = project.end_date ? formatMonthYear(project.end_date) : 'Present';
  const duration = project.start_date ? calculateDuration(project.start_date, project.end_date || '') : '';
  
  return (
    <div className="min-h-screen bg-white pt-24 pb-12">
      {/* Hero Section with gradient background */}
      <div className="relative h-[50vh] md:h-[60vh] w-full bg-gradient-to-r from-blue-600 to-purple-700">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center p-6 max-w-4xl">
            <span className="inline-block bg-indigo-500 text-white px-3 py-1 rounded-full text-sm font-medium mb-4">
              Case Study
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">{project.title}</h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              How I built a modern portfolio website using Next.js and GitHub Copilot with Claude 3.7 Sonnet
            </p>
            
            {/* Project timeline info - only show if start_date exists */}
            {startDate && (
              <div className="mt-6 text-white/80 text-lg">
                <p>{startDate} - {endDate} • {duration}</p>
              </div>
            )}
          </div>
        </div>
      </div>
      
      {/* Content Section */}
      <div className="max-w-4xl mx-auto px-4 py-12">
        {/* Breadcrumb */}
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
                <span className="text-gray-900 font-medium">Portfolio App with AI Assistance</span>
              </li>
            </ol>
          </nav>
        </div>
        
        {/* Project Meta */}
        <div className="flex flex-wrap items-center justify-between mb-10 bg-gray-100 p-6 rounded-lg">
          <div>
            <h3 className="font-semibold text-gray-800">Type</h3>
            <p className="text-gray-700">Personal Project</p>
          </div>
          <div>
            <h3 className="font-semibold text-gray-800">Status</h3>
            <p className="text-gray-700">{project.category}</p>
          </div>
          <div>
            <h3 className="font-semibold text-gray-800">Duration</h3>
            <p className="text-gray-700">{duration}</p>
          </div>
          <div>
            <h3 className="font-semibold text-gray-800">Primary Tools</h3>
            <p className="text-gray-700">Next.js, GitHub Copilot, Claude AI</p>
          </div>
        </div>
        
        <div className="prose max-w-none">
          {/* Introduction */}
          <h2 className="text-3xl font-bold mb-6">Project Overview</h2>
          <p className="text-lg mb-6">
            This project represents a significant milestone in my exploration of AI-assisted development. 
            I set out to build a comprehensive portfolio website that would showcase my professional 
            experience, skills, and projects—but with a twist. The entire development process would 
            rely on GitHub Copilot with Claude 3.7 Sonnet as my programming partner, testing the boundaries 
            of what's possible with modern AI code assistance.
          </p>
          
          <div className="relative h-[350px] mb-8 rounded-lg overflow-hidden border border-gray-200">
            <Image 
              src={project.image}
              alt={`${project.title} screenshot`}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              priority
            />
          </div>
          
          {/* Motivation */}
          <div className="my-12">
            <h2 className="text-3xl font-bold mb-6">Why Build a Portfolio with AI?</h2>
            <p className="mb-4">
              As a technology professional with experience in cloud computing, data engineering, and analytics, I've increasingly 
              become interested in how AI tools can enhance developer productivity and creativity. I had three main motivations for this project:
            </p>
            <ul className="list-disc pl-6 space-y-2 mb-6">
              <li>
                <span className="font-semibold">Showcase Professional Growth:</span> Create a comprehensive portfolio that effectively 
                communicates my experience, skills, and accomplishments to potential collaborators.
              </li>
              <li>
                <span className="font-semibold">Evaluate AI Code Assistance:</span> Personally assess the capabilities and limitations of 
                GitHub Copilot with Claude 3.7 Sonnet for full-scale web application development.
              </li>
              <li>
                <span className="font-semibold">Develop Prompt Engineering Skills:</span> Strengthen my ability to effectively communicate 
                with AI tools—a skill that's becoming increasingly valuable across the tech industry.
              </li>
            </ul>
          </div>
          
          {/* Technology Stack */}
          <div className="my-12">
            <h2 className="text-3xl font-bold mb-6">Technology Stack</h2>
            <p className="mb-6">
              For this project, I selected a modern, robust stack that would provide excellent performance, developer experience, and deployment flexibility:
            </p>
            
            <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-500 my-8">
              <h4 className="text-lg font-bold text-blue-800 mb-2">Technical Stack</h4>
              <div className="flex flex-wrap gap-2">
                {project.techStack.map((tech, index) => (
                  <span 
                    key={index} 
                    className="bg-white text-blue-800 px-3 py-1 rounded-full text-sm border border-blue-200"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-10">
              <div>
                <h3 className="text-xl font-bold mb-3">Core Technologies</h3>
                <ul className="list-disc pl-6 space-y-2">
                  <li><span className="font-medium">Next.js 14:</span> React framework with built-in routing, API routes, and optimized performance</li>
                  <li><span className="font-medium">TypeScript:</span> For type safety and improved developer experience</li>
                  <li><span className="font-medium">Tailwind CSS:</span> Utility-first CSS framework for rapid UI development</li>
                  <li><span className="font-medium">React Hooks:</span> For state management and side effects</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-3">Development Tools</h3>
                <ul className="list-disc pl-6 space-y-2">
                  <li><span className="font-medium">GitHub Copilot:</span> AI pair programmer powered by Claude 3.7 Sonnet</li>
                  <li><span className="font-medium">VS Code:</span> Primary code editor with extensions for improved workflow</li>
                  <li><span className="font-medium">Git:</span> Version control for tracking changes</li>
                  <li><span className="font-medium">Vercel:</span> For seamless deployment and hosting</li>
                </ul>
              </div>
            </div>
          </div>
          
          {/* The AI-Assisted Development Process */}
          <div className="my-12">
            <h2 className="text-3xl font-bold mb-6">AI-Assisted Development Process</h2>
            
            <p className="mb-6">
              This project took a unique approach to development by leveraging GitHub Copilot with Claude 3.7 Sonnet 
              throughout the entire process. Here's how the development workflow unfolded:
            </p>
            
            <h3 className="text-xl font-bold mt-8 mb-3">1. Project Setup and Architecture</h3>
            <p className="mb-6">
              I started by clearly communicating my vision for the portfolio site to GitHub Copilot. Through a series of 
              prompts, I established requirements for a Next.js application with TypeScript support. Claude helped set up 
              the initial project structure, configure Tailwind CSS, and establish the routing architecture.
            </p>
            <div className="bg-gray-800 text-gray-100 p-4 rounded-md mb-6 overflow-auto">
              <p className="font-mono text-sm">
                <span className="text-green-400">User:</span> I want to create a modern portfolio website using Next.js and TypeScript. 
                The site should have sections for my experience, projects, skills, and contact information. How should I structure this project?
              </p>
              <br />
              <p className="font-mono text-sm">
                <span className="text-purple-400">GitHub Copilot:</span> I'll help you set up a Next.js project with TypeScript for your portfolio. 
                Here's a recommended project structure with App Router, organized components, and data management...
              </p>
            </div>
            
            <h3 className="text-xl font-bold mt-8 mb-3">2. Component Development</h3>
            <p className="mb-6">
              For each section of the portfolio, I provided Claude with specific design goals and functionality requirements. 
              The AI suggested component structures, implemented responsive layouts using Tailwind CSS, and even helped create 
              interactive elements like the animated navbar, project cards, and skill visualization.
            </p>
            
            <div className="bg-gray-800 text-gray-100 p-4 rounded-md mb-6 overflow-auto">
              <p className="font-mono text-sm">
                <span className="text-green-400">User:</span> I need a component for my navbar that shows my name with an animation 
                where a diagonal line crosses through it occasionally. It should work well on both mobile and desktop.
              </p>
              <br />
              <p className="font-mono text-sm">
                <span className="text-purple-400">GitHub Copilot:</span> Here's a NavbarName component that animates a diagonal line 
                through your name using CSS transitions and React state management...
              </p>
            </div>
            
            <h3 className="text-xl font-bold mt-8 mb-3">3. Data Management</h3>
            <p className="mb-6">
              Instead of hardcoding content throughout the site, Claude suggested creating a central data file (portfolioData.ts) 
              to manage all portfolio content. This approach made it easy to update information and ensured consistency across 
              the application. The AI helped design appropriate TypeScript interfaces and implemented helper functions for data processing.
            </p>
            
            <h3 className="text-xl font-bold mt-8 mb-3">4. Interactive Features</h3>
            <p className="mb-6">
              Claude assisted in implementing several interactive features that enhanced the user experience:
            </p>
            <ul className="list-disc pl-6 space-y-2 mb-6">
              <li>Animated transitions between pages</li>
              <li>Auto-scrolling testimonials carousel</li>
              <li>Interactive data visualizations for skills</li>
              <li>Modal windows for project details</li>
              <li>Dynamic content loading from Medium blog API</li>
            </ul>
            
            <h3 className="text-xl font-bold mt-8 mb-3">5. Debugging and Optimization</h3>
            <p className="mb-6">
              When issues arose during development, Claude proved particularly valuable. The AI could analyze error messages, 
              suggest potential causes, and provide solutions—often accompanied by explanations that enhanced my understanding 
              of the underlying technologies. Performance optimizations for images, component rendering, and API calls were also 
              implemented with Claude's assistance.
            </p>
            
            <div className="bg-gray-800 text-gray-100 p-4 rounded-md mb-6 overflow-auto">
              <p className="font-mono text-sm">
                <span className="text-green-400">User:</span> I'm getting a hydration error with my testimonials component. The error says 
                "Text content does not match server-rendered HTML."
              </p>
              <br />
              <p className="font-mono text-sm">
                <span className="text-purple-400">GitHub Copilot:</span> This is a common Next.js hydration issue that happens when the server 
                and client render different content. Let's create a HydrationErrorSuppressor component that safely handles client-side rendering...
              </p>
            </div>
          </div>
          
          {/* Key Insights and Learnings */}
          <div className="my-12">
            <h2 className="text-3xl font-bold mb-6">Key Insights from AI-Assisted Development</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500">
                <h3 className="text-xl font-bold text-green-800 mb-2">80%</h3>
                <p className="text-gray-700">Development time reduction compared to traditional coding</p>
              </div>
              <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500">
                <h3 className="text-xl font-bold text-green-800 mb-2">90%</h3>
                <p className="text-gray-700">Code implemented from AI suggestions with minimal modifications</p>
              </div>
              <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500">
                <h3 className="text-xl font-bold text-green-800 mb-2">12+</h3>
                <p className="text-gray-700">Custom components built with AI assistance</p>
              </div>
              <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500">
                <h3 className="text-xl font-bold text-green-800 mb-2">3</h3>
                <p className="text-gray-700">Complex bugs resolved through AI-guided debugging</p>
              </div>
            </div>
            
            <h3 className="text-xl font-bold mt-10 mb-3">Strengths of GitHub Copilot with Claude 3.7 Sonnet</h3>
            <ul className="list-disc pl-6 space-y-2 mb-6">
              <li><span className="font-medium">Contextual Understanding:</span> Claude demonstrated an impressive ability to understand the overall project structure and purpose, providing solutions that fit cohesively with existing code.</li>
              <li><span className="font-medium">TypeScript Excellence:</span> The AI excelled at generating well-typed code and solving type-related challenges.</li>
              <li><span className="font-medium">Documentation Integration:</span> Claude could effectively draw from Next.js and React documentation to implement best practices.</li>
              <li><span className="font-medium">Educational Value:</span> Beyond just generating code, the AI provided explanations that enhanced my understanding of complex concepts.</li>
            </ul>
            
            <h3 className="text-xl font-bold mt-8 mb-3">Areas for Improvement</h3>
            <ul className="list-disc pl-6 space-y-2 mb-6">
              <li><span className="font-medium">Occasional Inconsistency:</span> Sometimes Claude would suggest different approaches to similar problems, requiring manual standardization.</li>
              <li><span className="font-medium">Design Limitations:</span> While Claude could implement designs from descriptions, creating truly unique visual designs still required human creativity and direction.</li>
              <li><span className="font-medium">Context Window Constraints:</span> For very large components or complex logic, the AI sometimes lost track of earlier requirements or code patterns.</li>
            </ul>
          </div>
          
          {/* The Power of Effective Prompting */}
          <div className="my-12">
            <h2 className="text-3xl font-bold mb-6">The Power of Effective Prompting</h2>
            
            <p className="mb-6">
              One of the most valuable insights from this project was learning how to effectively communicate with AI tools. 
              The quality of Claude's responses was directly proportional to the clarity and specificity of my prompts.
            </p>
            
            <div className="bg-purple-50 p-6 rounded-lg my-6">
              <h3 className="text-xl font-bold text-purple-800 mb-4">Prompt Engineering Best Practices</h3>
              <ul className="list-disc pl-6 space-y-3">
                <li><span className="font-medium">Be Specific:</span> "Create a responsive navbar with a logo, navigation links, and a mobile toggle" works better than "Make me a navbar."</li>
                <li><span className="font-medium">Provide Context:</span> Include information about the component's purpose, its place in the application, and how it should interact with other components.</li>
                <li><span className="font-medium">Include Examples:</span> Referencing similar components or providing design inspiration helps Claude understand your vision.</li>
                <li><span className="font-medium">Iterative Refinement:</span> Start with a basic implementation and iteratively refine it through follow-up prompts.</li>
                <li><span className="font-medium">Error Details:</span> When troubleshooting, provide the full error message and relevant code context.</li>
              </ul>
            </div>
            
            <p className="mb-6">
              By applying these practices, I was able to work with Claude to build increasingly complex components and functionality 
              throughout the development process.
            </p>
          </div>
          
          {/* Conclusion */}
          <div className="my-12">
            <h2 className="text-3xl font-bold mb-6">Conclusion</h2>
            <p className="mb-6">
              This portfolio project demonstrates the transformative potential of AI-assisted development. By leveraging GitHub Copilot with Claude 3.7 Sonnet, 
              I was able to build a comprehensive, responsive, and feature-rich portfolio website in a fraction of the time it would have taken using traditional development methods.
            </p>
            <p className="mb-6">
              More importantly, the project illustrates how AI tools are not replacing developers but rather augmenting their capabilities—enabling 
              faster prototyping, reducing boilerplate coding, and providing educational insights along the way. Strong prompt engineering skills 
              act as a multiplier for developer productivity when working with these advanced AI tools.
            </p>
            <p>
              As AI assistance continues to evolve, projects like this one highlight the importance of learning to effectively collaborate with 
              these tools—a skill that will likely become increasingly valuable across the technology landscape in the coming years.
            </p>
          </div>
        </div>
        
        {/* CTA Section */}
        <div className="my-12 border-t border-gray-200 pt-12">
          <div className="bg-gradient-to-r from-indigo-600 to-purple-700 text-white rounded-lg shadow-lg p-8 text-center">
            <h2 className="text-2xl font-bold mb-4">Interested in AI-Assisted Development?</h2>
            <p className="mb-6 max-w-2xl mx-auto">
              I can help your organization leverage AI tools to accelerate development, improve code quality, and enhance developer productivity.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link 
                href="/contact"
                className="inline-block bg-white text-indigo-600 px-6 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors"
              >
                Let's Connect
              </Link>
              <Link 
                href="/projects"
                className="inline-block bg-indigo-700 text-white px-6 py-3 rounded-lg font-medium hover:bg-indigo-800 transition-colors"
              >
                View More Projects
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
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

export default function ProfileBuilderProject() {
  // Get the Profile Builder project from the portfolioData
  const project = portfolioData.projects.find(p => p.title === "Profile Builder with Local LLM") || portfolioData.projects[0];
  
  // Format dates and calculate duration
  const startDate = project.start_date ? formatMonthYear(project.start_date) : '';
  const endDate = project.end_date ? formatMonthYear(project.end_date) : 'Present';
  const duration = project.start_date ? calculateDuration(project.start_date, project.end_date || '') : '';
  
  return (
    <div className="min-h-screen bg-white pt-24 pb-12">
      {/* Hero Section with gradient background */}
      <div className="relative h-[50vh] md:h-[60vh] w-full bg-gradient-to-r from-blue-700 to-indigo-800">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center p-6 max-w-4xl">
            <span className="inline-block bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium mb-4">
              Case Study
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">{project.title}</h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              Building a privacy-focused AI agent for automating professional profile creation across multiple platforms
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
                <span className="text-gray-900 font-medium">Profile Builder with Local LLM</span>
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
            <p className="text-gray-700">Python, Ollama, Flask, Docker</p>
          </div>
        </div>
        
        <div className="prose max-w-none">
          {/* Introduction */}
          <h2 className="text-3xl font-bold mb-6">Project Overview</h2>
          <p className="text-lg mb-6">
            The Profile Builder project addresses a common challenge faced by professionals: maintaining consistent, 
            high-quality profiles across multiple freelance platforms and job boards. Instead of manually writing 
            and optimizing profiles for each platform, this tool automates the process while preserving data privacy 
            by using local LLM models rather than sending sensitive information to external APIs.
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
            <h2 className="text-3xl font-bold mb-6">Why Build a Local LLM Profile Builder?</h2>
            <p className="mb-4">
              This project was driven by several key motivations:
            </p>
            <ul className="list-disc pl-6 space-y-2 mb-6">
              <li>
                <span className="font-semibold">Privacy Concerns:</span> When using AI services to generate professional profiles, 
                users often need to share sensitive career information. By leveraging local LLM models, this tool keeps all data on the user's device.
              </li>
              <li>
                <span className="font-semibold">Time Efficiency:</span> Creating and optimizing profiles for multiple platforms can take hours. 
                Automation significantly reduces this workload.
              </li>
              <li>
                <span className="font-semibold">Platform Expertise:</span> Different platforms have different content requirements and expectations. 
                The tool is programmed with knowledge of these differences to optimize content for each destination.
              </li>
              <li>
                <span className="font-semibold">Explore Local LLM Capabilities:</span> This project demonstrates how powerful local language models 
                have become, capable of processing complex tasks without cloud-based APIs.
              </li>
            </ul>
          </div>
        
          {/* Technology Stack */}
          <div className="my-12">
            <h2 className="text-3xl font-bold mb-6">Technology Stack</h2>
            <p className="mb-6">
              For this project, I selected a stack that balances performance, privacy, and ease of deployment:
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
                  <li><span className="font-medium">Python:</span> Main programming language for the backend</li>
                  <li><span className="font-medium">Flask:</span> Web framework for the user interface</li>
                  <li><span className="font-medium">Ollama:</span> Framework for running local language models</li>
                  <li><span className="font-medium">deepseek-r1:</span> Large Language Model optimized for this type of task</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-3">Development Tools</h3>
                <ul className="list-disc pl-6 space-y-2">
                  <li><span className="font-medium">Docker:</span> Containerization for consistent deployment</li>
                  <li><span className="font-medium">BeautifulSoup:</span> For parsing and extracting data from portfolio websites</li>
                  <li><span className="font-medium">Git:</span> Version control for tracking changes</li>
                  <li><span className="font-medium">Bootstrap:</span> Frontend framework for the user interface</li>
                </ul>
              </div>
            </div>
          </div>
          
          {/* The Development Process */}
          <div className="my-12">
            <h2 className="text-3xl font-bold mb-6">Development Process</h2>
            
            <h3 className="text-xl font-bold mt-8 mb-3">1. System Architecture Design</h3>
            <p className="mb-6">
              The project is built with a modular architecture consisting of several key components:
            </p>
            <ul className="list-disc pl-6 space-y-2 mb-6">
              <li><span className="font-medium">Portfolio Extractor Module:</span> Extracts professional data from existing portfolio websites</li>
              <li><span className="font-medium">LLM Integration Layer:</span> Communicates with the Ollama-hosted deepseek-r1 model</li>
              <li><span className="font-medium">Profile Generator:</span> Creates platform-specific content from the extracted data</li>
              <li><span className="font-medium">Web Interface:</span> Provides a user-friendly interface for the entire process</li>
            </ul>
            
            <h3 className="text-xl font-bold mt-8 mb-3">2. Local LLM Integration</h3>
            <p className="mb-6">
              A key challenge was integrating with Ollama to run the deepseek-r1 model locally. This involved:
            </p>
            <ul className="list-disc pl-6 space-y-2 mb-6">
              <li>Setting up Ollama with the appropriate model configuration</li>
              <li>Creating a client to handle model communication</li>
              <li>Designing effective prompts for profile generation</li>
              <li>Optimizing token usage for efficient processing</li>
            </ul>
            
            <div className="bg-gray-800 text-gray-100 p-4 rounded-md mb-6 overflow-auto">
              <pre className="font-mono text-sm whitespace-pre-wrap">
<span className="text-purple-400"># Example of generating a professional title with the LLM</span>
def generate_title(self, portfolio_data, platform="general"):
    """Generate a professional title based on portfolio data."""
    prompt = f"""
    Create a compelling professional title for a {"{platform}"} profile based on the following information.
    The title should be concise, impactful, and highlight key expertise.

    Experience: {"{portfolio_data.get('experience', [])}"}
    Skills: {"{portfolio_data.get('skills', {})}"}

    Professional Title:
    """

    title = self.client.generate(prompt, max_tokens=50, temperature=0.7)
    return title.strip()
              </pre>
            </div>
            
            <h3 className="text-xl font-bold mt-8 mb-3">3. Platform-Specific Content Generation</h3>
            <p className="mb-6">
              Different platforms have different content requirements and expectations. The system recognizes key platforms and tailors the content generation:
            </p>
            <ul className="list-disc pl-6 space-y-2 mb-6">
              <li><span className="font-medium">Upwork:</span> Focused on specific services and achievements with ideal hourly rates</li>
              <li><span className="font-medium">LinkedIn:</span> More comprehensive professional narrative with industry keywords</li>
              <li><span className="font-medium">Freelancer.com:</span> Project-centric content highlighting specific deliverables</li>
              <li><span className="font-medium">Various Job Boards:</span> Role-specific optimization for particular industries</li>
            </ul>
            
            <h3 className="text-xl font-bold mt-8 mb-3">4. User Interface Development</h3>
            <p className="mb-6">
              The web interface was designed to be straightforward and user-friendly:
            </p>
            <ul className="list-disc pl-6 space-y-2 mb-6">
              <li>Input field for portfolio URL</li>
              <li>Platform selection interface with visuals</li>
              <li>Optional credential input for automation</li>
              <li>Results display with copy functionality</li>
              <li>Status indicators for system readiness</li>
            </ul>
          </div>
          
          {/* Key Features */}
          <div className="my-12">
            <h2 className="text-3xl font-bold mb-6">Key Features</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-500">
                <h3 className="text-xl font-bold text-blue-800 mb-2">Local Processing</h3>
                <p className="text-gray-700">All data remains on the user's device with no external API calls</p>
              </div>
              <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-500">
                <h3 className="text-xl font-bold text-blue-800 mb-2">Multi-Platform Support</h3>
                <p className="text-gray-700">Optimized content generation for various freelance platforms and job boards</p>
              </div>
              <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-500">
                <h3 className="text-xl font-bold text-blue-800 mb-2">Automated Data Extraction</h3>
                <p className="text-gray-700">Automatically pulls relevant information from existing portfolio websites</p>
              </div>
              <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-500">
                <h3 className="text-xl font-bold text-blue-800 mb-2">Containerized Deployment</h3>
                <p className="text-gray-700">Easy setup with Docker for consistent environment across systems</p>
              </div>
            </div>
          </div>
          
          {/* Technical Challenges and Solutions */}
          <div className="my-12">
            <h2 className="text-3xl font-bold mb-6">Technical Challenges and Solutions</h2>
            
            <h3 className="text-xl font-bold mt-8 mb-3">1. Local LLM Performance</h3>
            <p className="mb-6">
              Running large language models locally presents performance challenges, especially on systems with limited resources.
            </p>
            <div className="bg-gray-100 p-6 rounded-lg mb-6">
              <h4 className="font-bold text-gray-800 mb-2">Solution:</h4>
              <p>
                Implemented model parameter optimization for the deepseek-r1 model in Ollama, finding the right balance between 
                quality and performance. Used techniques like context window management and response streaming to improve user experience 
                even on systems with limited resources.
              </p>
            </div>
            
            <h3 className="text-xl font-bold mt-8 mb-3">2. Extracting Structured Data</h3>
            <p className="mb-6">
              Portfolio websites vary greatly in structure, making consistent data extraction challenging.
            </p>
            <div className="bg-gray-100 p-6 rounded-lg mb-6">
              <h4 className="font-bold text-gray-800 mb-2">Solution:</h4>
              <p>
                Developed a flexible portfolio extractor that can identify common patterns in professional websites. 
                Implemented fallback mechanisms when specific data points cannot be extracted, ensuring the system 
                can still function with partial information.
              </p>
            </div>
            
            <h3 className="text-xl font-bold mt-8 mb-3">3. Prompt Engineering for Quality</h3>
            <p className="mb-6">
              Getting consistent, high-quality outputs from LLMs requires careful prompt design.
            </p>
            <div className="bg-gray-100 p-6 rounded-lg mb-6">
              <h4 className="font-bold text-gray-800 mb-2">Solution:</h4>
              <p>
                Created a library of specialized prompts for different profile sections and platforms. These prompts 
                include specific guidance on tone, structure, and content expectations for each platform, resulting 
                in more consistent and appropriate outputs.
              </p>
            </div>
          </div>
          
          {/* Conclusion */}
          <div className="my-12">
            <h2 className="text-3xl font-bold mb-6">Conclusion</h2>
            <p className="mb-6">
              The Profile Builder with Local LLM project demonstrates how locally-run AI models can deliver powerful, 
              privacy-preserving solutions for practical problems. By combining modern LLM technology with targeted 
              prompting and a user-friendly interface, the tool streamlines the often tedious process of maintaining 
              professional profiles across multiple platforms.
            </p>
            <p className="mb-6">
              This project also highlights the growing maturity of local LLM solutions, offering an alternative to 
              cloud-based APIs for tasks that involve sensitive personal or professional information. As local models 
              continue to improve in capabilities and efficiency, we can expect to see more applications taking this approach.
            </p>
            <p>
              The code for this project is available on GitHub, with the aim of contributing to the growing ecosystem 
              of privacy-focused, local AI solutions.
            </p>
          </div>
        </div>
        
        {/* GitHub Link */}
        <div className="my-12 border-t border-gray-200 pt-12">
          <div className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white rounded-lg shadow-lg p-8 text-center">
            <h2 className="text-2xl font-bold mb-4">Explore the Code</h2>
            <p className="mb-6 max-w-2xl mx-auto">
              The full source code for this project is available on GitHub. Feel free to explore, contribute, or customize it for your own needs.
            </p>
            <a 
              href="https://github.com/rishav1305/profile-builder" 
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-white text-blue-600 px-6 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors"
            >
              View on GitHub
            </a>
          </div>
        </div>
        
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

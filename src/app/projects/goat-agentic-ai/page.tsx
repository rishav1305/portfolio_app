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
  const end = endDate ? new Date(endDate) : new Date();
  
  const diffTime = Math.abs(end.getTime() - start.getTime());
  const diffMonths = Math.ceil(diffTime / (1000 * 60 * 60 * 24 * 30.44));
  
  if (diffMonths < 12) {
    return `${diffMonths} month${diffMonths !== 1 ? 's' : ''}`;
  } else {
    const years = Math.floor(diffMonths / 12);
    const months = diffMonths % 12;
    return `${years} year${years !== 1 ? 's' : ''}${months > 0 ? ` ${months} month${months !== 1 ? 's' : ''}` : ''}`;
  }
}

export default function GOATAgenticAIProject() {
  const project = portfolioData.projects.find(p => p.link === "projects/goat-agentic-ai");
  
  if (!project) {
    return <div>Project not found</div>;
  }
  
  const startDate = project.start_date ? formatMonthYear(project.start_date) : '';
  const endDate = project.end_date ? formatMonthYear(project.end_date) : 'Present';
  const duration = project.start_date ? calculateDuration(project.start_date, project.end_date || '') : '';
  
  return (
    <div className="min-h-screen bg-white pt-24 pb-12">
      {/* Hero Section */}
      <div className="relative h-[50vh] md:h-[60vh] w-full bg-gradient-to-r from-purple-600 via-indigo-600 to-blue-700">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center p-6 max-w-4xl">
            <span className="inline-block bg-purple-500 text-white px-3 py-1 rounded-full text-sm font-medium mb-4">
              Enterprise AI Solution
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">{project.title}</h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              Conversational Agentic AI Assistant for Gartner Associates
            </p>
            
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
                <span className="text-gray-900 font-medium">GOAT - Agentic AI</span>
              </li>
            </ol>
          </nav>
        </div>
        
        {/* Project Meta */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10 bg-gray-100 p-6 rounded-lg">
          <div>
            <h3 className="font-semibold text-gray-800">Company</h3>
            <p className="text-gray-700">{project.company}</p>
          </div>
          <div>
            <h3 className="font-semibold text-gray-800">Client</h3>
            <p className="text-gray-700">{project.clients}</p>
          </div>
          <div>
            <h3 className="font-semibold text-gray-800">Status</h3>
            <p className="text-gray-700">{project.category}</p>
          </div>
          <div>
            <h3 className="font-semibold text-gray-800">Architecture</h3>
            <p className="text-gray-700">Serverless AWS</p>
          </div>
        </div>
        
        <div className="prose max-w-none">
          {/* Executive Summary */}
          <div className="bg-purple-50 border-l-4 border-purple-500 p-6 mb-8 rounded-r-lg">
            <h3 className="text-xl font-bold text-purple-900 mb-3">Executive Summary</h3>
            <p className="text-gray-800 leading-relaxed">
              GOAT (Gartner's Own Agentic Tech) is a conversational AI assistant designed to support Gartner associates 
              by providing quick access to client information, engagement data, and research materials. Built on serverless 
              AWS architecture, it streamlines workflows and enhances productivity through intelligent multi-agent orchestration 
              and natural language interactions.
            </p>
          </div>
          
          {/* Business Justification */}
          <h2 className="text-3xl font-bold mb-6">Business Justification</h2>
          <p className="text-lg mb-6">
            The Conversational Agentic AI Assistant is a digital tool designed to support Gartner associates. Its primary 
            function is to streamline and enhance the efficiency of associates by providing quick access to relevant information 
            and resources. This tool aims to improve productivity and ensure that associates are well-prepared for client 
            interactions by offering comprehensive data retrieval and search capabilities.
          </p>
          
          {/* What It Does */}
          <div className="my-12">
            <h2 className="text-3xl font-bold mb-6">What It Does</h2>
            
            <div className="space-y-6 mb-8">
              <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
                <h3 className="font-bold text-lg mb-3 text-blue-600">Client Information Retrieval</h3>
                <ul className="list-disc pl-6 space-y-2 text-gray-600">
                  <li>Fetch detailed client information including Major Client Priorities (MCPs) and Critical Issues (CIs)</li>
                  <li>Provide insights into past engagements and interactions with clients</li>
                  <li>Help associates stay informed and prepared for client meetings</li>
                </ul>
              </div>
              
              <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
                <h3 className="font-bold text-lg mb-3 text-green-600">Call and Engagement Data</h3>
                <ul className="list-disc pl-6 space-y-2 text-gray-600">
                  <li>Retrieve transcripts and follow-up emails from previous calls</li>
                  <li>Ensure continuity and context in ongoing client relationships</li>
                  <li>Access historical engagement data for comprehensive client journey view</li>
                </ul>
              </div>
              
              <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
                <h3 className="font-bold text-lg mb-3 text-purple-600">Document and Research Search</h3>
                <ul className="list-disc pl-6 space-y-2 text-gray-600">
                  <li>Search Gartner's extensive repository of documents and research materials</li>
                  <li>Provide associates with the latest insights and data</li>
                  <li>Support decision-making with relevant, up-to-date information</li>
                </ul>
              </div>
            </div>
          </div>
          
          {/* Workflow */}
          <div className="my-12">
            <h2 className="text-3xl font-bold mb-6">Workflow</h2>
            <p className="mb-6">
              The GOAT system follows a streamlined workflow designed for ease of use and efficiency:
            </p>
            
            <div className="bg-gray-50 p-6 rounded-lg mb-8">
              <ol className="space-y-4">
                <li className="flex items-start">
                  <span className="flex-shrink-0 w-8 h-8 bg-purple-600 text-white rounded-full flex items-center justify-center font-bold mr-4">1</span>
                  <div>
                    <h4 className="font-bold text-lg mb-1">Okta Login</h4>
                    <p className="text-gray-700">Associates log in using Okta authentication for secure access</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="flex-shrink-0 w-8 h-8 bg-purple-600 text-white rounded-full flex items-center justify-center font-bold mr-4">2</span>
                  <div>
                    <h4 className="font-bold text-lg mb-1">Agent Selection</h4>
                    <p className="text-gray-700">Select the client/account to work with</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="flex-shrink-0 w-8 h-8 bg-purple-600 text-white rounded-full flex items-center justify-center font-bold mr-4">3</span>
                  <div>
                    <h4 className="font-bold text-lg mb-1">Setting Up Tool</h4>
                    <p className="text-gray-700">Configure the tool with the selected client details</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="flex-shrink-0 w-8 h-8 bg-purple-600 text-white rounded-full flex items-center justify-center font-bold mr-4">4</span>
                  <div>
                    <h4 className="font-bold text-lg mb-1">Ask Query</h4>
                    <p className="text-gray-700">Associates can ask queries or prompts in natural language</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="flex-shrink-0 w-8 h-8 bg-purple-600 text-white rounded-full flex items-center justify-center font-bold mr-4">5</span>
                  <div>
                    <h4 className="font-bold text-lg mb-1">Get Response</h4>
                    <p className="text-gray-700">The tool provides intelligent responses based on the query</p>
                  </div>
                </li>
              </ol>
            </div>
          </div>
          
          {/* Data Model */}
          <div className="my-12">
            <h2 className="text-3xl font-bold mb-6">Data Model</h2>
            <p className="mb-6">
              The GOAT system uses a comprehensive data model to manage user access, agent configurations, and interaction history:
            </p>
            
            <div className="space-y-4 mb-8">
              <div className="border-l-4 border-blue-500 pl-4 py-2">
                <h4 className="font-bold text-lg mb-1">Emp-Agent-Relation</h4>
                <p className="text-gray-700">Controls user-agent access and permissions</p>
              </div>
              <div className="border-l-4 border-green-500 pl-4 py-2">
                <h4 className="font-bold text-lg mb-1">Agent-Network-Junction</h4>
                <p className="text-gray-700">Manages primary and secondary agents for multi-agent orchestration</p>
              </div>
              <div className="border-l-4 border-purple-500 pl-4 py-2">
                <h4 className="font-bold text-lg mb-1">Agent-Repository</h4>
                <p className="text-gray-700">Stores agent configurations and context information</p>
              </div>
              <div className="border-l-4 border-orange-500 pl-4 py-2">
                <h4 className="font-bold text-lg mb-1">Agent-Tool-Junction</h4>
                <p className="text-gray-700">Links agents with available tools and capabilities</p>
              </div>
              <div className="border-l-4 border-red-500 pl-4 py-2">
                <h4 className="font-bold text-lg mb-1">Tool-Box</h4>
                <p className="text-gray-700">Contains tool configurations and query templates</p>
              </div>
              <div className="border-l-4 border-indigo-500 pl-4 py-2">
                <h4 className="font-bold text-lg mb-1">History</h4>
                <p className="text-gray-700">Tracks session and engagement data for continuity</p>
              </div>
              <div className="border-l-4 border-pink-500 pl-4 py-2">
                <h4 className="font-bold text-lg mb-1">Feedback</h4>
                <p className="text-gray-700">Captures user feedback for continuous improvements</p>
              </div>
            </div>
          </div>
          
          {/* Architecture */}
          <div className="my-12">
            <h2 className="text-3xl font-bold mb-6">Architecture</h2>
            <p className="mb-6">
              GOAT is built on a serverless architecture leveraging AWS services for scalability, reliability, and cost-efficiency:
            </p>
            
            <div className="bg-gray-50 p-6 rounded-lg mb-8">
              <h3 className="text-xl font-bold mb-4">Why Serverless?</h3>
              <div className="space-y-4">
                <div className="border-l-4 border-green-500 pl-4">
                  <h4 className="font-bold text-lg mb-2">Reduced Operational Overhead</h4>
                  <p className="text-gray-700">
                    No server management—AWS handles all infrastructure, scaling, and maintenance for Lambda. 
                    Previously, EKS caused timeouts and blocking issues with many concurrent users.
                  </p>
                </div>
                <div className="border-l-4 border-blue-500 pl-4">
                  <h4 className="font-bold text-lg mb-2">
Automatic Scaling</h4>
                  <p className="text-gray-700">
                    Lambda automatically scales to handle any number of requests without manual configuration. 
                    Eliminates bottlenecks by instantly scaling to meet demand.
                  </p>
                </div>
                <div className="border-l-4 border-purple-500 pl-4">
                  <h4 className="font-bold text-lg mb-2">Cost Efficiency</h4>
                  <p className="text-gray-700">
                    Pay only for actual usage with Lambda (invocations and compute time), unlike EKS where 
                    cluster resources incur costs even when idle.
                  </p>
                </div>
                <div className="border-l-4 border-orange-500 pl-4">
                  <h4 className="font-bold text-lg mb-2">Enhanced Security</h4>
                  <p className="text-gray-700">
                    Lambda offers fine-grained IAM permissions and isolated execution environments, 
                    enhancing security and compliance.
                  </p>
                </div>
              </div>
            </div>
            
            <h3 className="text-xl font-bold mt-8 mb-3">Performance Comparison: EKS vs Serverless</h3>
            <p className="mb-4">
              Testing with 200 concurrent users over 60 minutes showed dramatic improvements:
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500">
                <h3 className="text-3xl font-bold text-green-800 mb-2">29,746</h3>
                <p className="text-gray-700">API calls processed with Lambda (vs 9,742 with EKS)</p>
              </div>
              <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500">
                <h3 className="text-3xl font-bold text-green-800 mb-2">3x</h3>
                <p className="text-gray-700">More requests handled with serverless architecture</p>
              </div>
            </div>
          </div>
          
          
          
          {/* Technical Implementation */}
          <div className="my-12">
            <h2 className="text-3xl font-bold mb-6">Technical Implementation</h2>
            
            <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-500 my-8">
              <h4 className="text-lg font-bold text-blue-800 mb-2">Technology Stack</h4>
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
            
            <h3 className="text-xl font-bold mt-8 mb-3">1. Multi-Agent Orchestration</h3>
            <p className="mb-4">
              Implemented intelligent agent routing and coordination:
            </p>
            <ul className="list-disc pl-6 space-y-2 mb-6">
              <li>Primary and secondary agent management for complex queries</li>
              <li>Context-aware agent selection based on query type</li>
              <li>Agent network junction for seamless handoffs</li>
              <li>Tool-agent mapping for specialized capabilities</li>
            </ul>
            
            <h3 className="text-xl font-bold mt-8 mb-3">2. Conversational AI</h3>
            <p className="mb-4">
              Built natural language interface with LLM integration:
            </p>
            <ul className="list-disc pl-6 space-y-2 mb-6">
              <li>RAG (Retrieval Augmented Generation) for accurate responses</li>
              <li>Vector database for efficient document retrieval</li>
              <li>Context management across conversation threads</li>
              <li>Session history tracking for continuity</li>
            </ul>
            
            <h3 className="text-xl font-bold mt-8 mb-3">3. Security & Authentication</h3>
            <p className="mb-4">
              Implemented enterprise-grade security measures:
            </p>
            <ul className="list-disc pl-6 space-y-2 mb-6">
              <li>Okta integration for SSO authentication</li>
              <li>Role-based access control (RBAC)</li>
              <li>Token-based API authentication with 2-hour expiry</li>
              <li>Data encryption at rest and in transit</li>
            </ul>
          </div>
          
          {/* Security & Compliance */}
          <div className="my-12">
            <h2 className="text-3xl font-bold mb-6">Security & Compliance</h2>
            <p className="mb-6">
              GOAT follows enterprise security standards and compliance requirements:
            </p>
            
            <div className="space-y-4 mb-8">
              <div className="border-l-4 border-blue-500 pl-4 py-2">
                <h4 className="font-bold text-lg mb-1">Identity and Authentication</h4>
                <p className="text-gray-700">OAuth 2.0 token-based authentication with Okta SSO integration</p>
              </div>
              <div className="border-l-4 border-green-500 pl-4 py-2">
                <h4 className="font-bold text-lg mb-1">Data Encryption</h4>
                <p className="text-gray-700">Encryption at rest (AWS RDS, S3) and in transit (HTTPS/TLS)</p>
              </div>
              <div className="border-l-4 border-purple-500 pl-4 py-2">
                <h4 className="font-bold text-lg mb-1">Access Control</h4>
                <p className="text-gray-700">Network segmentation with EKS and fine-grained IAM permissions</p>
              </div>
              <div className="border-l-4 border-orange-500 pl-4 py-2">
                <h4 className="font-bold text-lg mb-1">Logging and Auditing</h4>
                <p className="text-gray-700">Comprehensive logging to Splunk for audit trails and monitoring</p>
              </div>
              <div className="border-l-4 border-red-500 pl-4 py-2">
                <h4 className="font-bold text-lg mb-1">Backup Strategy</h4>
                <p className="text-gray-700">Automated backups for RDS (99.999999999% durability) and S3</p>
              </div>
            </div>
          </div>
          
          {/* Results and Impact */}
          <div className="my-12">
            <h2 className="text-3xl font-bold mb-6">Results & Impact</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500">
                <h3 className="text-3xl font-bold text-green-800 mb-2">3x</h3>
                <p className="text-gray-700">Increase in API throughput with serverless architecture</p>
              </div>
              <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500">
                <h3 className="text-3xl font-bold text-green-800 mb-2">60%</h3>
                <p className="text-gray-700">Reduction in response time for client information retrieval</p>
              </div>
              <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500">
                <h3 className="text-3xl font-bold text-green-800 mb-2">200+</h3>
                <p className="text-gray-700">Concurrent users supported without performance degradation</p>
              </div>
            </div>
            
            <h3 className="text-xl font-bold mt-8 mb-3">Business Benefits</h3>
            <ul className="list-disc pl-6 space-y-3 mb-6">
              <li>
                <span className="font-semibold">Enhanced Productivity:</span> Associates spend less time searching 
                for information and more time engaging with clients
              </li>
              <li>
                <span className="font-semibold">Improved Client Interactions:</span> Quick access to client history 
                and insights enables more informed and personalized conversations
              </li>
              <li>
                <span className="font-semibold">Scalable Architecture:</span> Serverless design handles growing 
                user base without infrastructure concerns
              </li>
              <li>
                <span className="font-semibold">Cost Optimization:</span> Pay-per-use model reduces infrastructure 
                costs compared to always-on EKS clusters
              </li>
              <li>
                <span className="font-semibold">Continuous Improvement:</span> Feedback system enables iterative 
                enhancements based on user experience
              </li>
            </ul>
          </div>
          
          {/* Transferable Learnings */}
          <div className="my-12">
            <h2 className="text-3xl font-bold mb-6">Transferable Learnings</h2>
            <p className="mb-6">
              The GOAT project demonstrates several key principles applicable to other enterprise AI initiatives:
            </p>
            
            <div className="space-y-4 mb-8">
              <div className="bg-blue-50 p-4 rounded-lg">
                <h4 className="font-bold mb-2">Agents for Value Story Journey</h4>
                <p className="text-gray-700">
                  Multi-
agent systems can be adapted for various business journeys beyond client management
                </p>
              </div>
              <div className="bg-green-50 p-4 rounded-lg">
                <h4 className="font-bold mb-2">Prototype to Scale</h4>
                <p className="text-gray-700">
                  Serverless architecture enables rapid prototyping and seamless scaling to production
                </p>
              </div>
              <div className="bg-purple-50 p-4 rounded-lg">
                <h4 className="font-bold mb-2">AI-Driven Insights</h4>
                <p className="text-gray-700">
                  LLM integration provides intelligent, context-aware responses that improve over time
                </p>
              </div>
            </div>
          </div>
          
          {/* Conclusion */}
          <div className="my-12">
            <h2 className="text-3xl font-bold mb-6">Conclusion</h2>
            <p className="mb-6">
              GOAT (Gartner's Own Agentic Tech) represents a significant advancement in enterprise AI assistants, 
              combining conversational AI with multi-agent orchestration to deliver intelligent, context-aware support 
              for Gartner associates. The migration from EKS to serverless architecture resulted in 3x improvement in 
              throughput while reducing operational complexity and costs.
            </p>
            <p className="mb-6">
              The platform's modular design, comprehensive API, and robust security measures make it a scalable solution 
              for enterprise knowledge management and client engagement. The feedback system and continuous improvement 
              cycle ensure the assistant evolves with user needs.
            </p>
          </div>
        </div>
        
        {/* CTA Section */}
        <div className="my-12 border-t border-gray-200 pt-12">
          <div className="bg-gradient-to-r from-purple-600 to-indigo-700 text-white rounded-lg shadow-lg p-8 text-center">
            <h2 className="text-2xl font-bold mb-4">Need Enterprise AI Solutions?</h2>
            <p className="mb-6 max-w-2xl mx-auto">
              I can help your organization implement conversational AI assistants, build multi-agent systems, 
              and architect scalable serverless solutions on AWS.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link 
                href="/contact"
                className="inline-block bg-white text-purple-600 px-6 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors"
              >
                Let's Connect
              </Link>
              <Link 
                href="/projects"
                className="inline-block bg-purple-700 text-white px-6 py-3 rounded-lg font-medium hover:bg-purple-800 transition-colors"
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
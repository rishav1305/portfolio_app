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

export default function ProductionPipelineProject() {
  // Using the third project from the portfolio data
  const project = portfolioData.projects[2];
  
  // Format dates and calculate duration
  const startDate = project.start_date ? formatMonthYear(project.start_date) : '';
  const endDate = project.end_date ? formatMonthYear(project.end_date) : 'Present';
  const duration = project.start_date ? calculateDuration(project.start_date, project.end_date || '') : '';
  
  return (
    <div className="min-h-screen bg-white pt-24 pb-12">
      {/* Hero Section with solid color background */}
      <div className="relative h-[50vh] md:h-[60vh] w-full bg-gradient-to-r from-red-700 to-orange-600">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center p-6 max-w-4xl">
            <span className="inline-block bg-red-600 text-white px-3 py-1 rounded-full text-sm font-medium mb-4">
              Case Study
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">{project.title}</h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              How we optimized production data pipelines for Jubilant FoodWorks, reducing execution time by 66% and data storage costs by 50%
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
                <span className="text-gray-900 font-medium">Production Pipeline Optimization Case Study</span>
              </li>
            </ol>
          </nav>
        </div>
        
        {/* Project Meta */}
        <div className="flex flex-wrap items-center justify-between mb-10 bg-gray-100 p-6 rounded-lg">
          <div>
            <h3 className="font-semibold text-gray-800">Client</h3>
            <p className="text-gray-700">{project.clients}</p>
          </div>
          <div>
            <h3 className="font-semibold text-gray-800">Company</h3>
            <p className="text-gray-700">{project.company}</p>
          </div>
          <div>
            <h3 className="font-semibold text-gray-800">Category</h3>
            <p className="text-gray-700">{project.category}</p>
          </div>
          <div>
            <h3 className="font-semibold text-gray-800">Duration</h3>
            <p className="text-gray-700">{duration}</p>
          </div>
        </div>
        
        <div className="prose max-w-none">
          {/* Introduction */}
          <h2 className="text-3xl font-bold mb-6">Project Overview</h2>
          <p className="text-lg mb-6">
            In the fast-paced food service industry, efficient data operations are critical for business success. 
            This case study explores how we developed, maintained, and optimized production data pipelines for 
            Jubilant FoodWorks, the exclusive master franchisee for Domino's Pizza in India, on AWS Infrastructure. 
            Our optimization efforts led to significant improvements in execution time and substantial cost savings 
            on data storage.
          </p>
          <div className="relative h-[350px] mb-4 rounded-lg overflow-hidden">
                <Image
                  src={project.image}
                  alt="AWS Pipeline Optimization"
                  fill
                  className="object-cover object-center"
                  sizes="(max-width: 768px) 100vw, 800px"
                />
              </div>
              
          
          {/* Challenge */}
          <div className="my-12">
            <h2 className="text-3xl font-bold mb-6">The Challenge</h2>
            <p className="mb-4">
              Jubilant FoodWorks, operating one of India's largest quick-service restaurant chains, faced several 
              challenges with their existing data pipeline infrastructure:
            </p>
            <ul className="list-disc pl-6 space-y-2 mb-6">
              <li>Lengthy data processing times impacting business agility</li>
              <li>High data storage costs on Amazon Redshift</li>
              <li>Inefficient ETL processes causing bottlenecks</li>
              <li>Scalability issues during peak business hours</li>
              <li>Growing data volume from expanding restaurant operations</li>
            </ul>
            <p>
              The company needed a robust solution to optimize their data pipelines, reduce costs, and improve 
              overall system performance while maintaining data integrity and accessibility for business users.
            </p>
          </div>
          
          {/* Solution */}
          <div className="my-12">
            <h2 className="text-3xl font-bold mb-6">Our Solution</h2>
            <div className="mb-8">
              <p className="mb-4">
                We designed and implemented a comprehensive pipeline optimization strategy on AWS that included:
              </p>
              
              <h3 className="text-xl font-bold mt-8 mb-3">1. Pipeline Architecture Redesign</h3>
              <p className="mb-6">
                We conducted a thorough assessment of the existing pipeline architecture and redesigned critical 
                components to eliminate bottlenecks and improve data flow. This included restructuring the data 
                ingestion process and implementing parallel processing where appropriate.
              </p>
              
              <h3 className="text-xl font-bold mt-8 mb-3">2. ETL Process Optimization</h3>
              <p className="mb-6">
                Using AWS Glue and PySpark, we refactored the ETL processes to improve efficiency and reduce 
                processing time. We implemented partitioning strategies, optimized transformations, and enhanced 
                error handling to ensure reliable data processing.
              </p>
              
              <h3 className="text-xl font-bold mt-8 mb-3">3. Redshift Storage Optimization</h3>
              <p className="mb-6">
                We implemented advanced compression techniques, table optimization, and data archiving strategies 
                to reduce storage requirements in Amazon Redshift. We also redesigned the data distribution strategy 
                to optimize query performance while minimizing storage costs.
              </p>
              
              <h3 className="text-xl font-bold mt-8 mb-3">4. Automated Monitoring and Maintenance</h3>
              <p className="mb-6">
                We developed automated monitoring tools using AWS CloudWatch and Lambda functions to proactively 
                identify and address potential issues before they impacted production. We also implemented routine 
                maintenance procedures to ensure ongoing optimal performance.
              </p>

              <div className="bg-red-50 p-6 rounded-lg border-l-4 border-red-500 my-8">
                <h4 className="text-lg font-bold text-red-800 mb-2">Technical Stack</h4>
                <div className="flex flex-wrap gap-2">
                  {project.techStack.map((tech, index) => (
                    <span 
                      key={index} 
                      className="bg-white text-red-800 px-3 py-1 rounded-full text-sm border border-red-200"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
          
          {/* Results */}
          <div className="my-12">
            <h2 className="text-3xl font-bold mb-6">Key Results</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500">
                <h3 className="text-xl font-bold text-green-800 mb-2">66%</h3>
                <p className="text-gray-700">Reduction in production pipeline execution time</p>
              </div>
              <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500">
                <h3 className="text-xl font-bold text-green-800 mb-2">50%</h3>
                <p className="text-gray-700">Decrease in data storage costs on Amazon Redshift</p>
              </div>
              <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500">
                <h3 className="text-xl font-bold text-green-800 mb-2">99.9%</h3>
                <p className="text-gray-700">Pipeline reliability and uptime</p>
              </div>
              <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500">
                <h3 className="text-xl font-bold text-green-800 mb-2">40%</h3>
                <p className="text-gray-700">Improvement in query performance for business users</p>
              </div>
            </div>
            
            <p className="mb-6">
              Our pipeline optimization project delivered significant benefits for Jubilant FoodWorks:
            </p>
            <ul className="list-disc pl-6 space-y-2 mb-6">
              <li>Faster data availability enabling more agile business decisions</li>
              <li>Substantial cost savings through storage optimization</li>
              <li>Improved scalability to handle growing data volumes</li>
              <li>Enhanced system reliability with fewer pipeline failures</li>
              <li>Better resource utilization across the AWS infrastructure</li>
              <li>Improved data accessibility for business intelligence teams</li>
            </ul>
          </div>
          
          {/* Conclusion */}
          <div className="my-12">
            <h2 className="text-3xl font-bold mb-6">Conclusion</h2>
            <p className="mb-6">
              The successful optimization of Jubilant FoodWorks' production data pipelines demonstrates the significant 
              impact that well-designed data engineering solutions can have on business operations. By reducing processing 
              times by 66% and cutting storage costs in half, we helped the client achieve better performance while 
              simultaneously reducing operational expenses.
            </p>
            <p>
              This project showcases our expertise in AWS cloud infrastructure, data pipeline optimization, and cost-efficient 
              data engineering practices. The solutions we implemented continue to support Jubilant FoodWorks' growing 
              operations and data needs while providing a foundation for future analytics initiatives.
            </p>
          </div>
        </div>
        
        {/* CTA Section */}
        <div className="my-12 border-t border-gray-200 pt-12">
          <div className="bg-gradient-to-r from-red-600 to-orange-600 text-white rounded-lg shadow-lg p-8 text-center">
            <h2 className="text-2xl font-bold mb-4">Need to Optimize Your Data Pipelines?</h2>
            <p className="mb-6 max-w-2xl mx-auto">
              I can help you leverage AWS and other cloud technologies to improve performance and reduce costs in your data operations.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link 
                href="/contact"
                className="inline-block bg-white text-red-600 px-6 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors"
              >
                Let's Discuss Your Project
              </Link>
              <Link 
                href="/projects"
                className="inline-block bg-red-700 text-white px-6 py-3 rounded-lg font-medium hover:bg-red-800 transition-colors"
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
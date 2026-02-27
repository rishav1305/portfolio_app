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

export default function AwsMigrationProject() {
  // Using the first project from the portfolio data
  const project = portfolioData.projects[0];
  
  // Format dates and calculate duration
  const startDate = project.start_date ? formatMonthYear(project.start_date) : '';
  const endDate = project.end_date ? formatMonthYear(project.end_date) : 'Present';
  const duration = project.start_date ? calculateDuration(project.start_date, project.end_date || '') : '';
  
  return (
    <div className="min-h-screen bg-white pt-24 pb-12">
      {/* Hero Section with solid color background */}
      <div className="relative h-[50vh] md:h-[60vh] w-full bg-gradient-to-r from-blue-800 to-indigo-900">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center p-6 max-w-4xl">
            <span className="inline-block bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium mb-4">
              Case Study
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">{project.title}</h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              How we transformed an on-premise infrastructure to a scalable AWS cloud solution for IndiaMART InterMESH Ltd
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
                <span className="text-gray-900 font-medium">AWS Migration Case Study</span>
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
            In the rapidly evolving digital landscape, businesses are increasingly turning to cloud solutions to enhance scalability, 
            reduce infrastructure costs, and improve overall operational efficiency. This case study examines how we successfully 
            migrated IndiaMART's on-premises systems to Amazon Web Services (AWS), transforming their data infrastructure and 
            enabling more robust business intelligence capabilities through Power BI reporting.
          </p>
          <div className="relative h-[350px] mb-4 rounded-lg overflow-hidden">
                <Image
                  src="/images/projects/thumbnail/im_aws_migration.png"
                  alt="AWS Migration Architecture"
                  fill
                  className="object-cover object-center"
                  sizes="(max-width: 768px) 100vw, 800px"
                />
              </div>
              
          
          {/* Challenge */}
          <div className="my-12">
            <h2 className="text-3xl font-bold mb-6">The Challenge</h2>
            <p className="mb-4">
              IndiaMART, India's largest online B2B marketplace, was facing several challenges with their existing on-premises infrastructure:
            </p>
            <ul className="list-disc pl-6 space-y-2 mb-6">
              <li>Scalability limitations during peak business periods</li>
              <li>High maintenance and operational costs for physical servers</li>
              <li>Limited flexibility for data processing and analytics</li>
              <li>Inefficient reporting processes for Sales and HR departments</li>
              <li>Concerns about data security and disaster recovery</li>
            </ul>
            <p>
              The company needed a modern cloud solution that could address these challenges while providing a foundation for future growth and innovation.
            </p>
          </div>
          
          {/* Solution */}
          <div className="my-12">
            <h2 className="text-3xl font-bold mb-6">Our Solution</h2>
            <div className="mb-8">
              <p className="mb-4">
                We designed and implemented a comprehensive AWS migration strategy that included:
              </p>
              
              <h3 className="text-xl font-bold mt-8 mb-3">1. Data Migration</h3>
              <p className="mb-6">
                We extracted data from the existing on-premises systems and migrated it to Amazon S3, establishing a robust data lake architecture. 
                This involved careful planning to ensure data integrity and minimal disruption to business operations during the transition.
              </p>
              
              <h3 className="text-xl font-bold mt-8 mb-3">2. Warehouse Implementation</h3>
              <p className="mb-6">
                Using Amazon Redshift, we created a high-performance data warehouse optimized for analytics and reporting. 
                This allowed for efficient storage and fast querying of large datasets, significantly improving the performance 
                of business intelligence operations.
              </p>
              
              <h3 className="text-xl font-bold mt-8 mb-3">3. ETL Pipeline Development</h3>
              <p className="mb-6">
                We developed efficient ETL (Extract, Transform, Load) pipelines using AWS Glue and PySpark to process Parquet files from S3. 
                These pipelines were designed to be highly scalable, fault-tolerant, and capable of handling the company's growing data needs.
              </p>
              
              <h3 className="text-xl font-bold mt-8 mb-3">4. BI Report Generation</h3>
              <p className="mb-6">
                We integrated Power BI with the new AWS infrastructure to create interactive dashboards and reports for the Sales and HR departments. 
                This provided stakeholders with real-time insights and improved decision-making capabilities.
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
            </div>
          </div>
          
          {/* Results */}
          <div className="my-12">
            <h2 className="text-3xl font-bold mb-6">Key Results</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500">
                <h3 className="text-xl font-bold text-green-800 mb-2">50%</h3>
                <p className="text-gray-700">Reduction in data storage costs on Amazon Redshift</p>
              </div>
              <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500">
                <h3 className="text-xl font-bold text-green-800 mb-2">99.9%</h3>
                <p className="text-gray-700">System reliability and uptime</p>
              </div>
              <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500">
                <h3 className="text-xl font-bold text-green-800 mb-2">40%</h3>
                <p className="text-gray-700">Increase in reporting speed</p>
              </div>
              <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500">
                <h3 className="text-xl font-bold text-green-800 mb-2">60%</h3>
                <p className="text-gray-700">Faster data processing times</p>
              </div>
            </div>
            
            <p className="mb-6">
              The migration to AWS delivered significant business benefits:
            </p>
            <ul className="list-disc pl-6 space-y-2 mb-6">
              <li>Enhanced scalability to handle fluctuating workloads and business growth</li>
              <li>Improved data accessibility for different departments</li>
              <li>Real-time reporting capabilities that accelerated decision-making</li>
              <li>Reduced total cost of ownership for the infrastructure</li>
              <li>Better security and compliance with industry standards</li>
              <li>A foundation for future innovation in data analytics and machine learning</li>
            </ul>
          </div>
          
          {/* Conclusion */}
          <div className="my-12">
            <h2 className="text-3xl font-bold mb-6">Conclusion</h2>
            <p className="mb-6">
              The successful migration of IndiaMART's infrastructure to AWS demonstrated the transformative potential of cloud computing 
              for established businesses. By leveraging AWS services and implementing modern data engineering practices, we created a 
              scalable, cost-effective, and high-performance solution that continues to support the company's growth and analytics needs.
            </p>
            <p>
              This project showcases our team's expertise in cloud migration, data engineering, and business intelligence, as well as 
              our ability to deliver complex projects that align with client business goals and create lasting value.
            </p>
          </div>
        </div>
        
        {/* CTA Section */}
        <div className="my-12 border-t border-gray-200 pt-12">
          <div className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white rounded-lg shadow-lg p-8 text-center">
            <h2 className="text-2xl font-bold mb-4">Need a Similar Solution for Your Business?</h2>
            <p className="mb-6 max-w-2xl mx-auto">
              I can help you leverage AWS and other cloud technologies to transform your data infrastructure and unlock new insights.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link 
                href="/contact"
                className="inline-block bg-white text-blue-600 px-6 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors"
              >
                Let's Discuss Your Project
              </Link>
              <Link 
                href="/projects"
                className="inline-block bg-blue-700 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-800 transition-colors"
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
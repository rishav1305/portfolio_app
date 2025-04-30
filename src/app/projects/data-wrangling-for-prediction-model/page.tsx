import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import portfolioData from "@/data/portfolioData";
import DataCleansingFlow from '@/components/data-visualization/DataCleansingFlow';

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

export default function DataWranglingProject() {
  // Using the second project from the portfolio data
  const project = portfolioData.projects[1];
  
  // Format dates and calculate duration
  const startDate = project.start_date ? formatMonthYear(project.start_date) : '';
  const endDate = project.end_date ? formatMonthYear(project.end_date) : 'Present';
  const duration = project.start_date ? calculateDuration(project.start_date, project.end_date || '') : '';
  
  return (
    <div className="min-h-screen bg-white pt-24 pb-12">
      {/* Hero Section with solid color background */}
      <div className="relative h-[50vh] md:h-[60vh] w-full bg-gradient-to-r from-purple-800 to-indigo-900">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center p-6 max-w-4xl">
            <span className="inline-block bg-purple-600 text-white px-3 py-1 rounded-full text-sm font-medium mb-4">
              Case Study
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">{project.title}</h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              How we developed automated data preprocessing workflows for a prediction model on Azure Databricks for Reckitt Benckiser Group
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
                <span className="text-gray-900 font-medium">Azure Databricks Data Wrangling Case Study</span>
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
            In today's data-driven business environment, companies are increasingly leveraging advanced analytics and 
            machine learning to gain competitive advantages. This case study explores how we designed and implemented 
            automated data preprocessing workflows on the Azure Databricks platform for Reckitt Benckiser Group, 
            optimizing their data pipeline for predictive modeling and enhancing their data-driven decision-making capabilities.
          </p>

          {/* Add the visual representation */}
          <div className="my-10 bg-gray-50 p-6 rounded-xl shadow-sm">
            <h3 className="text-xl font-bold mb-4 text-gray-800">Data Cleansing Process Visualization</h3>
            <DataCleansingFlow className="mt-2" />
            <p className="text-sm text-gray-500 mt-3 text-center">
              Visual representation of the data cleansing workflow developed for Reckitt Benckiser Group
            </p>
          </div>
          
          <div className="relative h-[350px] mb-4 rounded-lg overflow-hidden">
                <Image
                  src={project.image}
                  alt="Azure Databricks Data Wrangling"
                  fill
                  className="object-cover object-center"
                  sizes="(max-width: 768px) 100vw, 800px"
                />
              </div>
              
          
          {/* Challenge */}
          <div className="my-12">
            <h2 className="text-3xl font-bold mb-6">The Challenge</h2>
            <p className="mb-4">
              Reckitt Benckiser Group, a global consumer goods company, faced several challenges with their existing 
              data preprocessing workflows:
            </p>
            <ul className="list-disc pl-6 space-y-2 mb-6">
              <li>Manual and time-consuming data preparation processes</li>
              <li>Inconsistent data quality affecting prediction model accuracy</li>
              <li>Difficulty in scaling data processing for large datasets</li>
              <li>Integration challenges between different data sources and analytics tools</li>
              <li>Limited collaboration between data engineering and data science teams</li>
            </ul>
            <p>
              The company needed a modern, cloud-based solution that could automate and standardize their data preprocessing 
              workflows while enabling seamless integration with their prediction modeling tools.
            </p>
          </div>
          
          {/* Solution */}
          <div className="my-12">
            <h2 className="text-3xl font-bold mb-6">Our Solution</h2>
            <div className="mb-8">
              <p className="mb-4">
                We designed and implemented a comprehensive data wrangling solution on Azure Databricks that included:
              </p>
              
              <h3 className="text-xl font-bold mt-8 mb-3">1. Data Extraction & Integration</h3>
              <p className="mb-6">
                We built robust data pipelines to extract data from various sources including Azure Blob Storage and 
                Azure SQL Data Warehouse. These pipelines were designed to handle different data formats and ensure 
                consistent, reliable data ingestion.
              </p>
              
              <h3 className="text-xl font-bold mt-8 mb-3">2. Data Cleansing & Preprocessing</h3>
              <p className="mb-6">
                Using PySpark on Azure Databricks, we implemented sophisticated data cleansing processes to handle 
                missing values, outliers, and inconsistencies. We also developed feature engineering pipelines to 
                transform raw data into features suitable for prediction models.
              </p>
              
              <h3 className="text-xl font-bold mt-8 mb-3">3. Automated Workflows</h3>
              <p className="mb-6">
                We created automated workflows to orchestrate the entire data preprocessing process, reducing manual 
                intervention and ensuring consistency in data preparation. These workflows included quality checks, 
                validation rules, and error handling mechanisms.
              </p>
              
              <h3 className="text-xl font-bold mt-8 mb-3">4. Integration with DataRobot</h3>
              <p className="mb-6">
                We established seamless integration between our Azure Databricks data processing environment and 
                the client's DataRobot platform. This allowed preprocessed data to flow directly into their prediction 
                modeling pipeline, creating a unified analytics workflow.
              </p>

              <div className="bg-purple-50 p-6 rounded-lg border-l-4 border-purple-500 my-8">
                <h4 className="text-lg font-bold text-purple-800 mb-2">Technical Stack</h4>
                <div className="flex flex-wrap gap-2">
                  {project.techStack.map((tech, index) => (
                    <span 
                      key={index} 
                      className="bg-white text-purple-800 px-3 py-1 rounded-full text-sm border border-purple-200"
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
                <h3 className="text-xl font-bold text-green-800 mb-2">75%</h3>
                <p className="text-gray-700">Reduction in data preprocessing time</p>
              </div>
              <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500">
                <h3 className="text-xl font-bold text-green-800 mb-2">40%</h3>
                <p className="text-gray-700">Improvement in data quality</p>
              </div>
              <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500">
                <h3 className="text-xl font-bold text-green-800 mb-2">35%</h3>
                <p className="text-gray-700">Increase in model accuracy</p>
              </div>
              <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500">
                <h3 className="text-xl font-bold text-green-800 mb-2">90%</h3>
                <p className="text-gray-700">Automation of data preparation tasks</p>
              </div>
            </div>
            
            <p className="mb-6">
              The implementation of our Azure Databricks data wrangling solution delivered significant benefits:
            </p>
            <ul className="list-disc pl-6 space-y-2 mb-6">
              <li>Enhanced scalability for processing large datasets efficiently</li>
              <li>Improved collaboration between data engineering and data science teams</li>
              <li>Standardized data preprocessing methods ensuring consistency</li>
              <li>More reliable and accurate input data for prediction models</li>
              <li>Faster time-to-insight for business decision-makers</li>
              <li>Reduced operational costs through workflow automation</li>
            </ul>
          </div>
          
          {/* Conclusion */}
          <div className="my-12">
            <h2 className="text-3xl font-bold mb-6">Conclusion</h2>
            <p className="mb-6">
              The successful implementation of automated data preprocessing workflows on Azure Databricks significantly 
              enhanced Reckitt Benckiser's data operations and prediction modeling capabilities. By streamlining the 
              data preparation process and ensuring high-quality input for their models, we helped the client achieve 
              more accurate predictions and faster time-to-insight.
            </p>
            <p>
              This project demonstrates our expertise in cloud-based data processing, Azure Databricks, PySpark, and 
              our ability to integrate diverse data ecosystems into cohesive analytical workflows that deliver tangible 
              business value.
            </p>
          </div>
        </div>
        
        {/* CTA Section */}
        <div className="my-12 border-t border-gray-200 pt-12">
          <div className="bg-gradient-to-r from-purple-600 to-indigo-700 text-white rounded-lg shadow-lg p-8 text-center">
            <h2 className="text-2xl font-bold mb-4">Need Advanced Data Processing for Your Business?</h2>
            <p className="mb-6 max-w-2xl mx-auto">
              I can help you leverage Azure Databricks and other cloud technologies to optimize your data workflows and unlock better predictions.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link 
                href="/contact"
                className="inline-block bg-white text-purple-600 px-6 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors"
              >
                Let's Discuss Your Project
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
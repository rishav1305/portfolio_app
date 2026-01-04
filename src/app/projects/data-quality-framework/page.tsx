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

export default function DataQualityFrameworkProject() {
  const project = portfolioData.projects.find(p => p.link === "projects/data-quality-framework");

  if (!project) {
    return <div>Project not found</div>;
  }

  const startDate = project.start_date ? formatMonthYear(project.start_date) : '';
  const endDate = project.end_date ? formatMonthYear(project.end_date) : 'Present';
  const duration = project.start_date ? calculateDuration(project.start_date, project.end_date || '') : '';

  return (
    <div className="min-h-screen bg-white pt-24 pb-12">
      {/* Hero Section */}
      <div className="relative h-[50vh] md:h-[60vh] w-full bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-700">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center p-6 max-w-4xl">
            <span className="inline-block bg-indigo-500 text-white px-3 py-1 rounded-full text-sm font-medium mb-4">
              Enterprise Solution
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">{project.title}</h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              Serverless data quality validation platform with AI-powered rule generation and automated alerting
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
                <span className="text-gray-900 font-medium">Data Quality Framework</span>
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
            <h3 className="font-semibold text-gray-800">Status</h3>
            <p className="text-gray-700">{project.category}</p>
          </div>
          <div>
            <h3 className="font-semibold text-gray-800">Duration</h3>
            <p className="text-gray-700">{duration}</p>
          </div>
          <div>
            <h3 className="font-semibold text-gray-800">Architecture</h3>
            <p className="text-gray-700">Serverless AWS</p>
          </div>
        </div>

        <div className="prose max-w-none">
          {/* Executive Summary */}
          <div className="bg-blue-50 border-l-4 border-blue-500 p-6 mb-8 rounded-r-lg">
            <h3 className="text-xl font-bold text-blue-900 mb-3">Executive Summary</h3>
            <p className="text-gray-800 leading-relaxed">
              The Data Quality Framework is an enterprise-grade serverless solution that ensures data integrity and reliability
              across organizational data infrastructure. Built on AWS Lambda and API Gateway, it provides comprehensive validation
              capabilities with AI-powered rule generation, reducing manual effort by up to 80% while maintaining 99.5% data accuracy.
            </p>
          </div>

          {/* Project Overview */}
          <h2 className="text-3xl font-bold mb-6">Project Overview</h2>
          <p className="text-lg mb-6">
            As organizations scale their data operations, maintaining data quality becomes increasingly challenging. Manual validation
            processes are time-consuming, error-prone, and don't scale effectively. The Data Quality Framework addresses these challenges
            by providing an automated, intelligent, and scalable solution for data validation across multiple databases and data sources.
          </p>

          <div className="relative h-[350px] mb-8 rounded-lg overflow-hidden border border-gray-200">
            <Image
              src={project.image}
              alt={`${project.title} architecture`}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              priority
            />
          </div>

          {/* Business Challenge */}
          <div className="my-12">
            <h2 className="text-3xl font-bold mb-6">Business Challenge</h2>
            <p className="mb-4">
              IBM - TWC processes massive volumes of data from multiple sources for B2B and B2C analytics. Key challenges included:
            </p>
            <ul className="list-disc pl-6 space-y-3 mb-6">
              <li>
                <span className="font-semibold">Manual Validation Overhead:</span> Data quality checks were performed manually,
                consuming significant engineering time and delaying insights delivery.
              </li>
              <li>
                <span className="font-semibold">Inconsistent Standards:</span> Different teams applied varying validation rules,
                leading to inconsistent data quality across the organization.
              </li>
              <li>
                <span className="font-semibold">Delayed Issue Detection:</span> Data quality problems were often discovered late
                in the pipeline, after impacting downstream analytics and business decisions.
              </li>
              <li>
                <span className="font-semibold">Scalability Limitations:</span> As data volumes grew, manual validation processes
                couldn't keep pace, creating bottlenecks in data operations.
              </li>
              <li>
                <span className="font-semibold">Limited Visibility:</span> Stakeholders lacked real-time visibility into data
                quality metrics and validation results.
              </li>
            </ul>
          </div>

          {/* Solution Architecture */}
          <div className="my-12">
            <h2 className="text-3xl font-bold mb-6">Solution Architecture</h2>
            <p className="mb-6">
              I designed and implemented a serverless architecture leveraging AWS services to provide a scalable, cost-effective,
              and highly available data quality platform:
            </p>

            <div className="bg-gray-50 p-6 rounded-lg mb-8">
              <h3 className="text-xl font-bold mb-4">Architecture Layers</h3>
              <div className="space-y-4">
                <div className="border-l-4 border-blue-500 pl-4">
                  <h4 className="font-bold text-lg mb-2">API Layer</h4>
                  <p className="text-gray-700">
                    Amazon API Gateway provides RESTful endpoints with built-in throttling, authentication, and request validation.
                    Supports both API key and IAM-based authentication for secure access.
                  </p>
                </div>
                <div className="border-l-4 border-green-500 pl-4">
                  <h4 className="font-bold text-lg mb-2">Compute Layer</h4>
                  <p className="text-gray-700">
                    AWS Lambda functions execute validation logic with configurable memory (1024-3008 MB) and timeout (up to 15 minutes).
                    Supports parallel processing with both thread-based and process-based parallelism.
                  </p>
                </div>
                <div className="border-l-4 border-purple-500 pl-4">
                  <h4 className="font-bold text-lg mb-2">Data Layer</h4>
                  <p className="text-gray-700">
                    Amazon S3 stores validation results and configuration files. AWS Secrets Manager securely manages database
                    credentials and API keys with automatic rotation.
                  </p>
                </div>
                <div className="border-l-4 border-orange-500 pl-4">
                  <h4 className="font-bold text-lg mb-2">Integration Layer</h4>
                  <p className="text-gray-700">
                    Connects to PostgreSQL and Redshift databases for validation. Integrates with Google Sheets API for collaborative
                    rule management and Amazon SES for email notifications.
                  </p>
                </div>
                <div className="border-l-4 border-red-500 pl-4">
                  <h4 className="font-bold text-lg mb-2">Monitoring Layer</h4>
                  <p className="text-gray-700">
                    Amazon CloudWatch provides comprehensive logging, metrics, and alarms. CloudWatch Logs Insights enables
                    advanced log analysis and troubleshooting.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Key Features */}
          <div className="my-12">
            <h2 className="text-3xl font-bold mb-6">Key Features</h2>

            <div className="space-y-6 mb-8">
              <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
                <h3 className="font-bold text-lg mb-2 text-blue-600">AI-Powered Rule Generation</h3>
                <p className="text-gray-600">
                  Leverages LLM models to automatically generate validation rules based on data patterns and business context,
                  reducing manual effort by up to 80%.
                </p>
              </div>

              <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
                <h3 className="font-bold text-lg mb-2 text-green-600">Google Sheets Integration</h3>
                <p className="text-gray-600">
                  Bidirectional synchronization enables business users to manage validation rules collaboratively without
                  technical expertise, with real-time updates.
                </p>
              </div>

              <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
                <h3 className="font-bold text-lg mb-2 text-purple-600">Parallel Processing</h3>
                <p className="text-gray-600">
                  Supports both thread-based and process-based parallelism to validate multiple tables simultaneously,
                  significantly reducing execution time for large datasets.
                </p>
              </div>

              <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
                <h3 className="font-bold text-lg mb-2 text-orange-600">Automated Alerting</h3>
                <p className="text-gray-600">
                  Configurable email notifications keep stakeholders informed of data quality issues as they occur,
                  enabling rapid response to critical problems.
                </p>
              </div>

              <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
                <h3 className="font-bold text-lg mb-2 text-indigo-600">Comprehensive Test Suite</h3>
                <p className="text-gray-600">
                  Pre-built validation tests including null checks, uniqueness verification, referential integrity,
                  freshness monitoring, and statistical threshold analysis.
                </p>
              </div>

              <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
                <h3 className="font-bold text-lg mb-2 text-pink-600">Custom SQL Validation</h3>
                <p className="text-gray-600">
                  Flexibility to define complex business logic through custom SQL queries tailored to specific
                  organizational requirements and use cases.
                </p>
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

            <h3 className="text-xl font-bold mt-8 mb-3">1. API Development</h3>
            <p className="mb-4">
              Built RESTful API endpoints using AWS API Gateway and Lambda functions for core validation, rule management, automated testing, and health monitoring.
            </p>

            <h3 className="text-xl font-bold mt-8 mb-3">2. Database Integration</h3>
            <p className="mb-4">
              Implemented secure connections to multiple database platforms:
            </p>
            <ul className="list-disc pl-6 space-y-2 mb-6">
              <li>PostgreSQL and Amazon Redshift support with connection pooling</li>
              <li>Credentials managed through AWS Secrets Manager with automatic rotation</li>
              <li>Optimized query execution with parallel processing capabilities</li>
              <li>Support for custom SQL validation queries</li>
            </ul>

            <h3 className="text-xl font-bold mt-8 mb-3">3. AI Integration</h3>
            <p className="mb-4">
              Integrated LLM capabilities for intelligent rule generation:
            </p>
            <ul className="list-disc pl-6 space-y-2 mb-6">
              <li>Analyzes table schemas and data patterns to suggest appropriate validation rules</li>
              <li>Generates up to 3 rules per column automatically</li>
              <li>Supports both single-column and full-table rule generation</li>
              <li>Parallel processing for efficient bulk rule creation</li>
            </ul>
          </div>

          {/* Results and Impact */}
          <div className="my-12">
            <h2 className="text-3xl font-bold mb-6">Results & Impact</h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500">
                <h3 className="text-3xl font-bold text-green-800 mb-2">80%</h3>
                <p className="text-gray-700">Reduction in manual validation effort through AI-powered rule generation</p>
              </div>
              <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500">
                <h3 className="text-3xl font-bold text-green-800 mb-2">99.5%</h3>
                <p className="text-gray-700">Data accuracy maintained across all validated datasets</p>
              </div>
              <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500">
                <h3 className="text-3xl font-bold text-green-800 mb-2">60%</h3>
                <p className="text-gray-700">Faster validation execution with parallel processing</p>
              </div>
            </div>

            <h3 className="text-xl font-bold mt-8 mb-3">Business Benefits</h3>
            <ul className="list-disc pl-6 space-y-3 mb-6">
              <li>
                <span className="font-semibold">Proactive Issue Detection:</span> Identify data quality problems before they
                impact business decisions or downstream systems
              </li>
              <li>
                <span className="font-semibold">Improved Data Trustworthiness:</span> Build confidence in data assets across
                the organization through consistent, automated quality monitoring
              </li>
              <li>
                <span className="font-semibold">Faster Time to Value:</span> Deploy quickly with pre-built test cases and
                integrations, achieving operational data quality monitoring in days
              </li>
              <li>
                <span className="font-semibold">Enhanced Collaboration:</span> Bridge technical and business teams through
                Google Sheets integration
              </li>
              <li>
                <span className="font-semibold">Scalable Operations:</span> Handle growing data volumes without
                proportional increases in infrastructure costs
              </li>
            </ul>
          </div>

          {/* Conclusion */}
          <div className="my-12">
            <h2 className="text-3xl font-bold mb-6">Conclusion</h2>
            <p className="mb-6">
              The Data Quality Framework represents a significant advancement in automated data validation, combining serverless
              architecture with AI-powered intelligence to deliver enterprise-grade data quality management. By reducing manual
              effort by 80% while maintaining 99.5% accuracy, the platform enables organizations to scale their data operations
              confidently.
            </p>
            <p className="mb-6">
              The framework's modular design, comprehensive API, and flexible integration options make it adaptable to diverse
              organizational needs, from small teams to enterprise-scale deployments.
            </p>
          </div>
        </div>

        {/* CTA Section */}
        <div className="my-12 border-t border-gray-200 pt-12">
          <div className="bg-gradient-to-r from-indigo-600 to-purple-700 text-white rounded-lg shadow-lg p-8 text-center">
            <h2 className="text-2xl font-bold mb-4">Need Enterprise Data Quality Solutions?</h2>
            <p className="mb-6 max-w-2xl mx-auto">
              I can help your organization implement automated data quality frameworks, integrate AI-powered validation,
              and build scalable serverless architectures on AWS.
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

import React from 'react';
import Image from 'next/image';

export default function TechSkillsPage() {
  const skills = {
    'Python': [
      { name: 'Pandas', level: 4 },
      { name: 'Pyspark', level: 3.5 },
      { name: 'Sklearn', level: 3 },
      { name: 'Selenium', level: 3.5 },
    ],
    'SQL': [
      { name: 'SQL Server', level: 4.5 },
      { name: 'Postgre SQL', level: 4.5 },
      { name: 'Spark SQL', level: 4 },
      { name: 'SnowSQL', level: 3.5 },
    ],
    'ETL Tools': [
      { name: 'AWS Glue', level: 4 },
      { name: 'Azure Databricks', level: 4 },
      { name: 'AWS Batch', level: 4.5 },
      { name: 'Alteryx', level: 3.5 },
    ],
    'Analytical Tools': [
      { name: 'Tableau CRM', level: 4 },
      { name: 'Qlik Sense', level: 3.5 },
      { name: 'Preset', level: 3.5 },
      { name: 'Power BI', level: 3 },
      { name: 'Microsoft Excel', level: 4 },
    ],
    'Big Data Tools': [
      { name: 'Apache Spark', level: 3.5 },
      { name: 'HIVE', level: 3 },
    ],
    'Cloud Services': [
      { name: 'AWS', level: 4 },
      { name: 'Azure', level: 3.5 },
      { name: 'Databricks', level: 3.5 },
    ],
    'Data Warehouse': [
      { name: 'Redshift', level: 4.5 },
      { name: 'Azure SQL DWH', level: 4.5 },
      { name: 'Snowflake', level: 4 },
    ],
    'Project Management': [
      { name: 'JIRA', level: 4 },
      { name: 'Confluence', level: 3.5 },
      { name: 'Figma', level: 3 },
      { name: 'Trello', level: 3.5 },
    ]
  };
  
  // Function to render stars based on skill level
  const renderStars = (level: number) => {
    const stars = [];
    const fullStars = Math.floor(level);
    const hasHalfStar = level % 1 !== 0;
    
    // Add full stars
    for (let i = 0; i < fullStars; i++) {
      stars.push(
        <svg key={`full-${i}`} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
        </svg>
      );
    }
    
    // Add half star if needed
    if (hasHalfStar) {
      stars.push(
        <svg key="half" className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="half-star-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="50%" stopColor="currentColor" />
              <stop offset="50%" stopColor="white" />
            </linearGradient>
          </defs>
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" fill="url(#half-star-gradient)"></path>
        </svg>
      );
    }
    
    // Add empty stars
    const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);
    for (let i = 0; i < emptyStars; i++) {
      stars.push(
        <svg key={`empty-${i}`} className="w-5 h-5 text-white dark:text-white/40" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
        </svg>
      );
    }
    
    return stars;
  };
  
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      {/* Hero Section with padding for navbar */}
      <section className="pt-32 pb-6 px-6 md:px-20">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Technical Expertise</h1>
          <div className="w-20 h-1 bg-blue-500 mb-6"></div>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl">
            My expertise spans data engineering, analytics, cloud services, and project management
          </p>
        </div>
      </section>
      
      <section className="pt-0 px-6 md:px-20">
        <div className="max-w-6xl mx-auto">
          {/* Skills Rating Image */}
          <div className="mb-8 flex justify-center">
            <Image
              src="/images/Skills Ratings.png"
              alt="Skills Rating Overview"
              width={800}
              height={400}
              className="rounded-lg shadow-md"
            />
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {Object.entries(skills).map(([category, categorySkills]) => (
              <div key={category} className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
                <h2 className="text-2xl font-semibold mb-6 text-center border-b pb-2 border-gray-200 dark:border-gray-700">
                  {category}
                </h2>
                <div className="space-y-4">
                  {categorySkills.map((skill) => (
                    <div key={skill.name} className="mb-4">
                      <div className="flex justify-between mb-1">
                        <span className="font-medium">{skill.name}</span>
                        <div className="flex">
                          {renderStars(skill.level)}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-16 bg-gray-50 dark:bg-gray-800 p-8 rounded-xl shadow-md">
            <h2 className="text-3xl font-bold mb-8 text-center">Research Domains</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {[
                { name: 'Data Engineering', icon: '⚙️' },
                { name: 'Business Intelligence', icon: '📊' },
                { name: 'Cloud Architecture', icon: '☁️' },
                { name: 'ETL Processing', icon: '🔄' },
                { name: 'Data Visualization', icon: '📈' },
                { name: 'Data Warehousing', icon: '🏢' },
                { name: 'Big Data', icon: '📚' },
                { name: 'Project Management', icon: '📋' },
              ].map((domain, index) => (
                <div key={index} className="bg-white dark:bg-gray-700 p-4 rounded-lg shadow-sm text-center">
                  <div className="text-3xl mb-2">{domain.icon}</div>
                  <h3 className="font-medium text-sm md:text-base">{domain.name}</h3>
                </div>
              ))}
            </div>
          </div>
          
          <div className="mt-16">
            <h2 className="text-3xl font-bold mb-6 text-center">Certifications & Credentials</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                { 
                  name: 'AI Research Fellow', 
                  issuer: 'Advanced AI Research Institute', 
                  year: 2024,
                  icon: '🏆'
                },
                { 
                  name: 'AI Systems Architect', 
                  issuer: 'Enterprise AI Consortium', 
                  year: 2023,
                  icon: '🏗️'
                },
                { 
                  name: 'Distinguished ML Practitioner', 
                  issuer: 'International ML Association', 
                  year: 2022,
                  icon: '🌟'
                },
              ].map((cert, index) => (
                <div key={index} className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md flex flex-col items-center text-center">
                  <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center mb-4">
                    <span className="text-2xl">{cert.icon}</span>
                  </div>
                  <h3 className="text-xl font-bold mb-1">{cert.name}</h3>
                  <p className="text-gray-600 dark:text-gray-300">{cert.issuer}</p>
                  <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">{cert.year}</p>
                </div>
              ))}
            </div>
          </div>
          
          <div className="mt-16">
            <h2 className="text-3xl font-bold mb-8 text-center">Technical Contributions</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold mb-4 text-blue-600 dark:text-blue-400">Open Source</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="text-gray-700 dark:text-gray-300 mr-2">•</span>
                    <span className="text-gray-700 dark:text-gray-300">Contributed to HuggingFace Transformers library</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-gray-700 dark:text-gray-300 mr-2">•</span>
                    <span className="text-gray-700 dark:text-gray-300">Maintained EfficientML repository (5k+ stars)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-gray-700 dark:text-gray-300 mr-2">•</span>
                    <span className="text-gray-700 dark:text-gray-300">Core contributor to MLflow</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-gray-700 dark:text-gray-300 mr-2">•</span>
                    <span className="text-gray-700 dark:text-gray-300">Released KnowledgeGraphs.jl Julia package</span>
                  </li>
                </ul>
              </div>
              <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold mb-4 text-purple-600 dark:text-purple-400">Technical Reviews</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="text-gray-700 dark:text-gray-300 mr-2">•</span>
                    <span className="text-gray-700 dark:text-gray-300">NeurIPS Conference Reviewer (2020-2025)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-gray-700 dark:text-gray-300 mr-2">•</span>
                    <span className="text-gray-700 dark:text-gray-300">ICML Program Committee Member</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-gray-700 dark:text-gray-300 mr-2">•</span>
                    <span className="text-gray-700 dark:text-gray-300">Journal of Machine Learning Research Reviewer</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-gray-700 dark:text-gray-300 mr-2">•</span>
                    <span className="text-gray-700 dark:text-gray-300">ACL Outstanding Reviewer Award (2023)</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          
          <div className="mt-16 text-center">
            <p className="text-gray-600 dark:text-gray-300 text-lg mb-6">
              Interested in discussing technical collaborations or research opportunities?
            </p>
            <a 
              href="/contact" 
              className="inline-block bg-gradient-to-r from-blue-600 to-purple-600 text-white font-medium px-8 py-3 rounded-lg shadow-lg hover:shadow-xl transition-all"
            >
              Let's Connect
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
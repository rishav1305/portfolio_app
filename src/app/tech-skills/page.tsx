import React from 'react';

export default function TechSkillsPage() {
  const skills = {
    'Python': [
      { name: 'Pandas', level: 80 },
      { name: 'Pyspark', level: 70 },
      { name: 'Sklearn', level: 60 },
      { name: 'Selenium', level: 70 },
    ],
    'SQL': [
      { name: 'SQL Server', level: 90 },
      { name: 'Postgre SQL', level: 90 },
      { name: 'Spark SQL', level: 80 },
      { name: 'SnowSQL', level: 70 },
    ],
    'ETL Tools': [
      { name: 'AWS Glue', level: 80 },
      { name: 'Azure Databricks', level: 80 },
      { name: 'AWS Batch', level: 90 },
      { name: 'Alteryx', level: 70 },
    ],
    'Analytical Tools': [
      { name: 'Tableau CRM', level: 80 },
      { name: 'Qlik Sense', level: 70 },
      { name: 'Preset', level: 70 },
      { name: 'Power BI', level: 60 },
      { name: 'Microsoft Excel', level: 80 },
    ],
    'Big Data Tools': [
      { name: 'Apache Spark', level: 70 },
      { name: 'HIVE', level: 60 },
    ],
    'Cloud Services': [
      { name: 'AWS', level: 80 },
      { name: 'Azure', level: 70 },
      { name: 'Databricks', level: 70 },
    ],
    'Data Warehouse': [
      { name: 'Redshift', level: 90 },
      { name: 'Azure SQL DWH', level: 90 },
      { name: 'Snowflake', level: 80 },
    ],
    'Project Management': [
      { name: 'JIRA', level: 80 },
      { name: 'Confluence', level: 70 },
      { name: 'Figma', level: 60 },
      { name: 'Trello', level: 70 },
    ]
  };
  
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      {/* Hero Section with padding for navbar */}
      <section className="pt-32 pb-20 px-6 md:px-20">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Technical Expertise</h1>
          <div className="w-20 h-1 bg-blue-500 mb-10"></div>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl">
            My expertise spans data engineering, analytics, cloud services, and project management
          </p>
        </div>
      </section>
      
      <section className="py-16 px-6 md:px-20">
        <div className="max-w-6xl mx-auto">
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
                        <span className="text-sm text-gray-500 dark:text-gray-400">{skill.level}%</span>
                      </div>
                      <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
                        <div 
                          className={`h-2.5 rounded-full ${
                            category === 'Python' ? 'bg-green-600' : 
                            category === 'SQL' ? 'bg-blue-600' : 
                            category === 'ETL Tools' ? 'bg-purple-600' : 
                            category === 'Analytical Tools' ? 'bg-yellow-600' : 
                            category === 'Big Data Tools' ? 'bg-red-600' : 
                            category === 'Cloud Services' ? 'bg-indigo-600' : 
                            category === 'Data Warehouse' ? 'bg-teal-600' : 'bg-orange-600'
                          }`}
                          style={{ width: `${skill.level}%` }}
                        ></div>
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
import Link from "next/link";

export default function Experience() {
  // Calculate years of experience dynamically
  const currentYear = new Date().getFullYear();
  const yearsOfExperience = currentYear - 2018;

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      {/* Hero Section with padding for navbar - removed background image */}
      <section className="pt-32 pb-20 px-6 md:px-20">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Experience & Education</h1>
          <div className="w-20 h-1 bg-blue-500 mb-10"></div>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl">
            {yearsOfExperience}+ years of professional experience in data engineering, analytics, and technology leadership
          </p>
        </div>
      </section>

      {/* Experience Section - light grey background */}
      <section className="py-16 px-6 md:px-20 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-10 text-center">Professional Experience</h2>
          
          <div className="space-y-12">
            {/* Experience Item 1 */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <div className="md:text-right">
                <p className="font-bold">Dec 2022 - Present</p>
                <p className="text-gray-500 dark:text-gray-400">Pune, Maharashtra</p>
              </div>
              <div className="md:col-span-3 bg-white dark:bg-gray-700 p-6 rounded-xl shadow-md">
                <h3 className="text-xl font-bold mb-2">Technology Lead</h3>
                <p className="text-blue-600 dark:text-blue-400 mb-4">Bitwise Private Limited</p>
                
                <div className="mb-4">
                  <h4 className="font-semibold mb-2">Role Evolution</h4>
                  <ul className="list-disc pl-5 text-gray-700 dark:text-gray-300 space-y-1">
                    <li>Initial Role: Started as an individual contributor, leveraging my expertise in Python and SQL.</li>
                    <li>Expanded Responsibilities: Took on additional roles and responsibilities due to team restructuring during multiple layoffs.</li>
                    <li>Current Role: Leading multiple projects across B2B and B2C, including requirements gathering, task delegation and project management.</li>
                  </ul>
                </div>
                
                <div className="mb-4">
                  <h4 className="font-semibold mb-2">Key Contributions</h4>
                  <ul className="list-disc pl-5 text-gray-700 dark:text-gray-300 space-y-1">
                    <li>Ad hoc Collaboration: Worked closely with Sylvia and Ivan on various ad hoc tasks.</li>
                    <li>Dashboard Development: Currently drafting a Google Sheets dashboard & Consumer KPIs for Rohit (CEO) to analyze user patterns across platforms.</li>
                  </ul>
                </div>
                
                <div className="mb-4">
                  <h4 className="font-semibold mb-2">Accomplishments</h4>
                  <ul className="list-disc pl-5 text-gray-700 dark:text-gray-300 space-y-1">
                    <li>Initiated comprehensive B2B analytics reporting, delivering key insights through reports such as Funnel Analysis, Forecasting, Renewal Metrics, and Marketing Attribution, aligned with leadership's strategic priorities.</li>
                    <li>Streamlined and optimized the Programmatic Advertisers pipeline, achieving a 60% reduction in processing time.</li>
                    <li>Executed seamless integration of NetSuite invoice data with Salesforce for enhanced financial data alignment.</li>
                    <li>Spearheaded the migration of the Datorama nPrinting email workflow from Qlik Sense to Python, ensuring improved efficiency and scalability.</li>
                    <li>Developed a suite of B2C analytics reports on Salesforce, including Ads Pacing, Client Spend Analysis, and Marketing Attribution, to drive actionable insights.</li>
                  </ul>
                </div>
                
                <div className="mb-2">
                  <h4 className="font-semibold mb-2">Technical Growth</h4>
                  <ol className="list-decimal pl-5 text-gray-700 dark:text-gray-300 space-y-3">
                    <li>
                      <span className="font-medium">Python & SQL</span>
                      <ul className="list-disc pl-5 mt-1">
                        <li>Advanced proficiency in pandas and other Python libraries for data manipulation.</li>
                        <li>Enhanced SQL skills for complex query development and data extraction.</li>
                      </ul>
                    </li>
                    <li>
                      <span className="font-medium">Salesforce & Tableau CRM</span>
                      <ul className="list-disc pl-5 mt-1">
                        <li>Gained expertise in Salesforce data QA and Tableau CRM dashboard creation.</li>
                        <li>Delivered key dashboards, including Funnel Analysis, Forecasting, Renewal Metrics, and Marketing Attribution.</li>
                      </ul>
                    </li>
                    <li>
                      <span className="font-medium">Qlik Sense</span>
                      <ul className="list-disc pl-5 mt-1">
                        <li>Transitioned from QlikView to Qlik Sense, contributing to dashboard creation, pipeline corrections, debugging, and migration tasks.</li>
                      </ul>
                    </li>
                    <li>
                      <span className="font-medium">Preset</span>
                      <ul className="list-disc pl-5 mt-1">
                        <li>Moving most of the dashboards away from Qlik or Emails and creating Charts & Dashboards on Preset.</li>
                      </ul>
                    </li>
                    <li>
                      <span className="font-medium">Airflow</span>
                      <ul className="list-disc pl-5 mt-1">
                        <li>Learned to create and schedule new DAGs.</li>
                        <li>Skilled in debugging and restarting failed DAGs.</li>
                      </ul>
                    </li>
                    <li>
                      <span className="font-medium">Amazon Web Services (AWS)</span>
                      <ul className="list-disc pl-5 mt-1">
                        <li>AWS Glue: Developed visual ETLs and notebooks.</li>
                        <li>Amazon S3: Managed file reading and loading.</li>
                        <li>Amazon EMR: Ran jobs and maintained instances.</li>
                        <li>AWS Batch: Configured computes, queues, and job definitions.</li>
                        <li>AWS EC2: Regular server maintenance.</li>
                        <li>AWS Athena: Optimized queries to fetch data from BlueOcean.</li>
                        <li>QuickSight: Designed interactive dashboards.</li>
                      </ul>
                    </li>
                    <li>
                      <span className="font-medium">JIRA & Confluence</span>
                      <ul className="list-disc pl-5 mt-1">
                        <li>Proficient in task management and documentation creation.</li>
                      </ul>
                    </li>
                    <li>
                      <span className="font-medium">Linux & Git Bash</span>
                      <ul className="list-disc pl-5 mt-1">
                        <li>Improved efficiency in server management and version control.</li>
                      </ul>
                    </li>
                  </ol>
                </div>

                <div>
                  <h4 className="font-semibold mb-2">Platform Exploration</h4>
                  <p className="mb-1 text-gray-700 dark:text-gray-300">Individually explored and worked on various platforms:</p>
                  <ul className="list-disc pl-5 text-gray-700 dark:text-gray-300 space-y-1">
                    <li>Google Ads Manager: Primary data source for ad metrics.</li>
                    <li>Cube.dev: Set up semantic layers.</li>
                    <li>Preset: Visualization tool integrated with Cube.dev.</li>
                    <li>Clickhouse: Pre-aggregation for Cube.dev pipelines.</li>
                    <li>Datorama: Media data source.</li>
                    <li>Growthbook: Data aggregation platform.</li>
                    <li>Amplitude: Analyzed iOS/Android property usage.</li>
                    <li>mParticle: Data source for web property analytics.</li>
                  </ul>
                </div>
                
                <div className="mt-4">
                  <span className="inline-block bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-100 px-3 py-1 rounded-full text-sm mr-2 mb-2">
                    Data Engineering
                  </span>
                  <span className="inline-block bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-100 px-3 py-1 rounded-full text-sm mr-2 mb-2">
                    Cloud Infrastructure
                  </span>
                  <span className="inline-block bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-100 px-3 py-1 rounded-full text-sm mr-2 mb-2">
                    Team Leadership
                  </span>
                </div>
              </div>
            </div>
            
            {/* Experience Item 2 */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <div className="md:text-right">
                <p className="font-bold">May 2020 - Dec 2022</p>
                <p className="text-gray-500 dark:text-gray-400">Hyderabad, Telangana</p>
              </div>
              <div className="md:col-span-3 bg-white dark:bg-gray-700 p-6 rounded-xl shadow-md">
                <h3 className="text-xl font-bold mb-2">Senior Data Engineer</h3>
                <p className="text-blue-600 dark:text-blue-400 mb-4">Novartis Healthcare Private Limited</p>
                <ul className="list-disc pl-5 text-gray-700 dark:text-gray-300 space-y-2">
                  <li>Oversaw the migration from HIVE to Snowflake datawarehouse, resulting in an increase in the performance of the data pipeline by 60%</li>
                  <li>Extracted data from disparate data sources with a combination of SQL, SFTP API, OutlookAPI and Selenium using Python to ingest into the production pipelines</li>
                  <li>Automated and orchestrated all the jobs in the production pipeline using Apache Airflow and Alteryx to increase the visibility of the batch processes, improve the system durability and speed by 40%</li>
                  <li>Maintained on-time data delivery with 99.5% accuracy and received a rating of 9.5/10 from all the major stakeholders</li>
                  <li>Led a team of 2 full-time employees and 1 contractor, and frequently communicated and collaborated with 15+ data vendors, 10+ brand leaders and other downstream stakeholders to align the operations with the organizational needs which drove the efficiency KPIs by 15%</li>
                  <li>Derived pivotal insights for data visualization and analytics projects using Qlik Sense, Tellius, MS Powerpoint and MS Excel to deliver comprehensible and invaluable visuals for presentation to audiences of different technical understanding for ongoing business decision-making</li>
                  <li>Reduced process bottlenecks by training and coaching employees on best practices, procedures and performance strategies. Documented all data and pipeline related issues and vulnerabilities and outlined improvement recommendations.</li>
                </ul>
                <div className="mt-4">
                  <span className="inline-block bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-100 px-3 py-1 rounded-full text-sm mr-2 mb-2">
                    Data Migration
                  </span>
                  <span className="inline-block bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-100 px-3 py-1 rounded-full text-sm mr-2 mb-2">
                    Process Automation
                  </span>
                  <span className="inline-block bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-100 px-3 py-1 rounded-full text-sm mr-2 mb-2">
                    Team Mentoring
                  </span>
                </div>
              </div>
            </div>
            
            {/* Experience Item 3 */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <div className="md:text-right">
                <p className="font-bold">Jun 2018 - Apr 2020</p>
                <p className="text-gray-500 dark:text-gray-400">Noida, Uttar Pradesh</p>
              </div>
              <div className="md:col-span-3 bg-white dark:bg-gray-700 p-6 rounded-xl shadow-md">
                <h3 className="text-xl font-bold mb-2">Data Engineer</h3>
                <p className="text-blue-600 dark:text-blue-400 mb-4">Polestar Solutions and Services</p>
                <p className="text-gray-700 dark:text-gray-300 mb-3">Worked on various cloud based big data projects with:</p>
                
                <div className="mb-4 pl-5">
                  <h4 className="font-semibold text-gray-700 dark:text-gray-300">Jubilant FoodWorks Limited</h4>
                  <p className="text-gray-700 dark:text-gray-300 ml-2">The aim of this project was to develop, maintain and upgrade data pipelines to automate and optimize the production process on AWS Infrastructure. Successfully reduced the execution time for the production pipeline by 66% and decreased the cost of Data Storage on Amazon Redshift by 50%.</p>
                </div>
                
                <div className="mb-4 pl-5">
                  <h4 className="font-semibold text-gray-700 dark:text-gray-300">IndiaMART InterMESH Ltd</h4>
                  <p className="text-gray-700 dark:text-gray-300 ml-2">This project aimed at migrating the existing on-premises system to Amazon Web Services and generate Power BI reports for Sales and HR by extracting Parquet files from Amazon S3 and creating a warehouse in Amazon Redshift while processing the data in AWS Glue using Pyspark.</p>
                </div>
                
                <div className="mb-4 pl-5">
                  <h4 className="font-semibold text-gray-700 dark:text-gray-300">Reckitt Benckiser Group</h4>
                  <p className="text-gray-700 dark:text-gray-300 ml-2">In this project, the aim was to deliver automated workflows of the prediction model using Azure Databricks. Data needed to be extracted from Azure Blob Storage and Azure SQL Data Warehouse, then process the Parquet files are shared with DataRobot and finally the output is sent to the cube.</p>
                </div>
                
                <p className="text-gray-700 dark:text-gray-300 mt-2">Successfully, started a cloud based services as a new vertical for the organization</p>
                
                <div className="mt-4">
                  <span className="inline-block bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-100 px-3 py-1 rounded-full text-sm mr-2 mb-2">
                    AWS Services
                  </span>
                  <span className="inline-block bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-100 px-3 py-1 rounded-full text-sm mr-2 mb-2">
                    Azure Databricks
                  </span>
                  <span className="inline-block bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-100 px-3 py-1 rounded-full text-sm mr-2 mb-2">
                    Data Pipeline Optimization
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Education Section - white background (alternating) */}
      <section className="py-16 px-6 md:px-20 bg-white dark:bg-gray-900">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-10 text-center">Education</h2>
          
          <div className="space-y-12">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <div className="md:text-right">
                <p className="font-bold">Aug 2014 - May 2018</p>
                <p className="text-gray-500 dark:text-gray-400">Rohini, Delhi</p>
              </div>
              <div className="md:col-span-3 bg-gray-50 dark:bg-gray-800 p-6 rounded-xl shadow-md">
                <h3 className="text-xl font-bold mb-2">Bachelor's Degree</h3>
                <p className="text-blue-600 dark:text-blue-400 mb-4">Delhi Technological University (DTU) with Environmental Engineering</p>
                <p className="text-gray-700 dark:text-gray-300">
                  Focused on environmental engineering principles and sustainable technologies. Participated in multiple research projects 
                  related to waste management and environmental impact assessment. Developed strong analytical and problem-solving skills 
                  through practical lab work and field studies. Active member of the Engineering Society and Environmental Club.
                </p>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <div className="md:text-right">
                <p className="font-bold">Apr 2013 - Mar 2014</p>
                <p className="text-gray-500 dark:text-gray-400">R.K. Puram, Delhi</p>
              </div>
              <div className="md:col-span-3 bg-gray-50 dark:bg-gray-800 p-6 rounded-xl shadow-md">
                <h3 className="text-xl font-bold mb-2">12th Education</h3>
                <p className="text-blue-600 dark:text-blue-400 mb-4">LBS Senior Secondary School with FIITJEE</p>
                <p className="text-gray-700 dark:text-gray-300">
                  Completed senior secondary education with specialization in science subjects. Achieved academic excellence with particular 
                  strength in mathematics and physics. Participated in various inter-school competitions and science exhibitions. 
                  Developed strong foundations in analytical thinking and scientific concepts that later supported engineering studies.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <div className="md:text-right">
                <p className="font-bold">Apr 2011 - Mar 2012</p>
                <p className="text-gray-500 dark:text-gray-400">Faridabad, Haryana</p>
              </div>
              <div className="md:col-span-3 bg-gray-50 dark:bg-gray-800 p-6 rounded-xl shadow-md">
                <h3 className="text-xl font-bold mb-2">10th Education</h3>
                <p className="text-blue-600 dark:text-blue-400 mb-4">MVN School, Aravalli Hills with CBSE </p>
                <p className="text-gray-700 dark:text-gray-300">
                  Completed foundational education with a strong academic record across all subjects. Actively participated in various 
                  extracurricular activities including sports, cultural events, and science exhibitions. Received recognition for academic 
                  performance and leadership skills in group projects and classroom activities.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section - light grey background (alternating) */}
      <section className="py-16 px-6 md:px-20 text-center bg-gray-50 dark:bg-gray-800">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold mb-6">Let's Connect</h2>
          <p className="text-xl mb-8 text-gray-600 dark:text-gray-300">
            Interested in discussing collaboration opportunities or learning more about my experience? 
            I'm always open to connecting with fellow professionals.
          </p>
          <div className="flex justify-center">
            <Link 
              href="/contact" 
              className="rounded-full bg-blue-600 text-white hover:bg-blue-700 px-8 py-3 font-medium text-lg transition-colors shadow-lg"
            >
              Get in Touch
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
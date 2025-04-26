const puppeteer = require('puppeteer');
const fs = require('fs');
const path = require('path');

async function generatePDF() {
  // Create directory if it doesn't exist
  const documentsDir = path.join(__dirname, '../public/documents');
  if (!fs.existsSync(documentsDir)) {
    fs.mkdirSync(documentsDir, { recursive: true });
  }

  // Portfolio data (hardcoded from your portfolioData.ts)
  const portfolioData = {
    personalInfo: {
      name: "Rishav Chatterjee",
      title: "Technology Leader",
      email: "rishavchatterjee2024@gmail.com",
      shortBio: "I help companies turn complex datasets into clear, actionable insights through advanced data modeling and visualization.",
      longBio: [
        "I specialize in building scalable data architectures using modern cloud platforms like AWS and Azure, and I'm highly proficient in tools like Python, SQL, Spark, and various BI tools including Tableau CRM, Qlik Sense, Power BI, and Preset. From streamlining programmatic pipelines and integrating enterprise systems like NetSuite and Salesforce, to delivering mission-critical dashboards for C-level executives—I've consistently aligned data solutions with business strategy.",
        "To stay ahead in today's fast-paced environment, I actively integrate AI into my workflow. I leverage tools like GitHub Copilot, Claude, and ChatGPT for code assistance, debugging, and technical documentation. I'm also developing AI agents using Ollama and Autogen frameworks to automate and scale analytical tasks.",
        "With experience across top firms, I build scalable, interactive dashboards and analytics solutions—leveraging AI tools to boost productivity and drive smarter, data-informed decisions."
      ],
      location: "Delhi",
      yearsExperienceStartYear: 2018,
      whatsapp: "+91 9560382351",
      socialMedia: {
        github: "https://github.com/rishav1305",
        linkedin: "https://www.linkedin.com/in/chatterjeerishav/",
        leetcode: "https://leetcode.com/u/rishav115/",
        medium: "https://medium.com/@chatterjeerishav96"
      }
    },
    
    experience: [
      {
        period: "Dec 2022 - Present",
        startDate: "2022-12-01",
        endDate: null,
        location: "Pune, Maharashtra",
        company: "Bitwise Solutions Pvt Ltd",
        role: "Technology Lead",
        achievements: [
          "Initiated B2B analytics reporting with key insights through Funnel Analysis, Forecasting, and more",
          "Optimized Programmatic Advertisers pipeline, reducing processing time by 60%",
          "Executed NetSuite invoice data integration with Salesforce",
          "Led migration from Qlik Sense to Python for Datorama nPrinting"
        ],
        tags: ["Data Engineering", "Cloud Infrastructure", "Team Leadership"]
      },
      {
        period: "May 2020 - Dec 2022",
        startDate: "2020-05-01",
        endDate: "2022-12-31",
        location: "Hyderabad, Telangana",
        company: "Novartis Healthcare Pvt Ltd",
        role: "Senior Data Engineer",
        achievements: [
          "Migrated from HIVE to Snowflake, increasing pipeline performance by 60%",
          "Orchestrated jobs using Apache Airflow and Alteryx, improving system speed by 40%",
          "Maintained 99.5% data accuracy with 9.5/10 stakeholder satisfaction",
          "Led team of 3, collaborating with 15+ data vendors and 10+ brand leaders"
        ],
        tags: ["Data Migration", "Process Automation", "Team Mentoring"]
      },
      {
        period: "Jun 2018 - Apr 2020",
        startDate: "2018-06-01",
        endDate: "2020-04-30",
        location: "Noida, Uttar Pradesh",
        company: "Polestar Solutions and Services",
        role: "Data Engineer",
        achievements: [
          "Worked with Jubilant FoodWorks to reduce production pipeline execution time by 66%",
          "Migrated IndiaMART's on-premises system to AWS",
          "Delivered automated prediction model workflows for Reckitt Benckiser using Azure Databricks",
          "Successfully started cloud-based services as a new vertical for the organization"
        ],
        clients: [
          {
            name: "Jubilant FoodWorks Limited",
            description: "The aim of this project was to develop, maintain and upgrade data pipelines to automate and optimize the production process on AWS Infrastructure. Successfully reduced the execution time for the production pipeline by 66% and decreased the cost of Data Storage on Amazon Redshift by 50%."
          },
          {
            name: "IndiaMART InterMESH Ltd",
            description: "This project aimed at migrating the existing on-premises system to Amazon Web Services and generate Power BI reports for Sales and HR by extracting Parquet files from Amazon S3 and creating a warehouse in Amazon Redshift while processing the data in AWS Glue using Pyspark."
          },
          {
            name: "Reckitt Benckiser Group",
            description: "In this project, the aim was to deliver automated workflows of the prediction model using Azure Databricks. Data needed to be extracted from Azure Blob Storage and Azure SQL Data Warehouse, then process the Parquet files are shared with DataRobot and finally the output is sent to the cube."
          }
        ],
        tags: ["AWS Services", "Azure Databricks", "Data Pipeline Optimization"]
      }
    ],
    
    education: [
      {
        period: "Aug 2014 - May 2018",
        location: "Rohini, Delhi",
        institution: "Delhi Technological University (DTU)",
        degree: "Bachelor's Degree",
        focusArea: "Environmental Engineering"
      },
      {
        period: "Apr 2013 - Mar 2014",
        location: "R.K. Puram, Delhi",
        institution: "LBS Senior Secondary School - FIITJEE",
        degree: "12th Education",
        focusArea: "Physics, Chemistry, Mathematics"
      }
    ],
    
    skills: {
      'Python': [
        { name: 'Pandas', level: 4.5 },
        { name: 'SQLAlchemy', level: 4.5 },
        { name: 'Pyspark', level: 4 },
        { name: 'Sklearn', level: 4 },
        { name: 'Selenium', level: 4.5 },
      ],
      'SQL': [
        { name: 'SQL Server', level: 5 },
        { name: 'Postgre SQL', level: 5 },
        { name: 'Spark SQL', level: 4.5 },
        { name: 'SnowSQL', level: 4.5 },
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
      'Cloud Services': [
        { name: 'AWS', level: 4.5 },
        { name: 'Azure', level: 3.5 },
        { name: 'Databricks', level: 3.5 },
      ],
      'Data Warehouse': [
        { name: 'Redshift', level: 4.5 },
        { name: 'Azure SQL DWH', level: 4.5 },
        { name: 'Snowflake', level: 4 },
      ]
    },

    projects: [
      {
        title: "Interactive Sales Analytics Dashboard",
        description: "Created a comprehensive sales analytics dashboard with drill-down capabilities and predictive forecasting for a retail client.",
        techStack: ["Python", "Tableau CRM", "SQL", "AWS"],
        category: "Data Visualization"
      },
      {
        title: "ETL Pipeline for E-commerce Data",
        description: "Developed a robust ETL pipeline that processes millions of daily transactions and integrates multiple data sources for a global e-commerce platform.",
        techStack: ["Python", "Apache Spark", "AWS Glue", "Redshift", "Airflow"],
        category: "Data Engineering"
      },
      {
        title: "Customer Segmentation Analysis",
        description: "Performed advanced customer segmentation using machine learning techniques to identify high-value customer groups and personalization opportunities.",
        techStack: ["Python", "scikit-learn", "Pandas", "Matplotlib"],
        category: "Data Science"
      },
      {
        title: "Automated Marketing Performance Reporting",
        description: "Built an automated system that pulls data from multiple marketing platforms and generates comprehensive performance reports with minimal manual intervention.",
        techStack: ["Python", "Google Analytics API", "Google Ads API", "Facebook Marketing API", "Preset"],
        category: "Automation"
      }
    ],
    
    // Helper function to calculate years of experience
    getYearsOfExperience() {
      const currentYear = new Date().getFullYear();
      return currentYear - this.personalInfo.yearsExperienceStartYear;
    }
  };
  
  // Select key skill categories
  const keySkillCategories = ['Python', 'SQL', 'Cloud Services', 'Data Warehouse', 'ETL Tools', 'Analytical Tools'];
  
  // Create HTML content for the CV
  const cvHTML = `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>${portfolioData.personalInfo.name} - CV</title>
      <style>
        body {
          font-family: 'Arial', sans-serif;
          line-height: 1.6;
          color: #333;
          margin: 0;
          padding: 20px;
          max-width: 8.5in;
          margin: 0 auto;
        }
        .header {
          display: flex;
          justify-content: space-between;
          border-bottom: 2px solid #2563eb;
          padding-bottom: 15px;
          margin-bottom: 20px;
        }
        h1 {
          margin: 0;
          color: #2563eb;
          font-size: 28px;
        }
        h2 {
          color: #2563eb;
          font-size: 18px;
          margin: 20px 0 10px 0;
          border-bottom: 1px solid #e2e8f0;
          padding-bottom: 5px;
        }
        h3 {
          font-size: 16px;
          margin: 14px 0 8px 0;
        }
        p, ul {
          margin: 0 0 10px 0;
          font-size: 14px;
        }
        .contact-info {
          text-align: right;
          font-size: 14px;
        }
        .section {
          margin-bottom: 20px;
        }
        .job {
          margin-bottom: 15px;
        }
        .job-header {
          display: flex;
          justify-content: space-between;
        }
        .period {
          color: #666;
          font-style: italic;
          font-size: 14px;
        }
        .company {
          font-weight: bold;
        }
        .skills-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 10px;
        }
        .skill-category {
          margin-bottom: 10px;
        }
        .skill-name {
          font-weight: bold;
        }
        .achievements {
          padding-left: 20px;
          margin: 5px 0;
        }
        .achievements li {
          margin-bottom: 3px;
        }
        .projects, .education {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 15px;
        }
        .project, .edu-item {
          margin-bottom: 10px;
        }
        .social-links {
          margin-top: 5px;
        }
        .social-link {
          color: #2563eb;
          text-decoration: none;
          margin-right: 10px;
        }
        .project-title, .institution {
          font-weight: bold;
        }
        .created-date {
          text-align: center;
          font-size: 12px;
          color: #666;
          margin-top: 40px;
        }
      </style>
    </head>
    <body>
      <div class="header">
        <div>
          <h1>${portfolioData.personalInfo.name}</h1>
          <p>${portfolioData.personalInfo.title}</p>
          <p>${portfolioData.personalInfo.shortBio}</p>
        </div>
        <div class="contact-info">
          <p>${portfolioData.personalInfo.email}</p>
          <p>WhatsApp: ${portfolioData.personalInfo.whatsapp}</p>
          <p>Location: ${portfolioData.personalInfo.location}</p>
          <p>Experience: ${portfolioData.getYearsOfExperience()}+ years</p>
          <div class="social-links">
            <a href="${portfolioData.personalInfo.socialMedia.linkedin}" class="social-link">LinkedIn</a>
            <a href="${portfolioData.personalInfo.socialMedia.github}" class="social-link">GitHub</a>
          </div>
        </div>
      </div>
      
      <div class="section">
        <h2>PROFESSIONAL EXPERIENCE</h2>
        ${portfolioData.experience.map(job => `
          <div class="job">
            <div class="job-header">
              <div>
                <h3>${job.role}</h3>
                <p class="company">${job.company}, ${job.location}</p>
              </div>
              <div class="period">${job.period}</div>
            </div>
            <ul class="achievements">
              ${job.achievements.slice(0, 3).map(achievement => `
                <li>${achievement}</li>
              `).join('')}
            </ul>
          </div>
        `).join('')}
      </div>
      
      <div class="section">
        <h2>TECHNICAL SKILLS</h2>
        <div class="skills-grid">
          ${keySkillCategories.map(category => `
            <div class="skill-category">
              <span class="skill-name">${category}:</span> 
              ${portfolioData.skills[category] 
                ? portfolioData.skills[category]
                  .sort((a, b) => b.level - a.level)
                  .slice(0, 3)
                  .map(skill => skill.name)
                  .join(', ')
                : ''}
            </div>
          `).join('')}
        </div>
      </div>
      
      <div class="section">
        <h2>NOTABLE PROJECTS</h2>
        <div class="projects">
          ${portfolioData.projects.slice(0, 4).map(project => `
            <div class="project">
              <p class="project-title">${project.title}</p>
              <p>${project.description.slice(0, 100)}${project.description.length > 100 ? '...' : ''}</p>
              <p><i>Tech: ${project.techStack.slice(0, 3).join(', ')}${project.techStack.length > 3 ? ', ...' : ''}</i></p>
            </div>
          `).join('')}
        </div>
      </div>
      
      <div class="section">
        <h2>EDUCATION</h2>
        <div class="education">
          ${portfolioData.education.slice(0, 2).map(edu => `
            <div class="edu-item">
              <p class="institution">${edu.institution}</p>
              <p>${edu.degree} in ${edu.focusArea}</p>
              <p class="period">${edu.period}</p>
            </div>
          `).join('')}
        </div>
      </div>
      
      <div class="created-date">
        Generated on ${new Date().toLocaleDateString()}
      </div>
    </body>
    </html>
  `;

  // Create HTML content for the detailed resume
  const resumeHTML = `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>${portfolioData.personalInfo.name} - Resume</title>
      <style>
        body {
          font-family: 'Arial', sans-serif;
          line-height: 1.6;
          color: #333;
          margin: 0;
          padding: 20px;
          max-width: 8.5in;
          margin: 0 auto;
        }
        .header {
          display: flex;
          justify-content: space-between;
          border-bottom: 2px solid #2563eb;
          padding-bottom: 15px;
          margin-bottom: 20px;
        }
        h1 {
          margin: 0;
          color: #2563eb;
          font-size: 28px;
        }
        h2 {
          color: #2563eb;
          font-size: 18px;
          margin: 20px 0 10px 0;
          border-bottom: 1px solid #e2e8f0;
          padding-bottom: 5px;
        }
        h3 {
          font-size: 16px;
          margin: 14px 0 8px 0;
        }
        p, ul {
          margin: 0 0 10px 0;
          font-size: 14px;
        }
        .contact-info {
          text-align: right;
          font-size: 14px;
        }
        .section {
          margin-bottom: 20px;
        }
        .job {
          margin-bottom: 20px;
        }
        .job-header {
          display: flex;
          justify-content: space-between;
        }
        .period {
          color: #666;
          font-style: italic;
          font-size: 14px;
        }
        .company {
          font-weight: bold;
        }
        .skills-container {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 15px;
        }
        .skill-category {
          margin-bottom: 15px;
        }
        .skill-name {
          font-weight: bold;
        }
        .achievements {
          padding-left: 20px;
          margin: 5px 0;
        }
        .achievements li {
          margin-bottom: 5px;
        }
        .projects-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 20px;
        }
        .project {
          margin-bottom: 15px;
        }
        .social-links {
          margin-top: 8px;
        }
        .social-link {
          color: #2563eb;
          text-decoration: none;
          margin-right: 10px;
        }
        .project-title, .institution {
          font-weight: bold;
        }
        .clients {
          margin-top: 10px;
          padding-left: 20px;
        }
        .client {
          margin-bottom: 8px;
        }
        .client-name {
          font-weight: bold;
        }
        .tag {
          display: inline-block;
          background-color: #e2e8f0;
          padding: 2px 8px;
          border-radius: 12px;
          margin-right: 5px;
          margin-bottom: 5px;
          font-size: 12px;
        }
        .tags {
          margin-top: 8px;
        }
        .bio {
          margin-bottom: 20px;
          font-size: 14px;
        }
        .created-date {
          text-align: center;
          font-size: 12px;
          color: #666;
          margin-top: 40px;
        }
      </style>
    </head>
    <body>
      <div class="header">
        <div>
          <h1>${portfolioData.personalInfo.name}</h1>
          <p>${portfolioData.personalInfo.title}</p>
          <p>${portfolioData.personalInfo.shortBio}</p>
        </div>
        <div class="contact-info">
          <p>${portfolioData.personalInfo.email}</p>
          <p>WhatsApp: ${portfolioData.personalInfo.whatsapp}</p>
          <p>Location: ${portfolioData.personalInfo.location}</p>
          <p>Experience: ${portfolioData.getYearsOfExperience()}+ years</p>
          <div class="social-links">
            <a href="${portfolioData.personalInfo.socialMedia.linkedin}" class="social-link">LinkedIn</a>
            <a href="${portfolioData.personalInfo.socialMedia.github}" class="social-link">GitHub</a>
            <a href="${portfolioData.personalInfo.socialMedia.medium}" class="social-link">Medium</a>
          </div>
        </div>
      </div>
      
      <div class="section">
        <h2>PROFESSIONAL SUMMARY</h2>
        <div class="bio">
          ${portfolioData.personalInfo.longBio.map(para => `<p>${para}</p>`).join('')}
        </div>
      </div>
      
      <div class="section">
        <h2>PROFESSIONAL EXPERIENCE</h2>
        ${portfolioData.experience.map(job => `
          <div class="job">
            <div class="job-header">
              <div>
                <h3>${job.role}</h3>
                <p class="company">${job.company}, ${job.location}</p>
              </div>
              <div class="period">${job.period}</div>
            </div>
            <ul class="achievements">
              ${job.achievements.map(achievement => `
                <li>${achievement}</li>
              `).join('')}
            </ul>
            ${job.clients ? `
              <div class="clients">
                <p><strong>Key Clients:</strong></p>
                ${job.clients.map(client => `
                  <div class="client">
                    <p class="client-name">${client.name}</p>
                    <p>${client.description}</p>
                  </div>
                `).join('')}
              </div>
            ` : ''}
            ${job.tags ? `
              <div class="tags">
                ${job.tags.map(tag => `<span class="tag">${tag}</span>`).join('')}
              </div>
            ` : ''}
          </div>
        `).join('')}
      </div>
      
      <div class="section">
        <h2>TECHNICAL SKILLS</h2>
        <div class="skills-container">
          ${Object.entries(portfolioData.skills).map(([category, skills]) => `
            <div class="skill-category">
              <h3>${category}</h3>
              <ul>
                ${skills
                  .sort((a, b) => b.level - a.level)
                  .map(skill => `<li>${skill.name}</li>`)
                  .join('')}
              </ul>
            </div>
          `).join('')}
        </div>
      </div>
      
      <div class="section">
        <h2>NOTABLE PROJECTS</h2>
        <div class="projects-grid">
          ${portfolioData.projects.map(project => `
            <div class="project">
              <p class="project-title">${project.title}</p>
              <p>${project.description}</p>
              <p><i>Technologies: ${project.techStack.join(', ')}</i></p>
            </div>
          `).join('')}
        </div>
      </div>
      
      <div class="section">
        <h2>EDUCATION</h2>
        ${portfolioData.education.map(edu => `
          <div class="edu-item">
            <div class="job-header">
              <div>
                <h3>${edu.degree} in ${edu.focusArea}</h3>
                <p class="institution">${edu.institution}</p>
              </div>
              <div class="period">${edu.period}</div>
            </div>
          </div>
        `).join('')}
      </div>
      
      <div class="created-date">
        Generated on ${new Date().toLocaleDateString()}
      </div>
    </body>
    </html>
  `;

  // Generate PDF using Puppeteer
  const browser = await puppeteer.launch({ headless: 'new' });
  
  // Generate CV (One-page version)
  const cvPage = await browser.newPage();
  await cvPage.setContent(cvHTML);
  await cvPage.pdf({ 
    path: path.join(documentsDir, 'Rishav_Chatterjee_CV.pdf'), 
    format: 'A4',
    printBackground: true,
    margin: { top: '0.5in', right: '0.5in', bottom: '0.5in', left: '0.5in' }
  });
  
  // Generate detailed resume
  const resumePage = await browser.newPage();
  await resumePage.setContent(resumeHTML);
  await resumePage.pdf({ 
    path: path.join(documentsDir, 'Rishav_Chatterjee_Resume.pdf'), 
    format: 'A4',
    printBackground: true,
    margin: { top: '0.5in', right: '0.5in', bottom: '0.5in', left: '0.5in' }
  });

  await browser.close();
  
  console.log('PDF files generated successfully!');
}

generatePDF().catch(console.error);

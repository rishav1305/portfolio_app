const puppeteer = require('puppeteer');
const fs = require('fs');
const path = require('path');
const portfolioData = require('../src/data/portfolioData').default;

async function generatePDF() {
  // Create directory if it doesn't exist
  const documentsDir = path.join(__dirname, '../public/documents');
  if (!fs.existsSync(documentsDir)) {
    fs.mkdirSync(documentsDir, { recursive: true });
  }

  // Function to get top skills from each category
  function getTopSkills(skillsObj, count = 3) {
    const result = {};
    Object.entries(skillsObj).forEach(([category, skills]) => {
      // Sort skills by level (descending) and take the top ones
      const sortedSkills = [...skills].sort((a, b) => b.level - a.level).slice(0, count);
      result[category] = sortedSkills.map(skill => skill.name);
    });
    return result;
  }

  // Get top skills
  const topSkills = getTopSkills(portfolioData.skills);
  
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
            ${edu.description ? `<p>${edu.description}</p>` : ''}
          </div>
        `).join('')}
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

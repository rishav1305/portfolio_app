// PDF Template generator utilities
import { WorkExperience, Education, Project, SkillRating } from '@/data/portfolioData';
import { getYearsOfExperience } from '@/data/portfolioData';

/**
 * Generates HTML template for the one-page CV
 */
export function generateOnePageCVHTML(portfolioData: any) {
  // Select key skill categories - include more categories for better coverage
  const keySkillCategories = ['Python', 'SQL', 'Cloud Services', 'Data Warehouse', 'ETL Tools', 'Analytical Tools', 'Project Management', 'Soft Skills'];
  
  return `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>${portfolioData.personalInfo.name} - CV</title>
      <style>
        /* Base styles with reduced margins and tighter spacing */
        body {
          font-family: 'Arial', sans-serif;
          line-height: 1.4;
          color: #333;
          margin: 0;
          padding: 10px;
          max-width: 8.5in;
        }
        * {
          box-sizing: border-box;
        }
        /* Modern header with smaller spacing */
        .header {
          display: flex;
          justify-content: space-between;
          border-bottom: 1px solid #2563eb;
          padding-bottom: 8px;
          margin-bottom: 10px;
        }
        h1 {
          margin: 0;
          color: #2563eb;
          font-size: 22px;
        }
        h2 {
          color: #2563eb;
          font-size: 15px;
          margin: 12px 0 5px 0;
          border-bottom: 1px solid #e2e8f0;
          padding-bottom: 3px;
          text-transform: uppercase;
          display: flex;
          align-items: center;
        }
        h3 {
          font-size: 14px;
          margin: 10px 0 3px 0;
          color: #333;
        }
        p, ul {
          margin: 0 0 5px 0;
          font-size: 12px;
        }
        .contact-info {
          text-align: right;
          font-size: 12px;
          line-height: 1.3;
        }
        /* Tighter section spacing */
        .section {
          margin-bottom: 10px;
        }
        .job {
          margin-bottom: 8px;
          position: relative;
        }
        .job-header {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          margin-bottom: 2px;
        }
        .period {
          color: #666;
          font-style: italic;
          font-size: 12px;
          white-space: nowrap;
        }
        .company {
          font-weight: bold;
        }
        /* Efficient 3-column grid for skills with skill names directly connected to the content */
        .skills-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 5px;
          font-size: 11px;
        }
        .skill-category {
          margin-bottom: 5px;
        }
        .skill-name {
          font-weight: bold;
          display: inline;
        }
        .skill-content {
          display: inline;
        }
        /* Tighter bullet points */
        .achievements {
          padding-left: 15px;
          margin: 2px 0;
        }
        .achievements li {
          margin-bottom: 1px;
          line-height: 1.3;
        }
        /* 2-column grid for projects and education */
        .projects, .education {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 8px;
        }
        .project, .edu-item {
          margin-bottom: 5px;
        }
        .social-links {
          margin-top: 2px;
          font-size: 11px;
        }
        .social-link {
          color: #2563eb;
          text-decoration: none;
          margin-right: 5px;
        }
        .project-title, .institution {
          font-weight: bold;
          font-size: 12px;
        }
        .project-desc {
          font-size: 11px;
          line-height: 1.3;
          margin: 1px 0;
        }
        .tech {
          font-style: italic;
          font-size: 10px;
        }
        .created-date {
          text-align: center;
          font-size: 8px;
          color: #666;
          margin-top: 5px;
        }
        /* Removed the current-role::before with the blue line */
        .featured-role {
          margin-bottom: 14px;
        }
        .career-evolution {
          margin-left: 15px;
          padding-top: 2px;
          font-size: 10px;
          font-style: italic;
          color: #4b5563;
        }
        .tags {
          display: flex;
          flex-wrap: wrap;
          margin-top: 3px;
          margin-left: 15px;
          gap: 4px;
        }
        .tag {
          background-color: #e5e7eb;
          border-radius: 10px;
          padding: 1px 6px;
          font-size: 9px;
          white-space: nowrap;
        }
      </style>
    </head>
    <body>
      <div class="header">
        <div>
          <h1>${portfolioData.personalInfo.name}</h1>
          <p style="font-size: 14px; margin-top: 2px;">${portfolioData.personalInfo.title} — ${getYearsOfExperience()}+ Years of Experience</p>
          <p style="font-size: 11px;">${portfolioData.personalInfo.shortBio}</p>
        </div>
        <div class="contact-info">
          <p>${portfolioData.personalInfo.email}</p>
          <p>WhatsApp: ${portfolioData.personalInfo.whatsapp}</p>
          <p>Location: ${portfolioData.personalInfo.location}</p>
          <div class="social-links">
            <a href="${portfolioData.personalInfo.socialMedia.linkedin}" class="social-link">LinkedIn</a>
            <a href="${portfolioData.personalInfo.socialMedia.github}" class="social-link">GitHub</a>
            <a href="${portfolioData.personalInfo.socialMedia.medium}" class="social-link">Medium</a>
          </div>
        </div>
      </div>
      
      <div class="section">
        <h2>Professional Experience</h2>
        ${portfolioData.experience.map((job: WorkExperience, index: number) => 
          index === 0 ? `
          <div class="job featured-role">
            <div class="job-header">
              <div>
                <h3>${job.role} — <span class="company">${job.company}</span>, ${job.location}</h3>
              </div>
              <div class="period">${job.period}</div>
            </div>
            <div class="career-evolution">
              Career Evolution: Individual Contributor → Team Lead → Technology Lead
            </div>
            <ul class="achievements">
              ${job.achievements.map((achievement: string) => `
                <li>${achievement}</li>
              `).join('')}
            </ul>
            <div class="tags">
              ${job.tags ? job.tags.map((tag: string) => `<span class="tag">${tag}</span>`).join('') : ''}
            </div>
          </div>
          ` : `
          <div class="job">
            <div class="job-header">
              <div>
                <h3>${job.role} — <span class="company">${job.company}</span>, ${job.location}</h3>
              </div>
              <div class="period">${job.period}</div>
            </div>
            <ul class="achievements">
              ${job.achievements.slice(0, 3).map((achievement: string) => `
                <li>${achievement}</li>
              `).join('')}
            </ul>
          </div>
        `).join('')}
      </div>
      
      <div class="section">
        <h2>Technical Skills</h2>
        <div class="skills-grid">
          ${keySkillCategories.map((category: string) => `
            <div class="skill-category">
              <span class="skill-name">${category}:</span> 
              <span class="skill-content">
              ${portfolioData.skills[category] 
                ? portfolioData.skills[category]
                  .sort((a: SkillRating, b: SkillRating) => b.level - a.level)
                  .slice(0, 4)
                  .map((skill: SkillRating) => skill.name)
                  .join(', ')
                : ''}
              </span>
            </div>
          `).join('')}
        </div>
      </div>
      
      <div class="section">
        <h2>Notable Projects</h2>
        <div class="projects">
          ${portfolioData.projects.slice(0, 4).map((project: Project) => `
            <div class="project">
              <p class="project-title">${project.title}</p>
              <p class="project-desc">${project.description.slice(0, 80)}${project.description.length > 80 ? '...' : ''}</p>
              <p class="tech">Tech: ${project.techStack.slice(0, 3).join(', ')}${project.techStack.length > 3 ? ', ...' : ''}</p>
            </div>
          `).join('')}
        </div>
      </div>
      
      <div class="section">
        <h2>Education</h2>
        <div class="education">
          ${portfolioData.education.slice(0, 2).map((edu: Education) => `
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
}

/**
 * Helper function to get skill category icons - removed as requested
 */
function getSkillIcon(category: string) {
  return ''; // Return empty string instead of icons
}

/**
 * Helper function to get project category icons - removed as requested
 */
function getProjectIcon(category: string) {
  return ''; // Return empty string instead of icons
}

/**
 * Generates HTML template for the detailed resume
 */
export function generateDetailedResumeHTML(portfolioData: any) {
  return `
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
          <p>Experience: ${getYearsOfExperience()}+ years</p>
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
          ${portfolioData.personalInfo.longBio.map((para: string) => `<p>${para}</p>`).join('')}
        </div>
      </div>
      
      <div class="section">
        <h2>PROFESSIONAL EXPERIENCE</h2>
        ${portfolioData.experience.map((job: WorkExperience) => `
          <div class="job">
            <div class="job-header">
              <div>
                <h3>${job.role}</h3>
                <p class="company">${job.company}, ${job.location}</p>
              </div>
              <div class="period">${job.period}</div>
            </div>
            <ul class="achievements">
              ${job.achievements.map((achievement: string) => `
                <li>${achievement}</li>
              `).join('')}
            </ul>
            ${job.clients ? `
              <div class="clients">
                <p><strong>Key Clients:</strong></p>
                ${job.clients.map((client: {name: string; description: string}) => `
                  <div class="client">
                    <p class="client-name">${client.name}</p>
                    <p>${client.description}</p>
                  </div>
                `).join('')}
              </div>
            ` : ''}
            ${job.tags ? `
              <div class="tags">
                ${job.tags.map((tag: string) => `<span class="tag">${tag}</span>`).join('')}
              </div>
            ` : ''}
          </div>
        `).join('')}
      </div>
      
      <div class="section">
        <h2>TECHNICAL SKILLS</h2>
        <div class="skills-container">
          ${Object.entries(portfolioData.skills as Record<string, SkillRating[]>).map(([category, skills]) => `
            <div class="skill-category">
              <h3>${category}</h3>
              <ul>
                ${skills
                  .sort((a: SkillRating, b: SkillRating) => b.level - a.level)
                  .map((skill: SkillRating) => `<li>${skill.name}</li>`)
                  .join('')}
              </ul>
            </div>
          `).join('')}
        </div>
      </div>
      
      <div class="section">
        <h2>NOTABLE PROJECTS</h2>
        <div class="projects-grid">
          ${portfolioData.projects.map((project: Project) => `
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
        ${portfolioData.education.map((edu: Education) => `
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
      
      <div class="created-date">
        Generated on ${new Date().toLocaleDateString()}
      </div>
    </body>
    </html>
  `;
}

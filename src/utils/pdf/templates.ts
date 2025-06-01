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
          line-height: 1.3; /* Slightly tighter for CV */
          color: #333;
          margin: 0;
          padding: 0.25in; /* Standard margin */
          max-width: 8.5in;
          font-size: 10pt; /* Base font size for CV */
        }
        * {
          box-sizing: border-box;
        }
        .header {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          border-bottom: 1.5px solid #2563eb; /* Slightly thicker border */
          padding-bottom: 0.2in;
          margin-bottom: 0.2in;
        }
        h1 {
          margin: 0;
          color: #2563eb;
          font-size: 20pt; /* Adjusted for 10pt base */
        }
        h2 {
          color: #2563eb;
          font-size: 14pt; /* Adjusted */
          margin: 0.2in 0 0.1in 0;
          border-bottom: 1px solid #e2e8f0;
          padding-bottom: 0.05in;
          text-transform: uppercase;
        }
        h3 {
          font-size: 11pt; /* Adjusted */
          margin: 0.15in 0 0.05in 0;
          color: #333;
        }
        p, ul {
          margin: 0 0 0.1in 0;
          font-size: 10pt; /* Base size */
        }
        ul {
          padding-left: 1.2em; /* Standard indent for lists */
        }
        li {
          margin-bottom: 0.05in;
        }
        .contact-info {
          text-align: right;
          font-size: 9pt; /* Slightly smaller for contact details */
          line-height: 1.4;
        }
        .section {
          margin-bottom: 0.15in;
        }
        .job {
          margin-bottom: 0.15in;
          position: relative;
        }
        .job-header {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          margin-bottom: 0.05in;
        }
        .period {
          color: #555; /* Darker grey */
          font-style: italic;
          font-size: 9pt;
          white-space: nowrap;
          padding-left: 10px; /* Add some space between title and date */
        }
        .company {
          font-weight: bold;
        }
        .skills-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(180px, 1fr)); /* Responsive columns */
          gap: 0.1in;
          font-size: 9pt;
        }
        .skill-category {
          margin-bottom: 0.1in;
        }
        .skill-category h4 { /* Using h4 for skill category title for better semantics */
            font-weight: bold;
            font-size: 10pt;
            margin: 0 0 0.05in 0;
            color: #444;
        }
        .skill-name { /* No longer needed if skills are listed */
        }
        .skill-content { /* Skills listed directly */
            padding-left: 0.5em;
        }
        .achievements {
          padding-left: 1.2em; /* Standard indent */
          margin: 0.05in 0;
          list-style-type: disc; /* Explicit bullet points */
        }
        .achievements li {
          margin-bottom: 0.05in;
          line-height: 1.3;
        }
        .projects, .education {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); /* Responsive columns */
          gap: 0.15in;
        }
        .project, .edu-item {
          margin-bottom: 0.1in;
        }
        .social-links {
          margin-top: 0.1in;
          font-size: 9pt;
        }
        .social-link {
          color: #2563eb;
          text-decoration: none;
          margin-right: 8px;
        }
        .project-title, .institution {
          font-weight: bold;
          font-size: 10pt;
        }
        .project-desc {
          font-size: 9pt;
          line-height: 1.3;
          margin: 0.05in 0;
        }
        .tech {
          font-style: italic;
          font-size: 8.5pt;
          color: #444;
        }
        .created-date {
          text-align: center;
          font-size: 8pt;
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
          <p style="font-size: 11pt; margin-top: 0.05in;">${portfolioData.personalInfo.title} — ${getYearsOfExperience()}+ Years of Experience</p>
          <p style="font-size: 10pt;">${portfolioData.personalInfo.shortBio}</p>
        </div>
        <div class="contact-info">
          <p><strong>Email:</strong> ${portfolioData.personalInfo.email}</p>
          <p><strong>WhatsApp:</strong> ${portfolioData.personalInfo.whatsapp}</p>
          <p><strong>Location:</strong> ${portfolioData.personalInfo.location}</p>
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
              <h4>${category}</h4>
              <div class="skill-content">
              ${portfolioData.skills[category] 
                ? portfolioData.skills[category]
                  .sort((a: SkillRating, b: SkillRating) => b.level - a.level)
                  .slice(0, 4) // Keep top 4 for CV
                  .map((skill: SkillRating) => skill.name)
                  .join(', ')
                : 'N/A'}
              </div>
            </div>
          `).join('')}
        </div>
      </div>
      
      <div class="section">
        <h2>Notable Projects</h2>
        <div class="projects">
          ${portfolioData.projects.slice(0, 2).map((project: Project) => ` {/* Reduced to 2 for one-page CV brevity */}
            <div class="project">
              <p class="project-title">${project.title}</p>
              <p class="project-desc">${project.description.slice(0, 100)}${project.description.length > 100 ? '...' : ''}</p>
              <p class="tech"><strong>Tech:</strong> ${project.techStack.slice(0, 4).join(', ')}${project.techStack.length > 4 ? ', ...' : ''}</p>
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
              <p>${edu.degree} (${edu.focusArea})</p>
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
          line-height: 1.5; /* Standard line height */
          color: #333;
          margin: 0 auto; /* Center page */
          padding: 0.5in; /* Standard resume margin */
          max-width: 8.5in;
          font-size: 11pt; /* Base font size for resume */
        }
        .header {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          border-bottom: 2px solid #2563eb;
          padding-bottom: 0.3in;
          margin-bottom: 0.3in;
        }
        h1 {
          margin: 0;
          color: #2563eb;
          font-size: 24pt; /* Adjusted for 11pt base */
        }
        h2 {
          color: #2563eb;
          font-size: 16pt; /* Adjusted */
          margin: 0.3in 0 0.15in 0;
          border-bottom: 1px solid #e2e8f0;
          padding-bottom: 0.1in;
          text-transform: uppercase;
        }
        h3 {
          font-size: 12pt; /* Adjusted */
          margin: 0.2in 0 0.1in 0;
          color: #333;
        }
        p, ul {
          margin: 0 0 0.15in 0;
          font-size: 11pt; /* Base size */
        }
        ul {
          padding-left: 1.5em; /* Standard indent */
        }
        li {
          margin-bottom: 0.08in;
        }
        .contact-info {
          text-align: right;
          font-size: 10pt; /* Slightly smaller */
          line-height: 1.5;
        }
        .section {
          margin-bottom: 0.25in;
        }
        .job {
          margin-bottom: 0.25in;
        }
        .job-header {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          margin-bottom: 0.05in;
        }
        .period {
          color: #555;
          font-style: italic;
          font-size: 10pt;
          white-space: nowrap;
          padding-left: 15px;
        }
        .company {
          font-weight: bold;
        }
        .skills-container {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); /* Responsive columns */
          gap: 0.2in;
        }
        .skill-category {
          margin-bottom: 0.2in;
        }
        .skill-category h3 { /* Using h3 for skill category title */
            font-size: 12pt;
            margin: 0 0 0.1in 0;
            color: #444;
        }
        .skill-category ul {
            list-style-type: disc; /* Explicit bullets */
            padding-left: 1.2em;
        }
        .skill-category li {
            font-size: 10pt;
        }
        .skill-name { /* No longer needed if skills are listed in ul */
        }
        .achievements {
          padding-left: 1.5em; /* Standard indent */
          margin: 0.1in 0;
          list-style-type: disc; /* Explicit bullet points */
        }
        .achievements li {
          margin-bottom: 0.08in;
        }
        .projects-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); /* Responsive columns */
          gap: 0.25in;
        }
        .project {
          margin-bottom: 0.2in;
        }
        .social-links {
          margin-top: 0.15in;
        }
        .social-link {
          color: #2563eb;
          text-decoration: none;
          margin-right: 12px;
        }
        .project-title, .institution {
          font-weight: bold;
          font-size: 12pt;
        }
        .clients {
          margin-top: 0.15in;
          padding-left: 1.5em;
        }
        .client {
          margin-bottom: 0.1in;
        }
        .client-name {
          font-weight: bold;
        }
        .tag {
          display: inline-block;
          background-color: #e9ecef; /* Lighter tag background */
          color: #495057; /* Darker tag text */
          padding: 3px 10px;
          border-radius: 15px;
          margin-right: 6px;
          margin-bottom: 6px;
          font-size: 9pt;
        }
        .tags {
          margin-top: 0.1in;
        }
        .bio {
          margin-bottom: 0.25in;
          font-size: 11pt;
        }
        .created-date {
          text-align: center;
          font-size: 9pt;
          color: #666;
          margin-top: 40px;
        }
      </style>
    </head>
    <body>
      <div class="header">
        <div>
          <h1>${portfolioData.personalInfo.name}</h1>
          <p style="font-size: 12pt;">${portfolioData.personalInfo.title}</p>
          <p style="font-size: 11pt;">${portfolioData.personalInfo.shortBio}</p>
        </div>
        <div class="contact-info">
          <p><strong>Email:</strong> ${portfolioData.personalInfo.email}</p>
          <p><strong>WhatsApp:</strong> ${portfolioData.personalInfo.whatsapp}</p>
          <p><strong>Location:</strong> ${portfolioData.personalInfo.location}</p>
          <p><strong>Experience:</strong> ${getYearsOfExperience()}+ years</p>
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
                  .sort((a: SkillRating, b: SkillRating) => b.level - a.level) // Keep sorting by level
                  .map((skill: SkillRating) => `<li>${skill.name} (Rating: ${skill.level}/5)</li>`) // Optionally show rating
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
              <p><strong>Technologies:</strong> <i>${project.techStack.join(', ')}</i></p>
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
                <h3 style="font-size: 12pt; margin-bottom: 0.05in;">${edu.degree} in ${edu.focusArea}</h3>
                <p class="institution" style="font-size: 11pt;">${edu.institution}</p>
              </div>
              <div class="period">${edu.period}</div>
            </div>
            ${edu.description ? `<p style="font-size: 10pt; margin-top: 0.05in;">${edu.description}</p>` : ''}
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

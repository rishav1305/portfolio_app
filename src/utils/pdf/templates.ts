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
          line-height: 1.4; /* Original line-height */
          color: #333;
          margin: 0;
          padding: 15px; /* Reverted to px */
          max-width: 8.5in; /* Keep this for page size constraint */
          font-size: 12px; /* Base font size similar to original p,ul */
        }
        * {
          box-sizing: border-box;
        }
        .header {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          border-bottom: 1px solid #2563eb; /* Original border */
          padding-bottom: 10px; /* Reverted */
          margin-bottom: 15px; /* Reverted */
        }
        h1 {
          margin: 0;
          color: #2563eb;
          font-size: 24px; /* Slightly larger than original 22px */
        }
        h2 {
          color: #2563eb;
          font-size: 16px; /* Slightly larger than original 15px */
          margin: 15px 0 8px 0; /* Adjusted */
          border-bottom: 1px solid #e2e8f0;
          padding-bottom: 4px; /* Adjusted */
          text-transform: uppercase;
        }
        h3 {
          font-size: 14px; /* Original */
          margin: 12px 0 5px 0; /* Adjusted */
          color: #333;
        }
        p, ul {
          margin: 0 0 8px 0; /* Adjusted */
          font-size: 12px; /* Base */
        }
        ul {
          padding-left: 20px; /* Original-like indent */
        }
        li {
          margin-bottom: 4px; /* Adjusted */
        }
        .contact-info {
          text-align: right;
          font-size: 11px; /* Slightly smaller */
          line-height: 1.4; /* Adjusted */
        }
        .section {
          margin-bottom: 15px; /* Adjusted */
        }
        .job {
          margin-bottom: 12px; /* Adjusted */
          position: relative;
        }
        .job-header {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          margin-bottom: 4px; /* Adjusted */
        }
        .period {
          color: #666; /* Original */
          font-style: italic;
          font-size: 11px; /* Adjusted */
          white-space: nowrap;
          padding-left: 10px; /* Reverted to px */
        }
        .company {
          font-weight: bold;
        }
        .skills-grid {
          display: grid;
          grid-template-columns: 1fr 1fr 1fr; /* Simplified grid */
          gap: 10px; /* px gap */
          font-size: 11px; /* Adjusted */
        }
        .skill-category {
          margin-bottom: 8px; /* Adjusted */
        }
        .skill-category h4 {
            font-weight: bold;
            font-size: 12px; /* Base size for category title */
            margin: 0 0 4px 0;
            color: #444;
        }
        .skill-name { 
        }
        .skill-content { 
            padding-left: 5px; /* px */
        }
        .achievements {
          padding-left: 20px; /* px */
          margin: 5px 0; /* px */
          list-style-type: disc; 
        }
        .achievements li {
          margin-bottom: 3px; /* px */
          line-height: 1.4; /* Adjusted */
        }
        .projects, .education {
          display: grid;
          grid-template-columns: 1fr 1fr; /* Simplified grid */
          gap: 12px; /* px */
        }
        .project, .edu-item {
          margin-bottom: 8px; /* px */
        }
        .social-links {
          margin-top: 5px; /* px */
          font-size: 11px;
        }
        .social-link {
          color: #2563eb;
          text-decoration: none;
          margin-right: 8px; /* px */
        }
        .project-title, .institution {
          font-weight: bold;
          font-size: 12px; /* Base size */
        }
        .project-desc {
          font-size: 11px;
          line-height: 1.4; /* Adjusted */
          margin: 3px 0; /* px */
        }
        .tech {
          font-style: italic;
          font-size: 10px;
          color: #444;
        }
        .created-date {
          text-align: center;
          font-size: 9px; /* Slightly larger than original 8px */
          color: #666;
          margin-top: 10px; /* px */
        }
        /* Removed the current-role::before with the blue line */
        .featured-role {
          margin-bottom: 14px; /* px */
        }
        .career-evolution {
          margin-left: 15px; /* px */
          padding-top: 2px; /* px */
          font-size: 10px; /* px */
          font-style: italic;
          color: #4b5563;
        }
        .tags {
          display: flex;
          flex-wrap: wrap;
          margin-top: 3px; /* px */
          margin-left: 15px; /* px */
          gap: 4px; /* px */
        }
        .tag {
          background-color: #e5e7eb;
          border-radius: 10px; /* px */
          padding: 1px 6px; /* px */
          font-size: 9px; /* px */
          white-space: nowrap;
        }
      </style>
    </head>
    <body>
      <div class="header">
        <div>
          <h1>${portfolioData.personalInfo.name}</h1>
          <p style="font-size: 14px; margin-top: 5px;">${portfolioData.personalInfo.title} — ${getYearsOfExperience()}+ Years of Experience</p>
          <p style="font-size: 13px;">${portfolioData.personalInfo.shortBio}</p>
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
          line-height: 1.6; /* Original */
          color: #333;
          margin: 0 auto; 
          padding: 20px; /* Original */
          max-width: 8.5in; /* Keep */
          font-size: 14px; /* Original base for p,ul */
        }
        .header {
          display: flex;
          justify-content: space-between;
          align-items: flex-start; /* Added for consistency */
          border-bottom: 2px solid #2563eb; /* Original */
          padding-bottom: 15px; /* Original */
          margin-bottom: 20px; /* Original */
        }
        h1 {
          margin: 0;
          color: #2563eb;
          font-size: 28px; /* Original */
        }
        h2 {
          color: #2563eb;
          font-size: 18px; /* Original */
          margin: 20px 0 10px 0; /* Original */
          border-bottom: 1px solid #e2e8f0; /* Original */
          padding-bottom: 5px; /* Original */
          text-transform: uppercase; /* Keep */
        }
        h3 { /* For job titles, skill categories */
          font-size: 16px; /* Original */
          margin: 14px 0 8px 0; /* Original */
          color: #333; /* Keep */
        }
        p, ul {
          margin: 0 0 10px 0; /* Original */
          font-size: 14px; /* Original */
        }
        ul {
          padding-left: 20px; /* Original */
        }
        li {
          margin-bottom: 5px; /* Original */
        }
        .contact-info {
          text-align: right;
          font-size: 14px; /* Original */
          line-height: 1.6; /* Keep */
        }
        .section {
          margin-bottom: 20px; /* Original */
        }
        .job {
          margin-bottom: 20px; /* Original */
        }
        .job-header {
          display: flex;
          justify-content: space-between;
          align-items: flex-start; /* Added for consistency */
          margin-bottom: 5px; /* Adjusted from original implicit */
        }
        .period {
          color: #666; /* Original */
          font-style: italic;
          font-size: 14px; /* Original */
          white-space: nowrap;
          padding-left: 15px; /* px */
        }
        .company {
          font-weight: bold;
        }
        .skills-container {
          display: grid;
          grid-template-columns: 1fr 1fr 1fr; /* Simplified grid */
          gap: 20px; /* px */
        }
        .skill-category {
          margin-bottom: 15px; /* Original */
        }
        /* .skill-category h3 is covered by general h3 */
        .skill-category ul {
            list-style-type: disc; 
            padding-left: 20px; /* px */
        }
        .skill-category li {
            font-size: 13px; /* Slightly smaller for skill items */
            margin-bottom: 4px;
        }
        .skill-name { 
        }
        .achievements {
          padding-left: 20px; /* Original */
          margin: 5px 0; /* Original */
          list-style-type: disc; 
        }
        .achievements li {
          margin-bottom: 5px; /* Original */
        }
        .projects-grid {
          display: grid;
          grid-template-columns: 1fr 1fr; /* Simplified grid */
          gap: 20px; /* Original */
        }
        .project {
          margin-bottom: 15px; /* Original */
        }
        .social-links {
          margin-top: 8px; /* Original */
        }
        .social-link {
          color: #2563eb;
          text-decoration: none;
          margin-right: 10px; /* Original */
        }
        .project-title, .institution { /* .institution was not bolded before, making it so */
          font-weight: bold;
          font-size: 16px; /* Match h3 */
        }
        .clients {
          margin-top: 10px; /* Original */
          padding-left: 20px; /* Original */
        }
        .client {
          margin-bottom: 8px; /* Original */
        }
        .client-name {
          font-weight: bold;
        }
        .tag {
          display: inline-block;
          background-color: #e2e8f0; /* Original */
          color: #333; /* Adjusted for better contrast if needed */
          padding: 3px 10px; /* Adjusted */
          border-radius: 12px; /* Original */
          margin-right: 6px; /* Adjusted */
          margin-bottom: 6px; /* Adjusted */
          font-size: 12px; /* Original */
        }
        .tags {
          margin-top: 8px; /* Original */
        }
        .bio {
          margin-bottom: 20px; /* Original */
          font-size: 14px; /* Original */
        }
        .created-date {
          text-align: center;
          font-size: 12px; /* Original */
          color: #666;
          margin-top: 40px; /* Original */
        }
      </style>
    </head>
    <body>
      <div class="header">
        <div>
          <h1>${portfolioData.personalInfo.name}</h1>
          <p style="font-size: 16px;">${portfolioData.personalInfo.title}</p>
          <p style="font-size: 15px;">${portfolioData.personalInfo.shortBio}</p>
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
                ${job.clients.map((client: { name: string; description: string | string[] }) => `
                  <div class="client">
                    <p class="client-name">${client.name}</p>
                    ${Array.isArray(client.description)
      ? `<ul class="achievements" style="margin-top:0">${client.description.map(d => `<li>${d}</li>`).join('')}</ul>`
      : `<p>${client.description}</p>`
    }
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
                <h3 style="font-size: 16px; margin-bottom: 4px;">${edu.degree} in ${edu.focusArea}</h3>
                <p class="institution" style="font-size: 15px;">${edu.institution}</p>
              </div>
              <div class="period">${edu.period}</div>
            </div>
            ${edu.description ? `<p style="font-size: 13px; margin-top: 4px;">${edu.description}</p>` : ''}
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

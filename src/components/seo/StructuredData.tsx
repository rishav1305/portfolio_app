'use client';

import React from 'react';
import portfolioData from '@/data/portfolioData';

const StructuredData = () => {
  const { personalInfo, professionalExperience, freelanceExperience, projects } = portfolioData;

  // Person Schema
  const personSchema = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: personalInfo.name,
    jobTitle: personalInfo.title,
    description: personalInfo.shortBio,
    email: personalInfo.email,
    telephone: personalInfo.whatsapp,
    url: 'https://rishavchatterjee.com',
    sameAs: [
      personalInfo.socialMedia.github,
      personalInfo.socialMedia.linkedin,
      personalInfo.socialMedia.medium,
      personalInfo.socialMedia.leetcode,
    ],
    address: {
      '@type': 'PostalAddress',
      addressLocality: personalInfo.location,
      addressCountry: 'India'
    },
    alumniOf: {
      '@type': 'CollegeOrUniversity',
      name: 'Delhi Technological University (DTU)'
    }
  };

  // Professional Service Schema
  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    name: `${personalInfo.name} - AI Engineer | AI Consultant | AI Researcher`,
    description: personalInfo.shortBio,
    url: 'https://rishavchatterjee.com',
    telephone: personalInfo.whatsapp,
    address: {
      '@type': 'PostalAddress',
      addressLocality: personalInfo.location,
      addressCountry: 'India'
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: '28.7041',  // Delhi coordinates
      longitude: '77.1025'
    },
    priceRange: '$$',
    openingHours: 'Mo-Fr 09:00-18:00',
    image: 'https://rishavchatterjee.com/images/profile.png',
    founder: {
      '@type': 'Person',
      name: personalInfo.name
    },
    sameAs: [
      personalInfo.socialMedia.github,
      personalInfo.socialMedia.linkedin
    ],
    areaServed: {
      '@type': 'GeoCircle',
      geoMidpoint: {
        '@type': 'GeoCoordinates', 
        latitude: '28.7041',
        longitude: '77.1025'
      },
      geoRadius: '5000'
    },
    makesOffer: [
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Data Engineering Services',
          description: 'Scalable data pipeline development and optimization'
        }
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Data Visualization',
          description: 'Interactive dashboards and data visualization solutions'
        }
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Cloud Infrastructure',
          description: 'AWS and Azure cloud infrastructure setup and optimization'
        }
      }
    ]
  };

  // All work experience entries
  const allExperience = [...freelanceExperience, ...professionalExperience];
  
  // Work Experience Schema
  const workExperienceSchema = allExperience.map((job, index) => ({
    '@context': 'https://schema.org',
    '@type': 'WorkExperience',
    name: job.role,
    description: job.achievements.join('. '),
    employmentType: job.experienceType === 'freelance' ? 'CONTRACTOR' : 'FULL_TIME',
    hiringOrganization: {
      '@type': 'Organization',
      name: job.company
    },
    dateFrom: job.startDate,
    dateTo: job.endDate || 'Present',
    jobLocation: {
      '@type': 'Place',
      address: {
        '@type': 'PostalAddress',
        addressLocality: job.location
      }
    }
  }));

  // Projects Schema
  const projectsSchema = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    itemListElement: projects.map((project, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      item: {
        '@type': 'SoftwareSourceCode',
        name: project.title,
        description: project.description,
        codeRepository: project.link,
        programmingLanguage: {
          '@type': 'ComputerLanguage',
          name: project.techStack.join(', ')
        },
        image: `https://rishavchatterjee.com${project.image}`,
        author: {
          '@type': 'Person',
          name: personalInfo.name
        }
      }
    }))
  };

  return (
    <>
      <script 
        type="application/ld+json" 
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
      />
      <script 
        type="application/ld+json" 
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <script 
        type="application/ld+json" 
        dangerouslySetInnerHTML={{ __html: JSON.stringify(projectsSchema) }}
      />
      {workExperienceSchema.map((schema, index) => (
        <script 
          key={`work-experience-${index}`}
          type="application/ld+json" 
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}
    </>
  );
};

export default StructuredData;

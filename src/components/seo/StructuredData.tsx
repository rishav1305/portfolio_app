'use client';

import React from 'react';
import { useSiteConfig } from '@/contexts/SiteConfigContext';
import type { WorkExperience, Project } from '@/types/portfolio';

type StructuredDataProps = {
  experience?: WorkExperience[];
  projects?: Project[];
};

const StructuredData = ({ experience = [], projects = [] }: StructuredDataProps) => {
  const siteConfig = useSiteConfig();
  const professionalExperience = experience.filter(e => e.experienceType === 'professional');
  const freelanceExperience = experience.filter(e => e.experienceType === 'freelance');

  // Person Schema
  const personSchema = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: siteConfig.name,
    jobTitle: siteConfig.title,
    description: siteConfig.short_bio,
    email: siteConfig.email,
    telephone: siteConfig.whatsapp,
    url: 'https://rishavchatterjee.com',
    sameAs: [
      siteConfig.social_media.github,
      siteConfig.social_media.linkedin,
      siteConfig.social_media.medium,
      siteConfig.social_media.leetcode,
    ],
    address: {
      '@type': 'PostalAddress',
      addressLocality: siteConfig.location,
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
    name: `${siteConfig.name} - AI Engineer | AI Consultant | AI Researcher`,
    description: siteConfig.short_bio,
    url: 'https://rishavchatterjee.com',
    telephone: siteConfig.whatsapp,
    address: {
      '@type': 'PostalAddress',
      addressLocality: siteConfig.location,
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
      name: siteConfig.name
    },
    sameAs: [
      siteConfig.social_media.github,
      siteConfig.social_media.linkedin
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
          name: siteConfig.name
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

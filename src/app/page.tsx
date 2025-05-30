'use client';

import React from "react";
import Image from "next/image";
import Link from "next/link";
import HeroSectionWithHexagons from "@/components/ui/HeroSectionWithHexagons";
import portfolioData, { getYearsOfExperience, getAverageSkillRatings, WorkExperience } from "@/data/portfolioData";
import AutoScrollTestimonials from "@/components/ui/AutoScrollTestimonials";
import ContactLink from "@/components/ui/ContactLink";
import SkillCard from "@/components/ui/SkillCard";
import DomainExpertise from "@/components/ui/DomainExpertise";

export default function Home() {
  const yearsOfExperience = getYearsOfExperience();
  const skillCategories = getAverageSkillRatings();
  const { personalInfo, professionalExperience, freelanceExperience, education } = portfolioData;
  
  // Function to render stars based on skill level with more precise .00, .25, .50, and .75 increments
  // Also colors stars green for ratings >= 4, yellow for others
  const renderStars = (level: number) => {
    const stars: React.ReactNode[] = [];
    const fullStars = Math.floor(level);
    const fraction = level - fullStars;
    
    // Determine which type of partial star to show
    let partialType: string | null = null;
    if (fraction >= 0.13 && fraction < 0.38) {
      partialType = "quarter";
    } else if (fraction >= 0.38 && fraction < 0.63) {
      partialType = "half";
    } else if (fraction >= 0.63 && fraction < 0.88) {
      partialType = "three-quarter";
    }
    
    // Determine color based on skill level
    const starColor = level >= 4 ? "text-green-500" : "text-yellow-400";
    
    // Add full stars
    for (let i = 0; i < fullStars; i++) {
      stars.push(
        <svg key={`full-${i}`} className={`w-5 h-5 ${starColor}`} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
        </svg>
      );
    }
    
    // Add the appropriate partial star if needed
    if (partialType === "quarter") {
      stars.push(
        <svg key="quarter" className={`w-5 h-5 ${starColor}`} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id={`quarter-star-gradient-${level}`} x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="25%" stopColor="currentColor" />
              <stop offset="25%" stopColor="#e5e7eb" />
            </linearGradient>
          </defs>
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" fill={`url(#quarter-star-gradient-${level})`}></path>
        </svg>
      );
    } else if (partialType === "half") {
      stars.push(
        <svg key="half" className={`w-5 h-5 ${starColor}`} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id={`half-star-gradient-${level}`} x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="50%" stopColor="currentColor" />
              <stop offset="50%" stopColor="#e5e7eb" />
            </linearGradient>
          </defs>
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" fill={`url(#half-star-gradient-${level})`}></path>
        </svg>
      );
    } else if (partialType === "three-quarter") {
      stars.push(
        <svg key="three-quarter" className={`w-5 h-5 ${starColor}`} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id={`three-quarter-star-gradient-${level}`} x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="75%" stopColor="currentColor" />
              <stop offset="75%" stopColor="#e5e7eb" />
            </linearGradient>
          </defs>
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" fill={`url(#three-quarter-star-gradient-${level})`}></path>
        </svg>
      );
    }
    
    // Add empty stars
    const emptyStars = 5 - fullStars - (partialType ? 1 : 0);
    for (let i = 0; i < emptyStars; i++) {
      stars.push(
        <svg key={`empty-${i}`} className="w-5 h-5 text-gray-200" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
        </svg>
      );
    }
    
    return stars;
  };
  
  return (
    <div className="min-h-screen bg-white font-[family-name:var(--font-geist-sans)]">
      {/* Hero Section */}
      <HeroSectionWithHexagons />

      {/* About Section with Profile Image */}
      <section 
        className="py-16 px-6 md:px-20 bg-gray-200" 
        id="about-section"
        aria-labelledby="about-heading"
      >
        <div 
          className="max-w-6xl mx-auto flex flex-col md:flex-row gap-10 items-center"
          itemScope 
          itemType="https://schema.org/Person"
          itemProp="mainEntity"
        >
          <div className="w-48 h-48 md:w-64 md:h-64 rounded-full bg-gray-300 overflow-hidden flex-shrink-0 relative">
            {/* Using the uploaded profile image */}
            <Image 
              src="/images/profile.png"
              alt={`${personalInfo.name} - Freelance Data Consultant specializing in cloud solutions and data engineering`}
              fill
              sizes="(max-width: 768px) 12rem, 16rem"
              className="object-cover"
              priority
              itemProp="image"
            />
            <meta itemProp="name" content={personalInfo.name} />
            <meta itemProp="jobTitle" content="Freelance Data Consultant" />
          </div>
          <div>
            <h2 id="about-heading" className="text-3xl font-bold mb-6">Hi, I'm <span itemProp="givenName">{personalInfo.name.split(' ')[0]}</span>.</h2>
            <p className="text-lg text-gray-700 mb-6" itemProp="description">
              {personalInfo.shortBio}
            </p>
            <p className="text-lg text-gray-700 mb-6" itemProp="disambiguatingDescription">
              {personalInfo.longBio[2]}
            </p>
            <div className="mt-4">
              <Link 
                href="/about" 
                className="inline-flex items-center text-blue-600 font-medium hover:underline"
                aria-label={`Learn more about ${personalInfo.name}`}
                rel="author"
              >
                View Full About Details
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>
      
      {/* Testimonials Section - Enhanced with AutoScrollTestimonials */}
      <section className="py-16 px-6 md:px-20 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-gray-800 relative inline-block">
              Client Testimonials
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto mt-6">
              What clients and colleagues say about working with me
            </p>
          </div>
          
          {/* Auto-scrolling testimonial carousel */}
          <div className="mb-10">
            <AutoScrollTestimonials testimonials={portfolioData.testimonials || []} />
          </div>
          
          <div className="text-center mt-10">
            <Link 
              href="/testimonials" 
              className="inline-flex items-center bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors shadow-lg hover:shadow-xl transform hover:-translate-y-1 duration-300"
            >
              View All Testimonials
              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Experience & Education Section */}
      <section className="py-16 px-6 md:px-20 bg-gray-100">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center">Experience</h2>
          
          {/* Freelance Experience - Mobile-friendly card layout */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold mb-6 border-b pb-2">
              Freelance Experience
            </h3>
            <div className="space-y-6">
              {freelanceExperience.map((job, index) => (
                  <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
                    <div className="p-6">
                      <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                        <div className="mb-4 md:mb-0">
                          <h4 className="text-xl font-bold text-gray-800">{job.role}</h4>
                          <p className="text-blue-600 font-medium">{job.company}</p>
                          {job.remoteWork && (
                            <div className="mt-2">
                              <span className="inline-flex items-center px-3 py-1 text-sm font-medium rounded-full bg-green-100 text-green-800">
                                <svg className="w-4 h-4 mr-1.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                                </svg>
                                Remote Work
                              </span>
                            </div>
                          )}
                        </div>
                        <div className="text-gray-600">
                          <p className="font-semibold">{job.period}</p>
                          <p>{job.location}</p>
                        </div>
                      </div>
                      
                      <div className="mt-4">
                        <p className="font-medium text-gray-700 mb-2">Key Achievements:</p>
                        <ul className="list-disc pl-5 space-y-1 text-gray-700">
                          {job.achievements.map((achievement, i) => (
                            <li key={i}>{achievement}</li>
                          ))}
                        </ul>
                      </div>
                      
                      {((job as WorkExperience).clients && (job as WorkExperience).clients!.length > 0) && (
                        <div className="mt-4">
                          <p className="font-medium text-gray-700 mb-2">Clients:</p>
                          <ul className="list-disc pl-5 space-y-2">
                            {(job as WorkExperience).clients!.map((client, i) => (
                              <li key={i} className="text-gray-700">
                                <span className="font-medium">{client.name}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </div>
                  </div>
                ))}
            </div>
          </div>
          
          {/* Professional Experience - Mobile-friendly card layout */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold mb-6 border-b pb-2">Professional Experience</h3>
            <div className="space-y-6">
              {professionalExperience.map((job, index) => (
                <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
                  <div className="p-6">
                    <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                      <div className="mb-4 md:mb-0">
                        <h4 className="text-xl font-bold text-gray-800">{job.role}</h4>
                        <p className="text-blue-600 font-medium">{job.company}</p>
                        {job.remoteWork && (
                          <div className="mt-2">
                            <span className="inline-flex items-center px-3 py-1 text-sm font-medium rounded-full bg-green-100 text-green-800">
                              <svg className="w-4 h-4 mr-1.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                              </svg>
                              Remote Work
                            </span>
                          </div>
                        )}
                      </div>
                      <div className="text-gray-600">
                        <p className="font-semibold">{job.period}</p>
                        <p>{job.location}</p>
                      </div>
                    </div>
                    
                    <div className="mt-4">
                      <p className="font-medium text-gray-700 mb-2">Key Achievements:</p>
                      <ul className="list-disc pl-5 space-y-1 text-gray-700">
                        {job.achievements.map((achievement, i) => (
                          <li key={i}>{achievement}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Education - Mobile-friendly card layout */}
          <div>
            <h3 className="text-2xl font-bold mb-6 border-b pb-2">Education</h3>
            <div className="space-y-6">
              {education.map((edu, index) => (
                <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
                  <div className="p-6">
                    <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                      <div className="mb-4 md:mb-0">
                        <h4 className="text-xl font-bold text-gray-800">{edu.institution}</h4>
                        <p className="text-blue-600 font-medium">{edu.degree}</p>
                      </div>
                      <div className="text-gray-600">
                        <p className="font-semibold">{edu.period}</p>
                        <p>{edu.location}</p>
                      </div>
                    </div>
                    
                    {edu.focusArea && (
                      <div className="mt-4">
                        <p className="font-medium text-gray-700 mb-2">Focus Area:</p>
                        <p className="text-gray-700">{edu.focusArea}</p>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="text-center mt-12">
            <Link 
              href="/experience" 
              className="inline-flex items-center text-blue-600 font-medium hover:underline"
            >
              View Full Experience Details
              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Domain Expertise Section */}
      <section 
        className="py-16 px-6 md:px-20 bg-gray-50"
        id="domain-expertise-section"
        aria-labelledby="domain-expertise-heading"
      >
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-8">
            <h2 id="domain-expertise-heading" className="text-3xl font-bold mb-4">Domain Expertise</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Areas where I've developed specialized knowledge and delivered impactful solutions as a Remote Work professional
            </p>
          </div>
          
          <DomainExpertise className="mb-8" />
        </div>
      </section>

      {/* Technical Skills Section */}
      <section 
        className="py-16 px-6 md:px-20 bg-white"
        id="skills-section"
        aria-labelledby="skills-heading"
      >
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-8">
            <h2 id="skills-heading" className="text-3xl font-bold mb-4">Technical Skills</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              My expertise spans data engineering, analytics, cloud services, and project management - skills I've refined both in corporate settings and as a freelance data consultant
            </p>
          </div>
          
          <div 
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-8"
            itemScope
            itemType="https://schema.org/ItemList"
          >
            <meta itemProp="name" content="Technical Skills" />
            <meta itemProp="numberOfItems" content={Object.entries(skillCategories).length.toString()} />
            
            {Object.entries(skillCategories)
              .sort(([, ratingA], [, ratingB]) => ratingB - ratingA) // Sort by rating in descending order
              .map(([category, rating], index) => (
                <div 
                  key={category} 
                  className="bg-white p-3 rounded-lg shadow-md border border-gray-100 hover:shadow-lg transition-shadow"
                  itemProp="itemListElement"
                  itemScope
                  itemType="https://schema.org/ListItem"
                >
                  <meta itemProp="position" content={(index + 1).toString()} />
                  <div className="flex justify-between items-center">
                    <h3 className="text-lg font-semibold" itemProp="name">{category}</h3>
                    <div 
                      className="flex" 
                      aria-label={`${rating} out of 5 skill level`}
                    >
                      <span itemProp="item" itemScope itemType="https://schema.org/Rating">
                        <meta itemProp="ratingValue" content={rating.toString()} />
                        <meta itemProp="bestRating" content="5" />
                      </span>
                      {renderStars(rating)}
                    </div>
                  </div>
                </div>
              ))
            }
          </div>
          
          <div className="text-center mt-8">
            <Link 
              href="/tech-skills" 
              className="inline-flex items-center text-blue-600 font-medium hover:underline"
            >
              View All Technical Skills
              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Connect With Me Section */}
      <section 
        className="py-16 px-6 md:px-20 bg-gradient-to-r from-blue-50 to-indigo-50"
        id="connect-section"
        aria-labelledby="connect-heading"
      >
        <div className="max-w-6xl mx-auto">
          <h2 id="connect-heading" className="text-3xl font-bold mb-10 text-center">Connect With {personalInfo.name.split(' ')[0]}</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* LinkedIn Card */}
            <ContactLink
              href={personalInfo.socialMedia.linkedin}
              title="LinkedIn"
              description="Connect professionally and follow my career updates and insights on data engineering and visualization."
              cta="Visit Profile"
              iconBgColor="bg-blue-100"
              textColor="text-blue-600"
              icon={
                <svg className="w-8 h-8 text-blue-700" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
              }
            />
            
            {/* LeetCode Card */}
            <ContactLink
              href={personalInfo.socialMedia.leetcode}
              title="LeetCode"
              description="Check out my problem-solving skills and algorithmic solutions on LeetCode."
              cta="View Profile"
              iconBgColor="bg-yellow-100"
              textColor="text-yellow-600"
              icon={
                <svg className="w-8 h-8 text-yellow-600" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                  <path d="M16.102 17.93l-2.697 2.607c-.466.467-1.111.662-1.823.662s-1.357-.195-1.824-.662l-4.332-4.363c-.467-.467-.702-1.15-.702-1.863s.235-1.357.702-1.824l4.319-4.38c.467-.467 1.125-.645 1.837-.645s1.357.195 1.823.662l2.697 2.606c.514.515 1.365.497 1.9-.038.535-.536.553-1.387.039-1.901l-2.609-2.636a5.055 5.055 0 0 0-2.445-1.337l2.467-2.503c.516-.514.498-1.366-.037-1.901-.535-.535-1.387-.552-1.902-.038l-10.1 10.101c-.981.982-1.494 2.337-1.494 3.835 0 1.498.513 2.895 1.494 3.875l4.347 4.361c.981.979 2.337 1.452 3.834 1.452s2.853-.512 3.835-1.494l2.609-2.637c.514-.514.496-1.365-.039-1.9s-1.386-.553-1.899-.039zM20.811 13.01H10.666c-.702 0-1.27.604-1.27 1.346s.568 1.346 1.27 1.346h10.145c.701 0 1.27-.604 1.27-1.346s-.569-1.346-1.27-1.346z" />
                </svg>
              }
            />
            
            {/* GitHub Card */}
            <ContactLink
              href={personalInfo.socialMedia.github}
              title="GitHub"
              description="Explore my projects, code repositories, and open source contributions."
              cta="Visit Repositories"
              iconBgColor="bg-gray-100"
              textColor="text-gray-800"
              icon={
                <svg className="w-8 h-8 text-gray-900" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
              }
            />
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section 
        className="py-16 px-6 md:px-20 bg-gray-100"
        id="contact-section"
        aria-labelledby="contact-heading"
        itemScope
        itemType="https://schema.org/ContactPage"
      >
        <div className="max-w-3xl mx-auto text-center">
          <h2 id="contact-heading" className="text-3xl font-bold mb-6">CONTACT</h2>
          <p className="text-lg text-gray-700 mb-10" itemProp="description">
            Looking for freelance data consulting services? Feel free to contact me about your project needs or any questions. For open source projects, please open an issue or pull request on 
            Github. For freelance inquiries or collaborations, send me an email at 
            <a 
              href={`mailto:${personalInfo.email}`} 
              className="text-blue-600 ml-1"
              itemProp="email"
              aria-label={`Email ${personalInfo.name} at ${personalInfo.email}`}
            >
              {personalInfo.email}
            </a>.
          </p>
          
          <div 
            className="flex justify-center gap-6"
            role="navigation"
            aria-label="Contact options"
          >
            <a 
              href={personalInfo.socialMedia.github} 
              className="text-gray-700 hover:text-blue-600 flex items-center"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Visit GitHub profile"
            >
              <svg className="w-5 h-5 mr-2" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
              GITHUB
            </a>
            <a 
              href={`mailto:${personalInfo.email}`} 
              className="text-gray-700 hover:text-blue-600 flex items-center"
              aria-label={`Email ${personalInfo.name}`}
            >
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              MAIL
            </a>
          </div>
          <link itemProp="sameAs" href={personalInfo.socialMedia.github} />
          <link itemProp="sameAs" href={personalInfo.socialMedia.linkedin} />
        </div>
      </section>

      {/* Footer */}
      <footer 
        className="py-8 px-6 md:px-20 border-t border-gray-200 bg-gray-50" 
        itemScope 
        itemType="https://schema.org/WPFooter"
      >
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 mb-4 md:mb-0">
            © {new Date().getFullYear()} {personalInfo.name}. All rights reserved.
          </p>
          <nav 
            className="flex gap-6"
            aria-label="Legal information"
          >
            <Link 
              href="/privacy" 
              className="text-gray-500 hover:text-gray-700"
              aria-label="View privacy policy"
            >
              Privacy Policy
            </Link>
            <Link 
              href="/terms" 
              className="text-gray-500 hover:text-gray-700"
              aria-label="View terms of use"
            >
              Terms of Use
            </Link>
          </nav>
        </div>
      </footer>
    </div>
  );
}

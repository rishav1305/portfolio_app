'use client';

import React from "react";
import Image from "next/image";
import Link from "next/link";
import dynamic from "next/dynamic";
import HeroSectionWithHexagons from "@/components/ui/HeroSectionWithHexagons";
import portfolioData, { getYearsOfExperience, getAverageSkillRatings } from "@/data/portfolioData";
import AutoScrollTestimonials from "@/components/ui/AutoScrollTestimonials";
import ContactLink from "@/components/ui/ContactLink";
import DomainExpertise from "@/components/ui/DomainExpertise";
import ExperienceTimeline from "@/components/ui/ExperienceTimeline";
import ImpactMetricCard from "@/components/ui/ImpactMetricCard";
import AboutStats from "@/components/ui/AboutStats";
import EducationHighlight from "@/components/ui/EducationHighlight";

// Dynamically import Recharts component to avoid SSR issues
const SkillsRadar = dynamic(() => import("@/components/ui/SkillsRadar"), { ssr: false });
// Dynamic import for Chat Widget to keep initial bundle small
const AIChatWidget = dynamic(() => import("@/components/ui/AIChatWidget"), { ssr: false });

export default function Home() {
  const yearsOfExperience = getYearsOfExperience();
  const skillCategories = getAverageSkillRatings();
  const { personalInfo, experience, skillRadarData } = portfolioData;

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
          className="max-w-6xl mx-auto flex flex-col md:flex-row gap-16 items-center"
          itemScope
          itemType="https://schema.org/Person"
          itemProp="mainEntity"
        >
          <div className="w-48 h-48 md:w-64 md:h-64 rounded-full bg-white shadow-xl overflow-hidden flex-shrink-0 relative border-4 border-white ring-1 ring-gray-100">
            {/* Using the uploaded profile image */}
            <Image
              src="/images/profile.png"
              alt={`${personalInfo.name} - AI Tech Lead & Data Specialist`}
              fill
              sizes="(max-width: 768px) 12rem, 16rem"
              className="object-cover"
              priority
              itemProp="image"
            />
            <meta itemProp="name" content={personalInfo.name} />
            <meta itemProp="jobTitle" content="AI Tech Lead" />
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

            {/* New Stats Row */}
            <AboutStats />
          </div>
        </div>
      </section>

      {/* Technical Skills Section - Now with Radar Chart */}
      <section
        className="py-16 px-6 md:px-20 bg-white"
        id="skills-section"
        aria-labelledby="skills-heading"
      >
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 id="skills-heading" className="text-3xl font-bold mb-4 inline-block relative after:content-[''] after:absolute after:bottom-[-10px] after:left-1/2 after:-translate-x-1/2 after:w-16 after:h-1 after:bg-blue-600 after:rounded-full">Technical Proficiency</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto mt-6">
              A holistic view of my expertise across Data Engineering, AI, and Leadership.
            </p>
          </div>

          <div className="flex flex-col md:flex-row items-center gap-10">
            {/* Radar Chart */}
            <div className="w-full md:w-1/2 h-[400px]">
              {skillRadarData && <SkillsRadar data={skillRadarData} />}
            </div>

            {/* Text / Summary Side */}
            <div className="w-full md:w-1/2 space-y-6">
              <h3 className="text-2xl font-semibold text-gray-800">Bridging the Gap Between Data & AI</h3>
              <p className="text-gray-700 leading-relaxed">
                My unique strength lies in the intersection of <strong>Traditional Data Engineering</strong> and <strong>Modern Agentic AI</strong>.
                I don&apos;t just build pipelines; I architect intelligent systems that learn and adapt.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="p-4 bg-blue-50 rounded-lg">
                  <div className="font-bold text-blue-700 text-lg">5+ Years</div>
                  <div className="text-sm text-gray-600">Data Engineering</div>
                </div>
                <div className="p-4 bg-purple-50 rounded-lg">
                  <div className="font-bold text-purple-700 text-lg">Tech Lead</div>
                  <div className="text-sm text-gray-600">Team Management</div>
                </div>
                <div className="p-4 bg-green-50 rounded-lg">
                  <div className="font-bold text-green-700 text-lg">AI / LLM</div>
                  <div className="text-sm text-gray-600">RAG & Agents</div>
                </div>
                <div className="p-4 bg-orange-50 rounded-lg">
                  <div className="font-bold text-orange-700 text-lg">Cloud</div>
                  <div className="text-sm text-gray-600">AWS & Azure</div>
                </div>
              </div>
              <div className="pt-4">
                <Link
                  href="/tech-skills"
                  className="inline-flex items-center text-blue-600 font-medium hover:underline"
                >
                  View Detailed Skill Breakdown
                  <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 px-6 md:px-20 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4 inline-block relative after:content-[''] after:absolute after:bottom-[-10px] after:left-1/2 after:-translate-x-1/2 after:w-16 after:h-1 after:bg-blue-600 after:rounded-full">Key Strategic Wins</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto mt-6">
              Transforming challenges into measurable business impact.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {portfolioData.caseStudies?.map((study) => (
              <ImpactMetricCard key={study.id} study={study} />
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section - Enhanced with Timeline */}
      <section className="py-16 px-6 md:px-20 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4 inline-block relative after:content-[''] after:absolute after:bottom-[-10px] after:left-1/2 after:-translate-x-1/2 after:w-16 after:h-1 after:bg-blue-600 after:rounded-full">Professional Journey</h2>
            <p className="text-lg text-gray-600 mt-6">
              Delivering impact as a Tech Lead and Individual Contributor
            </p>
          </div>

          <ExperienceTimeline experiences={[...portfolioData.professionalExperience, ...portfolioData.freelanceExperience]} />

          <div className="text-center mt-12 hidden">
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
        className="py-16 px-6 md:px-20 bg-white"
        id="domain-expertise-section"
        aria-labelledby="domain-expertise-heading"
      >
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 id="domain-expertise-heading" className="text-3xl font-bold mb-4 inline-block relative after:content-[''] after:absolute after:bottom-[-10px] after:left-1/2 after:-translate-x-1/2 after:w-16 after:h-1 after:bg-blue-600 after:rounded-full">Domain Expertise</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto mt-6">
              Areas where I&apos;ve developed specialized knowledge and delivered impactful solutions
            </p>
          </div>

          <DomainExpertise className="mb-8" />
        </div>
      </section>

      {/* Education Section */}
      <section className="py-16 px-6 md:px-20 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4 text-gray-800 inline-block relative after:content-[''] after:absolute after:bottom-[-10px] after:left-1/2 after:-translate-x-1/2 after:w-16 after:h-1 after:bg-blue-600 after:rounded-full">
              Education
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto mt-6">
              Academic background and foundational knowledge.
            </p>
          </div>

          <EducationHighlight education={portfolioData.education} />
        </div>
      </section>

      {/* Testimonials Section - Enhanced with AutoScrollTestimonials */}
      <section className="py-16 px-6 md:px-20 bg-gray-100">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4 text-gray-800 inline-block relative after:content-[''] after:absolute after:bottom-[-10px] after:left-1/2 after:-translate-x-1/2 after:w-16 after:h-1 after:bg-blue-600 after:rounded-full">
              Client Testimonials
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto mt-6">
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
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
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
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
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
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
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
      {/* AI Chat Widget - Fixed Position */}
      {portfolioData.chatSimulation && <AIChatWidget questions={portfolioData.chatSimulation} />}
    </div>
  );
}

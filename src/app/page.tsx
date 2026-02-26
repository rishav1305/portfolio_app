import React from "react";
import Image from "next/image";
import Link from "next/link";
import BrandMarquee from "@/components/ui/BrandMarquee";
import AutoScrollTestimonials from "@/components/ui/AutoScrollTestimonials";
import DomainExpertise from "@/components/ui/DomainExpertise";
import ExperienceTimeline from "@/components/ui/ExperienceTimeline";
import ImpactMetricCard from "@/components/ui/ImpactMetricCard";
import AboutStats from "@/components/ui/AboutStats";
import EducationHighlight from "@/components/ui/EducationHighlight";
import FreelanceGrid from "@/components/ui/FreelanceGrid";
import ServicePillars from "@/components/ui/ServicePillars";
import BlogPreview from "@/components/ui/BlogPreview";
import { SkillsRadar, AIChatWidget } from "@/components/ui/ClientDynamicImports";
import ParticleField from "@/components/ui/ParticleField";
import TypewriterRole from "@/components/ui/TypewriterRole";

import { getSiteConfig } from "@/services/siteConfig";
import { getTestimonials } from "@/services/testimonials";
import { getCaseStudies } from "@/services/caseStudies";
import { getBrands } from "@/services/brands";
import { getSkillRadarData } from "@/services/skillRadar";
import { getExperience } from "@/services/experience";
import { getEducation } from "@/services/education";

export default async function Home() {
  const [siteConfig, testimonials, caseStudies, brands, skillRadarData, experience, education] =
    await Promise.all([
      getSiteConfig(),
      getTestimonials(),
      getCaseStudies(),
      getBrands(),
      getSkillRadarData(),
      getExperience(),
      getEducation(),
    ]);

  const personalName = siteConfig?.name || 'RISHAV';
  const personalEmail = siteConfig?.email || 'mail@rishavchatterjee.com';
  const longBio = siteConfig?.long_bio || [];
  const socialMedia = siteConfig?.social_media || { github: '', linkedin: '', leetcode: '', medium: '' };

  const professionalExperience = experience.filter(e => e.experienceType === 'professional');
  const freelanceExperience = experience.filter(e => e.experienceType === 'freelance');

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative min-h-[100vh] flex items-center justify-center overflow-hidden bg-gray-900 text-white">
        <div className="absolute inset-0 z-0 opacity-60">
          <ParticleField />
        </div>

        <div className="container mx-auto px-6 relative z-10 text-center max-w-5xl py-20">
          <h1 className="text-6xl md:text-8xl font-extrabold mb-8 tracking-tight leading-tight font-[family-name:var(--font-geist-sans)]">
            RISHAV CHATTERJEE
          </h1>

          <div className="text-3xl md:text-5xl mb-8 min-h-[1.4em]">
            <TypewriterRole />
          </div>

          <div className="w-32 h-1.5 bg-blue-500 mx-auto mb-8 rounded-full"></div>

          <p className="text-lg md:text-xl text-gray-300 mb-10 max-w-2xl mx-auto leading-relaxed">
            Building production AI systems — 8 years of Python, SQL, and data engineering.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="px-8 py-4 bg-blue-600 text-white rounded-lg font-bold text-lg hover:bg-blue-700 transition-all shadow-lg hover:shadow-blue-500/30 transform hover:-translate-y-1"
            >
              Schedule Consultation
            </Link>
            <Link
              href="/blog"
              className="px-8 py-4 bg-transparent text-white border-2 border-white rounded-lg font-bold text-lg hover:bg-white hover:text-gray-900 transition-all"
            >
              Read Blog
            </Link>
          </div>

          <div className="mt-8 flex justify-center items-center gap-2 text-sm text-gray-400">
            <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
            Available for projects starting Q2 2026
          </div>
        </div>
      </section>
      {/* Social Proof: Brands Section */}
      <section className="bg-slate-50 border-b border-gray-200">
        <BrandMarquee brands={brands} />
      </section>

      {/* Credibility: About & High-Impact Stats */}
      <section
        className="py-16 px-6 md:px-20 bg-white"
        id="about-section"
        aria-labelledby="about-heading"
      >
        <div
          className="max-w-6xl mx-auto flex flex-col md:flex-row gap-12 md:gap-16 items-center"
          itemScope
          itemType="https://schema.org/Person"
          itemProp="mainEntity"
        >
          <div className="w-40 h-40 md:w-56 md:h-56 rounded-full bg-white shadow-xl overflow-hidden flex-shrink-0 relative border-4 border-white ring-1 ring-gray-100">
            <Image
              src="/images/profile.png"
              alt={`${personalName} - AI Tech Lead & Data Specialist`}
              fill
              sizes="(max-width: 768px) 10rem, 14rem"
              className="object-cover"
              priority
              itemProp="image"
            />
            <meta itemProp="name" content={personalName} />
            <meta itemProp="jobTitle" content="AI Engineer | AI Consultant | AI Researcher" />
          </div>
          <div className="flex-grow text-center md:text-left">
            <h2 id="about-heading" className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">
              Hi, I&apos;m <span className="text-blue-600" itemProp="givenName">{personalName.split(' ')[0]}</span>.
            </h2>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed" itemProp="description">
              {longBio[1] || ''}
            </p>

            <div className="flex flex-wrap gap-4 justify-center md:justify-start mb-8">
              <Link
                href="#about-section"
                className="inline-flex items-center text-blue-600 font-bold hover:text-blue-800 transition-colors"
              >
                More about me
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>

            {/* Stats Row */}
            <AboutStats />
          </div>
        </div>
      </section>

      {/* Services: How I Can Help */}
      <ServicePillars />

      {/* Social Proof: Testimonials */}
      <section className="py-16 px-6 md:px-20 bg-gray-50 border-y border-gray-100">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800">
              Trusted by Technical Leaders
            </h2>
          </div>
          <AutoScrollTestimonials testimonials={testimonials} />

          <div className="text-center mt-8">
            <Link
              href="/testimonials"
              className="inline-flex items-center text-sm text-gray-500 hover:text-blue-600 transition-colors"
            >
              Read all recommendations
              <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* ROI & Impact: Strategic Wins */}
      <section className="py-20 px-6 md:px-20 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4 inline-block relative after:content-[''] after:absolute after:bottom-[-10px] after:left-1/2 after:-translate-x-1/2 after:w-16 after:h-1 after:bg-blue-600 after:rounded-full">
              Key Strategic Wins
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto mt-6">
              Proven ROI: Transforming complex challenges into measurable business impact.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {caseStudies.map((study) => (
              <ImpactMetricCard key={study.id} study={study} />
            ))}
          </div>
        </div>
      </section>

      {/* Professional Depth: Journey */}
      <section className="py-20 px-6 md:px-20 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4 inline-block relative after:content-[''] after:absolute after:bottom-[-10px] after:left-1/2 after:-translate-x-1/2 after:w-16 after:h-1 after:bg-blue-600 after:rounded-full">
              Professional Journey
            </h2>
            <p className="text-lg text-gray-600 mt-6">
              A timeline of technical leadership and engineering excellence.
            </p>
          </div>

          <ExperienceTimeline experiences={professionalExperience} showClients={false} />
        </div>
      </section>

      {/* Freelance & Consulting */}
      <section className="py-20 px-6 md:px-20 bg-gray-50 border-t border-gray-200">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4 inline-block relative after:content-[''] after:absolute after:bottom-[-10px] after:left-1/2 after:-translate-x-1/2 after:w-16 after:h-1 after:bg-green-600 after:rounded-full">
              Freelance & Consulting
            </h2>
            <p className="text-lg text-gray-600 mt-6">
              Enterprise-grade solutions delivered on your schedule.
            </p>
          </div>

          <FreelanceGrid experiences={freelanceExperience} />
        </div>
      </section>

      {/* Domain Expertise Section */}
      <section
        className="py-16 px-6 md:px-20 bg-gray-50 border-t border-gray-200"
        id="domain-expertise-section"
      >
        <div className="w-full overflow-hidden relative">
          <div className="text-center mb-12">
            <h2 className="text-2xl font-bold text-gray-800 uppercase tracking-widest">
              Industry Expertise
            </h2>
          </div>
          <DomainExpertise />
        </div>
      </section>

      {/* Technical Proficiency Section */}
      <section
        className="py-16 px-6 md:px-20 bg-white"
        id="skills-section"
      >
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-gray-800 inline-block relative after:content-[''] after:absolute after:bottom-[-10px] after:left-1/2 after:-translate-x-1/2 after:w-16 after:h-1 after:bg-blue-600 after:rounded-full">
              Technical Map
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto mt-6">
              What I write, what I build with AI tools, and what I architect.
            </p>
          </div>

          <div className="flex flex-col items-center">
            <div className="w-full max-w-2xl h-[400px]">
              {skillRadarData && skillRadarData.length > 0 && <SkillsRadar data={skillRadarData} />}
            </div>
            <div className="text-center mt-8">
              <Link href="/tech-skills" className="inline-flex items-center text-blue-600 font-bold hover:underline">
                Explore Full Tech Stack
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Education */}
      <section className="py-16 px-6 md:px-20 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-2xl font-bold text-gray-800">Education</h2>
          </div>
          <EducationHighlight education={education} />
        </div>
      </section>

      {/* Latest Insights (Blog) */}
      <BlogPreview />

      {/* Final Call to Action / Connect */}
      <section
        className="py-20 px-6 md:px-20 bg-gradient-to-r from-blue-600 to-indigo-700 text-white"
        id="connect-section"
      >
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Build Something With AI?</h2>
          <p className="text-xl md:text-2xl text-blue-100 mb-10 leading-relaxed">
            Whether you need AI system architecture, data platform consulting, or a production AI solution — let&apos;s start a conversation.
          </p>

          <div className="flex flex-col md:flex-row justify-center gap-6">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-4 text-base font-bold text-blue-700 bg-white rounded-xl shadow-lg hover:bg-gray-50 transition-all transform hover:-translate-y-1"
            >
              Book a Consultation
            </Link>
            <Link
              href={`mailto:${personalEmail}`}
              className="inline-flex items-center justify-center px-8 py-4 text-base font-bold text-white border-2 border-white rounded-xl hover:bg-white/10 transition-all"
            >
              Email Me
            </Link>
          </div>

          <div className="mt-12 flex justify-center gap-8">
            <a href={socialMedia.linkedin} aria-label="LinkedIn" className="text-blue-200 hover:text-white transition-colors">
              <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" /></svg>
            </a>
            <a href={socialMedia.github} aria-label="GitHub" className="text-blue-200 hover:text-white transition-colors">
              <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" /></svg>
            </a>
          </div>
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
            &copy; {new Date().getFullYear()} {personalName}. All rights reserved.
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
      <AIChatWidget />
    </div>
  );
}

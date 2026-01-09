"use client";

import React from 'react';
import Link from 'next/link';
import dynamic from 'next/dynamic';
import portfolioData from '@/data/portfolioData';

// Existing Components
import ImpactMetricCard from '@/components/ui/ImpactMetricCard';
import ExperienceTimeline from '@/components/ui/ExperienceTimeline';
import AutoScrollTestimonials from '@/components/ui/AutoScrollTestimonials';
import BrandMarquee from '@/components/ui/BrandMarquee';
import DomainExpertise from '@/components/ui/DomainExpertise';
import EducationHighlight from '@/components/ui/EducationHighlight';
import FreelanceGrid from '@/components/ui/FreelanceGrid';
import ContactLink from '@/components/ui/ContactLink'; // Assuming this exists from page.tsx check
// const SkillsRadar = dynamic(() => import("@/components/ui/SkillsRadar"), { ssr: false });
// Using dynamic import locally to match page.tsx usage
const SkillsRadar = dynamic(() => import("@/components/ui/SkillsRadar"), { ssr: false });
const WavesBackground = dynamic(() => import("@/components/ui/WavesBackground"), { ssr: false });

// New V3 Components
import ServicesPricing from '@/components/ui/ServicesPricing';
import StatsDashboard from '@/components/ui/StatsDashboard';
import FAQSection from '@/components/ui/FAQSection';
import ContactForm from '@/components/ui/ContactForm';


// Skill Badge Component (Reused)
const SkillBadge = ({ skill }: { skill: string }) => (
    <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-md text-sm font-medium border border-gray-200">
        {skill}
    </span>
);

export default function V3Page() {
    const { personalInfo, caseStudies, professionalExperience, testimonials, skillRadarData, education } = portfolioData;

    // Helper: Find "Agentic AI" case study and move it to first
    const agenticCaseStudy = caseStudies?.find(cs => cs.id === 'cs4');
    const otherCaseStudies = caseStudies?.filter(cs => cs.id !== 'cs4').slice(0, 3) || [];
    const orderedCaseStudies = agenticCaseStudy ? [agenticCaseStudy, ...otherCaseStudies] : otherCaseStudies;

    const skillCategories = [
        { name: "Data Engineering", skills: ["Python", "SQL", "Spark", "Airflow", "dbt", "Kafka"] },
        { name: "Cloud & Platforms", skills: ["AWS (S3, Redshift, Glue, Lambda)", "Azure", "Snowflake", "Docker", "Terraform"] },
        { name: "Analytics & BI", skills: ["Qlik Sense", "Tableau", "Power BI", "Data Modeling", "Dimensional Modeling"] },
        { name: "AI / ML", skills: ["LangChain", "OpenAI API", "RAG", "Predictive Modeling", "Automation"] }
    ];

    return (
        <div className="min-h-screen bg-white font-[family-name:var(--font-geist-sans)] text-gray-800">

            {/* 1. Hero Section (Keep as-is + One-line benefit) */}
            <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-gray-900 text-white">
                <div className="absolute inset-0 w-full h-full z-0 opacity-40">
                    <WavesBackground />
                </div>

                <div className="container mx-auto px-6 relative z-10 text-center max-w-5xl">
                    <h1 className="text-5xl md:text-7xl font-extrabold mb-6 tracking-tight leading-tight">
                        RISHAV CHATTERJEE
                        <span className="block text-blue-400 mt-2 text-3xl md:text-5xl">Lead AI Engineer & Data Architect</span>
                    </h1>
                    <div className="w-32 h-1.5 bg-blue-500 mx-auto mb-8 rounded-full"></div>

                    <p className="text-xl md:text-2xl text-gray-200 mb-6 max-w-3xl mx-auto leading-relaxed">
                        I specialize in architecting scalable Agentic AI ecosystems and high-performance data pipelines.
                    </p>

                    {/* Benefit Statement (New) */}
                    <p className="text-lg md:text-xl text-blue-200 mb-10 font-bold bg-blue-900/30 inline-block px-6 py-2 rounded-full border border-blue-500/30">
                        Reducing data pipeline costs by 30-60% while cutting processing time in half.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link
                            href="#contact"
                            className="px-8 py-4 bg-blue-600 text-white rounded-lg font-bold text-lg hover:bg-blue-700 transition-all shadow-lg hover:shadow-blue-500/30 transform hover:-translate-y-1"
                        >
                            Schedule Consultation
                        </Link>
                        <Link
                            href="#case-studies"
                            className="px-8 py-4 bg-transparent text-white border-2 border-white rounded-lg font-bold text-lg hover:bg-white hover:text-gray-900 transition-all"
                        >
                            View Case Studies
                        </Link>
                    </div>

                    <div className="mt-8 flex justify-center items-center gap-2 text-sm text-gray-400">
                        <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                        Available for projects starting Q2 2026
                    </div>
                </div>
            </section>

            {/* 2. Trusted by Brands (Keep at #2) + Stats Dashboard */}
            <section className="bg-white border-b border-gray-100 pb-0">
                <BrandMarquee />
                <StatsDashboard />
            </section>

            {/* 3. Key Strategic Wins (Moved UP) */}
            <section id="case-studies" className="py-20 px-6 bg-gray-50">
                <div className="container mx-auto max-w-6xl">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-bold mb-4 text-gray-900">Key Strategic Wins</h2>
                        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                            Transforming complex challenges into measurable business impact.
                        </p>
                    </div>

                    {/* Featured Agentic AI Case Study Highlight */}
                    <div className="mb-12">
                        {agenticCaseStudy && <ImpactMetricCard study={agenticCaseStudy} />}
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                        {otherCaseStudies.map((study) => (
                            <ImpactMetricCard key={study.id} study={study} />
                        ))}
                    </div>
                </div>
            </section>

            {/* 4. Testimonials (Moved UP) */}
            <section className="py-20 px-6 bg-white border-y border-gray-100">
                <div className="container mx-auto max-w-6xl">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold mb-4 text-gray-900">What Clients & Leaders Say</h2>
                        <p className="text-lg text-gray-600">
                            Trusted for delivering reliable, high-impact solutions.
                        </p>
                    </div>
                    <AutoScrollTestimonials testimonials={testimonials || []} />
                </div>
            </section>

            {/* 5. Technical Proficiency (Move from #4) */}
            <section className="py-20 px-6 bg-white">
                <div className="container mx-auto max-w-6xl">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-bold mb-4 text-gray-900">Technical Proficiency</h2>
                        <p className="text-lg text-gray-600">
                            How I deliver results: A modern, production-ready tech stack.
                        </p>
                    </div>

                    <div className="flex flex-col md:flex-row items-center gap-12">
                        <div className="w-full md:w-1/2 h-[400px]">
                            {skillRadarData && <SkillsRadar data={skillRadarData} />}
                        </div>
                        <div className="w-full md:w-1/2">
                            <div className="grid grid-cols-1 gap-6">
                                {skillCategories.map((category, idx) => (
                                    <div key={idx} className="">
                                        <h3 className="text-lg font-bold mb-3 text-gray-800">{category.name}</h3>
                                        <div className="flex flex-wrap gap-2">
                                            {category.skills.map((skill, sIdx) => (
                                                <SkillBadge key={sIdx} skill={skill} />
                                            ))}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 6. Freelance Work (Move UP) */}
            <section className="py-20 px-6 bg-gray-50 border-t border-gray-200">
                <div className="container mx-auto max-w-6xl">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-bold mb-4 text-gray-900">Freelance & Consulting</h2>
                        <p className="text-lg text-gray-600">
                            Recent projects delivered for enterprise clients on a contract basis.
                        </p>
                    </div>
                    <FreelanceGrid experiences={portfolioData.freelanceExperience} />
                </div>
            </section>

            {/* 7. Professional Journey */}
            <section className="py-20 px-6 bg-white">
                <div className="container mx-auto max-w-5xl">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-bold mb-4 text-gray-900">Professional Journey</h2>
                        <p className="text-lg text-gray-600">
                            A timeline of technical leadership and engineering excellence.
                        </p>
                    </div>
                    <ExperienceTimeline experiences={professionalExperience} showClients={false} />
                </div>
            </section>

            {/* 8. About Section */}
            <section className="py-20 px-6 bg-gray-50">
                <div className="container mx-auto max-w-4xl text-center">
                    <h2 className="text-3xl font-bold mb-8 text-gray-900">About Me</h2>
                    <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 leading-relaxed text-lg text-gray-700">
                        <p className="mb-6">{personalInfo.longBio[0]}</p>
                        <p>{personalInfo.longBio[1]}</p>
                    </div>
                </div>
            </section>

            {/* 9. Domain Expertise */}
            <section className="py-16 px-6 bg-white border-y border-gray-100">
                <div className="container mx-auto text-center mb-10">
                    <h2 className="text-2xl font-bold text-gray-900 mb-8 uppercase tracking-widest">Industry Expertise</h2>
                    <DomainExpertise />
                </div>
            </section>

            {/* 10. Education */}
            <section className="py-16 px-6 bg-gray-50">
                <div className="container mx-auto max-w-4xl">
                    <div className="text-center mb-12">
                        <h2 className="text-2xl font-bold text-gray-900">Education</h2>
                    </div>
                    <EducationHighlight education={education} />
                </div>
            </section>

            {/* 11. Services & Pricing (New) */}
            <ServicesPricing />

            {/* 12. FAQ Section (New) */}
            <FAQSection />

            {/* 13. Contact Section */}
            <section id="contact" className="py-24 px-6 bg-blue-900 text-white relative overflow-hidden">
                {/* Background Texture */}
                <div className="absolute inset-0 opacity-10 bg-[url('/images/grid.svg')]"></div>

                <div className="container mx-auto max-w-5xl relative z-10">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold mb-6">Let&apos;s Build Something Extraordinary</h2>
                        <p className="text-xl text-blue-100 max-w-2xl mx-auto">
                            Ready to optimize your data stack or deploy agentic AI? Fill out the form below to get started.
                        </p>
                    </div>

                    <div className="flex flex-col lg:flex-row gap-12 items-start">
                        {/* Form Side */}
                        <div className="w-full lg:w-3/5 text-gray-900">
                            <ContactForm />
                        </div>

                        {/* Info Side */}
                        <div className="w-full lg:w-2/5 space-y-8 pt-8">
                            <div className="bg-white/10 p-6 rounded-xl backdrop-blur-sm border border-white/10">
                                <h3 className="text-xl font-bold mb-2">Typically Responds</h3>
                                <p className="text-blue-200">Within 24 hours</p>
                            </div>

                            <div className="bg-white/10 p-6 rounded-xl backdrop-blur-sm border border-white/10">
                                <h3 className="text-xl font-bold mb-2">Direct Contact</h3>
                                <p className="text-blue-200 mb-1">{personalInfo.email}</p>
                                <p className="text-blue-200">{personalInfo.whatsapp}</p>
                            </div>

                            <div className="bg-white/10 p-6 rounded-xl backdrop-blur-sm border border-white/10">
                                <h3 className="text-xl font-bold mb-2">Connect</h3>
                                <div className="flex gap-4">
                                    <a href={personalInfo.socialMedia.linkedin} className="text-white hover:text-blue-300 transition-colors">LinkedIn</a>
                                    <a href={personalInfo.socialMedia.github} className="text-white hover:text-blue-300 transition-colors">GitHub</a>
                                    <a href={personalInfo.socialMedia.medium} className="text-white hover:text-blue-300 transition-colors">Medium</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    );
}

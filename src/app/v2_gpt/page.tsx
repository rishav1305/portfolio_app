"use client";

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import dynamic from 'next/dynamic';
import portfolioData from '@/data/portfolioData';
import ImpactMetricCard from '@/components/ui/ImpactMetricCard';
import ExperienceTimeline from '@/components/ui/ExperienceTimeline';
import AutoScrollTestimonials from '@/components/ui/AutoScrollTestimonials';
// import BlogPreview from '@/components/ui/BlogPreview'; // We can use this or custom

// Dynamically import Background to avoid SSR issues
const NetBackground = dynamic(() => import("@/components/ui/NetBackground"), { ssr: false });

// Skill Badge Component
const SkillBadge = ({ skill }: { skill: string }) => (
    <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-md text-sm font-medium border border-gray-200">
        {skill}
    </span>
);

const ServiceCard = ({ service }: { service: any }) => (
    <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300">
        <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
        <p className="text-gray-600 mb-4 text-sm leading-relaxed">{service.description}</p>
        <div>
            <h4 className="text-xs font-bold text-blue-600 uppercase tracking-wide mb-2">Outcomes</h4>
            <div className="flex flex-wrap gap-2 text-sm text-gray-700">
                {service.outcomes.map((outcome: string, idx: number) => (
                    <span key={idx} className="flex items-center">
                        <span className="w-1.5 h-1.5 bg-green-500 rounded-full mr-2"></span>
                        {outcome}
                    </span>
                ))}
            </div>
        </div>
    </div>
);

export default function V2Page() {
    const { personalInfo, servicesV2, caseStudies, professionalExperience, testimonials } = portfolioData;

    const skillCategories = [
        { name: "Data Engineering", skills: ["Python", "SQL", "Spark", "Airflow", "dbt", "Kafka"] },
        { name: "Cloud & Platforms", skills: ["AWS (S3, Redshift, Glue, Lambda)", "Azure", "Snowflake", "Docker", "Terraform"] },
        { name: "Analytics & BI", skills: ["Qlik Sense", "Tableau", "Power BI", "Data Modeling", "Dimensional Modeling"] },
        { name: "AI / ML", skills: ["LangChain", "OpenAI API", "RAG", "Predictive Modeling", "Automation"] }
    ];

    return (
        <div className="min-h-screen bg-white font-[family-name:var(--font-geist-sans)] text-gray-800">

            {/* 1. Hero Section */}
            <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-gray-50/50">
                <div className="absolute inset-0 w-full h-full z-0 opacity-40">
                    <NetBackground />
                </div>

                <div className="container mx-auto px-6 relative z-10 text-center max-w-4xl">
                    <h1 className="text-5xl md:text-6xl font-extrabold text-gray-900 mb-6 tracking-tight leading-tight">
                        Building Scalable Data & AI Systems That <span className="text-blue-600">Drive Business Decisions</span>
                    </h1>
                    <p className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto leading-relaxed">
                        I help companies design, optimize, and automate data platforms using cloud-native engineering, analytics, and AI — so teams can move faster and make smarter decisions.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link
                            href="/contact"
                            className="px-8 py-4 bg-blue-600 text-white rounded-lg font-bold text-lg hover:bg-blue-700 transition-all shadow-lg hover:shadow-blue-500/30 transform hover:-translate-y-1"
                        >
                            Hire Me
                        </Link>
                        <Link
                            href="#projects"
                            className="px-8 py-4 bg-white text-gray-800 border-2 border-gray-200 rounded-lg font-bold text-lg hover:border-black transition-all"
                        >
                            View Projects
                        </Link>
                    </div>
                </div>
            </section>

            {/* 2. Services / What I Do */}
            <section className="py-20 px-6 bg-white">
                <div className="container mx-auto max-w-6xl">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-bold mb-4">How I Can Help Your Business</h2>
                        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                            From data pipelines to AI-powered insights, I deliver end-to-end solutions tailored to your business needs.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {servicesV2?.map((service, index) => (
                            <ServiceCard key={index} service={service} />
                        ))}
                    </div>
                </div>
            </section>

            {/* 3. Featured Projects */}
            <section id="projects" className="py-20 px-6 bg-gray-50">
                <div className="container mx-auto max-w-6xl">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-bold mb-4">Selected Work & Case Studies</h2>
                        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                            A snapshot of projects where I solved complex data problems and delivered measurable impact.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                        {caseStudies?.slice(0, 4).map((study) => (
                            <ImpactMetricCard key={study.id} study={study} />
                        ))}
                    </div>

                    <div className="text-center mt-12">
                        <Link href="/projects" className="text-blue-600 font-bold hover:underline">
                            View All Projects &rarr;
                        </Link>
                    </div>
                </div>
            </section>

            {/* 4. Testimonials */}
            <section className="py-20 px-6 bg-white border-y border-gray-100">
                <div className="container mx-auto max-w-6xl">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold mb-4">What Clients & Teammates Say</h2>
                        <p className="text-lg text-gray-600">
                            Trusted by managers, teams, and stakeholders for delivering reliable, high-impact solutions.
                        </p>
                    </div>
                    <AutoScrollTestimonials testimonials={testimonials || []} />
                </div>
            </section>

            {/* 5. Experience Snapshot */}
            <section className="py-20 px-6 bg-gray-50">
                <div className="container mx-auto max-w-5xl">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-bold mb-4">Professional Experience</h2>
                        <p className="text-lg text-gray-600">
                            Over 7 years of experience delivering data and analytics solutions across multiple domains.
                        </p>
                    </div>

                    <ExperienceTimeline experiences={professionalExperience} showClients={false} />
                </div>
            </section>

            {/* 6. Technical Skills */}
            <section className="py-20 px-6 bg-white">
                <div className="container mx-auto max-w-6xl">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-bold mb-4">Technology & Tools</h2>
                        <p className="text-lg text-gray-600">
                            A modern, production-ready tech stack built for scale and performance.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
                        {skillCategories.map((category, idx) => (
                            <div key={idx} className="bg-gray-50 p-6 rounded-xl border border-gray-100">
                                <h3 className="text-xl font-bold mb-6 text-gray-800 border-b border-gray-200 pb-2">{category.name}</h3>
                                <div className="flex flex-wrap gap-3">
                                    {category.skills.map((skill, sIdx) => (
                                        <SkillBadge key={sIdx} skill={skill} />
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 7. Timeline (Optional - skipped as ExperienceTimeline covers it) */}

            {/* 8. Blog / Thought Leadership */}
            <section className="py-20 px-6 bg-gray-50">
                <div className="container mx-auto max-w-5xl text-center">
                    <h2 className="text-3xl font-bold mb-4">Insights & Writing</h2>
                    <p className="text-lg text-gray-600 mb-8">
                        I write about data engineering, analytics, AI, and real-world problem solving.
                    </p>

                    {/* Simple Blog Preview Card Placeholder if we don't want the full component or if we want to be minimal */}
                    <div className="flex justify-center">
                        <a
                            href={personalInfo.socialMedia.medium}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center text-blue-600 font-bold text-lg hover:underline"
                        >
                            Read on Medium
                            <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
                        </a>
                    </div>
                </div>
            </section>

            {/* 9. Contact / CTA */}
            <section className="py-24 px-6 bg-blue-600 text-white text-center">
                <div className="container mx-auto max-w-3xl">
                    <h2 className="text-4xl font-bold mb-6">Let&apos;s Work Together</h2>
                    <p className="text-xl text-blue-100 mb-10 leading-relaxed">
                        Looking for someone who can design, build, and scale your data or AI systems? Let&apos;s discuss how I can help.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                        <Link
                            href="/contact"
                            className="w-full sm:w-auto px-8 py-4 bg-white text-blue-600 rounded-lg font-bold text-lg hover:bg-gray-50 transition-colors shadow-lg"
                        >
                            Contact Me
                        </Link>
                        <a
                            href={`mailto:${personalInfo.email}`}
                            className="w-full sm:w-auto px-8 py-4 bg-blue-700 text-white border border-blue-500 rounded-lg font-bold text-lg hover:bg-blue-800 transition-colors"
                        >
                            Email Me Directly
                        </a>
                        <a
                            href={personalInfo.whatsapp} // Assumption: personalInfo has whatsapp
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 bg-green-500 text-white rounded-lg font-bold text-lg hover:bg-green-600 transition-colors shadow-lg"
                        >
                            <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24"><path d="M.057 24l1.687-6.163c-3.138-5.437-2.1-11.966 2.538-16.462C7.974-2.506 17.147-2.532 21.066 1.386c4.95 4.95 4.95 12.973 0 17.923-3.692 3.692-9.617 4.293-13.916 1.48L.057 24h.001zM11.97 3.323c-4.772 0-8.647 3.875-8.647 8.647 0 1.542.42 2.992 1.156 4.26L2.9 21.1l4.981-1.583c1.23.687 2.623 1.077 4.09 1.077 4.772 0 8.647-3.875 8.647-8.647 0-4.772-3.875-8.647-8.647-8.647zM16.96 15.655c-.25-.125-1.488-.734-1.718-.82-.23-.086-.397-.125-.563.125-.167.25-.646.82-.792.99-.146.166-.292.187-.542.062-.25-.125-1.055-.39-2.008-1.238-.737-.656-1.235-1.467-1.38-1.717-.146-.25-.016-.386.109-.51.114-.114.25-.292.375-.438.125-.146.167-.25.25-.417.083-.167.042-.313-.021-.438-.063-.125-.563-1.354-.771-1.854-.208-.49-.417-.417-.563-.417-.135-.01-.292-.01-.448-.01-.156 0-.406.063-.625.302-.219.239-.833.812-.833 1.98s.854 2.292.979 2.458c.125.167 1.688 2.573 4.084 3.604.57.245 1.015.39 1.36.5.57.182 1.09.156 1.5.094.458-.068 1.488-.609 1.7-1.2.209-.594.209-1.104.146-1.208-.063-.104-.23-.167-.48-.292z" /></svg>
                            WhatsApp
                        </a>
                    </div>
                    <p className="mt-8 text-blue-200">
                        Currently open to freelance, contract, and consulting opportunities.
                    </p>
                </div>
            </section>

        </div>
    );
}

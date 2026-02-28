import React from 'react';
import { getExperience } from '@/services/experience';
import { getEducation } from '@/services/education';
import Breadcrumb from '@/components/ui/Breadcrumb';
import ExperienceTimeline from '@/components/ui/ExperienceTimeline';

export default async function Experience() {

    // Fetch dynamic data
    const allExperience = await getExperience();
    const education = await getEducation();

    // Filter by type (already sorted: ongoing first, then by start date desc)
    const sortedProfessional = allExperience.filter(e => e.experienceType === 'professional');
    const sortedFreelance = allExperience.filter(e => e.experienceType === 'freelance');

    return (
        <div className="min-h-screen bg-[#0F172A] pt-24 pb-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
            {/* Background Decorations */}
            <div className="absolute top-0 left-0 w-full h-96 bg-gradient-to-b from-[#020617] to-transparent pointer-events-none"></div>
            <div className="absolute top-20 right-0 w-96 h-96 bg-[#CA8A04]/5 rounded-full blur-3xl opacity-30 pointer-events-none -translate-y-1/2 translate-x-1/2"></div>
            <div className="absolute top-40 left-0 w-72 h-72 bg-[#CA8A04]/5 rounded-full blur-3xl opacity-30 pointer-events-none -translate-x-1/2"></div>

            <div className="max-w-6xl mx-auto relative z-10">
                <div className="mb-8">
                    <Breadcrumb overrides={{ experience: 'Work Experience' }} />
                </div>

                {/* Hero Header */}
                <div className="text-center mb-20">
                    <h1 className="text-4xl md:text-5xl font-serif font-extrabold mb-6 tracking-tight text-[#F8FAFC]">
                        Professional Journey
                    </h1>
                    <p className="text-lg md:text-xl text-[#94A3B8] max-w-2xl mx-auto leading-relaxed">
                        A timeline of my career delivering high-impact AI and Data Engineering solutions across global enterprises and freelance projects.
                    </p>
                </div>

                {/* Professional Section */}
                <div className="mb-20">
                    <div className="flex items-center mb-12">
                        <div className="w-12 h-12 rounded-xl bg-[#CA8A04]/20 flex items-center justify-center mr-4 text-[#CA8A04]">
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                            </svg>
                        </div>
                        <div>
                            <h2 className="text-3xl font-serif font-bold text-[#F8FAFC]">Corporate Experience</h2>
                            <p className="text-[#64748B] mt-1">Full-time roles & key organizational leadership</p>
                        </div>
                    </div>
                    <ExperienceTimeline experiences={sortedProfessional} showClients={true} />
                </div>

                {/* Freelance Section */}
                <div className="mb-20">
                    <div className="flex items-center mb-12">
                        <div className="w-12 h-12 rounded-xl bg-[#CA8A04]/20 flex items-center justify-center mr-4 text-[#CA8A04]">
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                            </svg>
                        </div>
                        <div>
                            <h2 className="text-3xl font-serif font-bold text-[#F8FAFC]">Freelance Experience</h2>
                            <p className="text-[#64748B] mt-1">Independent consulting & specialized projects</p>
                        </div>
                    </div>
                    <ExperienceTimeline experiences={sortedFreelance} />
                </div>

                {/* Education Section */}
                <div className="relative">
                    <div className="flex items-center mb-12">
                        <div className="w-12 h-12 rounded-xl bg-[#CA8A04]/20 flex items-center justify-center mr-4 text-[#CA8A04]">
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5z" />
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                            </svg>
                        </div>
                        <div>
                            <h2 className="text-3xl font-serif font-bold text-[#F8FAFC]">Education</h2>
                            <p className="text-[#64748B] mt-1">Academic background & qualifications</p>
                        </div>
                    </div>

                    <div className="grid gap-6">
                        {education.map((edu, index) => (
                            <div key={index} className="glass-card p-8 group">
                                <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                                    <div>
                                        <h3 className="text-2xl font-bold text-[#F8FAFC] group-hover:text-[#CA8A04] transition-colors">{edu.degree}</h3>
                                        <h4 className="text-xl text-[#CA8A04] font-medium mt-1">{edu.institution}</h4>
                                    </div>
                                    <div className="mt-2 md:mt-0 text-right">
                                        <span className="inline-block bg-[#CA8A04]/20 text-[#CA8A04] text-sm font-semibold px-4 py-1.5 rounded-full border border-[#CA8A04]/30">
                                            {edu.period}
                                        </span>
                                        <div className="text-[#64748B] text-sm mt-2 font-medium flex items-center justify-end gap-1">
                                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                            </svg>
                                            {edu.location}
                                        </div>
                                    </div>
                                </div>

                                <div className="border-t border-[#1E293B] my-4"></div>

                                <div className="mt-2">
                                    <div className="flex items-center text-sm font-bold text-[#64748B] uppercase tracking-wide mb-2">
                                        <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                        </svg>
                                        Focus Area
                                    </div>
                                    <p className="text-lg text-[#F8FAFC] font-medium mb-4">{edu.focusArea}</p>

                                    {edu.description && (
                                        <p className="text-[#94A3B8] leading-relaxed bg-[#020617] p-4 rounded-xl text-sm border border-[#1E293B]">
                                            {edu.description}
                                        </p>
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

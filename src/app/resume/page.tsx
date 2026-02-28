'use client';

import React from 'react';
import Image from 'next/image';
import portfolioData from '@/data/portfolioData';
import type { SkillRating } from '@/types/portfolio';

// Inline Icons to avoid extra dependencies
const PrinterIcon = ({ size = 18 }: { size?: number }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="6 9 6 2 18 2 18 9"></polyline><path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2"></path><rect x="6" y="14" width="12" height="8"></rect></svg>
);
const MailIcon = ({ size = 14 }: { size?: number }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
);
const PhoneIcon = ({ size = 14 }: { size?: number }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
);
const MapPinIcon = ({ size = 14 }: { size?: number }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
);
const LinkedinIcon = ({ size = 14 }: { size?: number }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
);
const GithubIcon = ({ size = 14 }: { size?: number }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
);

export default function ResumePage() {
    const { personalInfo, professionalExperience, education, skills } = portfolioData;

    const handlePrint = () => {
        window.print();
    };

    return (
        <div className="min-h-screen bg-white text-black font-sans selection:bg-gray-200 print:p-0">
            {/* Print Controls - Hidden when printing */}
            <div className="fixed top-6 right-6 z-50 flex gap-4 print:hidden">
                <button
                    onClick={handlePrint}
                    className="flex items-center gap-2 bg-black text-white px-6 py-2.5 rounded-full hover:bg-gray-800 transition-all shadow-lg font-medium text-sm"
                >
                    <PrinterIcon size={18} />
                    Print / Save PDF
                </button>
            </div>

            {/* Resume Container */}
            <div className="max-w-[210mm] mx-auto bg-white p-8 md:p-12 lg:p-16 my-8 shadow-xl print:shadow-none print:m-0 print:p-8 print:w-full print:max-w-none">

                {/* Header */}
                <header className="border-b-2 border-gray-900 pb-8 mb-8">
                    <div className="flex items-start gap-6">
                        <div className="shrink-0 print:w-20 print:h-20">
                            <Image
                                src="/images/profile.webp"
                                alt={personalInfo.name}
                                width={96}
                                height={96}
                                className="w-24 h-24 rounded-full object-cover border-2 border-gray-200 print:w-20 print:h-20"
                            />
                        </div>
                        <div className="flex-1">
                            <h1 className="text-4xl md:text-5xl font-bold tracking-tight uppercase mb-2">
                                {personalInfo.name}
                            </h1>
                            <p className="text-xl text-gray-600 font-light tracking-wide">
                                {personalInfo.title}
                            </p>
                        </div>
                    </div>

                    <div className="flex flex-wrap gap-y-2 gap-x-6 text-sm text-gray-600 mt-6">
                        {personalInfo.email && (
                            <a href={`mailto:${personalInfo.email}`} className="flex items-center gap-2 hover:text-black transition-colors">
                                <MailIcon size={14} />
                                {personalInfo.email}
                            </a>
                        )}
                        {personalInfo.whatsapp && (
                            <div className="flex items-center gap-2">
                                <PhoneIcon size={14} />
                                {personalInfo.whatsapp}
                            </div>
                        )}
                        {personalInfo.location && (
                            <div className="flex items-center gap-2">
                                <MapPinIcon size={14} />
                                {personalInfo.location}
                            </div>
                        )}
                        {personalInfo.socialMedia.linkedin && (
                            <a href={personalInfo.socialMedia.linkedin} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-black transition-colors">
                                <LinkedinIcon size={14} />
                                LinkedIn
                            </a>
                        )}
                        {personalInfo.socialMedia.github && (
                            <a href={personalInfo.socialMedia.github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-black transition-colors">
                                <GithubIcon size={14} />
                                GitHub
                            </a>
                        )}
                    </div>
                </header>

                {/* Summary */}
                <section className="mb-8">
                    <h2 className="text-sm font-bold uppercase tracking-wider text-gray-500 mb-4 border-b border-gray-200 pb-1">
                        Professional Summary
                    </h2>
                    <p className="text-gray-800 leading-relaxed text-sm text-justify">
                        {personalInfo.shortBio}
                    </p>
                </section>

                {/* Experience */}
                <section className="mb-8">
                    <h2 className="text-sm font-bold uppercase tracking-wider text-gray-500 mb-6 border-b border-gray-200 pb-1">
                        Work Experience
                    </h2>
                    <div className="space-y-8">
                        {professionalExperience.map((job, index) => (
                            <div key={index} className="break-inside-avoid">
                                <div className="flex justify-between items-baseline mb-2">
                                    <h3 className="font-bold text-lg text-black">{job.role}</h3>
                                    <span className="text-sm text-gray-500 whitespace-nowrap">{job.period}</span>
                                </div>
                                <div className="flex justify-between items-center mb-3">
                                    <span className="text-gray-700 font-medium">{job.company}</span>
                                    <span className="text-xs text-gray-500">{job.location}</span>
                                </div>

                                {/* Achievements */}
                                <ul className="list-disc list-outside ml-4 space-y-1.5">
                                    {job.achievements.map((achievement, i) => (
                                        <li key={i} className="text-sm text-gray-700 leading-snug pl-1">
                                            <span>{achievement.split(/\*\*(.*?)\*\*/g).map((part, j) =>
                                                j % 2 === 1 ? <strong key={j}>{part}</strong> : part
                                            )}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Skills */}
                <section className="mb-8 break-inside-avoid">
                    <h2 className="text-sm font-bold uppercase tracking-wider text-gray-500 mb-4 border-b border-gray-200 pb-1">
                        Technical Skills
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4 text-sm">
                        {Object.entries(skills).map(([category, items]) => (
                            <div key={category}>
                                <h3 className="font-semibold text-gray-900 mb-1">{category}</h3>
                                <p className="text-gray-600 leading-relaxed">
                                    {(items as SkillRating[]).map(skill => skill.name).join(', ')}
                                </p>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Education */}
                <section className="mb-8 break-inside-avoid">
                    <h2 className="text-sm font-bold uppercase tracking-wider text-gray-500 mb-4 border-b border-gray-200 pb-1">
                        Education
                    </h2>
                    <div className="space-y-4">
                        {education.map((edu, index) => (
                            <div key={index}>
                                <div className="flex justify-between items-baseline">
                                    <h3 className="font-bold text-gray-900">{edu.institution}</h3>
                                    <span className="text-sm text-gray-500">{edu.period}</span>
                                </div>
                                <div className="flex justify-between">
                                    <span className="text-sm text-gray-700">{edu.degree} in {edu.focusArea}</span>
                                    <span className="text-xs text-gray-500">{edu.location}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

            </div>

            {/* Global Print Styles Override - kept for safety although navbar handles itself now */}
            <style jsx global>{`
        @media print {
          @page {
            margin: 0;
            size: auto;
          }
          body {
            background-color: white;
            color: black;
          }
          /* Hide global elements by heuristics if they don't respond to print:hidden */
          nav, aside, footer, [class*="navbar"], [class*="sidebar"] {
            display: none !important;
          }
        }
      `}</style>
        </div>
    );
}

"use client";

import React from 'react';
import Link from 'next/link';
import { WorkExperience } from "@/data/portfolioData";

interface FreelanceGridProps {
    experiences: WorkExperience[];
}

const JobCard: React.FC<{ job: WorkExperience; isFeatured?: boolean }> = ({ job, isFeatured }) => {
    const displayedAchievements = job.achievements.slice(0, 3);
    const cardId = job.company.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');

    return (
        <div
            className={`bg-white rounded-xl p-8 shadow-sm border border-gray-100 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 flex flex-col h-full group relative ${isFeatured ? 'border-l-8 border-l-blue-600 bg-gradient-to-br from-white to-blue-50/20' : ''}`}
        >
            {/* Top Right Arrow Icon - Link to Details */}
            <Link
                href={`/experience#${cardId}`}
                className="absolute top-6 right-6 p-2 text-gray-400 hover:text-blue-600 hover:bg-blue-50 rounded-full transition-all duration-300 group-hover:scale-110"
                aria-label="View Details"
            >
                <svg className="w-6 h-6 transform group-hover:-translate-y-1 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
            </Link>

            {/* Header */}
            <div className="mb-6 pr-10">
                <div className="flex flex-col items-start mb-3">
                    <Link href={`/experience#${cardId}`} className="group/link">
                        <h3 className={`font-bold text-gray-900 group-hover/link:text-blue-600 transition-colors ${isFeatured ? 'text-4xl mb-2' : 'text-2xl'}`}>
                            {job.role}
                        </h3>
                    </Link>
                    <span className={`font-semibold px-3 py-1.5 bg-blue-50 text-blue-700 rounded-md border border-blue-100 whitespace-nowrap mt-2 ${isFeatured ? 'text-sm' : 'text-xs'}`}>
                        {job.period}
                    </span>
                </div>

                <div className={`font-medium flex items-center gap-2 ${isFeatured ? 'text-xl text-blue-700 font-bold' : 'text-base text-gray-600'}`}>
                    {!isFeatured && (
                        <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                        </svg>
                    )}
                    {job.company}
                </div>
            </div>

            {/* Key Metrics (Featured Only) */}
            {isFeatured && job.keyMetrics && (
                <div className="grid grid-cols-2 gap-4 mb-6">
                    {job.keyMetrics.slice(0, 2).map((m, i) => (
                        <div key={i} className="bg-white/80 p-3 rounded-lg border border-blue-100 shadow-sm text-center">
                            <div className="text-2xl font-bold text-blue-700">{m.value}</div>
                            <div className="text-xs text-gray-600 font-bold uppercase tracking-wide mt-1">{m.label}</div>
                        </div>
                    ))}
                </div>
            )}

            {/* Achievements Summary */}
            <div className="flex-grow mb-6">
                <ul className="space-y-4">
                    {displayedAchievements.map((item, i) => (
                        <li key={i} className="flex items-start text-gray-700">
                            <span className="text-green-500 mr-3 mt-1.5 min-w-[6px] text-lg leading-none">•</span>
                            <span className={`${isFeatured ? "text-lg/relaxed" : "text-base/relaxed line-clamp-3"}`}>{item}</span>
                        </li>
                    ))}
                </ul>
            </div>

            {/* Tech Stack Tags */}
            <div className="mt-auto pt-4 border-t border-gray-100/50">
                <div className="flex flex-wrap gap-2.5">
                    {(job.technicalEnvironment || job.tags)?.slice(0, isFeatured ? 8 : 4).map((tag, i) => (
                        <span
                            key={i}
                            className="px-3 py-1.5 bg-gray-50 text-sm font-medium text-gray-600 rounded-md border border-gray-200 hover:border-blue-300 hover:text-blue-600 transition-colors cursor-default"
                        >
                            {tag}
                        </span>
                    ))}
                    {((job.technicalEnvironment || job.tags)?.length || 0) > (isFeatured ? 8 : 4) && (
                        <span className="px-3 py-1.5 bg-gray-50 text-sm font-medium text-gray-400 rounded-md border border-gray-100">
                            +more
                        </span>
                    )}
                </div>
            </div>
        </div>
    );
};

const FreelanceGrid: React.FC<FreelanceGridProps> = ({ experiences }) => {
    // Identify the Featured Job (IBM - TWC)
    const featuredJob = experiences.find(job => job.company.includes("IBM"));
    const otherJobs = experiences.filter(job => !job.company.includes("IBM"));

    // Fallback if no IBM job found, just use first as featured
    const mainJob = featuredJob || experiences[0];
    const sideJobs = featuredJob ? otherJobs : experiences.slice(1);

    return (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Left Column - Featured (Tall) */}
            <div className="h-full">
                {mainJob && <JobCard job={mainJob} isFeatured={true} />}
            </div>

            {/* Right Column - Stacked */}
            <div className="flex flex-col gap-8 h-full">
                {sideJobs.map((job, index) => (
                    <div key={index} className="flex-1">
                        <JobCard job={job} isFeatured={false} />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default FreelanceGrid;


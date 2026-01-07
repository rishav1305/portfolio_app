"use client";

import React from 'react';
import { WorkExperience } from "@/data/portfolioData";

interface FreelanceGridProps {
    experiences: WorkExperience[];
}

const JobCard: React.FC<{ job: WorkExperience; isFeatured?: boolean }> = ({ job, isFeatured }) => {
    return (
        <div
            className={`bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 flex flex-col h-full group ${isFeatured ? 'border-l-4 border-l-blue-600 bg-gradient-to-br from-white to-blue-50/30' : ''}`}
        >
            {/* Header */}
            <div className="mb-4">
                <div className="flex justify-between items-start mb-2">
                    <h3 className={`font-bold text-gray-900 group-hover:text-blue-600 transition-colors ${isFeatured ? 'text-2xl' : 'text-xl'}`}>
                        {job.role}
                    </h3>
                    <span className="text-xs font-semibold px-2 py-1 bg-blue-50 text-blue-700 rounded-md border border-blue-100 whitespace-nowrap ml-2">
                        {job.period}
                    </span>
                </div>
                <div className="text-gray-600 font-medium text-sm flex items-center gap-1">
                    <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                    </svg>
                    {job.company}
                </div>
            </div>

            {/* Achievements Summary */}
            <div className="flex-grow mb-6">
                <ul className="space-y-3">
                    {/* Show more achievements for the featured card */}
                    {job.achievements.slice(0, isFeatured ? 6 : 2).map((item, i) => (
                        <li key={i} className="flex items-start text-sm text-gray-600">
                            <span className="text-green-500 mr-2 mt-1 min-w-[4px]">•</span>
                            <span className={isFeatured ? "" : "line-clamp-3"}>{item}</span>
                        </li>
                    ))}
                </ul>
            </div>

            {/* Tech Stack Tags */}
            <div className="mt-auto">
                <div className="flex flex-wrap gap-2">
                    {(job.technicalEnvironment || job.tags)?.slice(0, isFeatured ? 6 : 3).map((tag, i) => (
                        <span
                            key={i}
                            className="px-2 py-1 bg-gray-50 text-xs font-medium text-gray-500 rounded border border-gray-100"
                        >
                            {tag}
                        </span>
                    ))}
                    {((job.technicalEnvironment || job.tags)?.length || 0) > (isFeatured ? 6 : 3) && (
                        <span className="px-2 py-1 bg-gray-50 text-xs font-medium text-gray-400 rounded border border-gray-100">
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
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Left Column - Featured (Tall) */}
            <div className="h-full">
                {mainJob && <JobCard job={mainJob} isFeatured={true} />}
            </div>

            {/* Right Column - Stacked */}
            <div className="flex flex-col gap-6 h-full">
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

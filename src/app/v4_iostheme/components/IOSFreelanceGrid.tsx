'use client';

import React from 'react';
import Link from 'next/link';
import { WorkExperience } from "@/data/portfolioData";

interface FreelanceGridProps {
    experiences: WorkExperience[];
}

const IOSJobCard: React.FC<{ job: WorkExperience; isFeatured?: boolean }> = ({ job, isFeatured }) => {
    const displayedAchievements = job.achievements.slice(0, 3);
    const cardId = job.company.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');

    return (
        <div
            className={`rounded-[2rem] p-8 backdrop-blur-xl border transition-all duration-300 hover:scale-[1.01] flex flex-col h-full group relative overflow-hidden ${isFeatured
                    ? 'bg-blue-600/10 border-blue-500/30 hover:bg-blue-600/20 shadow-[0_0_40px_-10px_rgba(37,99,235,0.3)]'
                    : 'bg-white/5 border-white/10 hover:bg-white/10 shadow-lg'
                }`}
        >
            {/* Top Right Arrow Icon - Link to Details */}
            <Link
                href={`/experience#${cardId}`}
                className="absolute top-6 right-6 p-2 text-white/30 hover:text-white hover:bg-white/10 rounded-full transition-all duration-300"
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
                        <h3 className={`font-bold text-white group-hover/link:text-blue-400 transition-colors ${isFeatured ? 'text-4xl mb-2 tracking-tight' : 'text-2xl'}`}>
                            {job.role}
                        </h3>
                    </Link>
                    <span className={`font-semibold px-3 py-1 rounded-full border whitespace-nowrap mt-2 backdrop-blur-sm ${isFeatured
                            ? 'bg-blue-500/20 text-blue-300 border-blue-500/30 text-sm'
                            : 'bg-white/5 text-gray-400 border-white/10 text-xs'
                        }`}>
                        {job.period}
                    </span>
                </div>

                <div className={`font-medium flex items-center gap-2 ${isFeatured ? 'text-xl text-blue-300 font-bold' : 'text-base text-gray-400'}`}>
                    {job.company}
                </div>
            </div>

            {/* Key Metrics (Featured Only) */}
            {isFeatured && job.keyMetrics && (
                <div className="grid grid-cols-2 gap-4 mb-6">
                    {job.keyMetrics.slice(0, 2).map((m, i) => (
                        <div key={i} className="bg-black/20 p-4 rounded-2xl border border-white/5 text-center backdrop-blur-sm">
                            <div className="text-2xl font-bold text-white">{m.value}</div>
                            <div className="text-[10px] text-gray-400 font-bold uppercase tracking-wide mt-1">{m.label}</div>
                        </div>
                    ))}
                </div>
            )}

            {/* Achievements Summary */}
            <div className="flex-grow mb-6">
                <ul className="space-y-4">
                    {displayedAchievements.map((item, i) => (
                        <li key={i} className="flex items-start text-gray-300">
                            <span className="text-blue-500 mr-3 mt-1.5 min-w-[6px] text-lg leading-none">•</span>
                            <span className={`${isFeatured ? "text-lg/relaxed font-light" : "text-sm/relaxed line-clamp-3 font-light opacity-90"}`}>{item}</span>
                        </li>
                    ))}
                </ul>
            </div>

            {/* Tech Stack Tags */}
            <div className="mt-auto pt-6 border-t border-white/5">
                <div className="flex flex-wrap gap-2">
                    {(job.technicalEnvironment || job.tags)?.slice(0, isFeatured ? 8 : 4).map((tag, i) => (
                        <span
                            key={i}
                            className="px-3 py-1.5 bg-white/5 text-xs font-medium text-gray-400 rounded-lg border border-white/5 transition-colors cursor-default"
                        >
                            {tag}
                        </span>
                    ))}
                    {((job.technicalEnvironment || job.tags)?.length || 0) > (isFeatured ? 8 : 4) && (
                        <span className="px-3 py-1.5 bg-white/5 text-xs font-medium text-gray-600 rounded-lg border border-white/5">
                            +more
                        </span>
                    )}
                </div>
            </div>
        </div>
    );
};

const IOSFreelanceGrid: React.FC<FreelanceGridProps> = ({ experiences }) => {
    const featuredJob = experiences.find(job => job.company.includes("IBM"));
    const otherJobs = experiences.filter(job => !job.company.includes("IBM"));
    const mainJob = featuredJob || experiences[0];
    const sideJobs = featuredJob ? otherJobs : experiences.slice(1);

    return (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="h-full">
                {mainJob && <IOSJobCard job={mainJob} isFeatured={true} />}
            </div>
            <div className="flex flex-col gap-8 h-full">
                {sideJobs.map((job, index) => (
                    <div key={index} className="flex-1">
                        <IOSJobCard job={job} isFeatured={false} />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default IOSFreelanceGrid;

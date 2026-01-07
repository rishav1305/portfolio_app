"use client";

import React from 'react';
import { WorkExperience } from "@/data/portfolioData";

interface FreelanceGridProps {
    experiences: WorkExperience[];
}

const FreelanceGrid: React.FC<FreelanceGridProps> = ({ experiences }) => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {experiences.map((job, index) => (
                <div
                    key={index}
                    className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 flex flex-col h-full group"
                >
                    {/* Header */}
                    <div className="mb-4">
                        <div className="flex justify-between items-start mb-2">
                            <h3 className="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
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

                    {/* Achievements Summary (Top 2) */}
                    <div className="flex-grow mb-6">
                        <ul className="space-y-2">
                            {job.achievements.slice(0, 2).map((item, i) => (
                                <li key={i} className="flex items-start text-sm text-gray-600 text-sm">
                                    <span className="text-green-500 mr-2 mt-1 min-w-[4px]">•</span>
                                    <span className="line-clamp-3">{item}</span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Tech Stack Tags */}
                    <div className="mt-auto">
                        <div className="flex flex-wrap gap-2">
                            {(job.technicalEnvironment || job.tags)?.slice(0, 3).map((tag, i) => (
                                <span
                                    key={i}
                                    className="px-2 py-1 bg-gray-50 text-xs font-medium text-gray-500 rounded border border-gray-100"
                                >
                                    {tag}
                                </span>
                            ))}
                            {((job.technicalEnvironment || job.tags)?.length || 0) > 3 && (
                                <span className="px-2 py-1 bg-gray-50 text-xs font-medium text-gray-400 rounded border border-gray-100">
                                    +more
                                </span>
                            )}
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default FreelanceGrid;

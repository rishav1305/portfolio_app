"use client";

import React from 'react';
import { WorkExperience } from "@/data/portfolioData";

interface ExperienceTimelineProps {
    experiences: WorkExperience[];
}

const ExperienceTimeline: React.FC<ExperienceTimelineProps> = ({ experiences }) => {
    return (
        <div className="space-y-8 relative">
            {/* Vertical Timeline Line (Hidden on mobile for cleaner look) */}
            <div className="hidden md:block absolute left-8 top-0 bottom-0 w-0.5 bg-gray-200"></div>

            {experiences.map((job, index) => (
                <div key={index} className="relative pl-0 md:pl-20">
                    {/* Timeline Dot */}
                    <div className="hidden md:flex absolute left-6 top-6 w-4 h-4 bg-blue-600 rounded-full border-4 border-white shadow-sm transform -translate-x-1/2"></div>

                    <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100 overflow-hidden">
                        {/* Header Section */}
                        <div className="p-6 md:p-8 border-b border-gray-100 bg-gradient-to-r from-blue-50/50 to-transparent">
                            <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4">
                                <div>
                                    <h3 className="text-2xl font-bold text-gray-900">{job.role}</h3>
                                    <div className="text-xl text-blue-700 font-semibold mt-1">{job.company}</div>
                                    {job.teamSize && (
                                        <div className="flex items-center mt-2 text-sm font-medium text-gray-600 bg-blue-50 w-fit px-3 py-1 rounded-full border border-blue-100">
                                            <svg className="w-4 h-4 mr-2 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                                            </svg>
                                            Led Team of {job.teamSize}
                                        </div>
                                    )}
                                </div>
                                <div className="text-right md:text-right text-gray-500">
                                    <div className="flex items-center md:justify-end gap-2 text-sm font-medium mb-1">
                                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                        </svg>
                                        {job.period}
                                    </div>
                                    <div className="flex items-center md:justify-end gap-2 text-sm">
                                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                        </svg>
                                        {job.location}
                                    </div>
                                </div>
                            </div>

                            {/* Key Metrics Grid */}
                            {job.keyMetrics && job.keyMetrics.length > 0 && (
                                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">
                                    {job.keyMetrics.map((metric, i) => (
                                        <div key={i} className="bg-white p-3 rounded-lg border border-gray-100 shadow-sm text-center">
                                            <div className="text-xl md:text-2xl font-bold text-blue-600">{metric.value}</div>
                                            <div className="text-xs text-gray-500 uppercase tracking-wide font-medium mt-1">{metric.label}</div>
                                        </div>
                                    ))}
                                </div>
                            )}
                        </div>

                        {/* Content Body */}
                        <div className="p-6 md:p-8 space-y-8">
                            {/* Managerial / Leadership Section */}
                            {job.managerialAchievements && job.managerialAchievements.length > 0 && (
                                <div>
                                    <h4 className="flex items-center text-lg font-bold text-gray-800 mb-4">
                                        <span className="bg-purple-100 text-purple-700 p-1.5 rounded-lg mr-3">
                                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                                            </svg>
                                        </span>
                                        Leadership & Strategy
                                    </h4>
                                    <ul className="space-y-3 pl-2">
                                        {job.managerialAchievements.map((item, i) => (
                                            <li key={i} className="flex items-start text-gray-700">
                                                <span className="text-purple-500 mr-2 mt-1.5">•</span>
                                                <span>{item}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            )}

                            {/* Technical Achievements */}
                            <div>
                                <h4 className="flex items-center text-lg font-bold text-gray-800 mb-4">
                                    <span className="bg-blue-100 text-blue-700 p-1.5 rounded-lg mr-3">
                                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                                        </svg>
                                    </span>
                                    Technical Execution
                                </h4>
                                <ul className="space-y-3 pl-2">
                                    {job.achievements.map((item, i) => (
                                        <li key={i} className="flex items-start text-gray-700">
                                            <span className="text-blue-500 mr-2 mt-1.5">•</span>
                                            <span>{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            {/* Tech Stack Tags */}
                            {(job.technicalEnvironment || job.tags) && (
                                <div className="pt-4 border-t border-gray-100">
                                    <div className="flex flex-wrap gap-2">
                                        {(job.technicalEnvironment || job.tags)?.map((tag, i) => (
                                            <span key={i} className="px-3 py-1 bg-gray-100 hover:bg-gray-200 text-gray-700 text-sm rounded-md transition-colors font-medium">
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default ExperienceTimeline;

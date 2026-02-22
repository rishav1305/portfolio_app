"use client";

import React, { useState } from 'react';
import type { WorkExperience } from "@/types/portfolio";
import { motion, AnimatePresence } from "framer-motion";

interface ExperienceTimelineProps {
    experiences: WorkExperience[];
    showClients?: boolean;
}

const ExperienceCard: React.FC<{ job: WorkExperience; showClients: boolean; index: number }> = ({ job, showClients, index }) => {
    const [isExpanded, setIsExpanded] = useState(false);

    // Initial achievements to show (first 3)
    const initialAchievements = job.achievements.slice(0, 3);
    const hiddenAchievements = job.achievements.slice(3);
    const hasMoreContent = hiddenAchievements.length > 0 ||
        (job.managerialAchievements && job.managerialAchievements.length > 0) ||
        (job.aiEnablement && job.aiEnablement.length > 0) ||
        (job.details && job.details.length > 0) ||
        (showClients && job.clients && job.clients.length > 0) ||
        (job.technicalEnvironment || job.tags);

    // Generate specific ID for deep linking
    const cardId = job.company.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');

    return (
        <div id={cardId} className="relative pl-0 md:pl-24 group scroll-mt-24">
            {/* Timeline Dot with Pulse Effect */}
            <div className="hidden md:flex absolute left-8 top-8 w-5 h-5 -translate-x-1/2 items-center justify-center">
                <div className="w-full h-full bg-white rounded-full border-4 border-blue-600 shadow-lg relative z-10 group-hover:border-purple-600 transition-colors duration-300"></div>
                <div className="absolute inset-0 bg-blue-400 rounded-full animate-ping opacity-20"></div>
                <div className="absolute top-1/2 left-8 w-16 h-0.5 bg-gradient-to-r from-blue-200 to-transparent -translate-y-1/2"></div>
            </div>

            <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg border border-white/20 overflow-hidden transform transition-all duration-300 hover:shadow-2xl hover:border-blue-100/50">
                {/* Header Section with subtle gradient */}
                <div className="p-6 md:p-8 border-b border-gray-100/50 bg-gradient-to-r from-blue-50/30 via-purple-50/10 to-transparent">
                    <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4">
                        <div>
                            <h3 className="text-2xl md:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-gray-900 to-gray-700 group-hover:from-blue-700 group-hover:to-purple-700 transition-all duration-300">
                                {job.role}
                            </h3>
                            <div className="text-xl text-blue-700 font-semibold mt-2 flex items-center gap-2">
                                {job.company}
                            </div>

                            <div className="flex flex-wrap gap-3 mt-4">
                                {job.remoteWork && (
                                    <div className="flex items-center text-xs font-bold text-emerald-700 bg-emerald-50 px-3 py-1.5 rounded-full border border-emerald-100/50 shadow-sm">
                                        <svg className="w-3.5 h-3.5 mr-1.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                        </svg>
                                        REMOTE
                                    </div>
                                )}
                                <div className="flex items-center text-xs font-bold text-gray-500 bg-gray-50 px-3 py-1.5 rounded-full border border-gray-100 shadow-sm">
                                    <svg className="w-3.5 h-3.5 mr-1.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                    </svg>
                                    {job.location}
                                </div>
                            </div>
                        </div>

                        <div className="md:text-right shrink-0">
                            <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 text-blue-700 rounded-lg text-sm font-semibold border border-blue-100 shadow-sm">
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                </svg>
                                {job.period}
                            </div>
                        </div>
                    </div>

                    {/* Key Metrics Grid */}
                    {job.keyMetrics && job.keyMetrics.length > 0 && (
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
                            {job.keyMetrics.map((metric, i) => (
                                <div key={i} className="bg-white/50 backdrop-blur-md p-4 rounded-xl border border-blue-100 shadow-sm hover:shadow-md transition-all duration-300 group/metric text-center">
                                    <div className="text-2xl md:text-3xl font-black text-transparent bg-clip-text bg-gradient-to-br from-blue-600 to-purple-600 group-hover/metric:scale-110 transform transition-transform duration-300 inline-block">
                                        {metric.value}
                                    </div>
                                    <div className="text-xs text-gray-500 uppercase tracking-wider font-bold mt-2">{metric.label}</div>
                                </div>
                            ))}
                        </div>
                    )}
                </div>

                {/* Content Body */}
                <div className="p-6 md:p-8 space-y-8 bg-gradient-to-b from-white to-gray-50/30">
                    {/* Always visible: First 3 Achievements (Key Achievements) */}
                    <div className="relative">
                        <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-400 to-transparent rounded-full opacity-30"></div>
                        <div className="pl-6">
                            <h4 className="flex items-center text-lg font-bold text-gray-800 mb-4 group/header">
                                <span className="bg-blue-100 text-blue-700 p-2 rounded-lg mr-3 group-hover/header:rotate-6 transition-transform duration-300 shadow-sm">
                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                                    </svg>
                                </span>
                                Key Achievements
                            </h4>
                            <ul className="space-y-4">
                                {initialAchievements.map((item, i) => (
                                    <li key={i} className="flex items-start text-gray-700 group/item">
                                        <span className="text-blue-400 mr-3 mt-1.5 transition-transform duration-300 group-hover/item:text-blue-600 group-hover/item:scale-125">•</span>
                                        <span className="leading-relaxed">{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    {/* Collapsible Section */}
                    <AnimatePresence>
                        {isExpanded && (
                            <motion.div
                                initial={{ height: 0, opacity: 0 }}
                                animate={{ height: "auto", opacity: 1 }}
                                exit={{ height: 0, opacity: 0 }}
                                transition={{ duration: 0.4, ease: "easeInOut" }}
                                className="overflow-hidden space-y-8"
                            >
                                {/* Remaining Achievements */}
                                {hiddenAchievements.length > 0 && (
                                    <div className="relative pl-6">
                                        <ul className="space-y-4">
                                            {hiddenAchievements.map((item, i) => (
                                                <li key={i + 3} className="flex items-start text-gray-700 group/item">
                                                    <span className="text-blue-400 mr-3 mt-1.5 transition-transform duration-300 group-hover/item:text-blue-600 group-hover/item:scale-125">•</span>
                                                    <span className="leading-relaxed">{item}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                )}

                                {/* Managerial / Leadership Section */}
                                {job.managerialAchievements && job.managerialAchievements.length > 0 && (
                                    <div className="relative pt-4">
                                        <div className="absolute left-0 top-4 bottom-0 w-1 bg-gradient-to-b from-purple-400 to-transparent rounded-full opacity-30"></div>
                                        <div className="pl-6">
                                            <h4 className="flex items-center text-lg font-bold text-gray-800 mb-4 group/header">
                                                <span className="bg-purple-100 text-purple-700 p-2 rounded-lg mr-3 group-hover/header:rotate-6 transition-transform duration-300 shadow-sm">
                                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                                                    </svg>
                                                </span>
                                                Leadership & Strategy
                                            </h4>
                                            <ul className="space-y-4">
                                                {job.managerialAchievements.map((item, i) => (
                                                    <li key={i} className="flex items-start text-gray-700 group/item">
                                                        <span className="text-purple-400 mr-3 mt-1.5 transition-transform duration-300 group-hover/item:text-purple-600 group-hover/item:scale-125">•</span>
                                                        <span className="leading-relaxed">{item}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>
                                )}

                                {/* AI Enablement Section */}
                                {job.aiEnablement && job.aiEnablement.length > 0 && (
                                    <div className="relative">
                                        <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-indigo-500 to-transparent rounded-full opacity-30"></div>
                                        <div className="pl-6">
                                            <h4 className="flex items-center text-lg font-bold text-gray-800 mb-4 group/header">
                                                <span className="bg-indigo-100 text-indigo-700 p-2 rounded-lg mr-3 group-hover/header:rotate-6 transition-transform duration-300 shadow-sm">
                                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                                                    </svg>
                                                </span>
                                                AI Enablement
                                            </h4>
                                            <ul className="space-y-4">
                                                {job.aiEnablement.map((item, i) => (
                                                    <li key={i} className="flex items-start text-gray-700 group/item">
                                                        <span className="text-indigo-400 mr-3 mt-1.5 transition-transform duration-300 group-hover/item:text-indigo-600 group-hover/item:scale-125">•</span>
                                                        <span className="leading-relaxed">{item}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>
                                )}

                                {/* Technical Execution (Details) Section */}
                                {job.details && job.details.length > 0 && (
                                    <div className="relative">
                                        <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-emerald-400 to-transparent rounded-full opacity-30"></div>
                                        <div className="pl-6">
                                            <h4 className="flex items-center text-lg font-bold text-gray-800 mb-4 group/header">
                                                <span className="bg-emerald-100 text-emerald-700 p-2 rounded-lg mr-3 group-hover/header:rotate-6 transition-transform duration-300 shadow-sm">
                                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                                                    </svg>
                                                </span>
                                                Technical Execution
                                            </h4>
                                            <ul className="space-y-4">
                                                {job.details.map((item, i) => (
                                                    <li key={i} className="flex items-start text-gray-700 group/item">
                                                        <span className="text-emerald-400 mr-3 mt-1.5 transition-transform duration-300 group-hover/item:text-emerald-600 group-hover/item:scale-125">•</span>
                                                        <span className="leading-relaxed">{item}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>
                                )}

                                {/* Key Clients Section */}
                                {showClients && job.clients && job.clients.length > 0 && (
                                    <div className="relative">
                                        <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-orange-400 to-transparent rounded-full opacity-30"></div>
                                        <div className="pl-6">
                                            <h4 className="flex items-center text-lg font-bold text-gray-800 mb-4 group/header">
                                                <span className="bg-orange-100 text-orange-700 p-2 rounded-lg mr-3 group-hover/header:rotate-6 transition-transform duration-300 shadow-sm">
                                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                                                    </svg>
                                                </span>
                                                Key Clients
                                            </h4>
                                            <div className="grid gap-4 md:grid-cols-2">
                                                {job.clients.map((client, i) => (
                                                    <div key={i} className="bg-orange-50/50 p-4 rounded-xl border border-orange-100/50 hover:bg-orange-50 transition-colors duration-300">
                                                        <h5 className="font-bold text-gray-800 mb-2">{client.name}</h5>
                                                        {Array.isArray(client.description) ? (
                                                            <ul className="space-y-2">
                                                                {client.description.map((desc, j) => (
                                                                    <li key={j} className="flex items-start text-sm text-gray-600">
                                                                        <span className="text-orange-400 mr-2 mt-1">•</span>
                                                                        <span>{desc}</span>
                                                                    </li>
                                                                ))}
                                                            </ul>
                                                        ) : (
                                                            <p className="text-sm text-gray-600 leading-relaxed">{client.description}</p>
                                                        )}
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                )}

                                {/* Technology Stack Section */}
                                {(job.technicalEnvironment || job.tags) && (
                                    <div className="relative">
                                        <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-teal-400 to-transparent rounded-full opacity-30"></div>
                                        <div className="pl-6">
                                            <h4 className="flex items-center text-lg font-bold text-gray-800 mb-4 group/header">
                                                <span className="bg-teal-100 text-teal-700 p-2 rounded-lg mr-3 group-hover/header:rotate-6 transition-transform duration-300 shadow-sm">
                                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                                                    </svg>
                                                </span>
                                                Technology Stack
                                            </h4>
                                            <div className="flex flex-wrap gap-2">
                                                {(job.technicalEnvironment || job.tags)?.map((tag, i) => (
                                                    <span key={i} className="px-3 py-1.5 bg-gray-50 hover:bg-white text-gray-600 text-sm rounded-lg border border-gray-100 hover:border-blue-200 hover:text-blue-600 hover:shadow-sm transition-all duration-200 font-medium cursor-default">
                                                        {tag}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                )}
                            </motion.div>
                        )}
                    </AnimatePresence>

                    {/* Expand/Collapse Toggle Button */}
                    {hasMoreContent && (
                        <div className="flex justify-center pt-4">
                            <button
                                onClick={() => setIsExpanded(!isExpanded)}
                                className="group/btn relative px-6 py-2.5 rounded-full bg-white border border-blue-100 shadow-sm hover:shadow-md transition-all duration-300 flex items-center gap-2 text-sm font-bold text-gray-600 hover:text-blue-600"
                            >
                                <span className="absolute inset-0 rounded-full bg-blue-50 opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300"></span>
                                <span className="relative flex items-center gap-2">
                                    {isExpanded ? (
                                        <>
                                            Show Less
                                            <svg className="w-4 h-4 transform rotate-180 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                            </svg>
                                        </>
                                    ) : (
                                        <>
                                            Show Details
                                            <svg className="w-4 h-4 transform group-hover/btn:translate-y-0.5 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                            </svg>
                                        </>
                                    )}
                                </span>
                            </button>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

const ExperienceTimeline: React.FC<ExperienceTimelineProps> = ({ experiences, showClients = true }) => {
    return (
        <div className="space-y-12 relative px-4 md:px-0">
            {/* Vertical Timeline Line with Gradient */}
            <div className="hidden md:block absolute left-8 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-500 via-purple-500 to-blue-500 opacity-20 rounded-full"></div>

            {experiences.map((job, index) => (
                <ExperienceCard key={index} job={job} showClients={showClients} index={index} />
            ))}
        </div>
    );
};

export default ExperienceTimeline;

'use client';

import React, { useState } from 'react';
import { WorkExperience } from "@/data/portfolioData";
import { motion, AnimatePresence } from "framer-motion";

interface IOSExperienceTimelineProps {
    experiences: WorkExperience[];
    showClients?: boolean;
}

const IOSExperienceCard: React.FC<{ job: WorkExperience; showClients: boolean; index: number }> = ({ job, showClients, index }) => {
    const [isExpanded, setIsExpanded] = useState(false);

    const initialAchievements = job.achievements.slice(0, 3);
    const hiddenAchievements = job.achievements.slice(3);
    const hasMoreContent = hiddenAchievements.length > 0 ||
        (job.managerialAchievements && job.managerialAchievements.length > 0) ||
        (job.aiEnablement && job.aiEnablement.length > 0) ||
        (job.details && job.details.length > 0) ||
        (showClients && job.clients && job.clients.length > 0) ||
        (job.technicalEnvironment || job.tags);

    const cardId = job.company.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');

    return (
        <div id={cardId} className="relative pl-0 md:pl-24 group scroll-mt-24">
            {/* Timeline Dot */}
            <div className="hidden md:flex absolute left-8 top-8 w-5 h-5 -translate-x-1/2 items-center justify-center">
                <div className="w-full h-full bg-black rounded-full border-4 border-blue-600 relative z-10 group-hover:border-purple-500 transition-colors duration-300"></div>
                <div className="absolute inset-0 bg-blue-500 rounded-full animate-ping opacity-20"></div>
            </div>

            <div className="bg-white/5 backdrop-blur-xl rounded-[2rem] border border-white/10 overflow-hidden transform transition-all duration-300 hover:bg-white/10 shadow-2xl">
                {/* Header Section */}
                <div className="p-6 md:p-8 border-b border-white/5 bg-gradient-to-r from-blue-900/20 to-transparent">
                    <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4">
                        <div>
                            <h3 className="text-2xl md:text-3xl font-bold text-white group-hover:text-blue-200 transition-colors">
                                {job.role}
                            </h3>
                            <div className="text-xl text-blue-400 font-semibold mt-2 flex items-center gap-2">
                                {job.company}
                            </div>

                            <div className="flex flex-wrap gap-3 mt-4">
                                {job.remoteWork && (
                                    <div className="flex items-center text-[10px] uppercase font-bold text-emerald-400 bg-emerald-900/30 px-3 py-1.5 rounded-full border border-emerald-500/30">
                                        REMOTE
                                    </div>
                                )}
                                <div className="flex items-center text-[10px] uppercase font-bold text-gray-400 bg-white/5 px-3 py-1.5 rounded-full border border-white/10">
                                    {job.location}
                                </div>
                            </div>
                        </div>

                        <div className="md:text-right shrink-0">
                            <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-600/20 text-blue-300 rounded-lg text-sm font-semibold border border-blue-500/30">
                                {job.period}
                            </div>
                        </div>
                    </div>

                    {/* Key Metrics Grid */}
                    {job.keyMetrics && job.keyMetrics.length > 0 && (
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
                            {job.keyMetrics.map((metric, i) => (
                                <div key={i} className="bg-black/20 backdrop-blur-sm p-4 rounded-xl border border-white/5 text-center">
                                    <div className="text-2xl md:text-3xl font-black text-transparent bg-clip-text bg-gradient-to-br from-blue-400 to-purple-400">
                                        {metric.value}
                                    </div>
                                    <div className="text-[10px] text-gray-500 uppercase tracking-wider font-bold mt-2">{metric.label}</div>
                                </div>
                            ))}
                        </div>
                    )}
                </div>

                {/* Content Body */}
                <div className="p-6 md:p-8 space-y-8 bg-transparent">
                    {/* Key Achievements */}
                    <div className="relative">
                        <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-500 to-transparent rounded-full opacity-30"></div>
                        <div className="pl-6">
                            <h4 className="text-lg font-bold text-white mb-4 flex items-center">
                                <span className="w-8 h-8 rounded-lg bg-blue-500/20 flex items-center justify-center mr-3 border border-blue-500/30">
                                    💡
                                </span>
                                Key Achievements
                            </h4>
                            <ul className="space-y-4">
                                {initialAchievements.map((item, i) => (
                                    <li key={i} className="flex items-start text-gray-300 group/item">
                                        <span className="text-blue-500 mr-3 mt-1.5">•</span>
                                        <span className="leading-relaxed font-light">{item}</span>
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
                                {hiddenAchievements.length > 0 && (
                                    <div className="relative pl-6">
                                        <ul className="space-y-4">
                                            {hiddenAchievements.map((item, i) => (
                                                <li key={i + 3} className="flex items-start text-gray-300">
                                                    <span className="text-blue-500 mr-3 mt-1.5">•</span>
                                                    <span className="leading-relaxed font-light">{item}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                )}

                                {/* Leadership etc - using simplified structure */}
                                {job.managerialAchievements && job.managerialAchievements.length > 0 && (
                                    <div className="relative pt-4">
                                        <div className="absolute left-0 top-4 bottom-0 w-1 bg-gradient-to-b from-purple-500 to-transparent rounded-full opacity-30"></div>
                                        <div className="pl-6">
                                            <h4 className="text-lg font-bold text-white mb-4 flex items-center">
                                                <span className="w-8 h-8 rounded-lg bg-purple-500/20 flex items-center justify-center mr-3 border border-purple-500/30">🚀</span>
                                                Leadership & Strategy
                                            </h4>
                                            <ul className="space-y-4">
                                                {job.managerialAchievements.map((item, i) => (
                                                    <li key={i} className="flex items-start text-gray-300">
                                                        <span className="text-purple-400 mr-3 mt-1.5">•</span>
                                                        <span className="leading-relaxed font-light">{item}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>
                                )}

                                {/* AI Section */}
                                {job.aiEnablement && job.aiEnablement.length > 0 && (
                                    <div className="relative pt-4">
                                        <div className="absolute left-0 top-4 bottom-0 w-1 bg-gradient-to-b from-indigo-500 to-transparent rounded-full opacity-30"></div>
                                        <div className="pl-6">
                                            <h4 className="text-lg font-bold text-white mb-4 flex items-center">
                                                <span className="w-8 h-8 rounded-lg bg-indigo-500/20 flex items-center justify-center mr-3 border border-indigo-500/30">🤖</span>
                                                AI Enablement
                                            </h4>
                                            <ul className="space-y-4">
                                                {job.aiEnablement.map((item, i) => (
                                                    <li key={i} className="flex items-start text-gray-300">
                                                        <span className="text-indigo-400 mr-3 mt-1.5">•</span>
                                                        <span className="leading-relaxed font-light">{item}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>
                                )}

                                {/* Clients */}
                                {showClients && job.clients && job.clients.length > 0 && (
                                    <div className="relative pt-4">
                                        <div className="absolute left-0 top-4 bottom-0 w-1 bg-gradient-to-b from-orange-500 to-transparent rounded-full opacity-30"></div>
                                        <div className="pl-6">
                                            <h4 className="text-lg font-bold text-white mb-4 flex items-center">
                                                <span className="w-8 h-8 rounded-lg bg-orange-500/20 flex items-center justify-center mr-3 border border-orange-500/30">🤝</span>
                                                Key Clients
                                            </h4>
                                            <div className="grid gap-4 md:grid-cols-2">
                                                {job.clients.map((client, i) => (
                                                    <div key={i} className="bg-orange-500/10 p-4 rounded-xl border border-orange-500/20">
                                                        <h5 className="font-bold text-white mb-2">{client.name}</h5>
                                                        <p className="text-sm text-gray-400 leading-relaxed font-light">{Array.isArray(client.description) ? client.description[0] : client.description}</p>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                )}

                                {/* Tech Stack */}
                                {(job.technicalEnvironment || job.tags) && (
                                    <div className="relative pt-4">
                                        <div className="absolute left-0 top-4 bottom-0 w-1 bg-gradient-to-b from-teal-500 to-transparent rounded-full opacity-30"></div>
                                        <div className="pl-6">
                                            <h4 className="text-lg font-bold text-white mb-4 flex items-center">
                                                <span className="w-8 h-8 rounded-lg bg-teal-500/20 flex items-center justify-center mr-3 border border-teal-500/30">💻</span>
                                                Technology Stack
                                            </h4>
                                            <div className="flex flex-wrap gap-2">
                                                {(job.technicalEnvironment || job.tags)?.map((tag, i) => (
                                                    <span key={i} className="px-3 py-1.5 bg-white/5 text-gray-400 text-sm rounded-lg border border-white/10 hover:border-teal-500/50 hover:text-teal-300 transition-colors cursor-default">
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

                    {/* Toggle Button */}
                    {hasMoreContent && (
                        <div className="flex justify-center pt-4">
                            <button
                                onClick={() => setIsExpanded(!isExpanded)}
                                className="group/btn relative px-6 py-2.5 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 transition-all duration-300 flex items-center gap-2 text-sm font-bold text-white"
                            >
                                <span className="relative flex items-center gap-2">
                                    {isExpanded ? (
                                        <>
                                            Show Less
                                            <svg className="w-4 h-4 transform rotate-180 transition-transform duration-300 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                            </svg>
                                        </>
                                    ) : (
                                        <>
                                            Show Details
                                            <svg className="w-4 h-4 transform group-hover/btn:translate-y-0.5 transition-transform duration-300 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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

const IOSExperienceTimeline: React.FC<IOSExperienceTimelineProps> = ({ experiences, showClients = true }) => {
    return (
        <div className="space-y-12 relative px-4 md:px-0">
            {/* Vertical Timeline */}
            <div className="hidden md:block absolute left-8 top-0 bottom-0 w-px bg-gradient-to-b from-blue-600 via-purple-600 to-transparent opacity-40"></div>

            {experiences.map((job, index) => (
                <IOSExperienceCard key={index} job={job} showClients={showClients} index={index} />
            ))}
        </div>
    );
};

export default IOSExperienceTimeline;

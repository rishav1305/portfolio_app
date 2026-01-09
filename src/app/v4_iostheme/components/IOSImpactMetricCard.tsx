'use client';

import React from 'react';
import { CaseStudy } from '@/data/portfolioData';

interface IOSImpactMetricCardProps {
    study: CaseStudy;
}

const IOSImpactMetricCard: React.FC<IOSImpactMetricCardProps> = ({ study }) => {
    return (
        <div className="bg-white/5 backdrop-blur-xl rounded-3xl overflow-hidden border border-white/10 shadow-2xl hover:bg-white/10 transition-all duration-300 group">
            {/* Header with gradient mesh */}
            <div className="relative p-8 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20 opacity-50" />
                <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/30 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />

                <div className="relative z-10">
                    <span className="inline-block px-3 py-1 bg-blue-500/20 border border-blue-500/30 text-blue-300 text-xs font-bold tracking-wider uppercase rounded-full mb-3 backdrop-blur-sm">
                        {study.role}
                    </span>
                    <h3 className="text-2xl font-bold text-white">{study.title}</h3>
                </div>
            </div>

            <div className="p-8 pt-0">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8 border-t border-white/5 pt-8">
                    <div className="space-y-2">
                        <h4 className="text-xs font-bold text-gray-500 uppercase tracking-widest">Challenge</h4>
                        <p className="text-gray-300 text-sm leading-relaxed">
                            {study.challenge}
                        </p>
                    </div>
                    <div className="space-y-2">
                        <h4 className="text-xs font-bold text-blue-400 uppercase tracking-widest">Solution</h4>
                        <p className="text-gray-300 text-sm leading-relaxed">
                            {study.solution}
                        </p>
                    </div>
                    <div className="space-y-2">
                        <h4 className="text-xs font-bold text-green-400 uppercase tracking-widest">Impact</h4>
                        <p className="text-gray-300 text-sm leading-relaxed font-medium">
                            {study.impact}
                        </p>
                    </div>
                </div>

                {/* Metrics Bar */}
                <div className="bg-black/20 rounded-2xl p-6 border border-white/5">
                    <div className="grid grid-cols-3 gap-4 text-center divide-x divide-white/10">
                        {study.metrics.map((metric, idx) => (
                            <div key={idx} className="px-2">
                                <div className="text-2xl md:text-3xl font-black text-transparent bg-clip-text bg-gradient-to-b from-white to-white/50 mb-1">{metric.value}</div>
                                <div className="text-[10px] md:text-xs text-gray-500 font-bold uppercase tracking-wider">{metric.label}</div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Tech Stack Footer */}
                <div className="mt-6 flex flex-wrap gap-2">
                    {study.techStack.map((tech, idx) => (
                        <span key={idx} className="px-2 py-1 bg-white/5 text-gray-400 text-xs rounded-md border border-white/5 group-hover:border-white/20 transition-colors">
                            {tech}
                        </span>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default IOSImpactMetricCard;

import React from 'react';
import { CaseStudy } from '@/data/portfolioData';

interface ImpactMetricCardProps {
    study: CaseStudy;
}

const ImpactMetricCard: React.FC<ImpactMetricCardProps> = ({ study }) => {
    return (
        <div className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden transform transition-all hover:-translate-y-1 hover:shadow-2xl duration-300">
            <div className="bg-gradient-to-r from-gray-900 to-gray-800 p-6 text-white">
                <div className="flex justify-between items-start">
                    <div>
                        <span className="inline-block px-3 py-1 bg-blue-500 text-xs font-bold tracking-wider uppercase rounded-full mb-3">
                            {study.role}
                        </span>
                        <h3 className="text-2xl font-bold">{study.title}</h3>
                    </div>
                </div>
            </div>

            <div className="p-6 md:p-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
                    <div className="space-y-2">
                        <h4 className="text-sm font-bold text-gray-400 uppercase tracking-widest">The Challenge</h4>
                        <p className="text-gray-700 leading-relaxed font-medium">
                            {study.challenge}
                        </p>
                    </div>
                    <div className="space-y-2">
                        <h4 className="text-sm font-bold text-blue-500 uppercase tracking-widest">The Solution</h4>
                        <p className="text-gray-700 leading-relaxed">
                            {study.solution}
                        </p>
                    </div>
                    <div className="space-y-2">
                        <h4 className="text-sm font-bold text-green-500 uppercase tracking-widest">The Impact</h4>
                        <p className="text-gray-700 leading-relaxed font-medium">
                            {study.impact}
                        </p>
                    </div>
                </div>

                {/* Metrics Bar */}
                <div className="bg-gray-50 rounded-xl p-6 border border-gray-100">
                    <div className="grid grid-cols-3 gap-4 text-center divide-x divide-gray-200">
                        {study.metrics.map((metric, idx) => (
                            <div key={idx} className="px-2">
                                <div className="text-2xl md:text-3xl font-black text-gray-900 mb-1">{metric.value}</div>
                                <div className="text-xs md:text-sm text-gray-500 font-medium uppercase">{metric.label}</div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Tech Stack Footer */}
                <div className="mt-6 flex flex-wrap gap-2">
                    {study.techStack.map((tech, idx) => (
                        <span key={idx} className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded border border-gray-200">
                            {tech}
                        </span>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ImpactMetricCard;

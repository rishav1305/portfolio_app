'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Education } from '@/data/portfolioData';

type IOSEducationProps = {
    education: Education[];
};

const IOSEducation: React.FC<IOSEducationProps> = ({ education }) => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {education.map((edu, index) => (
                <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="bg-white/5 p-6 rounded-3xl shadow-lg border border-white/10 hover:bg-white/10 transition-all relative overflow-hidden group backdrop-blur-md"
                >
                    <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
                        <svg className="w-24 h-24 text-blue-500" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M12 3L1 9l11 6 9-4.91V17h2V9M5 13.18v4L12 21l7-3.82v-4L12 17l-7-3.82z" />
                        </svg>
                    </div>

                    <div className="relative z-10">
                        <div className="inline-block px-3 py-1 mb-4 text-[10px] font-bold tracking-wider text-blue-300 uppercase bg-blue-900/30 rounded-full border border-blue-500/30">
                            {edu.period}
                        </div>

                        <h3 className="text-xl font-bold text-white mb-2">{edu.institution}</h3>
                        <div className="text-lg font-medium text-blue-400 mb-1">{edu.degree}</div>
                        <div className="text-sm text-gray-400 mb-4">{edu.focusArea}</div>

                        <p className="text-gray-400 text-sm leading-relaxed border-t border-white/10 pt-4 font-light">
                            {edu.description}
                        </p>

                        <div className="mt-4 flex items-center text-xs text-gray-500 font-bold uppercase tracking-wide">
                            <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                            </svg>
                            {edu.location}
                        </div>
                    </div>
                </motion.div>
            ))}
        </div>
    );
};

export default IOSEducation;


'use client';

import React, { useEffect, useState } from 'react';
import { getServices } from '@/services/services';
import type { Service } from '@/data/portfolioData';

const ServiceIcon = ({ name }: { name: string }) => {
    switch (name) {
        case 'Cpu':
            return (
                <svg className="w-12 h-12 text-blue-600 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
            );
        case 'Database':
            return (
                <svg className="w-12 h-12 text-green-600 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
                </svg>
            );
        case 'Cloud':
            return (
                <svg className="w-12 h-12 text-purple-600 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
                </svg>
            );
        default:
            return null;
    }
};

const ServicePillars = () => {
    const [services, setServices] = useState<Service[]>([]);

    useEffect(() => {
        getServices().then(data => setServices(data));
    }, []);

    return (
        <section className="py-20 px-6 md:px-20 bg-gray-50" id="services-section">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-bold mb-4 inline-block relative after:content-[''] after:absolute after:bottom-[-10px] after:left-1/2 after:-translate-x-1/2 after:w-16 after:h-1 after:bg-blue-600 after:rounded-full">
                        How I Can Help
                    </h2>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto mt-6">
                        Expert services tailored to modernize your data infrastructure and accelerate AI adoption.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {services.map((service) => (
                        <div
                            key={service.id || service.title}
                            className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300 flex flex-col items-center text-center"
                        >
                            <ServiceIcon name={service.iconName} />

                            <h3 className="text-xl font-bold text-gray-800 mb-4">{service.title}</h3>

                            <p className="text-gray-600 mb-6 leading-relaxed flex-grow">
                                {service.description}
                            </p>

                            <div className="flex flex-wrap gap-2 justify-center">
                                {service.skills.map((skill, idx) => (
                                    <span
                                        key={idx}
                                        className="px-3 py-1 bg-gray-100 text-gray-700 text-xs font-semibold uppercase tracking-wide rounded-full"
                                    >
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ServicePillars;

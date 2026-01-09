"use client";
import React from 'react';
import portfolioData from '@/data/portfolioData';

const ServiceCard = ({ service }: { service: any }) => (
    <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300">
        <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
        <p className="text-gray-600 mb-4 text-sm leading-relaxed">{service.description}</p>
        <div>
            <h4 className="text-xs font-bold text-blue-600 uppercase tracking-wide mb-2">Outcomes</h4>
            <div className="flex flex-wrap gap-2 text-sm text-gray-700">
                {service.outcomes.map((outcome: string, idx: number) => (
                    <span key={idx} className="flex items-center">
                        <span className="w-1.5 h-1.5 bg-green-500 rounded-full mr-2"></span>
                        {outcome}
                    </span>
                ))}
            </div>
        </div>
    </div>
);

const ServiceGrid = () => {
    const { servicesV2 } = portfolioData;

    return (
        <section className="py-20 px-6 bg-white border-y border-gray-100">
            <div className="container mx-auto max-w-6xl">
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-bold mb-4">How I Can Help Your Business</h2>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                        From data pipelines to AI-powered insights, I deliver end-to-end solutions tailored to your business needs.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {servicesV2?.map((service, index) => (
                        <ServiceCard key={index} service={service} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ServiceGrid;

import React from 'react';
import portfolioData, { ServiceV3 } from '@/data/portfolioData';

const ServicePricingCard = ({ service }: { service: ServiceV3 }) => (
    <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 hover:shadow-xl hover:border-blue-100 transition-all duration-300 flex flex-col h-full relative overflow-hidden group">
        {/* Top accent bar */}
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-indigo-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>

        <div className="mb-6">
            <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
            <p className="text-gray-600 leading-relaxed text-sm">{service.description}</p>
        </div>

        <div className="mb-8 flex-grow">
            <h4 className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-4">What's Included</h4>
            <ul className="space-y-3">
                {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start text-sm text-gray-700">
                        <svg className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        {feature}
                    </li>
                ))}
            </ul>
        </div>

        <div className="pt-6 border-t border-gray-100 mt-auto">
            <div className="flex justify-between items-end mb-2">
                <div>
                    <span className="block text-xs text-gray-400 font-medium uppercase mb-1">Starting At</span>
                    <span className="text-2xl font-bold text-gray-900">{service.priceRange}</span>
                </div>
                <div className="text-right">
                    <span className="block text-xs text-gray-400 font-medium uppercase mb-1">Timeline</span>
                    <span className="text-sm font-bold text-blue-600">{service.timeline}</span>
                </div>
            </div>
        </div>
    </div>
);

const ServicesPricing = () => {
    const services = portfolioData.servicesV3 || [];

    return (
        <section className="py-20 px-6 bg-gray-50">
            <div className="container mx-auto max-w-6xl">
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-bold mb-4 text-gray-900">Services & Investment</h2>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                        Transparent, value-based pricing for high-impact results.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {services.map((service, index) => (
                        <ServicePricingCard key={index} service={service} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ServicesPricing;

'use client';

import React from 'react';
import Image from 'next/image';
import portfolioData from '@/data/portfolioData';

const IOSBrandMarquee = () => {
    const brands = portfolioData.brands || [];
    const loopBrands = [...brands, ...brands, ...brands, ...brands];

    return (
        <div className="w-full py-16 relative overflow-hidden bg-transparent">
            <p className="text-center text-xs font-bold text-white/40 uppercase tracking-[0.2em] mb-12">
                Trusted by Forward-Thinking Companies
            </p>

            <div className="relative w-full">
                {/* Gradient Masks */}
                <div className="absolute inset-y-0 left-0 w-24 md:w-64 bg-gradient-to-r from-[#000000] to-transparent z-20 pointer-events-none" />
                <div className="absolute inset-y-0 right-0 w-24 md:w-64 bg-gradient-to-l from-[#000000] to-transparent z-20 pointer-events-none" />

                <div className="flex w-fit animate-marquee hover:[animation-play-state:paused]">
                    {loopBrands.map((brand, idx) => (
                        <div key={`${brand.id}-${idx}`} className="px-4">
                            <div className="flex items-center justify-center w-[180px] h-[90px] md:w-[220px] md:h-[110px] bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl shadow-lg hover:bg-white/10 transition-colors duration-300">
                                <div className="relative w-36 h-14 md:w-48 md:h-16 opacity-70 hover:opacity-100 transition-opacity">
                                    <Image
                                        src={brand.logo}
                                        alt={brand.name}
                                        fill
                                        className="object-contain p-2 filter brightness-0 invert"
                                    />
                                    {/* brightness-0 invert makes logos white if they are black. Adjust if logos act weird. */}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <style jsx>{`
                @keyframes marquee {
                    0% { transform: translateX(0); }
                    100% { transform: translateX(-50%); } 
                }
                .animate-marquee {
                    animation: marquee 80s linear infinite;
                }
            `}</style>
        </div>
    );
};

export default IOSBrandMarquee;

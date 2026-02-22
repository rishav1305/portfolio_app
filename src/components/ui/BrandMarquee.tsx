'use client';

import React from 'react';
import Image from 'next/image';
import type { Brand } from '@/types/portfolio';

interface BrandMarqueeProps {
    brands?: Brand[];
}

const BrandMarquee = ({ brands = [] }: BrandMarqueeProps) => {
    // Create 4 identical sets for the seamless loop on wide screens
    // Using 4 sets ensures we can scroll -50% or -25% safely without running out of items
    const loopBrands = [...brands, ...brands, ...brands, ...brands];

    return (
        <div className="w-full bg-slate-50 py-16 border-y border-slate-200 overflow-hidden relative">
            <p className="text-center text-sm font-bold text-slate-400 uppercase tracking-[0.2em] mb-12">
                Trusted by Forward-Thinking Companies
            </p>

            <div className="relative w-full">
                {/* Gradient Masks for smooth fade in/out */}
                <div className="absolute inset-y-0 left-0 w-24 md:w-64 bg-gradient-to-r from-slate-50 to-transparent z-20 pointer-events-none" />
                <div className="absolute inset-y-0 right-0 w-24 md:w-64 bg-gradient-to-l from-slate-50 to-transparent z-20 pointer-events-none" />

                <div className="flex w-fit animate-marquee hover:[animation-play-state:paused]">
                    {loopBrands.map((brand, idx) => (
                        <div key={`${brand.id}-${idx}`} className="px-4">
                            <div className="flex items-center justify-center w-[200px] h-[100px] md:w-[240px] md:h-[120px] bg-white border border-slate-200 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300">
                                {/* Increased width relative to height to support wider logos like IndiaMART */}
                                <div className="relative w-40 h-16 md:w-52 md:h-20">
                                    <Image
                                        src={brand.logo}
                                        alt={brand.name}
                                        fill
                                        sizes="(max-width: 768px) 160px, 208px"
                                        className="object-contain p-2"
                                    />
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

export default BrandMarquee;

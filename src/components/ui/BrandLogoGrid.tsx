'use client';

import React from 'react';
import Image from 'next/image';
import { useInView } from '@/hooks/useInView';
import portfolioData, { Brand } from '@/data/portfolioData';

const BrandItem = ({ brand, index, isInView }: { brand: Brand; index: number; isInView: boolean }) => {
    return (
        <div
            className={`relative flex items-center justify-center p-6 bg-white/50 rounded-xl border border-gray-100/50 backdrop-blur-sm transition-all duration-300 group h-32 hover:bg-white/80 hover:shadow-[0_10px_30px_-10px_rgba(0,0,0,0.1)] hover:-translate-y-[5px] ${isInView ? 'animate-fade-in-up' : 'opacity-0'}`}
            style={{ animationDelay: `${index * 100}ms` }}
        >
            <div className="relative w-full h-full flex items-center justify-center">
                <Image
                    src={brand.logo}
                    alt={brand.name}
                    fill
                    sizes="(max-width: 768px) 120px, 160px"
                    className="object-contain grayscale opacity-70 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-300"
                />
            </div>
        </div>
    );
};

const BrandLogoGrid = () => {
    const brands = portfolioData.brands || [];
    const { ref, isInView } = useInView();

    return (
        <div className="flex flex-col items-center justify-center py-16 w-full">
            <div ref={ref} className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 md:gap-8 max-w-7xl mx-auto px-6 w-full">
                {brands.map((brand, index) => (
                    <BrandItem key={brand.id} brand={brand} index={index} isInView={isInView} />
                ))}
            </div>

            <div className="absolute opacity-0 pointer-events-none">
                {/* Preload hidden if needed, usually Next.js Image handles it */}
            </div>
        </div>
    );
};

export default BrandLogoGrid;

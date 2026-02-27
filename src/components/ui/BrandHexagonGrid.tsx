'use client';

import React from 'react';
import Image from 'next/image';
import { useInView } from '@/hooks/useInView';
import portfolioData, { Brand } from '@/data/portfolioData';

const BrandHexagon = ({ brand, index, isInView }: { brand: Brand; index: number; isInView: boolean }) => {
    return (
        <div
            className={`relative w-32 h-36 md:w-36 md:h-40 flex items-center justify-center m-[-8px] md:m-[-12px] transition-all duration-300 group hover:scale-[1.15] hover:z-20 hover:drop-shadow-[0px_10px_10px_rgba(0,0,0,0.2)] ${isInView ? 'animate-fade-in-up' : 'opacity-0'}`}
            style={{
                filter: "drop-shadow(0px 4px 6px rgba(0,0,0,0.05))",
                animationDelay: `${index * 50}ms`,
            }}
        >
            {/* Hexagon Shape Container */}
            <div
                className="absolute inset-0 flex items-center justify-center bg-white"
                style={{
                    clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)',
                }}
            >
                {/* Content */}
                <div className="relative z-10 w-28 h-28 flex items-center justify-center p-5">
                    <Image
                        src={brand.logo}
                        alt={brand.name}
                        fill
                        sizes="(max-width: 768px) 112px, 112px"
                        className="object-contain grayscale transition-all duration-300 group-hover:grayscale-0 group-hover:scale-110"
                    />
                </div>

                {/* Color Overlay on Hover */}
                <div
                    className="absolute inset-0 bg-blue-500 opacity-0 group-hover:opacity-10 transition-opacity duration-300 pointer-events-none mix-blend-overlay"
                    style={{ backgroundColor: brand.color }}
                />
            </div>
        </div>
    );
};

const BrandHexagonGrid = () => {
    const brands = portfolioData.brands || [];
    const { ref, isInView } = useInView();

    return (
        <div className="flex flex-col items-center justify-center py-12 w-full overflow-hidden">
            {/*
              Hexagon Hive Layout:
              - Flex container with wrapping
              - Negative margins on items to make them overlap/touch
              - Max-width constrained to force ~4 items per row on desktop (4 * ~130px approx)
            */}
            <div ref={ref} className="flex flex-wrap justify-center items-center max-w-[380px] md:max-w-[600px] mx-auto px-2 perspective-[1000px]">
                {brands.map((brand, index) => (
                    <BrandHexagon key={brand.id} brand={brand} index={index} isInView={isInView} />
                ))}
            </div>

            {/* Decorative background elements behind grid if needed */}
            <div className="absolute opacity-5 pointer-events-none z-0">
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-400 rounded-full blur-[100px]" />
            </div>
        </div>
    );
};

export default BrandHexagonGrid;

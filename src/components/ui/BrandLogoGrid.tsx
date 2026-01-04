'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import portfolioData, { Brand } from '@/data/portfolioData';

const BrandItem = ({ brand, index }: { brand: Brand; index: number }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
                duration: 0.5,
                delay: index * 0.1
            }}
            whileHover={{
                background: "rgba(255, 255, 255, 0.8)",
                boxShadow: "0 10px 30px -10px rgba(0,0,0,0.1)",
                y: -5
            }}
            className="relative flex items-center justify-center p-6 bg-white/50 rounded-xl border border-gray-100/50 backdrop-blur-sm transition-all duration-300 group h-32"
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
        </motion.div>
    );
};

const BrandLogoGrid = () => {
    const brands = portfolioData.brands || [];

    return (
        <div className="flex flex-col items-center justify-center py-16 w-full">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 md:gap-8 max-w-7xl mx-auto px-6 w-full">
                {brands.map((brand, index) => (
                    <BrandItem key={brand.id} brand={brand} index={index} />
                ))}
            </div>

            <div className="absolute opacity-0 pointer-events-none">
                {/* Preload hidden if needed, usually Next.js Image handles it */}
            </div>
        </div>
    );
};

export default BrandLogoGrid;

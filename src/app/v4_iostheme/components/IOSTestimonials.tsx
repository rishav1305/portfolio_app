'use client';

import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import type { Testimonial } from '@/data/portfolioData';

interface IOSTestimonialsProps {
    testimonials: Testimonial[];
}

const QuoteIcon = ({ className = "w-8 h-8" }: { className?: string }) => (
    <svg
        className={className}
        fill="currentColor"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 512 512"
    >
        <path d="M464 256h-80v-64c0-35.3 28.7-64 64-64h8c13.3 0 24-10.7 24-24V56c0-13.3-10.7-24-24-24h-8c-88.4 0-160 71.6-160 160v240c0 26.5 21.5 48 48 48h128c26.5 0 48-21.5 48-48V304c0-26.5-21.5-48-48-48zm-288 0H96v-64c0-35.3 28.7-64 64-64h8c13.3 0 24-10.7 24-24V56c0-13.3-10.7-24-24-24h-8c-88.4 0-160 71.6-160 160v240c0 26.5 21.5 48 48 48h128c26.5 0 48-21.5 48-48V304c0-26.5-21.5-48-48-48z" />
    </svg>
);

export default function IOSTestimonials({ testimonials }: IOSTestimonialsProps) {
    const allTestimonials = [...testimonials, ...testimonials.slice(0, 3)];
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isHovering, setIsHovering] = useState(false);
    const [screenWidth, setScreenWidth] = useState(0);

    const getVisibleCount = () => {
        if (screenWidth >= 1024) return 3;
        if (screenWidth >= 768) return 2;
        return 1;
    };

    useEffect(() => {
        const handleResize = () => setScreenWidth(window.innerWidth);
        handleResize();
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    useEffect(() => {
        let intervalId: NodeJS.Timeout;
        if (!isHovering) {
            intervalId = setInterval(() => {
                setCurrentIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
            }, 5000);
        }
        return () => clearInterval(intervalId);
    }, [isHovering, testimonials.length]);

    return (
        <section
            className="relative overflow-hidden py-12 px-0 rounded-3xl bg-transparent"
            onMouseEnter={() => setIsHovering(true)}
            onMouseLeave={() => setIsHovering(false)}
        >
            {/* Navigation Buttons */}
            <div className="absolute top-1/2 -translate-y-1/2 left-0 z-10">
                <button onClick={() => setCurrentIndex(prev => prev === 0 ? testimonials.length - 1 : prev - 1)} className="p-2 bg-white/10 rounded-full hover:bg-white/20 text-white backdrop-blur-md">
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
                </button>
            </div>
            <div className="absolute top-1/2 -translate-y-1/2 right-0 z-10">
                <button onClick={() => setCurrentIndex(prev => prev === testimonials.length - 1 ? 0 : prev + 1)} className="p-2 bg-white/10 rounded-full hover:bg-white/20 text-white backdrop-blur-md">
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                </button>
            </div>

            <motion.div
                className="flex gap-6"
                animate={{ x: `-${currentIndex * (100 / getVisibleCount())}%` }}
                transition={{ x: { type: "spring", stiffness: 100, damping: 20 } }}
            >
                {allTestimonials.map((testimonial, index) => (
                    <motion.div
                        key={index}
                        className="flex-shrink-0 w-full"
                        style={{ width: `calc(${100 / getVisibleCount()}% - ${(getVisibleCount() - 1) * 6 / getVisibleCount()}px)` }}
                    >
                        <div className="bg-white/5 backdrop-blur-md p-6 rounded-3xl h-full flex flex-col border border-white/10 relative group hover:bg-white/10 transition-colors">
                            <div className="absolute top-6 right-6 text-white/5">
                                <QuoteIcon />
                            </div>

                            <div className="mb-6 flex items-start">
                                <div className="w-12 h-12 rounded-full overflow-hidden bg-gray-700 mr-4 border border-white/20 relative">
                                    {testimonial.image ? (
                                        <img src={testimonial.image} alt="" className="object-cover w-full h-full" />
                                    ) : (
                                        <div className="w-full h-full flex items-center justify-center bg-blue-600 text-white font-bold">{testimonial.name.charAt(0)}</div>
                                    )}
                                </div>
                                <div>
                                    <h3 className="font-bold text-white text-base">{testimonial.name}</h3>
                                    <p className="text-xs text-gray-400">{testimonial.position}</p>
                                    <p className="text-xs text-blue-400 font-medium">{testimonial.company}</p>
                                </div>
                            </div>

                            <div className="flex-grow">
                                <p className="text-gray-300 italic text-sm leading-relaxed font-light">"{testimonial.text}"</p>
                            </div>

                            <div className="mt-6 flex justify-between items-center bg-white/5 p-2 rounded-xl">
                                <div className="flex text-yellow-400">
                                    {[...Array(5)].map((_, i) => <svg key={i} className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>)}
                                </div>
                                <div className="text-[10px] text-gray-500 font-bold uppercase tracking-wider">Verified</div>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </motion.div>
        </section>
    );
}

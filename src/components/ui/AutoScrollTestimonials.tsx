'use client';

import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import type { Testimonial } from '@/data/portfolioData';

interface AutoScrollTestimonialsProps {
  testimonials: Testimonial[];
}

const QuoteIcon = ({ className = "w-8 h-8" }: { className?: string }) => (
  <svg 
    className={className} 
    fill="currentColor" 
    xmlns="http://www.w3.org/2000/svg" 
    viewBox="0 0 512 512"
  >
    <path d="M464 256h-80v-64c0-35.3 28.7-64 64-64h8c13.3 0 24-10.7 24-24V56c0-13.3-10.7-24-24-24h-8c-88.4 0-160 71.6-160 160v240c0 26.5 21.5 48 48 48h128c26.5 0 48-21.5 48-48V304c0-26.5-21.5-48-48-48zm-288 0H96v-64c0-35.3 28.7-64 64-64h8c13.3 0 24-10.7 24-24V56c0-13.3-10.7-24-24-24h-8c-88.4 0-160 71.6-160 160v240c0 26.5 21.5 48 48 48h128c26.5 0 48-21.5 48-48V304c0-26.5-21.5-48-48-48z"/>
  </svg>
);

export default function AutoScrollTestimonials({ testimonials }: AutoScrollTestimonialsProps) {
  // Display all testimonials and repeat for continuous scrolling effect
  const allTestimonials = [...testimonials, ...testimonials.slice(0, 3)];
  
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovering, setIsHovering] = useState(false);
  const [screenWidth, setScreenWidth] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  
  // Calculate visible testimonials based on screen width
  const getVisibleCount = () => {
    if (screenWidth >= 1024) return 3; // lg screens
    if (screenWidth >= 768) return 2; // md screens
    return 1; // sm screens
  };
  
  // Navigate to previous testimonial
  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };
  
  // Navigate to next testimonial
  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };
  
  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
    };
    
    // Set initial screen width
    handleResize();
    
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  
  useEffect(() => {
    let intervalId: NodeJS.Timeout;
    
    if (!isHovering) {
      intervalId = setInterval(() => {
        nextTestimonial();
      }, 5000); // Auto-scroll every 5 seconds
    }
    
    return () => clearInterval(intervalId);
  }, [isHovering, testimonials.length]);
  
  return (
    <div 
      className="relative overflow-hidden py-8 px-4 rounded-xl bg-gradient-to-r from-blue-50 to-indigo-50"
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
      ref={containerRef}
    >
      {/* Background decorative elements */}
      <div className="absolute top-0 right-0 w-32 h-32 -mt-12 -mr-16 bg-blue-200 rounded-full opacity-20"></div>
      <div className="absolute bottom-0 left-0 w-40 h-40 -mb-16 -ml-20 bg-indigo-300 rounded-full opacity-20"></div>
      
      {/* Large quote mark in the background */}
      <div className="absolute top-10 left-10 text-blue-200 opacity-20 transform rotate-180">
        <QuoteIcon className="w-24 h-24" />
      </div>
      
      {/* Navigation buttons */}
      <button
        onClick={prevTestimonial}
        className="absolute left-2 top-1/2 -translate-y-1/2 z-10 bg-white w-10 h-10 rounded-full shadow-lg flex items-center justify-center hover:bg-blue-50 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-400"
        aria-label="Previous testimonial"
      >
        <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>
      
      <button
        onClick={nextTestimonial}
        className="absolute right-2 top-1/2 -translate-y-1/2 z-10 bg-white w-10 h-10 rounded-full shadow-lg flex items-center justify-center hover:bg-blue-50 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-400"
        aria-label="Next testimonial"
      >
        <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>
      
      {/* Carousel container */}
      <motion.div 
        className="flex gap-6"
        animate={{
          x: `-${currentIndex * (100 / getVisibleCount())}%`
        }}
        transition={{
          x: { type: "spring", stiffness: 100, damping: 20 }
        }}
      >
        {allTestimonials.map((testimonial, index) => (
          <motion.div 
            key={index}
            className={`flex-shrink-0 w-full`}
            style={{
              width: `calc(${100 / getVisibleCount()}% - ${(getVisibleCount() - 1) * 6 / getVisibleCount()}px)`
            }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <div className="bg-white p-6 rounded-lg shadow-lg h-full flex flex-col border border-blue-100">
              <div className="mb-6 flex items-start justify-between">
                <div className="flex items-start">
                  <div className="w-16 h-16 rounded-full overflow-hidden bg-gray-200 flex-shrink-0 mr-4 shadow-md border-2 border-blue-200">
                    {testimonial.image ? (
                      <img 
                        src={testimonial.image} 
                        alt={testimonial.name}
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-blue-500 to-blue-700 text-white text-xl font-bold">
                        {testimonial.name.charAt(0)}
                      </div>
                    )}
                  </div>
                  <div>
                    <h3 className="font-bold text-lg text-gray-900">{testimonial.name}</h3>
                    <p className="text-sm text-gray-600">{testimonial.position}</p>
                    <p className="text-sm text-blue-600 font-medium">{testimonial.company}</p>
                  </div>
                </div>
                <div className="text-blue-300">
                  <QuoteIcon />
                </div>
              </div>
              
              <div className="flex-grow">
                <p className="text-gray-700 italic leading-relaxed">"{testimonial.text}"</p>
              </div>
              
              <div className="mt-6 flex justify-between items-center">
                <div className="flex text-yellow-500">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                    </svg>
                  ))}
                </div>
                
                <div className="text-xs text-gray-500 font-medium tracking-wider">VERIFIED CLIENT</div>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
      
      {/* Navigation dots */}
      <div className="flex justify-center mt-6 gap-2">
        {testimonials.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
              index === currentIndex ? "bg-blue-600 w-5" : "bg-blue-300"
            }`}
            aria-label={`Go to testimonial ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
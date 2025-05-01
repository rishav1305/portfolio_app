'use client';

import { useState, useEffect } from 'react';

interface NavbarNameProps {
  name: string;
  isScrolled?: boolean;
  className?: string;
}

export default function NavbarName({ name, isScrolled = false, className = "" }: NavbarNameProps) {
  const [isAnimating, setIsAnimating] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  
  useEffect(() => {
    setIsMounted(true);
    
    // Set up the interval for the animation
    const interval = setInterval(() => {
      setIsAnimating(true);
      
      // Reset animation after it completes
      setTimeout(() => {
        setIsAnimating(false);
      }, 3000); // Animation duration
    }, 5000); // Trigger every 5 seconds
    
    return () => clearInterval(interval);
  }, []);
  
  return (
    <div className={`relative block text-2xl md:text-3xl font-braggadocio tracking-wide overflow-hidden ${className}`}
    style={{
      fontFamily: "'Braggadocio W01', 'Braggadocio', 'Impact', 'Arial Black', sans-serif",
      fontSize: "200%",
      color: "#000000" // Forcing black color regardless of scroll state
    }}>
      <span className="relative z-10">{name}</span>
      
      {/* Diagonal line overlay - only render with animation when client-side */}
      {isMounted && (
        <div 
          className={`
            absolute 
            h-[3px] 
            w-[200%] 
            bg-gradient-to-r 
            from-transparent 
            via-[#2a4ad7] 
            to-transparent
            opacity-75
            shadow-[0_0_8px_rgba(42,74,215,0.8)]
            transition-transform 
            duration-3000
            ease-in-out
            top-1/2
            -left-full
            -translate-y-1/2
            ${isAnimating ? 'translate-x-full' : '-translate-x-full'}
          `}
          style={{ 
            transform: `rotate(90deg) translateY(-50%) ${isAnimating ? 'translateX(100%)' : 'translateX(-100%)'}` 
          }}
        />
      )}
    </div>
  );
}
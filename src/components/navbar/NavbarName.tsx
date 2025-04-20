'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function NavbarName() {
  const [isAnimating, setIsAnimating] = useState(false);
  
  useEffect(() => {
    // Set up the interval for the animation
    const interval = setInterval(() => {
      setIsAnimating(true);
      
      // Reset animation after it completes
      setTimeout(() => {
        setIsAnimating(false);
      }, 3000); // Animation duration
    }, 5000); // Trigger every 3 seconds
    
    return () => clearInterval(interval);
  }, []);
  
  return (
    <Link href="/" className="relative block text-xl md:text-2xl font-[Arial Rounded MT Bold] tracking-wide overflow-hidden">
      <span className="relative z-10">RISHAV CHATTERJEE</span>
      
      {/* Diagonal line overlay */}
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
          transform: `rotate(60deg) translateY(-50%) ${isAnimating ? 'translateX(100%)' : 'translateX(-100%)'}` 
        }}
      />
    </Link>
  );
}
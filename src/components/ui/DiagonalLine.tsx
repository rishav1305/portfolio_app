'use client';

import { useEffect, useState } from 'react';

export default function DiagonalLine() {
  const [isAnimating, setIsAnimating] = useState(false);
  
  useEffect(() => {
    // Set up the interval for the animation
    const interval = setInterval(() => {
      setIsAnimating(true);
      
      // Reset animation after it completes
      setTimeout(() => {
        setIsAnimating(false);
      }, 1200); // Animation duration - slightly longer for better visibility
    }, 3000); // Trigger every 3 seconds
    
    return () => clearInterval(interval);
  }, []);
  
  return (
    <div className="fixed inset-0 pointer-events-none z-40 overflow-hidden">
      <div 
        className={`
          absolute 
          h-[3px] 
          w-[200vw] 
          bg-gradient-to-r 
          from-transparent 
          via-[#2a4ad7] 
          to-transparent
          opacity-75
          shadow-[0_0_8px_rgba(42,74,215,0.8)]
          transition-transform 
          duration-1200 
          ease-in-out
          ${isAnimating ? 'translate-y-[100vh]' : '-translate-y-[100vh]'}
        `}
        style={{ 
          top: '-50vh',
          left: '-50vw',
          transform: `rotate(60deg) ${isAnimating ? 'translateY(200vh)' : 'translateY(-200vh)'}` 
        }}
      />
    </div>
  );
}
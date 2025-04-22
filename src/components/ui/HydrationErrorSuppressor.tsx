"use client";

import { useEffect, useState } from "react";

export default function HydrationErrorSuppressor({
  children,
}: {
  children: React.ReactNode;
}) {
  // Use this state to ensure we only render children after initial hydration
  const [isHydrated, setIsHydrated] = useState(false);

  useEffect(() => {
    // Mark as hydrated once component is mounted
    setIsHydrated(true);

    // This will run after hydration and suppress the console error
    const originalError = console.error;
    console.error = (...args: any[]) => {
      if (args.length > 0 && typeof args[0] === 'string') {
        if (
          args[0].includes('Warning: A tree hydrated but some attributes of the server rendered HTML') &&
          (args[0].includes('data-gr-ext-installed') || 
           args[0].includes('data-new-gr-c-s-check-loaded') ||
           args[0].includes('data-grammar'))
        ) {
          // Suppress the Grammarly-related hydration error
          return;
        }
      }
      originalError(...args);
    };
    
    return () => {
      // Restore original console.error on cleanup
      console.error = originalError;
    };
  }, []);

  // During SSR and the first client render, don't include any elements that might
  // be affected by browser extensions or differ between server and client
  if (!isHydrated) {
    // Return a placeholder with the same structure but without potentially problematic content
    return <div className="min-h-screen">{children}</div>;
  }
  
  // After hydration, render normally
  return <>{children}</>;
}
'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

export default function NotFound() {
  const [countdown, setCountdown] = useState(10);
  const router = useRouter();

  useEffect(() => {
    if (countdown > 0) {
      const timer = setTimeout(() => setCountdown(countdown - 1), 1000);
      return () => clearTimeout(timer);
    } else {
      router.push('/');
    }
  }, [countdown, router]);

  // Suggestions for common paths
  const suggestions = [
    { path: '/about', label: 'About' },
    { path: '/projects', label: 'Projects' },
    { path: '/experience', label: 'Experience' },
    { path: '/tech-skills', label: 'Technical Skills' },
    { path: '/contact', label: 'Contact' },
  ];

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 px-4">
      <div className="max-w-md w-full bg-white shadow-xl rounded-xl p-8 text-center space-y-6">
        <div className="w-24 h-24 mx-auto bg-red-50 rounded-full flex items-center justify-center">
          <svg className="w-12 h-12 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
          </svg>
        </div>
        
        <h1 className="text-3xl font-bold text-gray-800">Page Not Found</h1>
        
        <p className="text-gray-600">
          The page you're looking for doesn't exist or has been moved.
        </p>
        
        <div className="pt-4 border-t border-gray-200">
          <h2 className="text-lg font-semibold text-gray-700 mb-3">You might be looking for:</h2>
          <ul className="space-y-2">
            {suggestions.map((suggestion) => (
              <li key={suggestion.path}>
                <Link
                  href={suggestion.path}
                  className="text-blue-600 hover:text-blue-800 hover:underline block py-1"
                >
                  {suggestion.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        
        <div className="pt-4">
          <p className="text-gray-500 text-sm mb-4">
            Redirecting to home page in <span className="font-medium">{countdown}</span> seconds...
          </p>
          <Link
            href="/"
            className="inline-block px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
          >
            Return Home Now
          </Link>
        </div>
      </div>
    </div>
  );
}

'use client';

import React, { useState, useRef, useEffect } from 'react';

// Main download button component with both desktop and mobile versions
const DownloadButton = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isLoading, setIsLoading] = useState<string | null>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  // Function to generate PDF before download
  const handleDownload = async (type: 'cv' | 'resume') => {
    try {
      setIsLoading(type);
      
      // Call the API to generate the PDF
      const response = await fetch(`/api/generate-pdf?type=${type}`);
      const data = await response.json();
      
      if (!data.success) {
        throw new Error(data.error || 'Failed to generate PDF');
      }
      
      // Trigger the download
      const link = document.createElement('a');
      link.href = data.path;
      link.download = data.fileName;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      
      setIsOpen(false);
    } catch (error) {
      console.error('Error generating PDF:', error);
      alert('Failed to generate PDF. Please try again later.');
    } finally {
      setIsLoading(null);
    }
  };

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center space-x-1 text-sm font-medium uppercase transition-colors duration-200 text-white bg-blue-600 hover:bg-blue-700 px-3 py-1 rounded-md"
        aria-expanded={isOpen}
        aria-haspopup="true"
      >
        <span>Download</span>
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
        </svg>
      </button>

      {/* Dropdown menu */}
      {isOpen && (
        <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-50 border border-gray-100">
          <button
            onClick={() => handleDownload('resume')}
            disabled={isLoading !== null}
            className="flex items-center w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 disabled:opacity-50"
          >
            {isLoading === 'resume' ? (
              <>
                <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-blue-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Generating...
              </>
            ) : (
              <>
                <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 10v6m0 0l-3-3m3 3l3-3m-9 3h14.5a2.5 2.5 0 002.5-2.5V7.5a2.5 2.5 0 00-2.5-2.5H6a2.5 2.5 0 00-2.5 2.5v9a2.5 2.5 0 002.5 2.5z"></path>
                </svg>
                Detailed Resume
              </>
            )}
          </button>
          <button
            onClick={() => handleDownload('cv')}
            disabled={isLoading !== null}
            className="flex items-center w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 disabled:opacity-50"
          >
            {isLoading === 'cv' ? (
              <>
                <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-blue-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Generating...
              </>
            ) : (
              <>
                <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 10v6m0 0l-3-3m3 3l3-3m-9 3h14.5a2.5 2.5 0 002.5-2.5V7.5a2.5 2.5 0 00-2.5-2.5H6a2.5 2.5 0 00-2.5 2.5v9a2.5 2.5 0 002.5 2.5z"></path>
                </svg>
                One-Page CV
              </>
            )}
          </button>
        </div>
      )}
    </div>
  );
};

// Mobile version of the download links
export const MobileDownloadLinks = ({ onClick }: { onClick: () => void }) => {
  const [isLoading, setIsLoading] = useState<string | null>(null);

  // Function to generate PDF before download
  const handleDownload = async (type: 'cv' | 'resume') => {
    try {
      setIsLoading(type);
      
      // Call the API to generate the PDF
      const response = await fetch(`/api/generate-pdf?type=${type}`);
      const data = await response.json();
      
      if (!data.success) {
        throw new Error(data.error || 'Failed to generate PDF');
      }
      
      // Trigger the download
      const link = document.createElement('a');
      link.href = data.path;
      link.download = data.fileName;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      
      onClick(); // Close mobile menu
    } catch (error) {
      console.error('Error generating PDF:', error);
      alert('Failed to generate PDF. Please try again later.');
    } finally {
      setIsLoading(null);
    }
  };

  return (
    <>
      <button
        onClick={() => handleDownload('resume')}
        disabled={isLoading !== null}
        className="block w-full text-left text-base font-medium uppercase py-2 px-4 rounded transition-colors duration-200 text-white bg-blue-600 hover:bg-blue-700 disabled:opacity-50 mb-2"
      >
        {isLoading === 'resume' ? (
          <span className="flex items-center justify-center">
            <svg className="animate-spin -ml-1 mr-2 h-4 w-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
            Generating Resume...
          </span>
        ) : (
          'Download Resume'
        )}
      </button>
      <button
        onClick={() => handleDownload('cv')}
        disabled={isLoading !== null}
        className="block w-full text-left text-base font-medium uppercase py-2 px-4 rounded transition-colors duration-200 text-white bg-blue-600 hover:bg-blue-700 disabled:opacity-50"
      >
        {isLoading === 'cv' ? (
          <span className="flex items-center justify-center">
            <svg className="animate-spin -ml-1 mr-2 h-4 w-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
            Generating CV...
          </span>
        ) : (
          'Download CV'
        )}
      </button>
    </>
  );
};

export default DownloadButton;
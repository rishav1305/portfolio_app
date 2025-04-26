'use client';

import React, { useState, useRef, useEffect } from 'react';

// Main download button component with both desktop and mobile versions
const DownloadButton = () => {
  const [isOpen, setIsOpen] = useState(false);
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
          <a
            href="/documents/Rishav_Chatterjee_Resume.pdf"
            download
            className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
            onClick={() => setIsOpen(false)}
          >
            <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 10v6m0 0l-3-3m3 3l3-3m-9 3h14.5a2.5 2.5 0 002.5-2.5V7.5a2.5 2.5 0 00-2.5-2.5H6a2.5 2.5 0 00-2.5 2.5v9a2.5 2.5 0 002.5 2.5z"></path>
            </svg>
            Detailed Resume
          </a>
          <a
            href="/documents/Rishav_Chatterjee_CV.pdf"
            download
            className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
            onClick={() => setIsOpen(false)}
          >
            <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 10v6m0 0l-3-3m3 3l3-3m-9 3h14.5a2.5 2.5 0 002.5-2.5V7.5a2.5 2.5 0 00-2.5-2.5H6a2.5 2.5 0 00-2.5 2.5v9a2.5 2.5 0 002.5 2.5z"></path>
            </svg>
            One-Page CV
          </a>
        </div>
      )}
    </div>
  );
};

// Mobile version of the download links
export const MobileDownloadLinks = ({ onClick }: { onClick: () => void }) => {
  return (
    <>
      <a
        href="/documents/Rishav_Chatterjee_Resume.pdf"
        download
        className="block text-base font-medium uppercase py-2 px-4 rounded transition-colors duration-200 text-white bg-blue-600 hover:bg-blue-700"
        onClick={onClick}
      >
        Download Resume
      </a>
      <a
        href="/documents/Rishav_Chatterjee_CV.pdf"
        download
        className="block text-base font-medium uppercase py-2 px-4 rounded transition-colors duration-200 text-white bg-blue-600 hover:bg-blue-700"
        onClick={onClick}
      >
        Download CV
      </a>
    </>
  );
};

export default DownloadButton;
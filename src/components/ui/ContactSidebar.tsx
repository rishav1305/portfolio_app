'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function ContactSidebar() {
  const [isVisible, setIsVisible] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);

  // Show sidebar after scrolling down a bit
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
        setIsExpanded(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 100 }}
          transition={{ duration: 0.3 }}
          className={`fixed right-0 top-1/4 z-40 flex ${isExpanded ? 'shadow-xl' : 'shadow-md'}`}
        >
          {/* Toggle button with vertical text */}
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="bg-blue-600 text-white py-5 px-5 flex flex-col items-center justify-center self-stretch rounded-l-md"
            aria-label="Toggle contact sidebar"
          >
            {isExpanded ? (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
            ) : (
              <div className="flex flex-col items-center h-full justify-center">
                <div className="transform whitespace-nowrap font-bold tracking-wider">
                  CONNECT WITH RISHAV
                </div>
              </div>
            )}
          </button>
          
          {/* Content panel */}
          <AnimatePresence>
            {isExpanded && (
              <motion.div
                initial={{ width: 0, opacity: 0 }}
                animate={{ width: 'auto', opacity: 1 }}
                exit={{ width: 0, opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="bg-white dark:bg-gray-800 rounded-l-md border-l border-t border-b border-gray-200 dark:border-gray-700 overflow-hidden"
              >
                <div className="p-4 w-72">
                  <h3 className="text-lg font-semibold mb-4 text-gray-800 border-b pb-2">CONNECT WITH RISHAV</h3>
                  
                  <div className="space-y-4">
                    {/* WhatsApp */}
                    <a 
                      href="https://wa.me/919560382351" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center text-gray-700 dark:text-gray-200 hover:text-green-600 dark:hover:text-green-400 transition-colors"
                    >
                      <div className="bg-green-100 dark:bg-green-900 p-2 rounded-full mr-3">
                        <svg className="w-5 h-5 text-green-600 dark:text-green-400" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                          <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
                        </svg>
                      </div>
                      <div>
                        <span className="text-sm font-medium">WhatsApp</span>
                        <p className="text-xs">+91 9560382351</p>
                      </div>
                    </a>

                    {/* Email with Gmail icon */}
                    <a 
                      href="mailto:rishavchatterjee2024@gmail.com" 
                      className="flex items-center text-gray-700 dark:text-gray-200 hover:text-red-500 dark:hover:text-red-400 transition-colors"
                    >
                      <div className="bg-red-100 dark:bg-red-900/30 p-2 rounded-full mr-3">
                        <svg className="w-5 h-5 text-red-600 dark:text-red-400" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                          <path d="M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-3.819V11.73L12 16.64l-6.545-4.91v9.273H1.636A1.636 1.636 0 0 1 0 19.366V5.457c0-2.023 2.309-3.178 3.927-1.964L5.455 4.64 12 9.548l6.545-4.91 1.528-1.145C21.69 2.28 24 3.434 24 5.457z" />
                        </svg>
                      </div>
                      <div>
                        <span className="text-sm font-medium">Email</span>
                        <p className="text-xs">rishavchatterjee2024@gmail.com</p>
                      </div>
                    </a>

                    {/* LinkedIn */}
                    <a 
                      href="https://www.linkedin.com/in/chatterjeerishav/" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center text-gray-700 dark:text-gray-200 hover:text-blue-700 dark:hover:text-blue-500 transition-colors"
                    >
                      <div className="bg-blue-100 dark:bg-blue-900 p-2 rounded-full mr-3">
                        <svg className="w-5 h-5 text-blue-700 dark:text-blue-500" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                          <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                        </svg>
                      </div>
                      <span className="text-sm font-medium">LinkedIn</span>
                    </a>

                    {/* LeetCode */}
                    <a 
                      href="https://leetcode.com/u/rishav115/" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center text-gray-700 dark:text-gray-200 hover:text-yellow-600 dark:hover:text-yellow-400 transition-colors"
                    >
                      <div className="bg-yellow-100 dark:bg-yellow-900/30 p-2 rounded-full mr-3">
                        <svg className="w-5 h-5 text-yellow-600 dark:text-yellow-400" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                          <path d="M16.102 17.93l-2.697 2.607c-.466.467-1.111.662-1.823.662s-1.357-.195-1.824-.662l-4.332-4.363c-.467-.467-.702-1.15-.702-1.863s.235-1.357.702-1.824l4.319-4.38c.467-.467 1.125-.645 1.837-.645s1.357.195 1.823.662l2.697 2.606c.514.515 1.365.497 1.9-.038.535-.536.553-1.387.039-1.901l-2.609-2.636a5.055 5.055 0 0 0-2.445-1.337l2.467-2.503c.516-.514.498-1.366-.037-1.901-.535-.535-1.387-.552-1.902-.038l-10.1 10.101c-.981.982-1.494 2.337-1.494 3.835 0 1.498.513 2.895 1.494 3.875l4.347 4.361c.981.979 2.337 1.452 3.834 1.452s2.853-.512 3.835-1.494l2.609-2.637c.514-.514.496-1.365-.039-1.9s-1.386-.553-1.899-.039zM20.811 13.01H10.666c-.702 0-1.27.604-1.27 1.346s.568 1.346 1.27 1.346h10.145c.701 0 1.27-.604 1.27-1.346s-.569-1.346-1.27-1.346z" />
                        </svg>
                      </div>
                      <span className="text-sm font-medium">LeetCode</span>
                    </a>

                    {/* GitHub */}
                    <a 
                      href="https://github.com/rishav1305" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center text-gray-700 dark:text-gray-200 hover:text-gray-900 dark:hover:text-white transition-colors"
                    >
                      <div className="bg-gray-100 dark:bg-gray-700 p-2 rounded-full mr-3">
                        <svg className="w-5 h-5" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                        </svg>
                      </div>
                      <span className="text-sm font-medium">GitHub</span>
                    </a>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
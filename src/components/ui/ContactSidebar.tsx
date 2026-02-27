'use client';

import React, { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { toast } from 'react-hot-toast';
import { useSiteConfig } from '@/contexts/SiteConfigContext';

export default function ContactSidebar() {
  const siteConfig = useSiteConfig();
  const [isVisible, setIsVisible] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const pathname = usePathname();

  if (pathname === '/resume') return null;

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

  const handleCopy = (e: React.MouseEvent, text: string, type: string) => {
    e.preventDefault();
    e.stopPropagation();
    navigator.clipboard.writeText(text);
    toast.success(`${type} copied to clipboard!`);
  };

  return (
    <div
      className={`fixed right-0 top-1/3 z-50 flex items-start transition-all duration-500 ease-out ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12 pointer-events-none'}`}
    >
      <div className="flex flex-row-reverse items-start">
        {/* Elegant Toggle Pill */}
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className={`
            group relative
            flex flex-col items-center justify-center
            py-6 px-3 ml-2 rounded-l-2xl
            transition-all duration-300 ease-spring
            backdrop-blur-xl border border-white/20
            shadow-[0_8px_32px_0_rgba(31,38,135,0.15)]
            ${isExpanded
              ? 'bg-white/80 text-blue-600 border-white/40'
              : 'bg-white/40 hover:bg-white/60 text-gray-700 hover:text-blue-600'
            }
          `}
          aria-label="Toggle contact sidebar"
        >
          <div className="vertical-rl flex items-center gap-3">
            {isExpanded ? (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 animate-pulse" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
              </svg>
            ) : (
              <>
                <span className="text-[10px] font-bold tracking-[0.2em] uppercase whitespace-nowrap">Connect</span>
                <span className="w-1 h-1 rounded-full bg-blue-500 animate-ping" />
              </>
            )}
          </div>
        </button>

        {/* Crystal Glass Panel */}
        <div
          className={`mr-2 transition-all duration-300 ease-out origin-right ${isExpanded ? 'opacity-100 translate-x-0 scale-100' : 'opacity-0 translate-x-5 scale-95 pointer-events-none'}`}
        >
          <div className="
            w-72
            rounded-2xl
            backdrop-blur-2xl
            bg-white/80 dark:bg-slate-900/60
            border border-white/40 dark:border-white/10
            shadow-[0_8px_32px_0_rgba(31,38,135,0.2)] dark:shadow-[0_8px_32px_0_rgba(0,0,0,0.3)]
            p-5
            overflow-hidden
          ">
            {/* Decorative shine effect */}
            <div className="absolute -top-10 -left-10 w-20 h-20 bg-blue-400/20 rounded-full blur-2xl pointer-events-none" />
            <div className="absolute -bottom-10 -right-10 w-20 h-20 bg-purple-400/20 rounded-full blur-2xl pointer-events-none" />

            <h3 className="relative text-sm font-bold mb-4 text-gray-800 dark:text-white uppercase tracking-wider flex items-center gap-2">
              <span className="w-8 h-[2px] bg-gradient-to-r from-blue-500 to-purple-500"></span>
              Connect
            </h3>

            <div className="space-y-3 relative z-10">
              {/* WhatsApp - Crystal Card */}
              <div className="group relative p-3 rounded-xl bg-white/50 dark:bg-white/5 hover:bg-white/80 dark:hover:bg-white/10 transition-all duration-300 border border-transparent hover:border-green-200/50 shadow-sm hover:shadow-md">
                <a
                  href={`https://wa.me/${siteConfig.whatsapp.replace(/\D/g, '')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center"
                >
                  <div className="bg-gradient-to-br from-green-400 to-green-600 p-2 rounded-lg shadow-lg shadow-green-500/20 group-hover:scale-105 transition-transform duration-300 max-w-min">
                    <svg className="w-5 h-5 text-white" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                      <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
                    </svg>
                  </div>
                  <div className="ml-3 flex-1">
                    <span className="text-[10px] font-bold text-gray-400 dark:text-gray-500 uppercase tracking-widest">WhatsApp</span>
                    <p className="text-sm font-semibold text-gray-800 dark:text-gray-100 font-mono tracking-tight">{siteConfig.whatsapp}</p>
                  </div>
                </a>
                <button
                  onClick={(e) => handleCopy(e, siteConfig.whatsapp, 'WhatsApp number')}
                  className="absolute right-2 top-1/2 -translate-y-1/2 p-2 text-gray-400 hover:text-green-600 transition-colors opacity-0 group-hover:opacity-100"
                  title="Copy"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3" />
                  </svg>
                </button>
              </div>

              {/* Email - Crystal Card */}
              <div className="group relative p-3 rounded-xl bg-white/50 dark:bg-white/5 hover:bg-white/80 dark:hover:bg-white/10 transition-all duration-300 border border-transparent hover:border-red-200/50 shadow-sm hover:shadow-md">
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="flex items-center"
                >
                  <div className="bg-gradient-to-br from-red-400 to-red-600 p-2 rounded-lg shadow-lg shadow-red-500/20 group-hover:scale-105 transition-transform duration-300 max-w-min">
                    <svg className="w-5 h-5 text-white" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                      <path d="M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-3.819V11.73L12 16.64l-6.545-4.91v9.273H1.636A1.636 1.636 0 0 1 0 19.366V5.457c0-2.023 2.309-3.178 3.927-1.964L5.455 4.64 12 9.548l6.545-4.91 1.528-1.145C21.69 2.28 24 3.434 24 5.457z" />
                    </svg>
                  </div>
                  <div className="ml-3 flex-1 overflow-hidden">
                    <span className="text-[10px] font-bold text-gray-400 dark:text-gray-500 uppercase tracking-widest">Email</span>
                    <p className="text-sm font-semibold text-gray-800 dark:text-gray-100 truncate pr-6">{siteConfig.email}</p>
                  </div>
                </a>
                <button
                  onClick={(e) => handleCopy(e, siteConfig.email, 'Email')}
                  className="absolute right-2 top-1/2 -translate-y-1/2 p-2 text-gray-400 hover:text-red-600 transition-colors opacity-0 group-hover:opacity-100"
                  title="Copy"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3" />
                  </svg>
                </button>
              </div>

              {/* Social Grid */}
              <div className="pt-2 grid grid-cols-3 gap-2">
                {/* LinkedIn */}
                <a
                  href={siteConfig.social_media.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex flex-col items-center justify-center p-3 rounded-xl bg-white/50 dark:bg-white/5 hover:bg-blue-50 dark:hover:bg-blue-900/20 border border-transparent hover:border-blue-200/50 transition-all hover:-translate-y-1"
                >
                  <div className="mb-2 text-blue-600 dark:text-blue-400 group-hover:scale-110 transition-transform">
                    <svg className="w-6 h-6" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                    </svg>
                  </div>
                  <span className="text-[9px] font-bold uppercase tracking-wider text-gray-500 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-400">LinkedIn</span>
                </a>

                {/* GitHub */}
                <a
                  href={siteConfig.social_media.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex flex-col items-center justify-center p-3 rounded-xl bg-white/50 dark:bg-white/5 hover:bg-gray-100 dark:hover:bg-gray-700/50 border border-transparent hover:border-gray-200/50 transition-all hover:-translate-y-1"
                >
                  <div className="mb-2 text-gray-800 dark:text-gray-200 group-hover:scale-110 transition-transform">
                    <svg className="w-6 h-6" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                    </svg>
                  </div>
                  <span className="text-[9px] font-bold uppercase tracking-wider text-gray-500 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white">GitHub</span>
                </a>

                {/* LeetCode */}
                <a
                  href={siteConfig.social_media.leetcode}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex flex-col items-center justify-center p-3 rounded-xl bg-white/50 dark:bg-white/5 hover:bg-yellow-50 dark:hover:bg-yellow-900/20 border border-transparent hover:border-yellow-200/50 transition-all hover:-translate-y-1"
                >
                  <div className="mb-2 text-yellow-600 dark:text-yellow-400 group-hover:scale-110 transition-transform">
                    <svg className="w-6 h-6" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                      <path d="M16.102 17.93l-2.697 2.607c-.466.467-1.111.662-1.823.662s-1.357-.195-1.824-.662l-4.332-4.363c-.467-.467-.702-1.15-.702-1.863s.235-1.357.702-1.824l4.319-4.38c.467-.467 1.125-.645 1.837-.645s1.357.195 1.823.662l2.697 2.606c.514.515 1.365.497 1.9-.038.535-.536.553-1.387.039-1.901l-2.609-2.636a5.055 5.055 0 0 0-2.445-1.337l2.467-2.503c.516-.514.498-1.366-.037-1.901-.535-.535-1.387-.552-1.902-.038l-10.1 10.101c-.981.982-1.494 2.337-1.494 3.835 0 1.498.513 2.895 1.494 3.875l4.347 4.361c.981.979 2.337 1.452 3.834 1.452s2.853-.512 3.835-1.494l2.609-2.637c.514-.514.496-1.365-.039-1.9s-1.386-.553-1.899-.039zM20.811 13.01H10.666c-.702 0-1.27.604-1.27 1.346s.568 1.346 1.27 1.346h10.145c.701 0 1.27-.604 1.27-1.346s-.569-1.346-1.27-1.346z" />
                    </svg>
                  </div>
                  <span className="text-[9px] font-bold uppercase tracking-wider text-gray-500 dark:text-gray-400 group-hover:text-yellow-600 dark:group-hover:text-yellow-400">LeetCode</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

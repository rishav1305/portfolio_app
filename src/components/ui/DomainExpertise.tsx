'use client';

import React from 'react';
import { useSiteConfig } from '@/contexts/SiteConfigContext';

type DomainExpertiseProps = {
  className?: string;
  compact?: boolean;
};

// Map domains to icons (simplified mapping logic)
const getIconForDomain = (domain: string) => {
  const lower = domain.toLowerCase();

  if (lower.includes('sales') || lower.includes('ecommerce')) return <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>;
  if (lower.includes('cloud') || lower.includes('remote')) return <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" /></svg>;
  if (lower.includes('health') || lower.includes('pharm')) return <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" /></svg>;
  if (lower.includes('data') || lower.includes('analytics')) return <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" /></svg>;
  if (lower.includes('customer')) return <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" /></svg>;

  return <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>;
};

const DomainExpertise: React.FC<DomainExpertiseProps> = ({ className = '', compact = false }) => {
  const siteConfig = useSiteConfig();
  const domainExpertise = siteConfig.domain_expertise;

  if (!domainExpertise || domainExpertise.length === 0) {
    return null;
  }

  // Duplicate the array to ensure smooth seamless looping (Tripled for safety)
  const marqueeItems = [...domainExpertise, ...domainExpertise, ...domainExpertise];

  return (
    <div className={`${className} w-full overflow-hidden relative group`}>
      <style>{`
        @keyframes domain-marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-33.33%); }
        }
        .animate-domain-marquee {
          animation: domain-marquee 40s linear infinite;
        }
        .group:hover .animate-domain-marquee {
          animation-play-state: paused;
        }
      `}</style>


      {/* Gradient masks */}
      <div className="absolute left-0 top-14 bottom-0 w-24 bg-gradient-to-r from-gray-50 to-transparent z-10 pointer-events-none"></div>
      <div className="absolute right-0 top-14 bottom-0 w-24 bg-gradient-to-l from-gray-50 to-transparent z-10 pointer-events-none"></div>

      <div className="flex gap-4 w-max animate-domain-marquee pl-4">
        {marqueeItems.map((domain, index) => (
          <div
            key={index}
            className="flex items-center gap-2 bg-white px-5 py-3 rounded-full border border-blue-100 shadow-sm whitespace-nowrap text-gray-700 hover:text-blue-700 hover:border-blue-300 hover:shadow-md transition-all duration-300 group/item cursor-default"
          >
            <span className="text-blue-500 group-hover/item:scale-110 transition-transform duration-300">
              {getIconForDomain(domain)}
            </span>
            <span className="font-semibold text-sm tracking-wide">{domain}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DomainExpertise;

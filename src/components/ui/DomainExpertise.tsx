import React from 'react';
import portfolioData from '@/data/portfolioData';
import { motion } from 'framer-motion';

type DomainExpertiseProps = {
  className?: string;
  compact?: boolean;
};

// Map domains to icons (simplified mapping logic for now, could be expanded)
const getIconForDomain = (domain: string) => {
  const lower = domain.toLowerCase();
  if (lower.includes('sales') || lower.includes('ecommerce')) return (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
  );
  if (lower.includes('cloud') || lower.includes('remote')) return (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" /></svg>
  );
  if (lower.includes('health') || lower.includes('pharm')) return (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" /></svg>
  );
  if (lower.includes('data') || lower.includes('analytics')) return (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" /></svg>
  );
  if (lower.includes('customer')) return (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
  );
  // Default icon
  return (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
  );
};

const DomainExpertise: React.FC<DomainExpertiseProps> = ({ className = '', compact = false }) => {
  const { domainExpertise } = portfolioData.personalInfo;

  if (!domainExpertise || domainExpertise.length === 0) {
    return null;
  }

  // If compact is true, render simpler chips (optimized for smaller spaces)
  if (compact) {
    return (
      <div className={`${className}`}>
        <h2 className="text-xl font-bold mb-4 text-gray-800">Domain Expertise</h2>
        <div className="flex flex-wrap gap-2 justify-center">
          {domainExpertise.map((domain, index) => (
            <span
              key={index}
              className="px-3 py-1.5 bg-blue-100 text-blue-800 rounded-full text-sm font-medium border border-blue-200"
            >
              {domain}
            </span>
          ))}
        </div>
      </div>
    );
  }

  // Default rich view with cards
  return (
    <div className={`${className} grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4`}>
      {domainExpertise.map((domain, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.3, delay: index * 0.05 }}
          whileHover={{ scale: 1.02, y: -2 }}
          className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm hover:shadow-md hover:border-gray-200 transition-all cursor-default flex flex-col items-center text-center group"
        >
          <div className="mb-3 p-3 bg-white rounded-full text-gray-400 group-hover:text-blue-600 group-hover:bg-blue-50 transition-colors shadow-sm">
            {getIconForDomain(domain)}
          </div>
          <span className="font-semibold text-gray-700 group-hover:text-gray-900">{domain}</span>
        </motion.div>
      ))}
    </div>
  );
};

export default DomainExpertise;

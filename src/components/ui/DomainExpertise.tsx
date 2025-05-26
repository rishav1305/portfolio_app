import React from 'react';
import portfolioData from '@/data/portfolioData';

type DomainExpertiseProps = {
  className?: string;
  compact?: boolean;
};

const DomainExpertise: React.FC<DomainExpertiseProps> = ({ className = '', compact = false }) => {
  const { domainExpertise } = portfolioData.personalInfo;
  
  if (!domainExpertise || domainExpertise.length === 0) {
    return null;
  }

  return (
    <div className={`${className}`}>
      {/* Only show header if compact is true, otherwise the parent section will handle the header */}
      {compact && <h2 className="text-xl font-bold mb-4 text-gray-800">Domain Expertise</h2>}
      <div className="flex flex-wrap gap-2 justify-center">
        {domainExpertise.map((domain, index) => (
          <span
            key={index}
            className="px-3 py-1.5 bg-blue-100 text-blue-800 rounded-full text-sm font-medium border border-blue-200 hover:bg-blue-200 transition-colors"
          >
            {domain}
          </span>
        ))}
      </div>
    </div>
  );
};

export default DomainExpertise;

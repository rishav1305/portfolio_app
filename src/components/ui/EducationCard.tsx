'use client';

import React from 'react';

interface EducationCardProps {
  institution: string;
  degree: string;
  period: string;
  location: string;
  focusArea?: string;
}

const EducationCard: React.FC<EducationCardProps> = ({
  institution,
  degree,
  period,
  location,
  focusArea
}) => {
  return (
    <article 
      className="bg-white rounded-lg shadow-lg overflow-hidden"
      itemScope
      itemType="https://schema.org/EducationalOccupationalCredential"
    >
      <div className="p-6">
        <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
          <div className="mb-4 md:mb-0">
            <h3 className="text-xl font-bold text-gray-800" itemProp="credentialCategory">{degree}</h3>
            <p className="text-blue-600 font-medium">
              <span itemProp="recognizedBy" itemScope itemType="https://schema.org/EducationalOrganization">
                <span itemProp="name">{institution}</span>
              </span>
            </p>
          </div>
          <div className="text-gray-600">
            <p className="font-semibold" itemProp="validFor">{period}</p>
            <p>
              <span itemProp="recognizedIn" itemScope itemType="https://schema.org/Place">
                <span itemProp="address">{location}</span>
              </span>
            </p>
          </div>
        </div>
        
        {focusArea && (
          <div className="mt-4">
            <p className="font-medium text-gray-700 mb-2">Focus Area:</p>
            <p className="text-gray-700" itemProp="description">{focusArea}</p>
          </div>
        )}
      </div>
    </article>
  );
};

export default EducationCard;

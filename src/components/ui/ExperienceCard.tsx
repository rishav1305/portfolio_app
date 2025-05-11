'use client';

import React from 'react';

interface ExperienceCardProps {
  role: string;
  company: string;
  period: string;
  location: string;
  achievements: string[];
  clients?: Array<{ name: string }>;
}

const ExperienceCard: React.FC<ExperienceCardProps> = ({
  role,
  company,
  period,
  location,
  achievements,
  clients
}) => {
  return (
    <article 
      className="bg-white rounded-lg shadow-lg overflow-hidden"
      itemScope
      itemType="https://schema.org/WorkPosition"
    >
      <meta itemProp="identifier" content={`experience-${company}-${role}`} />
      <div className="p-6">
        <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
          <div className="mb-4 md:mb-0">
            <h3 className="text-xl font-bold text-gray-800" itemProp="jobTitle">{role}</h3>
            <p className="text-blue-600 font-medium">
              <span itemProp="hiringOrganization" itemScope itemType="https://schema.org/Organization">
                <span itemProp="name">{company}</span>
              </span>
            </p>
          </div>
          <div className="text-gray-600">
            <p className="font-semibold">
              <span itemProp="validFrom" content={period.split('-')[0].trim()}>{period}</span>
            </p>
            <p>
              <span itemProp="jobLocation" itemScope itemType="https://schema.org/Place">
                <span itemProp="address">{location}</span>
              </span>
            </p>
          </div>
        </div>
        
        <div className="mt-4">
          <p className="font-medium text-gray-700 mb-2">Key Achievements:</p>
          <ul className="list-disc pl-5 space-y-1 text-gray-700">
            {achievements.map((achievement, i) => (
              <li key={i} itemProp="responsibilities">{achievement}</li>
            ))}
          </ul>
          <meta itemProp="description" content={achievements.join(' ')} />
        </div>
        
        {(clients && clients.length > 0) && (
          <div className="mt-4">
            <p className="font-medium text-gray-700 mb-2">Clients:</p>
            <ul className="list-disc pl-5 space-y-2">
              {clients.map((client, i) => (
                <li key={i} className="text-gray-700">
                  <span 
                    className="font-medium"
                    itemProp="customer" 
                    itemScope 
                    itemType="https://schema.org/Organization"
                  >
                    <span itemProp="name">{client.name}</span>
                  </span>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </article>
  );
};

export default ExperienceCard;

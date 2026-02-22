'use client';

import React from 'react';
import type { WorkExperience } from '@/types/portfolio';

interface WorkExperienceCardProps {
  job: WorkExperience;
  index: number;
}

const WorkExperienceCard: React.FC<WorkExperienceCardProps> = ({ job, index }) => {
  return (
    <article 
      className="bg-white rounded-lg shadow-lg overflow-hidden"
      itemScope
      itemType="https://schema.org/WorkExperience"
    >
      <div className="p-6">
        <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
          <div className="mb-4 md:mb-0">
            <h3 className="text-xl font-bold text-gray-800" itemProp="jobTitle">{job.role}</h3>
            <p className="text-blue-600 font-medium" itemProp="worksFor" itemScope itemType="https://schema.org/Organization">
              <span itemProp="name">{job.company}</span>
            </p>
          </div>
          <div className="text-gray-600">
            <p className="font-semibold" itemProp="dateOccupied">{job.period}</p>
            <p itemProp="workLocation">{job.location}</p>
          </div>
        </div>
        
        <div className="mt-4">
          <p className="font-medium text-gray-700 mb-2">Key Achievements:</p>
          <ul className="list-disc pl-5 space-y-1 text-gray-700">
            {job.achievements.map((achievement, i) => (
              <li key={i} itemProp="description">{achievement}</li>
            ))}
          </ul>
        </div>
        
        {(job.clients && job.clients.length > 0) && (
          <div className="mt-4">
            <p className="font-medium text-gray-700 mb-2">Clients:</p>
            <ul className="list-disc pl-5 space-y-2" itemProp="memberOf">
              {job.clients.map((client, i) => (
                <li key={i} className="text-gray-700" itemProp="member" itemScope itemType="https://schema.org/Organization">
                  <span className="font-medium" itemProp="name">{client.name}</span>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </article>
  );
};

export default WorkExperienceCard;

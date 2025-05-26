import React from 'react';
import { WorkExperience } from '@/data/portfolioData';

interface ExperienceCardWithRemoteProps {
  job: WorkExperience;
}

const ExperienceCardWithRemote: React.FC<ExperienceCardWithRemoteProps> = ({ job }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-lg">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
        <div>
          <h2 className="text-2xl font-bold text-gray-900">{job.role}</h2>
          <h3 className="text-xl text-blue-600">{job.company}</h3>
          {job.remoteWork && (
            <div className="mt-2">
              <span className="inline-flex items-center px-3 py-1 text-sm font-medium rounded-full bg-green-100 text-green-800">
                <svg className="w-4 h-4 mr-1.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                </svg>
                Remote Work
              </span>
            </div>
          )}
        </div>
        <div className="mt-2 md:mt-0 text-gray-600">
          <p>{job.period}</p>
          <p>{job.location}</p>
        </div>
      </div>
      
      <div className="mb-6">
        <h4 className="text-lg font-semibold mb-2 text-gray-800">Key Achievements</h4>
        <ul className="list-disc pl-5 space-y-2">
          {job.achievements.map((achievement, i) => (
            <li key={i} className="text-gray-700">{achievement}</li>
          ))}
        </ul>
      </div>
      
      {(job.details && job.details.length > 0) && (
        <div className="mb-6">
          <h4 className="text-lg font-semibold mb-2 text-gray-800">Role Details</h4>
          <ul className="list-disc pl-5 space-y-2">
            {job.details.map((detail, i) => (
              <li key={i} className="text-gray-700">{detail}</li>
            ))}
          </ul>
        </div>
      )}
      
      {(job.clients && job.clients.length > 0) && (
        <div>
          <h4 className="text-lg font-semibold mb-2 text-gray-800">Client Projects</h4>
          <div className="space-y-4">
            {job.clients.map((client, i) => (
              <div key={i} className="bg-gray-50 p-4 rounded-md">
                <h5 className="font-medium text-gray-800">{client.name}</h5>
                <p className="text-gray-700 mt-1">{client.description}</p>
              </div>
            ))}
          </div>
        </div>
      )}
      
      {job.tags && job.tags.length > 0 && (
        <div className="mt-6 flex flex-wrap gap-2">
          {job.tags.map((tag, i) => (
            <span key={i} className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">
              {tag}
            </span>
          ))}
        </div>
      )}
    </div>
  );
};

export default ExperienceCardWithRemote;

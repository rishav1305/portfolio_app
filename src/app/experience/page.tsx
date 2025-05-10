import React from 'react';
import portfolioData from "@/data/portfolioData";

export default function Experience() {
  const { professionalExperience, freelanceExperience, education } = portfolioData;
  
  return (
    <div className="min-h-screen bg-gray-50 pt-24 pb-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-12 text-gray-800">Freelance Experience</h1>
        
        <div className="space-y-12 mb-16">
          {freelanceExperience.map((job, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-lg">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                <div>
                  <h2 className="text-2xl font-bold text-gray-900">{job.role}</h2>
                  <h3 className="text-xl text-blue-600">{job.company}</h3>
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
              
              {job.details && job.details.length > 0 && (
                <div className="mb-6">
                  <h4 className="text-lg font-semibold mb-2 text-gray-800">Role Details</h4>
                  <ul className="list-disc pl-5 space-y-2">
                    {job.details.map((detail, i) => (
                      <li key={i} className="text-gray-700">{detail}</li>
                    ))}
                  </ul>
                </div>
              )}
              
              {job.clients && job.clients.length > 0 && (
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
          ))}
        </div>

        <h1 className="text-4xl font-bold text-center mb-12 text-gray-800">Professional Experience</h1>
        
        <div className="space-y-12 mb-16">
          {professionalExperience.map((job, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-lg">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                <div>
                  <h2 className="text-2xl font-bold text-gray-900">{job.role}</h2>
                  <h3 className="text-xl text-blue-600">{job.company}</h3>
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
              
              {job.details && job.details.length > 0 && (
                <div className="mb-6">
                  <h4 className="text-lg font-semibold mb-2 text-gray-800">Role Details</h4>
                  <ul className="list-disc pl-5 space-y-2">
                    {job.details.map((detail, i) => (
                      <li key={i} className="text-gray-700">{detail}</li>
                    ))}
                  </ul>
                </div>
              )}
              
              {job.clients && job.clients.length > 0 && (
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
          ))}
        </div>
        
        {/* Education Section */}
        <h1 className="text-4xl font-bold text-center mb-12 text-gray-800">Education</h1>
        
        <div className="space-y-8 mb-12">
          {education.map((edu, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-lg">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                <div>
                  <h2 className="text-2xl font-bold text-gray-900">{edu.degree}</h2>
                  <h3 className="text-xl text-blue-600">{edu.institution}</h3>
                  <p className="text-lg text-gray-700 mt-1">{edu.focusArea}</p>
                </div>
                <div className="mt-2 md:mt-0 text-gray-600">
                  <p>{edu.period}</p>
                  <p>{edu.location}</p>
                </div>
              </div>
              
              {edu.description && (
                <div className="mt-4">
                  <h4 className="text-lg font-semibold mb-2 text-gray-800">Description</h4>
                  <p className="text-gray-700">{edu.description}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
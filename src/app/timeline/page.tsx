import React from 'react';
import portfolioData from "@/data/portfolioData";

// Define interfaces for timeline events to fix TypeScript errors
interface BaseTimelineEvent {
  type: string;
  startDate: Date;
  endDate: Date;
  title: string;
  subtitle: string;
  description: string;
  location: string;
  period: string;
}

interface WorkTimelineEvent extends BaseTimelineEvent {
  type: 'work';
}

interface EducationTimelineEvent extends BaseTimelineEvent {
  type: 'education';
  institution: string;
  degree: string;
}

type TimelineEvent = WorkTimelineEvent | EducationTimelineEvent;

export default function Timeline() {
  const { experience, education } = portfolioData;
  
  // Helper function to convert month name to month number (0-11)
  const getMonthNumber = (monthName: string): number => {
    const months: {[key: string]: number} = {
      'jan': 0, 'january': 0,
      'feb': 1, 'february': 1,
      'mar': 2, 'march': 2,
      'apr': 3, 'april': 3,
      'may': 4,
      'jun': 5, 'june': 5,
      'jul': 6, 'july': 6,
      'aug': 7, 'august': 7,
      'sep': 8, 'september': 8,
      'oct': 9, 'october': 9,
      'nov': 10, 'november': 10,
      'dec': 11, 'december': 11
    };
    
    return months[monthName.toLowerCase()] || 0;
  };
  
  const timelineEvents: TimelineEvent[] = [
    ...experience.map(job => ({
      type: 'work' as const,
      startDate: new Date(job.startDate),
      endDate: job.endDate ? new Date(job.endDate) : new Date(),
      title: job.role,
      subtitle: job.company,
      description: job.achievements[0],
      location: job.location,
      period: job.period
    })),
    ...education.map(edu => {
      // Approximate dates for education entries based on period string
      const yearRange = edu.period.split(' - ');
      const startYear = parseInt(yearRange[0].split(' ')[1]);
      const startMonth = getMonthNumber(yearRange[0].split(' ')[0]);
      
      const endYearString = yearRange[1];
      const endYear = parseInt(endYearString.split(' ')[1]);
      const endMonth = getMonthNumber(endYearString.split(' ')[0]);
      
      return {
        type: 'education' as const,
        startDate: new Date(startYear, startMonth, 1),
        endDate: new Date(endYear, endMonth, 28),
        title: edu.degree,
        subtitle: edu.institution,
        description: edu.focusArea,
        location: edu.location,
        period: edu.period,
        institution: edu.institution,
        degree: edu.degree
      };
    })
  ].sort((a, b) => b.startDate.getTime() - a.startDate.getTime());
  
  return (
    <div className="min-h-screen bg-gray-50 pt-24 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-12 text-gray-800">My Journey</h1>
        
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-blue-200"></div>
          
          <div className="space-y-12">
            {timelineEvents.map((item, index) => (
              <div key={index} className={`relative flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
                {/* Timeline point */}
                <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 rounded-full bg-blue-600 border-4 border-white z-10"></div>
                
                {/* Content box */}
                <div className={`w-5/12 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8'}`}>
                  <div className="bg-white p-6 rounded-lg shadow-lg">
                    <div className={`${item.type === 'education' ? 'bg-green-100 text-green-800' : 'bg-blue-100 text-blue-800'} inline-block px-3 py-1 rounded-full text-sm font-semibold mb-2`}>
                      {item.type === 'education' ? 'Education' : 'Work Experience'}
                    </div>
                    
                    <div className="mb-2">
                      <h3 className="text-xl font-bold">
                        {item.type === 'education' ? item.institution : item.subtitle}
                      </h3>
                      <p className="text-gray-600">
                        {item.type === 'education' ? item.degree : item.title}
                      </p>
                    </div>
                    
                    <div className="text-sm text-gray-500">
                      <p>{item.period}</p>
                      <p>{item.location}</p>
                    </div>
                    
                    {item.type === 'education' && item.description && (
                      <p className="mt-3 text-gray-700">{item.description}</p>
                    )}
                    
                    {item.type === 'work' && (
                      <div className="mt-3">
                        <p className="font-semibold text-gray-700">Key Achievement:</p>
                        <p className="text-gray-700 text-sm">{item.description}</p>
                      </div>
                    )}
                  </div>
                </div>
                
                {/* Empty space for opposite side */}
                <div className="w-5/12"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
import React from 'react';

export default function TimelinePage() {
  return (
    <main className="container mx-auto px-4 py-24 min-h-screen">
      <h1 className="text-4xl font-bold mb-12 text-center">Timeline</h1>
      
      <div className="relative max-w-3xl mx-auto">
        {/* Vertical line */}
        <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-gray-200 dark:bg-gray-800"></div>
        
        {/* Timeline items */}
        {[
          { year: "2025", title: "Current Position", description: "Senior Developer at Tech Company" },
          { year: "2023", title: "Career Advancement", description: "Promoted to Lead Developer" },
          { year: "2021", title: "New Role", description: "Joined as Full Stack Developer" },
          { year: "2020", title: "Education", description: "Completed Master's in Computer Science" },
          { year: "2018", title: "First Job", description: "Junior Developer at Startup" },
          { year: "2016", title: "Education", description: "Bachelor's in Computer Science" },
        ].map((item, index) => (
          <div key={index} className={`relative mb-16 ${index % 2 === 0 ? 'pl-8 md:pl-0 md:pr-8 md:text-right md:ml-auto md:mr-1/2' : 'pl-8 md:ml-1/2'}`}>
            <div className="absolute left-0 md:left-1/2 top-1 transform md:-translate-x-1/2 w-6 h-6 rounded-full bg-blue-600 border-4 border-white dark:border-gray-900"></div>
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
              <span className="inline-block px-3 py-1 mb-3 text-sm font-semibold bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-100 rounded-full">
                {item.year}
              </span>
              <h3 className="text-xl font-bold mb-1">{item.title}</h3>
              <p className="text-gray-600 dark:text-gray-300">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
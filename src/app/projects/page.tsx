import React from 'react';

export default function ProjectsPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      {/* Hero Section with padding for navbar */}
      <section className="pt-32 pb-20 px-6 md:px-20">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Projects</h1>
          <div className="w-20 h-1 bg-blue-500 mb-10"></div>
        </div>
      </section>
      
      <section className="py-16 px-6 md:px-20">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Placeholder project cards */}
            {[1, 2, 3, 4, 5, 6].map((item) => (
              <div key={item} className="border border-gray-200 dark:border-gray-800 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
                <h2 className="text-2xl font-semibold mb-2">Project {item}</h2>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  This is a placeholder for project description. Replace with actual project details.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-100 px-2 py-1 text-xs rounded-full">React</span>
                  <span className="bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-100 px-2 py-1 text-xs rounded-full">Next.js</span>
                  <span className="bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-100 px-2 py-1 text-xs rounded-full">TailwindCSS</span>
                </div>
                <a href="#" className="text-blue-600 dark:text-blue-400 hover:underline">View Project →</a>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
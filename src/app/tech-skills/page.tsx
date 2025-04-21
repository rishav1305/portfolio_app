import React from 'react';

export default function TechSkillsPage() {
  const skills = {
    'Frontend': [
      { name: 'React', level: 90 },
      { name: 'Next.js', level: 85 },
      { name: 'TypeScript', level: 80 },
      { name: 'TailwindCSS', level: 88 },
      { name: 'CSS/SCSS', level: 85 },
    ],
    'Backend': [
      { name: 'Node.js', level: 82 },
      { name: 'Express', level: 80 },
      { name: 'Python', level: 75 },
      { name: 'Django', level: 70 },
      { name: 'GraphQL', level: 65 },
    ],
    'Data & ML': [
      { name: 'TensorFlow', level: 70 },
      { name: 'PyTorch', level: 65 },
      { name: 'Pandas', level: 78 },
      { name: 'SQL', level: 85 },
      { name: 'MongoDB', level: 80 },
    ],
    'DevOps': [
      { name: 'Docker', level: 75 },
      { name: 'Kubernetes', level: 60 },
      { name: 'AWS', level: 70 },
      { name: 'CI/CD', level: 72 },
      { name: 'Git', level: 90 },
    ]
  };
  
  return (
    <main className="container mx-auto px-4 py-24 min-h-screen">
      <h1 className="text-4xl font-bold mb-12 text-center">Tech Skills</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {Object.entries(skills).map(([category, categorySkills]) => (
          <div key={category} className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold mb-6 text-center border-b pb-2 border-gray-200 dark:border-gray-700">
              {category}
            </h2>
            <div className="space-y-4">
              {categorySkills.map((skill) => (
                <div key={skill.name} className="mb-4">
                  <div className="flex justify-between mb-1">
                    <span className="font-medium">{skill.name}</span>
                    <span className="text-sm text-gray-500 dark:text-gray-400">{skill.level}%</span>
                  </div>
                  <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
                    <div 
                      className="bg-blue-600 h-2.5 rounded-full" 
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
      
      <div className="mt-16">
        <h2 className="text-3xl font-bold mb-6 text-center">Certifications</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { name: 'AWS Certified Developer', issuer: 'Amazon Web Services', year: 2024 },
            { name: 'Professional Data Engineer', issuer: 'Google Cloud', year: 2023 },
            { name: 'Certified Kubernetes Administrator', issuer: 'Cloud Native Computing Foundation', year: 2022 },
          ].map((cert, index) => (
            <div key={index} className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center mb-4">
                <span className="text-2xl text-blue-600 dark:text-blue-300">📜</span>
              </div>
              <h3 className="text-xl font-bold mb-1">{cert.name}</h3>
              <p className="text-gray-600 dark:text-gray-300">{cert.issuer}</p>
              <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">{cert.year}</p>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
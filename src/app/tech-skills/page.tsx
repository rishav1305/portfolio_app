import React from 'react';

export default function TechSkillsPage() {
  const skills = {
    'AI Research': [
      { name: 'Large Language Models', level: 95 },
      { name: 'Multimodal AI', level: 90 },
      { name: 'Reinforcement Learning', level: 87 },
      { name: 'Computer Vision', level: 85 },
      { name: 'Knowledge Graphs', level: 82 },
    ],
    'ML Engineering': [
      { name: 'PyTorch', level: 92 },
      { name: 'TensorFlow', level: 88 },
      { name: 'JAX', level: 85 },
      { name: 'ONNX', level: 80 },
      { name: 'HuggingFace', level: 90 },
    ],
    'MLOps & Infrastructure': [
      { name: 'Distributed Training', level: 88 },
      { name: 'ML Pipelines', level: 85 },
      { name: 'Kubernetes', level: 80 },
      { name: 'Docker', level: 85 },
      { name: 'Cloud ML Platforms', level: 90 },
    ],
    'Programming': [
      { name: 'Python', level: 95 },
      { name: 'TypeScript', level: 85 },
      { name: 'C++', level: 75 },
      { name: 'SQL', level: 88 },
      { name: 'Julia', level: 70 },
    ]
  };
  
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      {/* Hero Section with padding for navbar */}
      <section className="pt-32 pb-20 px-6 md:px-20">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Technical Expertise</h1>
          <div className="w-20 h-1 bg-blue-500 mb-10"></div>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl">
            My expertise spans AI research, machine learning engineering, and large-scale system design
          </p>
        </div>
      </section>
      
      <section className="py-16 px-6 md:px-20">
        <div className="max-w-6xl mx-auto">
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
                          className={`h-2.5 rounded-full ${
                            category === 'AI Research' ? 'bg-purple-600' : 
                            category === 'ML Engineering' ? 'bg-blue-600' : 
                            category === 'MLOps & Infrastructure' ? 'bg-green-600' : 'bg-yellow-600'
                          }`}
                          style={{ width: `${skill.level}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-16 bg-gray-50 dark:bg-gray-800 p-8 rounded-xl shadow-md">
            <h2 className="text-3xl font-bold mb-8 text-center">Research Domains</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {[
                { name: 'Natural Language Processing', icon: '🔤' },
                { name: 'Computer Vision', icon: '👁️' },
                { name: 'Multimodal Learning', icon: '🔄' },
                { name: 'Reinforcement Learning', icon: '🎮' },
                { name: 'Knowledge Representation', icon: '🧠' },
                { name: 'AI Ethics', icon: '⚖️' },
                { name: 'Generative AI', icon: '✨' },
                { name: 'AI Systems', icon: '⚙️' },
              ].map((domain, index) => (
                <div key={index} className="bg-white dark:bg-gray-700 p-4 rounded-lg shadow-sm text-center">
                  <div className="text-3xl mb-2">{domain.icon}</div>
                  <h3 className="font-medium text-sm md:text-base">{domain.name}</h3>
                </div>
              ))}
            </div>
          </div>
          
          <div className="mt-16">
            <h2 className="text-3xl font-bold mb-6 text-center">Certifications & Credentials</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                { 
                  name: 'AI Research Fellow', 
                  issuer: 'Advanced AI Research Institute', 
                  year: 2024,
                  icon: '🏆'
                },
                { 
                  name: 'AI Systems Architect', 
                  issuer: 'Enterprise AI Consortium', 
                  year: 2023,
                  icon: '🏗️'
                },
                { 
                  name: 'Distinguished ML Practitioner', 
                  issuer: 'International ML Association', 
                  year: 2022,
                  icon: '🌟'
                },
              ].map((cert, index) => (
                <div key={index} className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md flex flex-col items-center text-center">
                  <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center mb-4">
                    <span className="text-2xl">{cert.icon}</span>
                  </div>
                  <h3 className="text-xl font-bold mb-1">{cert.name}</h3>
                  <p className="text-gray-600 dark:text-gray-300">{cert.issuer}</p>
                  <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">{cert.year}</p>
                </div>
              ))}
            </div>
          </div>
          
          <div className="mt-16">
            <h2 className="text-3xl font-bold mb-8 text-center">Technical Contributions</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold mb-4 text-blue-600 dark:text-blue-400">Open Source</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="text-gray-700 dark:text-gray-300 mr-2">•</span>
                    <span className="text-gray-700 dark:text-gray-300">Contributed to HuggingFace Transformers library</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-gray-700 dark:text-gray-300 mr-2">•</span>
                    <span className="text-gray-700 dark:text-gray-300">Maintained EfficientML repository (5k+ stars)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-gray-700 dark:text-gray-300 mr-2">•</span>
                    <span className="text-gray-700 dark:text-gray-300">Core contributor to MLflow</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-gray-700 dark:text-gray-300 mr-2">•</span>
                    <span className="text-gray-700 dark:text-gray-300">Released KnowledgeGraphs.jl Julia package</span>
                  </li>
                </ul>
              </div>
              <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold mb-4 text-purple-600 dark:text-purple-400">Technical Reviews</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="text-gray-700 dark:text-gray-300 mr-2">•</span>
                    <span className="text-gray-700 dark:text-gray-300">NeurIPS Conference Reviewer (2020-2025)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-gray-700 dark:text-gray-300 mr-2">•</span>
                    <span className="text-gray-700 dark:text-gray-300">ICML Program Committee Member</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-gray-700 dark:text-gray-300 mr-2">•</span>
                    <span className="text-gray-700 dark:text-gray-300">Journal of Machine Learning Research Reviewer</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-gray-700 dark:text-gray-300 mr-2">•</span>
                    <span className="text-gray-700 dark:text-gray-300">ACL Outstanding Reviewer Award (2023)</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          
          <div className="mt-16 text-center">
            <p className="text-gray-600 dark:text-gray-300 text-lg mb-6">
              Interested in discussing technical collaborations or research opportunities?
            </p>
            <a 
              href="/contact" 
              className="inline-block bg-gradient-to-r from-blue-600 to-purple-600 text-white font-medium px-8 py-3 rounded-lg shadow-lg hover:shadow-xl transition-all"
            >
              Let's Connect
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
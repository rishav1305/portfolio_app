import React from 'react';

export default function AIInnovationsPage() {
  return (
    <main className="container mx-auto px-4 py-24 min-h-screen">
      <h1 className="text-4xl font-bold mb-6 text-center">AI Innovations</h1>
      <p className="text-xl text-center text-gray-600 dark:text-gray-300 mb-12 max-w-3xl mx-auto">
        Exploring cutting-edge artificial intelligence technologies and their applications
      </p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-16">
        <div className="bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-800 dark:to-blue-900 p-8 rounded-2xl shadow-lg">
          <h2 className="text-2xl font-bold mb-4">AI Research Projects</h2>
          <ul className="space-y-4">
            {[
              "Neural network architecture optimization",
              "Natural language understanding frameworks", 
              "Computer vision in medical diagnostics",
              "Reinforcement learning for robotics",
              "Explainable AI methods"
            ].map((item, index) => (
              <li key={index} className="flex items-start">
                <span className="text-blue-600 dark:text-blue-400 mr-2">→</span>
                <span className="text-gray-700 dark:text-gray-200">{item}</span>
              </li>
            ))}
          </ul>
        </div>
        
        <div className="bg-gradient-to-br from-purple-50 to-pink-100 dark:from-gray-800 dark:to-purple-900 p-8 rounded-2xl shadow-lg">
          <h2 className="text-2xl font-bold mb-4">AI Applications</h2>
          <ul className="space-y-4">
            {[
              "Conversational AI assistants",
              "Predictive analytics platforms", 
              "Autonomous systems design",
              "Content generation tools",
              "Personalization engines"
            ].map((item, index) => (
              <li key={index} className="flex items-start">
                <span className="text-purple-600 dark:text-purple-400 mr-2">→</span>
                <span className="text-gray-700 dark:text-gray-200">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <h2 className="text-3xl font-bold mb-8 text-center">Featured AI Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {[
          {
            title: "Neural Text Generator",
            description: "An advanced NLP model for generating human-like text with transformer architecture",
            tags: ["NLP", "Transformers", "Python"],
            image: "🤖"
          },
          {
            title: "Computer Vision Analytics",
            description: "Real-time object detection and scene understanding for video streams",
            tags: ["Computer Vision", "TensorFlow", "Real-time Processing"],
            image: "👁️"
          },
          {
            title: "Reinforcement Learning Framework",
            description: "A modular framework for training and evaluating reinforcement learning agents",
            tags: ["RL", "PyTorch", "Simulation"],
            image: "🎮"
          },
        ].map((project, index) => (
          <div key={index} className="bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden">
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-6 flex justify-center items-center">
              <span className="text-5xl">{project.image}</span>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold mb-2">{project.title}</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag, i) => (
                  <span key={i} className="bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-100 px-2 py-1 text-xs rounded-full">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
      
      <div className="mt-16 text-center">
        <h2 className="text-2xl font-bold mb-4">Interested in AI collaborations?</h2>
        <p className="text-gray-600 dark:text-gray-300 mb-6">
          I'm always looking for interesting AI projects to collaborate on
        </p>
        <a 
          href="/contact" 
          className="inline-block bg-gradient-to-r from-blue-600 to-purple-600 text-white font-medium px-6 py-3 rounded-lg shadow-lg hover:shadow-xl transition-all"
        >
          Get in Touch
        </a>
      </div>
    </main>
  );
}
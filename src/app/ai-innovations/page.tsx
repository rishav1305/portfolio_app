import React from 'react';

export default function AIInnovationsPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      {/* Hero Section with padding for navbar */}
      <section className="pt-32 pb-20 px-6 md:px-20">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">AI Innovations</h1>
          <div className="w-20 h-1 bg-blue-500 mb-10"></div>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl">
            Pioneering research and development in artificial intelligence with focus on practical applications and emerging technologies
          </p>
        </div>
      </section>
      
      <div className="px-6 md:px-20 py-16">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-16">
            <div className="bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-800 dark:to-blue-900 p-8 rounded-2xl shadow-lg">
              <h2 className="text-2xl font-bold mb-4">Advanced Research Areas</h2>
              <ul className="space-y-4">
                {[
                  "Large language model architecture optimization",
                  "Multimodal AI systems and cross-domain learning", 
                  "Computer vision in healthcare diagnostics",
                  "Reinforcement learning for autonomous systems",
                  "Explainable AI frameworks and transparency tools",
                  "Edge AI and resource-efficient model deployment"
                ].map((item, index) => (
                  <li key={index} className="flex items-start">
                    <span className="text-blue-600 dark:text-blue-400 mr-2">→</span>
                    <span className="text-gray-700 dark:text-gray-200">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="bg-gradient-to-br from-purple-50 to-pink-100 dark:from-gray-800 dark:to-purple-900 p-8 rounded-2xl shadow-lg">
              <h2 className="text-2xl font-bold mb-4">Industry Applications</h2>
              <ul className="space-y-4">
                {[
                  "Enterprise-grade conversational AI systems",
                  "Predictive analytics for business intelligence", 
                  "AI-powered decision support systems",
                  "Generative AI for content creation and design",
                  "Personalization engines for digital experiences",
                  "AI ethics and governance frameworks"
                ].map((item, index) => (
                  <li key={index} className="flex items-start">
                    <span className="text-purple-600 dark:text-purple-400 mr-2">→</span>
                    <span className="text-gray-700 dark:text-gray-200">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="bg-gradient-to-br from-green-50 to-teal-100 dark:from-gray-800 dark:to-green-900 p-8 rounded-2xl shadow-lg mb-16">
            <h2 className="text-2xl font-bold mb-4">Research Impact (2025)</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
              <div className="bg-white dark:bg-gray-700 p-6 rounded-xl shadow text-center">
                <div className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-2">15+</div>
                <div className="text-gray-600 dark:text-gray-300">Research Papers</div>
              </div>
              <div className="bg-white dark:bg-gray-700 p-6 rounded-xl shadow text-center">
                <div className="text-3xl font-bold text-purple-600 dark:text-purple-400 mb-2">8</div>
                <div className="text-gray-600 dark:text-gray-300">Patents Filed</div>
              </div>
              <div className="bg-white dark:bg-gray-700 p-6 rounded-xl shadow text-center">
                <div className="text-3xl font-bold text-green-600 dark:text-green-400 mb-2">3</div>
                <div className="text-gray-600 dark:text-gray-300">Industry Partnerships</div>
              </div>
            </div>
          </div>

          <h2 className="text-3xl font-bold mb-8 text-center">Featured AI Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "NeuralSynthesis",
                description: "Advanced multimodal model that integrates text, image, and audio data for comprehensive content generation",
                tags: ["Multimodal AI", "Transformers", "PyTorch"],
                image: "🧠"
              },
              {
                title: "MedVisionAI",
                description: "Real-time diagnostic assistance system for medical imaging with 98.7% accuracy on benchmark datasets",
                tags: ["Healthcare AI", "Computer Vision", "TensorFlow"],
                image: "🔬"
              },
              {
                title: "AutoAgent Framework",
                description: "A modular reinforcement learning system for training autonomous agents that can adapt to changing environments",
                tags: ["Reinforcement Learning", "JAX", "Distributed Systems"],
                image: "🤖"
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
          
          <div className="mt-16 bg-gradient-to-br from-blue-50 to-purple-100 dark:from-gray-800 dark:to-indigo-900 p-8 rounded-2xl">
            <h2 className="text-2xl font-bold mb-4 text-center">Current Research Focus</h2>
            <p className="text-gray-700 dark:text-gray-300 mb-6 text-center">
              My team is currently focused on developing more efficient and transparent AI systems that combine the power of large language models with domain-specific knowledge graphs.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
              <div className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow">
                <h3 className="text-xl font-bold mb-3">Knowledge-Enhanced LLMs</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Developing methods to integrate structured knowledge sources with neural language models to improve factuality and reduce hallucinations.
                </p>
              </div>
              <div className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow">
                <h3 className="text-xl font-bold mb-3">Efficient Model Training</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Creating novel techniques for reducing the computational resources required for training large AI models without sacrificing performance.
                </p>
              </div>
            </div>
          </div>
          
          <div className="mt-16 text-center">
            <h2 className="text-2xl font-bold mb-4">Interested in AI collaborations?</h2>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              I'm always open to discussing research partnerships and exploring new AI frontiers
            </p>
            <a 
              href="/contact" 
              className="inline-block bg-gradient-to-r from-blue-600 to-purple-600 text-white font-medium px-6 py-3 rounded-lg shadow-lg hover:shadow-xl transition-all"
            >
              Get in Touch
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
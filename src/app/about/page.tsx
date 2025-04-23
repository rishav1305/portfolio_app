import Image from "next/image";
import Link from "next/link";

export default function About() {
  // Calculate years of experience dynamically
  const currentYear = new Date().getFullYear();
  const yearsOfExperience = currentYear - 2018;

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      {/* Hero Section with Bio integrated */}
      <section 
        className="pt-32 pb-20 px-6 md:px-20 bg-cover bg-no-repeat"
        style={{ 
          backgroundImage: 'url("/images/profile_bg.jpg")', 
          backgroundPosition: '-50px 350px'  /* Added margin of 200px to left and top */
        }}
      >
        <div className="max-w-6xl mx-auto">
          <div className="mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">About Me</h1>
            <div className="w-20 h-1 bg-blue-500 mb-10"></div>
            <p className="text-xl max-w-3xl">
              AI Researcher and Technology Leader with expertise in building scalable AI systems that solve real-world problems
            </p>
          </div>

          {/* Bio content moved inside hero section */}
          <div className="flex justify-end">
            <div className="md:w-2/3 bg-white/90 dark:bg-gray-800/90 p-8 rounded-xl backdrop-blur-sm shadow-xl">
              <h2 className="text-3xl font-bold mb-6 text-white">Biography</h2>
              <p className="text-lg mb-6 text-white">
              Hello! I'm Rishav Chatterjee, a Technology Lead with extensive experience in data modeling, warehousing, and advanced data visualization. Over the years, I've had the privilege of working with top-tier organizations across industries, leading impactful B2B and B2C analytics initiatives.
              I specialize in building scalable data architectures using modern cloud platforms like AWS and Azure, and I'm highly proficient in tools like Python, SQL, Spark, and various BI tools including Tableau CRM, Qlik Sense, Power BI, and Preset. From streamlining programmatic pipelines and integrating enterprise systems like NetSuite and Salesforce, to delivering mission-critical dashboards for C-level executives—I've consistently aligned data solutions with business strategy.
              </p>
              <p className="text-lg text-white mb-6">
              To stay ahead in today's fast-paced environment, I actively integrate AI into my workflow. I leverage tools like GitHub Copilot, Claude, and ChatGPT for code assistance, debugging, and technical documentation. I'm also developing AI agents using Ollama and Autogen frameworks to automate and scale analytical tasks.
              Whether it's leading cross-functional teams, designing ETL frameworks, or unlocking insights from complex datasets, I bring a strong mix of hands-on expertise, strategic thinking, and innovation.
              </p>
              <p className="text-lg text-white mb-6">
              Let's connect if you're looking to drive your data vision forward with precision and performance.
              </p>
              
              <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-white dark:bg-gray-700 p-4 rounded-lg shadow-md text-center">
                  <div className="text-blue-600 dark:text-blue-400 text-4xl font-bold">{yearsOfExperience}+</div>
                  <div className="text-gray-600 dark:text-gray-300 mt-2">Years Experience</div>
                </div>
                <div className="bg-white dark:bg-gray-700 p-4 rounded-lg shadow-md text-center">
                  <div className="text-purple-600 dark:text-purple-400 text-4xl font-bold">15+</div>
                  <div className="text-gray-600 dark:text-gray-300 mt-2">Publications</div>
                </div>
                <div className="bg-white dark:bg-gray-700 p-4 rounded-lg shadow-md text-center">
                  <div className="text-green-600 dark:text-green-400 text-4xl font-bold">3</div>
                  <div className="text-gray-600 dark:text-gray-300 mt-2">Industry Awards</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-16 px-6 md:px-20">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-10 text-center">Areas of Expertise</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-xl shadow-md">
              <h3 className="text-xl font-bold mb-4 text-blue-600 dark:text-blue-400">AI Research & Development</h3>
              <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                <li>• Large Language Models</li>
                <li>• Multimodal AI Systems</li>
                <li>• Reinforcement Learning</li>
                <li>• Knowledge-enhanced Models</li>
                <li>• Efficient AI Training</li>
              </ul>
            </div>
            
            <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-xl shadow-md">
              <h3 className="text-xl font-bold mb-4 text-purple-600 dark:text-purple-400">Technology Leadership</h3>
              <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                <li>• Research Team Management</li>
                <li>• AI Strategy Development</li>
                <li>• Cross-functional Collaboration</li>
                <li>• Mentorship & Team Growth</li>
                <li>• Technical Project Management</li>
              </ul>
            </div>
            
            <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-xl shadow-md">
              <h3 className="text-xl font-bold mb-4 text-green-600 dark:text-green-400">Engineering</h3>
              <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                <li>• Distributed Systems</li>
                <li>• MLOps & AI Infrastructure</li>
                <li>• Full-stack Development</li>
                <li>• Cloud Architecture</li>
                <li>• Performance Optimization</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Recognition Section */}
      <section className="py-16 px-6 md:px-20 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-10 text-center">Recognition & Awards</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white dark:bg-gray-700 p-6 rounded-xl shadow-md">
              <h3 className="text-xl font-bold mb-4">Industry Recognition</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <span className="text-yellow-500 mr-3 text-xl">🏆</span>
                  <div>
                    <p className="font-bold">AI Innovator of the Year (2024)</p>
                    <p className="text-gray-600 dark:text-gray-300">Tech Innovation Awards</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-yellow-500 mr-3 text-xl">🏆</span>
                  <div>
                    <p className="font-bold">Top 40 Under 40 in AI (2023)</p>
                    <p className="text-gray-600 dark:text-gray-300">AI Business Magazine</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-yellow-500 mr-3 text-xl">🏆</span>
                  <div>
                    <p className="font-bold">Best Paper Award (2022)</p>
                    <p className="text-gray-600 dark:text-gray-300">International Conference on Machine Learning</p>
                  </div>
                </li>
              </ul>
            </div>
            
            <div className="bg-white dark:bg-gray-700 p-6 rounded-xl shadow-md">
              <h3 className="text-xl font-bold mb-4">Patents & Publications</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <span className="text-blue-500 mr-3 text-xl">📝</span>
                  <div>
                    <p className="font-bold">8 Patents Filed & Granted</p>
                    <p className="text-gray-600 dark:text-gray-300">In AI model optimization and efficient training methods</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-3 text-xl">📝</span>
                  <div>
                    <p className="font-bold">20+ Research Publications</p>
                    <p className="text-gray-600 dark:text-gray-300">In top AI conferences including NeurIPS, ICML, and ICLR</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-3 text-xl">📝</span>
                  <div>
                    <p className="font-bold">Regular Speaker</p>
                    <p className="text-gray-600 dark:text-gray-300">At global AI conferences and industry events</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-6 md:px-20 text-center bg-gradient-to-r from-blue-500 to-purple-600 text-white">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold mb-6">Let's Connect</h2>
          <p className="text-xl mb-8">
            Interested in discussing AI research, potential collaborations, or speaking opportunities? 
            I'm always open to connecting with fellow researchers and industry professionals.
          </p>
          <div className="flex justify-center">
            <Link 
              href="/contact" 
              className="rounded-full bg-white text-blue-600 hover:bg-gray-100 px-8 py-3 font-medium text-lg transition-colors shadow-lg"
            >
              Get in Touch
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
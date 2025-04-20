import Image from "next/image";
import Link from "next/link";

export default function About() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      {/* Hero Section with padding for navbar */}
      <section className="pt-32 pb-20 px-6 md:px-20">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">About Me</h1>
          <div className="w-20 h-1 bg-blue-500 mb-10"></div>
        </div>
      </section>

      {/* Bio Section */}
      <section className="py-16 px-6 md:px-20 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row gap-12 items-start">
            <div className="md:w-1/3">
              <div className="w-full aspect-square rounded-xl bg-gray-200 dark:bg-gray-700 overflow-hidden relative">
                {/* Replace with your actual profile image */}
                <div className="absolute inset-0 flex items-center justify-center text-4xl font-bold">RC</div>
              </div>
            </div>
            
            <div className="md:w-2/3">
              <h2 className="text-3xl font-bold mb-6">Biography</h2>
              <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
                I'm a senior software engineer specializing in data visualization and engineering. 
                With over 8 years of experience in the industry, I've developed expertise in creating 
                interactive and insightful data visualizations that help businesses and researchers 
                better understand and communicate their data.
              </p>
              <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
                My journey started with a background in computer science and statistics, which gave me 
                the technical foundation to work with complex datasets. Over the years, I've worked with 
                startups, enterprise companies, and research institutions to design and implement data 
                solutions that drive decision-making and reveal insights.
              </p>
              <p className="text-lg text-gray-700 dark:text-gray-300">
                I'm passionate about combining technical expertise with design thinking to create 
                visualizations that are not only accurate and informative but also aesthetically pleasing 
                and intuitive to navigate.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-16 px-6 md:px-20">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-10 text-center">Technical Skills</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <div>
              <h3 className="text-xl font-bold mb-4">Data Visualization</h3>
              <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                <li>• D3.js and React integration</li>
                <li>• Three.js for 3D data visualization</li>
                <li>• Tableau & Power BI</li>
                <li>• Interactive dashboards</li>
                <li>• Chart design and implementation</li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-xl font-bold mb-4">Data Engineering</h3>
              <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                <li>• ETL pipeline development</li>
                <li>• Database design and optimization</li>
                <li>• Cloud data architecture (AWS, GCP)</li>
                <li>• Big data processing</li>
                <li>• Real-time data streaming</li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-xl font-bold mb-4">Programming</h3>
              <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                <li>• JavaScript/TypeScript</li>
                <li>• Python</li>
                <li>• SQL</li>
                <li>• React & Next.js</li>
                <li>• Node.js</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="py-16 px-6 md:px-20 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-10 text-center">Experience</h2>
          
          <div className="space-y-12">
            {/* Experience Item 1 */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <div className="md:text-right">
                <p className="font-bold">2020 - Present</p>
                <p className="text-gray-500 dark:text-gray-400">Senior Role</p>
              </div>
              <div className="md:col-span-3">
                <h3 className="text-xl font-bold mb-2">Senior Data Visualization Engineer</h3>
                <p className="text-blue-600 dark:text-blue-400 mb-4">Major Tech Company</p>
                <p className="text-gray-700 dark:text-gray-300">
                  Led the development of interactive data visualizations and dashboards for 
                  enterprise clients. Designed and implemented custom visualization solutions 
                  that increased data understanding and decision-making efficiency by 40%.
                </p>
              </div>
            </div>
            
            {/* Experience Item 2 */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <div className="md:text-right">
                <p className="font-bold">2017 - 2020</p>
                <p className="text-gray-500 dark:text-gray-400">Mid-level Role</p>
              </div>
              <div className="md:col-span-3">
                <h3 className="text-xl font-bold mb-2">Data Engineer</h3>
                <p className="text-blue-600 dark:text-blue-400 mb-4">Tech Startup</p>
                <p className="text-gray-700 dark:text-gray-300">
                  Developed and maintained data pipelines for processing large datasets. 
                  Implemented ETL processes that improved data processing efficiency by 60%. 
                  Collaborated with data scientists to implement machine learning models.
                </p>
              </div>
            </div>
            
            {/* Experience Item 3 */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <div className="md:text-right">
                <p className="font-bold">2015 - 2017</p>
                <p className="text-gray-500 dark:text-gray-400">Junior Role</p>
              </div>
              <div className="md:col-span-3">
                <h3 className="text-xl font-bold mb-2">Software Developer</h3>
                <p className="text-blue-600 dark:text-blue-400 mb-4">Research Institution</p>
                <p className="text-gray-700 dark:text-gray-300">
                  Built applications for data analysis and visualization. Created interactive 
                  tools for researchers to explore complex datasets. Contributed to scientific 
                  publications by providing data visualization support.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section className="py-16 px-6 md:px-20">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-10 text-center">Education</h2>
          
          <div className="space-y-12">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <div className="md:text-right">
                <p className="font-bold">2013 - 2015</p>
              </div>
              <div className="md:col-span-3">
                <h3 className="text-xl font-bold mb-2">Master's Degree in Computer Science</h3>
                <p className="text-blue-600 dark:text-blue-400 mb-4">Prestigious University</p>
                <p className="text-gray-700 dark:text-gray-300">
                  Specialized in data science and visualization. Thesis on interactive visualization 
                  techniques for large-scale networks.
                </p>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <div className="md:text-right">
                <p className="font-bold">2009 - 2013</p>
              </div>
              <div className="md:col-span-3">
                <h3 className="text-xl font-bold mb-2">Bachelor's Degree in Computer Science</h3>
                <p className="text-blue-600 dark:text-blue-400 mb-4">Respected University</p>
                <p className="text-gray-700 dark:text-gray-300">
                  Focus on software engineering and data structures. Minor in mathematics and statistics.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-6 md:px-20 bg-gray-50 dark:bg-gray-800 text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold mb-6">Let's work together</h2>
          <p className="text-lg text-gray-700 dark:text-gray-300 mb-8">
            Interested in collaborating or learning more about my work? I'm always open to discussing 
            new projects and opportunities.
          </p>
          <div className="flex justify-center">
            <Link 
              href="/contact" 
              className="rounded-full bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 font-medium text-lg transition-colors"
            >
              Contact Me
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
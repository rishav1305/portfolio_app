import Image from "next/image";
import Link from "next/link";
import VisualizationSection from "@/components/data-visualization/VisualizationSection";

export default function Home() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 font-[family-name:var(--font-geist-sans)]">
      {/* Hero Section with Vanta.js Waves Background */}
      <section className="relative">
        {/* This div is the container for the Vanta.js effect */}
        <div id="vanta-bg" className="absolute inset-0 -z-10 min-h-[90vh]"></div>
        
        <div className="relative z-10 py-32 px-6 md:px-20 flex flex-col items-center text-center max-w-6xl mx-auto min-h-[90vh] justify-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-white">
            <span className="block">RISHAV</span>
            <span className="block">CHATTERJEE</span>
          </h1>
          <div className="w-20 h-1 bg-blue-500 mb-10"></div>
          <p className="text-xl md:text-2xl mb-10 text-white max-w-3xl">
            👋 Hi! I'm a <span className="font-bold">senior software engineer</span> specializing in{" "}
            <span className="font-bold text-blue-300">data visualization</span>. 
            I've worked with prestigious companies and developed extensive{" "}
            <span className="font-bold">educational content</span> that you might benefit from. ❤️
          </p>
          <div className="flex gap-6 flex-col sm:flex-row">
            <Link 
              href="/contact" 
              className="rounded-full bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 font-medium text-lg transition-colors"
            >
              CONTACT
            </Link>
            <Link 
              href="/projects" 
              className="rounded-full border border-white hover:bg-white hover:text-blue-900 text-white px-8 py-3 font-medium text-lg transition-colors"
            >
              PORTFOLIO
            </Link>
          </div>
        </div>
      </section>

      {/* About Section with Profile Image */}
      <section className="py-16 px-6 md:px-20 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-10 items-center">
          <div className="w-48 h-48 md:w-64 md:h-64 rounded-full bg-gray-300 dark:bg-gray-600 overflow-hidden flex-shrink-0">
            {/* Replace with actual profile image when available */}
            <div className="w-full h-full flex items-center justify-center text-4xl">RC</div>
          </div>
          <div>
            <h2 className="text-3xl font-bold mb-6">Hi, I'm Rishav.</h2>
            <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
              I specialize in helping companies and researchers analyze and visualize their datasets. 
              I excel in <span className="font-bold">data visualization</span>. 
              If you're looking for guidance on presenting your results or building complex interactive charts, 
              I'm the expert you're seeking.
            </p>
            <p className="text-lg text-gray-700 dark:text-gray-300">
              With a solid track record in data science, I've collaborated with prestigious research institutes
              and leading private companies.
            </p>
          </div>
        </div>
      </section>

      {/* Data Visualization Section */}
      <section className="py-16 px-6 md:px-20">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-10 text-center">Data Visualization Expertise</h2>
          <VisualizationSection />
        </div>
      </section>

      {/* Portfolio Preview Section */}
      <section className="py-16 px-6 md:px-20 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-6xl mx-auto">
          <div className="flex justify-between items-center mb-10">
            <h2 className="text-3xl font-bold">PORTFOLIO</h2>
            <Link 
              href="/projects" 
              className="text-blue-600 dark:text-blue-400 font-medium hover:underline"
            >
              Show all
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Project Cards - Add your actual projects here */}
            {[1, 2, 3, 4, 5, 6].map((index) => (
              <div 
                key={index} 
                className="bg-white dark:bg-gray-900 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="h-48 bg-gray-200 dark:bg-gray-700"></div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">Project {index}</h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-4">
                    A brief description of this amazing data visualization project.
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 px-6 md:px-20">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-10 text-center">Services</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 bg-white dark:bg-gray-800 rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold mb-4">Consulting</h3>
              <p className="text-gray-700 dark:text-gray-300">
                Need a custom interactive graph? Some React or D3 work? Creating beautiful reports with modern tools?
              </p>
            </div>
            
            <div className="p-8 bg-white dark:bg-gray-800 rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold mb-4">Teaching & Training</h3>
              <p className="text-gray-700 dark:text-gray-300">
                Short talks or multi-day courses on dataviz, React, D3.js, data analytics and more.
              </p>
            </div>
            
            <div className="p-8 bg-white dark:bg-gray-800 rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold mb-4">Talking</h3>
              <p className="text-gray-700 dark:text-gray-300">
                Hire me to talk about programming or data visualization. I ❤️ it!
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Resources Section */}
      <section className="py-16 px-6 md:px-20 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-10 text-center">Resources</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white dark:bg-gray-900 p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold mb-4">DATA VISUALIZATION GUIDE</h3>
              <p className="text-gray-700 dark:text-gray-300 mb-6">
                A classification of charts based on their input format, and a lot of tips and tricks.
              </p>
              <Link 
                href="/resources/dataviz" 
                className="text-blue-600 dark:text-blue-400 font-medium hover:underline"
              >
                Visit
              </Link>
            </div>
            
            <div className="bg-white dark:bg-gray-900 p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold mb-4">D3.JS EXAMPLES</h3>
              <p className="text-gray-700 dark:text-gray-300 mb-6">
                D3 is the ultimate tool for data visualization on the web. Tedious but limitless.
              </p>
              <Link 
                href="/resources/d3" 
                className="text-blue-600 dark:text-blue-400 font-medium hover:underline"
              >
                Visit
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 px-6 md:px-20">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">CONTACT</h2>
          <p className="text-lg text-gray-700 dark:text-gray-300 mb-10">
            Feel free to contact me for any question. For open source projects, please open an issue or pull request on 
            Github. If you want to follow my work, reach me on Twitter. Otherwise, send me an email at 
            <a href="mailto:your.email@example.com" className="text-blue-600 dark:text-blue-400 ml-1">
              your.email@example.com
            </a>.
          </p>
          
          <div className="flex justify-center gap-6">
            <a href="https://github.com/yourusername" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400">
              GITHUB
            </a>
            <a href="https://twitter.com/yourusername" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400">
              TWITTER
            </a>
            <a href="mailto:your.email@example.com" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400">
              MAIL
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 md:px-20 border-t border-gray-200 dark:border-gray-700">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 dark:text-gray-400 mb-4 md:mb-0">
            © {new Date().getFullYear()} Rishav Chatterjee. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link href="/privacy" className="text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300">
              Terms of Use
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}

import Image from "next/image";
import Link from "next/link";
import VisualizationSection from "@/components/data-visualization/VisualizationSection";
import HeroSectionWithHexagons from "@/components/ui/HeroSectionWithHexagons";

export default function Home() {
  return (
    <div className="min-h-screen bg-white font-[family-name:var(--font-geist-sans)]">
      {/* Use the client component wrapper */}
      <HeroSectionWithHexagons />

      {/* About Section with Profile Image */}
      <section className="py-16 px-6 md:px-20 bg-gray-200">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-10 items-center">
          <div className="w-48 h-48 md:w-64 md:h-64 rounded-full bg-gray-300 overflow-hidden flex-shrink-0 relative">
            {/* Using the uploaded profile image */}
            <Image 
              src="/images/profile.jpg"
              alt="Rishav Chatterjee"
              fill
              sizes="(max-width: 768px) 12rem, 16rem"
              className="object-cover"
              priority
            />
          </div>
          <div>
            <h2 className="text-3xl font-bold mb-6">Hi, I'm Rishav.</h2>
            <p className="text-lg text-gray-700 mb-6">
            I help companies turn complex datasets into clear, actionable insights through advanced data modeling and visualization. 
            </p>
            <p className="text-lg text-gray-700">
            With experience across top firms, I build scalable, interactive dashboards and analytics solutions—leveraging AI tools to boost productivity and drive smarter, data-informed decisions.
            </p>
          </div>
        </div>
      </section>

      {/* Data Visualization Section */}
      <section className="py-16 px-6 md:px-20 bg-gray-100">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-10 text-center">Data Visualization Expertise</h2>
          <VisualizationSection />
        </div>
      </section>

      {/* Portfolio Preview Section */}
      <section className="py-16 px-6 md:px-20 bg-gray-200">
        <div className="max-w-6xl mx-auto">
          <div className="flex justify-between items-center mb-10">
            <h2 className="text-3xl font-bold">PORTFOLIO</h2>
            <Link 
              href="/projects" 
              className="text-blue-600 font-medium hover:underline"
            >
              Show all
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Project Cards - Add your actual projects here */}
            {[1, 2, 3, 4, 5, 6].map((index) => (
              <div 
                key={index} 
                className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="h-48 bg-gray-300"></div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">Project {index}</h3>
                  <p className="text-gray-600 mb-4">
                    A brief description of this amazing data visualization project.
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 px-6 md:px-20 bg-gray-100">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-10 text-center">Services</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 bg-white rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold mb-4">Consulting</h3>
              <p className="text-gray-700">
                Need a custom interactive graph? Some React or D3 work? Creating beautiful reports with modern tools?
              </p>
            </div>
            
            <div className="p-8 bg-white rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold mb-4">Teaching & Training</h3>
              <p className="text-gray-700">
                Short talks or multi-day courses on dataviz, React, D3.js, data analytics and more.
              </p>
            </div>
            
            <div className="p-8 bg-white rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold mb-4">Talking</h3>
              <p className="text-gray-700">
                Hire me to talk about programming or data visualization. I ❤️ it!
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Resources Section */}
      <section className="py-16 px-6 md:px-20 bg-gray-200">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-10 text-center">Resources</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold mb-4">DATA VISUALIZATION GUIDE</h3>
              <p className="text-gray-700 mb-6">
                A classification of charts based on their input format, and a lot of tips and tricks.
              </p>
              <Link 
                href="/resources/dataviz" 
                className="text-blue-600 font-medium hover:underline"
              >
                Visit
              </Link>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold mb-4">D3.JS EXAMPLES</h3>
              <p className="text-gray-700 mb-6">
                D3 is the ultimate tool for data visualization on the web. Tedious but limitless.
              </p>
              <Link 
                href="/resources/d3" 
                className="text-blue-600 font-medium hover:underline"
              >
                Visit
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 px-6 md:px-20 bg-gray-100">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">CONTACT</h2>
          <p className="text-lg text-gray-700 mb-10">
            Feel free to contact me for any question. For open source projects, please open an issue or pull request on 
            Github. If you want to follow my work, reach me on Twitter. Otherwise, send me an email at 
            <a href="mailto:your.email@example.com" className="text-blue-600 ml-1">
              your.email@example.com
            </a>.
          </p>
          
          <div className="flex justify-center gap-6">
            <a href="https://github.com/yourusername" className="text-gray-700 hover:text-blue-600">
              GITHUB
            </a>
            <a href="https://twitter.com/yourusername" className="text-gray-700 hover:text-blue-600">
              TWITTER
            </a>
            <a href="mailto:your.email@example.com" className="text-gray-700 hover:text-blue-600">
              MAIL
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 md:px-20 border-t border-gray-200 bg-gray-50">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 mb-4 md:mb-0">
            © {new Date().getFullYear()} Rishav Chatterjee. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link href="/privacy" className="text-gray-500 hover:text-gray-700">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-gray-500 hover:text-gray-700">
              Terms of Use
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}

import Link from "next/link";

export default function Contact() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      {/* Hero Section with padding for navbar */}
      <section className="pt-32 pb-20 px-6 md:px-20">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Contact</h1>
          <div className="w-20 h-1 bg-blue-500 mb-10"></div>
          <p className="text-xl text-gray-700 dark:text-gray-300 max-w-3xl">
            Feel free to reach out with any questions or opportunities. I'm always interested in new projects and collaborations.
          </p>
        </div>
      </section>

      {/* Contact Options Section */}
      <section className="py-16 px-6 md:px-20 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <h2 className="text-2xl font-bold mb-6">Send a Message</h2>
              <form className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="w-full px-4 py-3 rounded-md border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="w-full px-4 py-3 rounded-md border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    className="w-full px-4 py-3 rounded-md border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={6}
                    className="w-full px-4 py-3 rounded-md border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                  ></textarea>
                </div>
                
                <div>
                  <button
                    type="submit"
                    className="w-full py-3 px-6 rounded-md bg-blue-600 hover:bg-blue-700 text-white font-medium transition-colors"
                  >
                    Send Message
                  </button>
                </div>
              </form>
            </div>
            
            {/* Contact Info */}
            <div>
              <h2 className="text-2xl font-bold mb-6">Contact Information</h2>
              
              <div className="space-y-8">
                <div>
                  <h3 className="text-lg font-bold mb-2 text-gray-800 dark:text-gray-200">Email</h3>
                  <a 
                    href="mailto:your.email@example.com" 
                    className="text-blue-600 dark:text-blue-400 hover:underline"
                  >
                    your.email@example.com
                  </a>
                </div>
                
                <div>
                  <h3 className="text-lg font-bold mb-2 text-gray-800 dark:text-gray-200">Social Media</h3>
                  <div className="flex space-x-6">
                    <a 
                      href="https://github.com/yourusername" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
                    >
                      GITHUB
                    </a>
                    <a 
                      href="https://twitter.com/yourusername" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
                    >
                      TWITTER
                    </a>
                    <a 
                      href="https://linkedin.com/in/yourusername" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
                    >
                      LINKEDIN
                    </a>
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-bold mb-2 text-gray-800 dark:text-gray-200">Open Source</h3>
                  <p className="text-gray-700 dark:text-gray-300 mb-4">
                    For open source projects, please open an issue or pull request on GitHub.
                  </p>
                  <a 
                    href="https://github.com/yourusername" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-blue-600 dark:text-blue-400 hover:underline"
                  >
                    Visit my GitHub profile →
                  </a>
                </div>
              </div>
              
              {/* Availability note */}
              <div className="mt-12 p-6 bg-blue-50 dark:bg-blue-900/30 rounded-lg">
                <h3 className="text-lg font-bold mb-2 text-gray-800 dark:text-gray-200">Availability</h3>
                <p className="text-gray-700 dark:text-gray-300">
                  I'm currently available for freelance projects, consulting, and speaking engagements.
                  I typically respond to inquiries within 24-48 hours.
                </p>
              </div>
            </div>
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
              <p className="text-gray-700 dark:text-gray-300 mb-6">
                Need a custom interactive graph? Some React or D3 work? Creating beautiful reports with modern tools?
              </p>
              <Link 
                href="/contact?service=consulting" 
                className="text-blue-600 dark:text-blue-400 font-medium hover:underline"
              >
                Learn more →
              </Link>
            </div>
            
            <div className="p-8 bg-white dark:bg-gray-800 rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold mb-4">Teaching & Training</h3>
              <p className="text-gray-700 dark:text-gray-300 mb-6">
                Short talks or multi-day courses on dataviz, React, D3.js, data analytics and more.
              </p>
              <Link 
                href="/contact?service=training" 
                className="text-blue-600 dark:text-blue-400 font-medium hover:underline"
              >
                Learn more →
              </Link>
            </div>
            
            <div className="p-8 bg-white dark:bg-gray-800 rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold mb-4">Talking</h3>
              <p className="text-gray-700 dark:text-gray-300 mb-6">
                Hire me to talk about programming or data visualization. I ❤️ it!
              </p>
              <Link 
                href="/contact?service=speaking" 
                className="text-blue-600 dark:text-blue-400 font-medium hover:underline"
              >
                Learn more →
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
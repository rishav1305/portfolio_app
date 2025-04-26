import Image from 'next/image';
import Link from 'next/link';
import portfolioData from '@/data/portfolioData';

export default function About() {
  const { personalInfo } = portfolioData;
  const yearsOfExperience = portfolioData.getYearsOfExperience();
  
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="relative h-64 bg-gradient-to-r from-blue-600 to-indigo-800">
        <div className="absolute inset-0 opacity-20" style={{ backgroundImage: "url('/images/profile_bg.jpg')", backgroundSize: 'cover', backgroundPosition: 'center' }}></div>
        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2">
          <div className="w-40 h-40 rounded-full border-4 border-white overflow-hidden">
            <Image 
              src="/images/profile.png" 
              alt={personalInfo.name}
              width={160}
              height={160}
              className="object-cover"
            />
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 py-24 max-w-5xl">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">{personalInfo.name}</h1>
          <p className="text-xl text-blue-600">{personalInfo.title}</p>
          <p className="text-lg text-gray-600 mt-2">{personalInfo.location} • {yearsOfExperience}+ Years Experience</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
          {/* About Me */}
          <div className="md:col-span-2">
            <h2 className="text-2xl font-bold mb-6 text-gray-800">About Me</h2>
            <div className="space-y-4">
              {personalInfo.longBio.map((paragraph, index) => (
                <p key={index} className="text-gray-700">
                  {paragraph}
                </p>
              ))}
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h2 className="text-2xl font-bold mb-6 text-gray-800">Connect With Me</h2>
            
            <div className="space-y-6">
              {/* Email Contact */}
              <div className="flex items-start">
                <div className="bg-blue-100 p-3 rounded-full">
                  <svg className="w-5 h-5 text-blue-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
                  </svg>
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-medium text-gray-900">Email</h3>
                  <a href={`mailto:${personalInfo.email}`} className="text-blue-600 hover:underline">
                    {personalInfo.email}
                  </a>
                </div>
              </div>
              
              {/* LinkedIn */}
              <div className="flex items-start">
                <div className="bg-blue-100 p-3 rounded-full">
                  <svg className="w-5 h-5 text-blue-800" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                  </svg>
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-medium text-gray-900">LinkedIn</h3>
                  <a href={personalInfo.socialMedia.linkedin} className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">
                    View Profile
                  </a>
                </div>
              </div>
              
              {/* GitHub */}
              <div className="flex items-start">
                <div className="bg-blue-100 p-3 rounded-full">
                  <svg className="w-5 h-5 text-gray-900" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-medium text-gray-900">GitHub</h3>
                  <a href={personalInfo.socialMedia.github} className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">
                    View Repositories
                  </a>
                </div>
              </div>

              {/* LeetCode */}
              <div className="flex items-start">
                <div className="bg-blue-100 p-3 rounded-full">
                  <svg className="w-5 h-5 text-yellow-600" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                    <path d="M16.102 17.93l-2.697 2.607c-.466.467-1.111.662-1.823.662s-1.357-.195-1.824-.662l-4.332-4.363c-.467-.467-.702-1.15-.702-1.863s.235-1.357.702-1.824l4.319-4.38c.467-.467 1.125-.645 1.837-.645s1.357.195 1.823.662l2.697 2.606c.514.515 1.365.497 1.9-.038.535-.536.553-1.387.039-1.901l-2.609-2.636a5.055 5.055 0 0 0-2.445-1.337l2.467-2.503c.516-.514.498-1.366-.037-1.901-.535-.535-1.387-.552-1.902-.038l-10.1 10.101c-.981.982-1.494 2.337-1.494 3.835 0 1.498.513 2.895 1.494 3.875l4.347 4.361c.981.979 2.337 1.452 3.834 1.452s2.853-.512 3.835-1.494l2.609-2.637c.514-.514.496-1.365-.039-1.9s-1.386-.553-1.899-.039zM20.811 13.01H10.666c-.702 0-1.27.604-1.27 1.346s.568 1.346 1.27 1.346h10.145c.701 0 1.27-.604 1.27-1.346s-.569-1.346-1.27-1.346z" />
                  </svg>
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-medium text-gray-900">LeetCode</h3>
                  <a href={personalInfo.socialMedia.leetcode} className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">
                    View Profile
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Call to action */}
        <div className="text-center space-y-6">
          <h2 className="text-2xl font-bold text-gray-800">Want to learn more?</h2>
          <div className="flex justify-center space-x-4">
            <Link 
              href="/experience" 
              className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            >
              View Experience
            </Link>
            <Link 
              href="/tech-skills" 
              className="px-6 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors"
            >
              View Skills
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
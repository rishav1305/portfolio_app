import React from 'react';
import portfolioData from "@/data/portfolioData";
import Image from 'next/image';
import Breadcrumb from '@/components/ui/Breadcrumb';

export default function TechSkills() {
  const { skills } = portfolioData;
  
  // Function to render stars based on skill level
  const renderStars = (level: number) => {
    const stars: React.ReactNode[] = [];
    const fullStars = Math.floor(level);
    const hasHalfStar = level % 1 >= 0.3 && level % 1 <= 0.7;
    
    // Determine star color based on skill level
    const starColor = level >= 4 ? "text-green-500" : "text-yellow-400";
    
    // Add full stars
    for (let i = 0; i < fullStars; i++) {
      stars.push(
        <svg key={`full-${i}`} className={`w-5 h-5 ${starColor}`} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
        </svg>
      );
    }
    
    // Add half star if needed
    if (hasHalfStar) {
      stars.push(
        <svg key="half" className={`w-5 h-5 ${starColor}`} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id={`half-star-gradient-${level}`} x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="50%" stopColor="currentColor" />
              <stop offset="50%" stopColor="#e5e7eb" />
            </linearGradient>
          </defs>
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" fill={`url(#half-star-gradient-${level})`}></path>
        </svg>
      );
    }
    
    // Add empty stars
    const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);
    for (let i = 0; i < emptyStars; i++) {
      stars.push(
        <svg key={`empty-${i}`} className="w-5 h-5 text-gray-200" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
        </svg>
      );
    }
    
    return stars;
  };

  // Function to get background color based on category
  const getCategoryColor = (category: string) => {
    const colorMap: {[key: string]: string} = {
      'Python': 'bg-blue-50',
      'SQL': 'bg-green-50',
      'ETL Tools': 'bg-yellow-50',
      'Analytical Tools': 'bg-purple-50',
      'Big Data Tools': 'bg-red-50',
      'Cloud Services': 'bg-indigo-50',
      'Data Warehouse': 'bg-pink-50',
      'Project Management': 'bg-orange-50',
      'Soft Skills': 'bg-teal-50'
    };
    
    return colorMap[category] || 'bg-gray-50';
  };

  return (
    <div className="min-h-screen bg-gray-50 pt-24 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="mb-6">
          <Breadcrumb overrides={{ "tech-skills": "Technical Skills" }} />
        </div>
        <h1 className="text-3xl font-bold text-center mb-3 text-gray-800">Technical Skills</h1>
        <p className="text-center text-gray-600 mb-6 max-w-3xl mx-auto">
          A comprehensive breakdown of my technical proficiencies across various domains including programming languages, data tools, cloud platforms, and project management.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {Object.entries(skills).map(([category, skillsList]) => (
            <div key={category} className={`p-4 rounded-lg shadow-lg ${getCategoryColor(category)}`}>
              <h2 className="text-xl font-bold mb-3 border-b pb-1">{category}</h2>
              
              <div className="space-y-2">
                {/* Sort skills by level in descending order */}
                {[...skillsList]
                  .sort((a, b) => b.level - a.level)
                  .map((skill, index) => (
                    <div key={index} className="bg-white p-2 rounded-md shadow-sm flex justify-between items-center">
                      <h3 className={`text-base font-medium ${skill.level >= 4 ? 'text-gray-900' : 'text-gray-700'}`}>
                        {skill.name}
                      </h3>
                      <div className="flex">
                        {renderStars(skill.level)}
                      </div>
                    </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 p-4 bg-white rounded-lg shadow-lg">
          <h2 className="text-2xl font-bold mb-6 text-center">How I Rate My Skills</h2>
          <div className="flex flex-col md:flex-row items-center justify-center gap-8">
            <div className="w-full md:w-1/2">
              <p className="text-gray-700 mb-4">
                I rate my proficiency on a scale of 1-5 stars:
              </p>
              <ul className="list-disc pl-5 space-y-2 text-gray-700">
                <li><span className="font-semibold text-green-600">5 stars</span>: Expert level - I can solve complex problems, mentor others, and have in-depth knowledge</li>
                <li><span className="font-semibold text-green-600">4 stars</span>: Advanced - I'm very comfortable with this tool/language and use it regularly</li>
                <li><span className="font-semibold text-yellow-600">3 stars</span>: Intermediate - I have solid working knowledge and experience</li>
                <li><span className="font-semibold text-yellow-600">2 stars</span>: Basic proficiency - I understand fundamentals and can work with supervision</li>
                <li><span className="font-semibold text-yellow-600">1 star</span>: Beginner - I have limited exposure but understand basic concepts</li>
              </ul>
            </div>
            <div className="w-full md:w-1/2 mt-6 md:mt-0 flex justify-center">
              <div className="relative w-full max-w-md aspect-square">
                <Image 
                  src="/images/Skills Ratings.png"
                  alt="Skills Rating System"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
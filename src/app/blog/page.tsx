import React from 'react';
import { getMediumPosts } from '@/lib/utils/medium-feed';
import { formatDistanceToNow } from 'date-fns';
import MediumPostImage from '@/components/ui/MediumPostImage';
import Breadcrumb from '@/components/ui/Breadcrumb';

// Make the page component async
export default async function BlogPage() {
  // Fetch Medium posts
  const mediumPosts = await getMediumPosts();
  
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      {/* Hero Section with padding for navbar */}
      <section className="pt-32 pb-20 px-6 md:px-20">
        <div className="max-w-6xl mx-auto">
          <div className="mb-6">
            <Breadcrumb overrides={{ blog: 'Blog Posts' }} />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Blog</h1>
          <div className="w-20 h-1 bg-blue-500 mb-10"></div>
        </div>
      </section>

      <section className="px-6 md:px-20 py-16">
        <div className="max-w-6xl mx-auto">
          {mediumPosts.length === 0 ? (
            <div className="text-center py-10">
              <div className="mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 mx-auto text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <p className="text-xl text-gray-600 dark:text-gray-400">
                Unable to load Medium posts at this time.
              </p>
              <p className="mt-2 text-gray-500 dark:text-gray-500">
                Please visit my <a href="https://medium.com/@chatterjeerishav96" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">Medium profile</a> directly.
              </p>
            </div>
          ) : (
            <div className="space-y-8">
              {mediumPosts.map((post, index) => (
                <article 
                  key={post.guid} 
                  className="border rounded-lg shadow-md overflow-hidden dark:border-gray-700 dark:bg-gray-800 bg-white mb-8"
                >
                  <div className="md:flex">
                    <div className="md:w-1/3 relative h-64 md:h-auto">
                      <MediumPostImage
                        src={post.thumbnailUrl || ''}
                        alt={post.title || 'Medium article thumbnail'}
                        priority={index === 0}
                      />
                    </div>
                    <div className="md:w-2/3 p-6">
                      <div className="flex items-center text-sm text-gray-500 dark:text-gray-400 mb-2">
                        <div className="flex items-center">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                          </svg>
                          <span>{new Date(post.isoDate).toLocaleDateString()}</span>
                        </div>
                        {post.categories && post.categories.length > 0 && (
                          <>
                            <span className="mx-2">•</span>
                            <span>{post.categories[0]}</span>
                          </>
                        )}
                        <span className="mx-2">•</span>
                        <span>{formatDistanceToNow(new Date(post.isoDate), { addSuffix: true })}</span>
                      </div>
                      
                      <h2 className="text-2xl font-bold mb-3 text-blue-600 dark:text-blue-400">
                        {post.title}
                      </h2>
                      
                      <p className="text-gray-600 dark:text-gray-300 mb-4">
                        {post.cleanSnippet}
                      </p>
                      
                      {/* Article Stats Section */}
                      <div className="flex flex-wrap gap-4 mt-2 mb-4">
                        <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                          </svg>
                          <span>{post.viewCount?.toLocaleString()} views</span>
                        </div>
                        
                        <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                          </svg>
                          <span>{post.readCount?.toLocaleString()} reads</span>
                        </div>
                        
                        <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                          <span>{post.readingTime} min read</span>
                        </div>
                      </div>
                      
                      <div className="flex items-center justify-between mt-6">
                        <div className="flex items-center">
                          <div className="h-8 w-8 rounded-full bg-gray-300 dark:bg-gray-600 flex items-center justify-center text-sm font-bold text-gray-700 dark:text-gray-300">R</div>
                          <span className="ml-2 text-sm text-gray-600 dark:text-gray-400">@chatterjeerishav96</span>
                        </div>
                        <a 
                          href={post.link} 
                          target="_blank" 
                          rel="noopener noreferrer" 
                          className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition"
                        >
                          Read on Medium
                        </a>
                      </div>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          )}
          
          {mediumPosts.length === 0 && (
            <div className="space-y-10 mt-8">
              <h2 className="text-2xl font-semibold mb-6">Sample Posts</h2>
              {/* Sample blog cards with consistent structure */}
              {[1, 2, 3].map((item) => (
                <article key={item} className="border rounded-lg shadow-md overflow-hidden dark:border-gray-700 dark:bg-gray-800 bg-white mb-8">
                  <div className="md:flex">
                    <div className="md:w-1/3 relative h-64 md:h-auto">
                      <div className="w-full h-full bg-gray-200 dark:bg-gray-700 flex items-center justify-center">
                        <div className="text-center p-4">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 mx-auto text-gray-400 dark:text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                          </svg>
                          <p className="mt-2">Sample Post {item}</p>
                        </div>
                      </div>
                    </div>
                    <div className="md:w-2/3 p-6">
                      <div className="flex items-center text-sm text-gray-500 dark:text-gray-400 mb-2">
                        <div className="flex items-center">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                          </svg>
                          <span>April 21, 2025</span>
                        </div>
                        <span className="mx-2">•</span>
                        <span>Technology</span>
                        <span className="mx-2">•</span>
                        <span>5 min read</span>
                      </div>
                      <h2 className="text-2xl font-bold mb-3 text-blue-600 dark:text-blue-400">
                        Sample Blog Post {item}
                      </h2>
                      <p className="text-gray-600 dark:text-gray-300 mb-4">
                        This is a placeholder for blog post content. Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                        Vivamus lacinia eros eget justo vehicula, in finibus purus feugiat.
                      </p>
                      
                      <div className="flex items-center justify-between mt-6">
                        <div className="flex items-center">
                          <div className="h-8 w-8 rounded-full bg-gray-300 dark:bg-gray-600 flex items-center justify-center text-sm font-bold text-gray-700 dark:text-gray-300">R</div>
                          <span className="ml-2 text-sm text-gray-600 dark:text-gray-400">Rishav Chatterjee</span>
                        </div>
                        <a 
                          href="#" 
                          className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition"
                        >
                          Read More
                        </a>
                      </div>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          )}
          
          {mediumPosts.length > 5 && (
            <div className="flex justify-center mt-12">
              <nav className="inline-flex">
                <a href="#" className="px-4 py-2 text-gray-700 dark:text-gray-300 border border-gray-300 dark:border-gray-700 rounded-l-md">
                  Previous
                </a>
                <a href="#" className="px-4 py-2 text-white bg-blue-600 border border-blue-600">
                  1
                </a>
                <a href="#" className="px-4 py-2 text-gray-700 dark:text-gray-300 border border-gray-300 dark:border-gray-700">
                  2
                </a>
                <a href="#" className="px-4 py-2 text-gray-700 dark:text-gray-300 border border-gray-300 dark:border-gray-700 rounded-r-md">
                  Next
                </a>
              </nav>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
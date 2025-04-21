import React from 'react';

export default function BlogPage() {
  return (
    <main className="container mx-auto px-4 py-24 min-h-screen">
      <h1 className="text-4xl font-bold mb-8">Blog</h1>
      
      <div className="space-y-10">
        {/* Placeholder blog posts */}
        {[1, 2, 3, 4, 5].map((item) => (
          <article key={item} className="border-b border-gray-200 dark:border-gray-800 pb-8 mb-8 last:border-b-0">
            <h2 className="text-3xl font-semibold mb-3 hover:text-blue-600 dark:hover:text-blue-400">
              <a href="#">Sample Blog Post {item}</a>
            </h2>
            <div className="flex items-center text-gray-500 dark:text-gray-400 mb-4 text-sm">
              <time dateTime="2025-04-21">April 21, 2025</time>
              <span className="mx-2">•</span>
              <span>5 min read</span>
              <span className="mx-2">•</span>
              <a href="#" className="hover:text-blue-600 dark:hover:text-blue-400">Technology</a>
            </div>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              This is a placeholder for blog post content. Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
              Vivamus lacinia eros eget justo vehicula, in finibus purus feugiat. Nullam consectetur malesuada quam, 
              sit amet imperdiet nulla tempor sed.
            </p>
            <a href="#" className="text-blue-600 dark:text-blue-400 hover:underline">Read More →</a>
          </article>
        ))}
      </div>
      
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
    </main>
  );
}
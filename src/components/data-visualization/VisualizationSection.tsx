"use client";

import dynamic from "next/dynamic";
import Link from "next/link";

// Dynamic imports for visualization components
const DataChart = dynamic(() => import("./DataChart"), { ssr: false });
const DataFlow3D = dynamic(() => import("./DataFlow3D"), { ssr: false });

export default function VisualizationSection() {
  return (
    <div className="space-y-12">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 w-full">
        <div className="p-8 bg-white dark:bg-gray-800 rounded-xl shadow-lg transform hover:scale-105 transition-transform duration-300">
          <h2 className="text-2xl font-bold mb-6">Skills Breakdown</h2>
          <p className="text-gray-600 dark:text-gray-300 mb-6">
            Interactive visualization of my technical skills and their distribution across different domains.
          </p>
          <div className="h-64">
            <DataChart />
          </div>
          <div className="mt-6">
            <Link 
              href="/projects/data-visualization" 
              className="text-blue-600 dark:text-blue-400 font-medium hover:underline"
            >
              See more examples →
            </Link>
          </div>
        </div>
        <div className="p-8 bg-white dark:bg-gray-800 rounded-xl shadow-lg transform hover:scale-105 transition-transform duration-300">
          <h2 className="text-2xl font-bold mb-6">Data Pipeline Architecture</h2>
          <p className="text-gray-600 dark:text-gray-300 mb-6">
            3D visualization of my approach to building robust and scalable data pipelines.
          </p>
          <div className="h-64">
            <DataFlow3D />
          </div>
          <div className="mt-6">
            <Link 
              href="/projects/data-engineering" 
              className="text-blue-600 dark:text-blue-400 font-medium hover:underline"
            >
              Learn about my process →
            </Link>
          </div>
        </div>
      </div>

      <div className="text-center">
        <h3 className="text-2xl font-bold mb-6">Technologies I Excel In</h3>
        <div className="flex flex-wrap justify-center gap-4">
          {['React', 'D3.js', 'Three.js', 'TypeScript', 'Python', 'TensorFlow', 'AWS', 'Docker'].map((tech) => (
            <span 
              key={tech} 
              className="px-4 py-2 bg-white dark:bg-gray-800 rounded-full shadow-md text-gray-800 dark:text-gray-200 font-medium"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
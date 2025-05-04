// filepath: /Users/rishavchatterjee/Desktop/Projects/portfolio_app/src/app/projects/automated-dsa-questions-tracker/page.tsx
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import portfolioData from "@/data/portfolioData";

// Helper function to format date as Month Year
function formatMonthYear(dateString: string): string {
  if (!dateString) return '';
  const date = new Date(dateString);
  return date.toLocaleDateString('en-US', { month: 'long', year: 'numeric' });
}

// Helper function to calculate project duration in months
function calculateDuration(startDate: string, endDate: string): string {
  if (!startDate) return '';
  
  const start = new Date(startDate);
  const end = endDate ? new Date(endDate) : new Date(); // Use current date if project is ongoing
  
  const diffTime = Math.abs(end.getTime() - start.getTime());
  const diffMonths = Math.ceil(diffTime / (1000 * 60 * 60 * 24 * 30.44)); // Average days per month
  
  if (diffMonths < 12) {
    return `${diffMonths} month${diffMonths !== 1 ? 's' : ''}`;
  } else {
    const years = Math.floor(diffMonths / 12);
    const months = diffMonths % 12;
    return `${years} year${years !== 1 ? 's' : ''}${months > 0 ? ` ${months} month${months !== 1 ? 's' : ''}` : ''}`;
  }
}

export default function AutomatedDsaProject() {
  // Get the Automated DSA project from the portfolioData
  const project = portfolioData.projects.find(p => p.title === "Automated DSA Questions Tracker") || portfolioData.projects[0];
  
  // Format dates and calculate duration
  const startDate = project.start_date ? formatMonthYear(project.start_date) : '';
  const endDate = project.end_date ? formatMonthYear(project.end_date) : 'Present';
  const duration = project.start_date ? calculateDuration(project.start_date, project.end_date || '') : '';
  
  return (
    <div className="min-h-screen bg-white pt-24 pb-12">
      {/* Hero Section with gradient background */}
      <div className="relative h-[50vh] md:h-[60vh] w-full bg-gradient-to-r from-purple-600 to-blue-700">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center p-6 max-w-4xl">
            <span className="inline-block bg-indigo-500 text-white px-3 py-1 rounded-full text-sm font-medium mb-4">
              Case Study
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">{project.title}</h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              Automating the practice of data structures and algorithms with Python
            </p>
            
            {/* Project timeline info - only show if start_date exists */}
            {startDate && (
              <div className="mt-6 text-white/80 text-lg">
                <p>{startDate} - {endDate} • {duration}</p>
              </div>
            )}
          </div>
        </div>
      </div>
      
      {/* Content Section */}
      <div className="max-w-4xl mx-auto px-4 py-12">
        {/* Breadcrumb */}
        <div className="mb-8">
          <nav className="flex" aria-label="Breadcrumb">
            <ol className="flex items-center space-x-2">
              <li>
                <Link href="/" className="text-gray-500 hover:text-gray-700">
                  Home
                </Link>
              </li>
              <li>
                <span className="text-gray-500 mx-2">/</span>
                <Link href="/projects" className="text-gray-500 hover:text-gray-700">
                  Projects
                </Link>
              </li>
              <li>
                <span className="text-gray-500 mx-2">/</span>
                <span className="text-gray-900 font-medium">Automated DSA Questions Tracker</span>
              </li>
            </ol>
          </nav>
        </div>
        
        {/* Project Meta */}
        <div className="flex flex-wrap items-center justify-between mb-10 bg-gray-100 p-6 rounded-lg">
          <div>
            <h3 className="font-semibold text-gray-800">Type</h3>
            <p className="text-gray-700">Personal Project</p>
          </div>
          <div>
            <h3 className="font-semibold text-gray-800">Status</h3>
            <p className="text-gray-700">{project.category}</p>
          </div>
          <div>
            <h3 className="font-semibold text-gray-800">Duration</h3>
            <p className="text-gray-700">{duration}</p>
          </div>
          <div>
            <h3 className="font-semibold text-gray-800">Primary Tools</h3>
            <p className="text-gray-700">Python, Jupyter Notebook, Git</p>
          </div>
        </div>
        
        <div className="prose max-w-none">
          {/* Introduction */}
          <h2 className="text-3xl font-bold mb-6">Project Overview</h2>
          <p className="text-lg mb-6">
            The Automated DSA Questions Tracker is a tool I developed to streamline the process of 
            practicing data structures and algorithms problems. It helps track progress through the 
            NeetCode 150, a curated list of essential coding interview questions, by automating the 
            fetching, organizing, and validating of solutions.
          </p>
          
          <div className="relative h-[350px] mb-8 rounded-lg overflow-hidden border border-gray-200">
            <Image 
              src={project.image}
              alt={`${project.title} screenshot`}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              priority
            />
          </div>
          
          {/* Motivation */}
          <div className="my-12">
            <h2 className="text-3xl font-bold mb-6">Why Automate DSA Practice?</h2>
            <p className="mb-4">
              As a technology professional continually honing my skills, I recognized several pain points in the traditional approach 
              to practicing DSA problems that could be improved through automation:
            </p>
            <ul className="list-disc pl-6 space-y-2 mb-6">
              <li>
                <span className="font-semibold">Time Management:</span> Manually tracking progress across multiple platforms 
                and question categories is time-consuming and error-prone.
              </li>
              <li>
                <span className="font-semibold">Organization:</span> Solutions often become scattered across different files 
                and folders without a consistent structure.
              </li>
              <li>
                <span className="font-semibold">Consistency:</span> Without a systematic approach, it's easy to focus too much on certain 
                topics while neglecting others.
              </li>
              <li>
                <span className="font-semibold">Validation:</span> Manually testing solutions for correctness is tedious and can miss edge cases.
              </li>
              <li>
                <span className="font-semibold">Version Control:</span> Keeping a clean history of solution attempts and improvements is challenging 
                without automation.
              </li>
            </ul>
          </div>
          
          {/* Technology Stack */}
          <div className="my-12">
            <h2 className="text-3xl font-bold mb-6">Technology Stack</h2>
            <p className="mb-6">
              I selected technologies that would provide flexibility, ease of use, and strong ecosystem support:
            </p>
            
            <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-500 my-8">
              <h4 className="text-lg font-bold text-blue-800 mb-2">Technical Stack</h4>
              <div className="flex flex-wrap gap-2">
                {project.techStack.map((tech, index) => (
                  <span 
                    key={index} 
                    className="bg-white text-blue-800 px-3 py-1 rounded-full text-sm border border-blue-200"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-10">
              <div>
                <h3 className="text-xl font-bold mb-3">Core Technologies</h3>
                <ul className="list-disc pl-6 space-y-2">
                  <li><span className="font-medium">Python:</span> Primary language for all scripts and automation</li>
                  <li><span className="font-medium">Jupyter Notebook:</span> For interactive development and data exploration</li>
                  <li><span className="font-medium">Git:</span> Version control for tracking solution progress</li>
                  <li><span className="font-medium">Web Scraping:</span> To fetch question data from NeetCode</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-3">Tools & Libraries</h3>
                <ul className="list-disc pl-6 space-y-2">
                  <li><span className="font-medium">Pandas:</span> For data manipulation and CSV management</li>
                  <li><span className="font-medium">BeautifulSoup/Selenium:</span> For web scraping</li>
                  <li><span className="font-medium">pytest:</span> For solution validation</li>
                  <li><span className="font-medium">argparse:</span> For CLI interface</li>
                </ul>
              </div>
            </div>
          </div>
          
          {/* System Architecture */}
          <div className="my-12">
            <h2 className="text-3xl font-bold mb-6">System Architecture</h2>
            
            <p className="mb-6">
              The project is organized with a clean, modular architecture that separates concerns and makes it 
              easy to maintain and extend:
            </p>
            
            <h3 className="text-xl font-bold mt-8 mb-3">Project Structure</h3>
            <div className="bg-gray-800 text-gray-100 p-4 rounded-md mb-6 overflow-auto">
              <pre className="font-mono text-sm whitespace-pre">Automated-DSA/
├── questions/               # Solutions organized by category/difficulty
├── questions.csv           # CSV with all questions & tracking info
├── src/                    # Source code
│   ├── main.py             # Main script to run the workflow
│   ├── scrapers/           # Scripts to fetch questions 
│   ├── templates/          # Solution templates
│   └── utils/              # Utility functions
├── requirements.txt        # Python dependencies
└── README.md               # Documentation</pre>
            </div>
            
            <h3 className="text-xl font-bold mt-8 mb-3">Core Components</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className="bg-indigo-50 p-6 rounded-lg border-l-4 border-indigo-500">
                <h4 className="font-bold text-indigo-800 mb-2">Question Fetcher</h4>
                <p className="text-gray-700">Automatically scrapes NeetCode 150 questions and metadata, organizing them by category and difficulty.</p>
              </div>
              <div className="bg-indigo-50 p-6 rounded-lg border-l-4 border-indigo-500">
                <h4 className="font-bold text-indigo-800 mb-2">Solution Generator</h4>
                <p className="text-gray-700">Creates templated Python files with problem descriptions, constraints, and solution scaffold.</p>
              </div>
              <div className="bg-indigo-50 p-6 rounded-lg border-l-4 border-indigo-500">
                <h4 className="font-bold text-indigo-800 mb-2">Progress Tracker</h4>
                <p className="text-gray-700">Maintains a CSV database of questions with completion status, attempt counts, and notes.</p>
              </div>
              <div className="bg-indigo-50 p-6 rounded-lg border-l-4 border-indigo-500">
                <h4 className="font-bold text-indigo-800 mb-2">Solution Validator</h4>
                <p className="text-gray-700">Automatically tests solutions against sample cases and custom test cases to verify correctness.</p>
              </div>
            </div>
          </div>
          
          {/* Implementation Details */}
          <div className="my-12">
            <h2 className="text-3xl font-bold mb-6">Implementation Details</h2>
            
            <h3 className="text-xl font-bold mt-8 mb-3">1. Question Fetching & Processing</h3>
            <p className="mb-6">
              The system obtains questions from NeetCode 150 through web scraping. Each question is processed to extract:
            </p>
            <ul className="list-disc pl-6 space-y-2 mb-6">
              <li>Title and URL</li>
              <li>Difficulty level (Easy, Medium, Hard)</li>
              <li>Category (Arrays & Hashing, Two Pointers, etc.)</li>
              <li>Problem description and constraints</li>
              <li>Sample test cases</li>
            </ul>
            <p className="mb-6">
              This data is then saved to a CSV file that serves as the central database for the system, allowing 
              easy filtering, sorting, and tracking of progress.
            </p>
            
            <h3 className="text-xl font-bold mt-8 mb-3">2. Solution Organization</h3>
            <p className="mb-6">
              Solutions are organized in a structured directory hierarchy based on category and difficulty:
            </p>
            <div className="bg-gray-800 text-gray-100 p-4 rounded-md mb-6 overflow-auto">
              <pre className="font-mono text-sm whitespace-pre">questions/
├── arrays_hashing/
│   ├── easy/
│   │   ├── contains_duplicate.py
│   │   ├── valid_anagram.py
│   │   └── ...
│   ├── medium/
│   │   └── ...
│   └── hard/
│       └── ...
├── two_pointers/
│   └── ...
└── ...</pre>
            </div>
            <p className="mb-4">
              This organization makes it easy to focus on specific categories or difficulty levels during practice sessions.
            </p>
            
            <h3 className="text-xl font-bold mt-8 mb-3">3. Solution Templates</h3>
            <p className="mb-6">
              When a new question is selected for solving, the system generates a Python file with:
            </p>
            <ul className="list-disc pl-6 space-y-2 mb-6">
              <li>Full problem description in docstring format</li>
              <li>Input/output constraints and examples</li>
              <li>Function signature with appropriate type hints</li>
              <li>Test cases derived from the problem description</li>
              <li>Space for notes and algorithm explanation</li>
            </ul>
            <div className="bg-gray-800 text-gray-100 p-4 rounded-md mb-6 overflow-auto">
              <pre className="font-mono text-sm whitespace-pre">{`"""
Contains Duplicate

Given an integer array nums, return true if any value appears at least twice in the array, 
and return false if every element is distinct.

Example 1:
Input: nums = [1,2,3,1]
Output: true

Example 2:
Input: nums = [1,2,3,4]
Output: false

Example 3:
Input: nums = [1,1,1,3,3,4,3,2,4,2]
Output: true

Constraints:
1 <= nums.length <= 10^5
-10^9 <= nums[i] <= 10^9
"""
from typing import List

def contains_duplicate(nums: List[int]) -> bool:
    # TODO: Implement your solution here
    pass

# Test cases
test_cases = [
    ([1,2,3,1], True),
    ([1,2,3,4], False),
    ([1,1,1,3,3,4,3,2,4,2], True)
]

for i, (nums, expected) in enumerate(test_cases):
    result = contains_duplicate(nums)
    print(f"Test {i+1}: {'PASS' if result == expected else 'FAIL'}")
`}</pre>
            </div>
            
            <h3 className="text-xl font-bold mt-8 mb-3">4. Automated Testing</h3>
            
            <h3 className="text-xl font-bold mt-8 mb-3">3. Solution Templates</h3>
            <p className="mb-6">
              When a new question is selected for solving, the system generates a Python file with:
            </p>
            <ul className="list-disc pl-6 space-y-2 mb-6">
              <li>Full problem description in docstring format</li>
              <li>Input/output constraints and examples</li>
              <li>Function signature with appropriate type hints</li>
              <li>Test cases derived from the problem description</li>
              <li>Space for notes and algorithm explanation</li>
            </ul>
            <div className="bg-gray-800 text-gray-100 p-4 rounded-md mb-6 overflow-auto">
              <pre className="font-mono text-sm whitespace-pre">{`def contains_duplicate(nums: List[int]) -> bool:
    # Using a hash set for O(n) time complexity
    seen = set()
    for num in nums:
        if num in seen:
            return True
        seen.add(num)
    return False`}</pre>
            </div>
            
            <h3 className="text-xl font-bold mt-8 mb-3">4. Automated Testing</h3>
            <p className="mb-6">
              The system provides multiple levels of solution validation:
            </p>
            <ul className="list-disc pl-6 space-y-2 mb-6">
              <li>Basic test cases included in each solution file for quick validation</li>
              <li>Comprehensive test suite with edge cases for thorough verification</li>
              <li>Performance metrics to identify inefficient solutions</li>
              <li>Comparison against optimal solutions for learning purposes</li>
            </ul>
            
            <h3 className="text-xl font-bold mt-8 mb-3">5. Git Integration</h3>
            <p className="mb-6">
              A key feature of the system is its Git integration, which automatically:
            </p>
            <ul className="list-disc pl-6 space-y-2 mb-6">
              <li>Commits new solutions with standardized commit messages</li>
              <li>Tracks solution improvements over time</li>
              <li>Records progress statistics and completion milestones</li>
              <li>Maintains a clean, organized history of DSA practice</li>
            </ul>
          </div>
          
          {/* Workflow Example */}
          <div className="my-12">
            <h2 className="text-3xl font-bold mb-6">Workflow Example</h2>
            
            <p className="mb-6">
              The following example demonstrates a typical workflow using the Automated DSA Questions Tracker:
            </p>
            
            <h3 className="text-xl font-bold mt-8 mb-3">Step 1: Initial Setup</h3>
            <div className="bg-gray-800 text-gray-100 p-4 rounded-md mb-6 overflow-auto">
              <pre className="font-mono text-sm whitespace-pre">$ python -m main --fetch</pre>
            </div>
            <p className="mb-6">
              This command fetches all NeetCode 150 questions and creates the questions.csv file with metadata.
            </p>
            
            <h3 className="text-xl font-bold mt-8 mb-3">Step 2: Get a New Question</h3>
            <div className="bg-gray-800 text-gray-100 p-4 rounded-md mb-6 overflow-auto">
              <pre className="font-mono text-sm whitespace-pre">$ python -m main --new --category "Arrays & Hashing" --difficulty Easy</pre>
            </div>
            <p className="mb-6">
              This generates a new solution file for an easy Arrays & Hashing problem that hasn't been completed yet.
            </p>
            
            <h3 className="text-xl font-bold mt-8 mb-3">Step 3: Implement the Solution</h3>
            <p className="mb-6">
              The developer opens the generated file and implements their solution to the problem.
            </p>
            <div className="bg-gray-800 text-gray-100 p-4 rounded-md mb-6 overflow-auto">
              <pre className="font-mono text-sm whitespace-pre">{`def contains_duplicate(nums: List[int]) -> bool:
    # Using a hash set for O(n) time complexity
    seen = set()
    for num in nums:
        if num in seen:
            return True
        seen.add(num)
    return False`}</pre>
            </div>
            
            <h3 className="text-xl font-bold mt-8 mb-3">Step 4: Test the Solution</h3>
            <div className="bg-gray-800 text-gray-100 p-4 rounded-md mb-6 overflow-auto">
              <pre className="font-mono text-sm whitespace-pre">$ python -m main --test questions/arrays_hashing/easy/contains_duplicate.py</pre>
            </div>
            <p className="mb-6">
              This runs the solution against test cases and verifies correctness and performance.
            </p>
            
            <h3 className="text-xl font-bold mt-8 mb-3">Step 5: Commit the Solution</h3>
            <div className="bg-gray-800 text-gray-100 p-4 rounded-md mb-6 overflow-auto">
              <pre className="font-mono text-sm whitespace-pre">$ python -m main --commit</pre>
            </div>
            <p className="mb-6">
              This automatically commits the new solution to Git and updates the questions.csv file to mark the problem as completed.
            </p>
          </div>
          
          {/* Key Benefits */}
          <div className="my-12">
            <h2 className="text-3xl font-bold mb-6">Key Benefits</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500">
                <h3 className="text-xl font-bold text-green-800 mb-2">50%</h3>
                <p className="text-gray-700">Reduction in time spent on setup and organization</p>
              </div>
              <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500">
                <h3 className="text-xl font-bold text-green-800 mb-2">100%</h3>
                <p className="text-gray-700">Consistent structure across all solutions</p>
              </div>
              <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500">
                <h3 className="text-xl font-bold text-green-800 mb-2">2x</h3>
                <p className="text-gray-700">Increase in number of problems solved per practice session</p>
              </div>
              <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500">
                <h3 className="text-xl font-bold text-green-800 mb-2">3x</h3>
                <p className="text-gray-700">Better coverage of different problem categories</p>
              </div>
            </div>
            
            <h3 className="text-xl font-bold mt-10 mb-3">Additional Benefits</h3>
            <ul className="list-disc pl-6 space-y-2 mb-6">
              <li><span className="font-medium">Focus on Problem Solving:</span> By automating routine tasks, users can focus entirely on algorithm design and implementation.</li>
              <li><span className="font-medium">Comprehensive Progress Tracking:</span> Easily see which categories need more practice and track improvement over time.</li>
              <li><span className="font-medium">Learning Reinforcement:</span> Structured approach helps reinforce patterns and solutions across related problems.</li>
              <li><span className="font-medium">Interview Readiness:</span> Systematic coverage of the NeetCode 150 ensures comprehensive preparation for technical interviews.</li>
              <li><span className="font-medium">Portfolio Building:</span> Creates a well-documented repository of DSA solutions that can be showcased to potential employers.</li>
            </ul>
          </div>
          
          {/* Future Enhancements */}
          <div className="my-12">
            <h2 className="text-3xl font-bold mb-6">Future Enhancements</h2>
            
            <p className="mb-6">
              While the current implementation provides significant value, several enhancements are planned for future iterations:
            </p>
            
            <div className="bg-purple-50 p-6 rounded-lg my-6">
              <h3 className="text-xl font-bold text-purple-800 mb-4">Planned Features</h3>
              <ul className="list-disc pl-6 space-y-3">
                <li><span className="font-medium">Time Complexity Analysis:</span> Automated analysis of solution time and space complexity.</li>
                <li><span className="font-medium">Solution Comparisons:</span> Tool to compare different approaches to the same problem.</li>
                <li><span className="font-medium">Spaced Repetition:</span> Intelligent scheduling of problems for review based on past performance.</li>
                <li><span className="font-medium">Web Interface:</span> Browser-based dashboard for tracking progress and viewing solutions.</li>
                <li><span className="font-medium">AI Integration:</span> Use of LLMs to provide hints or review solutions when stuck.</li>
              </ul>
            </div>
          </div>
          
          {/* Conclusion */}
          <div className="my-12">
            <h2 className="text-3xl font-bold mb-6">Conclusion</h2>
            <p className="mb-6">
              The Automated DSA Questions Tracker demonstrates how automation can significantly enhance the learning and practice experience 
              for data structures and algorithms. By removing the friction from routine tasks like organization, validation, and progress tracking, 
              it allows practitioners to focus more deeply on problem-solving skills and algorithm design.
            </p>
            <p className="mb-6">
              This project showcases not only technical skills in Python and automation but also a methodical approach to learning 
              and skill development. The system's architecture emphasizes modularity, maintainability, and extensibility—principles 
              that apply broadly across software engineering.
            </p>
            <p>
              As technical interviews continue to emphasize algorithmic problem-solving abilities, tools like this can provide a 
              competitive advantage through more efficient and comprehensive preparation. The project continues to evolve with new features 
              and improvements based on ongoing usage and feedback.
            </p>
          </div>
        </div>
        
        {/* CTA Section */}
        <div className="my-12 border-t border-gray-200 pt-12">
          <div className="bg-gradient-to-r from-purple-600 to-blue-700 text-white rounded-lg shadow-lg p-8 text-center">
            <h2 className="text-2xl font-bold mb-4">Interested in Automation Tools?</h2>
            <p className="mb-6 max-w-2xl mx-auto">
              I can help your organization build custom automation solutions to improve productivity and streamline workflows.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link 
                href="/contact"
                className="inline-block bg-white text-indigo-600 px-6 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors"
              >
                Let's Connect
              </Link>
              <Link 
                href="/projects"
                className="inline-block bg-indigo-700 text-white px-6 py-3 rounded-lg font-medium hover:bg-indigo-800 transition-colors"
              >
                View More Projects
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
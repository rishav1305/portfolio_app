import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const MOCK_POSTS = [
    {
        title: "How Agentic AI is Reshaping Data Engineering",
        excerpt: "Moving beyond traditional ETL pipelines to autonomous data systems that self-heal and optimize.",
        date: "Jan 5, 2026",
        readTime: "5 min read",
        link: "https://medium.com/@chatterjeerishav96", // Generic link since we don't have specifics
        image: "/images/blog-ai-agent.jpg" // Placeholder or use gradient
    },
    {
        title: "From RAG to Agentic RAG: A Practical Guide",
        excerpt: "Why simple Retrieval Augmented Generation isn't enough for enterprise workflows, and how agents bridge the gap.",
        date: "Dec 12, 2025",
        readTime: "8 min read",
        link: "https://medium.com/@chatterjeerishav96",
        image: "/images/blog-rag.jpg"
    },
    {
        title: "Optimizing Snowflake Costs at Scale",
        excerpt: "Strategies for managing compute credits in high-volume ephemeral workloads.",
        date: "Nov 28, 2025",
        readTime: "6 min read",
        link: "https://medium.com/@chatterjeerishav96",
        image: "/images/blog-snowflake.jpg"
    }
];

const BlogPreview = () => {
    return (
        <section className="py-20 px-6 md:px-20 bg-white" id="blog-section">
            <div className="max-w-6xl mx-auto">
                <div className="flex flex-col md:flex-row justify-between items-end mb-12">
                    <div>
                        <h2 className="text-3xl font-bold mb-4 text-gray-800 inline-block relative after:content-[''] after:absolute after:bottom-[-10px] after:left-0 after:w-16 after:h-1 after:bg-blue-600 after:rounded-full">
                            Latest Insights
                        </h2>
                        <p className="text-lg text-gray-600 mt-6 max-w-2xl">
                            Thoughts on Agentic AI, Data Architecture, and the future of work.
                        </p>
                    </div>
                    <Link
                        href="https://medium.com/@chatterjeerishav96"
                        target="_blank"
                        className="hidden md:inline-flex items-center text-blue-600 font-semibold hover:text-blue-700 transition-colors"
                    >
                        Read more on Medium
                        <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                        </svg>
                    </Link>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {MOCK_POSTS.map((post, idx) => (
                        <a
                            key={idx}
                            href={post.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group block bg-gray-50 rounded-xl overflow-hidden hover:shadow-lg transition-all duration-300 border border-gray-100"
                        >
                            <div className="h-48 bg-gradient-to-br from-slate-200 to-slate-300 relative overflow-hidden">
                                {/* Fallback gradient if no image */}
                                <div className={`absolute inset-0 bg-gradient-to-br ${idx === 0 ? 'from-blue-100 to-indigo-100' :
                                        idx === 1 ? 'from-purple-100 to-pink-100' :
                                            'from-teal-100 to-green-100'
                                    } opacity-50`} />
                                <div className="absolute inset-0 flex items-center justify-center text-gray-400 font-bold text-3xl opacity-20 group-hover:scale-110 transition-transform duration-500">
                                    {idx === 0 ? 'AI' : idx === 1 ? 'RAG' : 'DATA'}
                                </div>
                            </div>
                            <div className="p-6">
                                <div className="flex items-center text-sm text-gray-500 mb-3 space-x-4">
                                    <span>{post.date}</span>
                                    <span className="w-1 h-1 bg-gray-300 rounded-full"></span>
                                    <span>{post.readTime}</span>
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors line-clamp-2">
                                    {post.title}
                                </h3>
                                <p className="text-gray-600 text-sm line-clamp-3 mb-4">
                                    {post.excerpt}
                                </p>
                                <div className="text-blue-600 font-medium text-sm flex items-center">
                                    Read Article
                                    <svg className="w-4 h-4 ml-1 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                    </svg>
                                </div>
                            </div>
                        </a>
                    ))}
                </div>

                <div className="mt-8 text-center md:hidden">
                    <Link
                        href="https://medium.com/@chatterjeerishav96"
                        target="_blank"
                        className="inline-flex items-center text-blue-600 font-semibold hover:text-blue-700 transition-colors"
                    >
                        Read more on Medium
                        <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                        </svg>
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default BlogPreview;

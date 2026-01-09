'use client';

import React from 'react';
import Link from 'next/link';

const MOCK_POSTS = [
    {
        title: "How Agentic AI is Reshaping Data Engineering",
        excerpt: "Moving beyond traditional ETL pipelines to autonomous data systems that self-heal and optimize.",
        date: "Jan 5, 2026",
        readTime: "5 min read",
        link: "https://medium.com/@chatterjeerishav96",
        category: "AI"
    },
    {
        title: "From RAG to Agentic RAG: A Practical Guide",
        excerpt: "Why simple Retrieval Augmented Generation isn't enough for enterprise workflows, and how agents bridge the gap.",
        date: "Dec 12, 2025",
        readTime: "8 min read",
        link: "https://medium.com/@chatterjeerishav96",
        category: "RAG"
    },
    {
        title: "Optimizing Snowflake Costs at Scale",
        excerpt: "Strategies for managing compute credits in high-volume ephemeral workloads.",
        date: "Nov 28, 2025",
        readTime: "6 min read",
        link: "https://medium.com/@chatterjeerishav96",
        category: "DATA"
    }
];

const IOSBlogPreview = () => {
    return (
        <section className="py-20 relative px-4">
            <div className="flex flex-col md:flex-row justify-between items-end mb-12">
                <div>
                    <h2 className="text-3xl font-bold mb-4 text-white inline-block relative">
                        Latest Insights
                    </h2>
                    <p className="text-lg text-gray-400 mt-2 max-w-2xl font-light">
                        Thoughts on Agentic AI, Data Architecture, and the future of work.
                    </p>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {MOCK_POSTS.map((post, idx) => (
                    <a
                        key={idx}
                        href={post.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group block bg-white/5 backdrop-blur-md rounded-3xl overflow-hidden hover:bg-white/10 transition-all duration-300 border border-white/10 relative"
                    >
                        <div className="h-48 bg-gradient-to-br from-blue-900/40 to-purple-900/40 relative overflow-hidden flex items-center justify-center">
                            <div className={`absolute inset-0 bg-black/20`} />
                            {/* Simple text based cover since we don't have images handy in this context */}
                            <div className="font-black text-6xl text-white/5 uppercase tracking-tighter group-hover:scale-110 transition-transform duration-500">
                                {post.category}
                            </div>
                            <div className="absolute top-4 left-4">
                                <span className="px-3 py-1 bg-white/10 backdrop-blur-md rounded-full text-[10px] font-bold text-white border border-white/20">
                                    {post.category}
                                </span>
                            </div>
                        </div>

                        <div className="p-6">
                            <div className="flex items-center text-xs text-gray-500 mb-3 space-x-4 font-bold uppercase tracking-wider">
                                <span>{post.date}</span>
                                <span className="w-1 h-1 bg-gray-600 rounded-full"></span>
                                <span>{post.readTime}</span>
                            </div>
                            <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors line-clamp-2">
                                {post.title}
                            </h3>
                            <p className="text-gray-400 text-sm line-clamp-3 mb-4 font-light leading-relaxed">
                                {post.excerpt}
                            </p>
                            <div className="text-blue-400 font-medium text-sm flex items-center">
                                Read Article
                                <svg className="w-4 h-4 ml-1 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                </svg>
                            </div>
                        </div>
                    </a>
                ))}
            </div>
        </section>
    );
};

export default IOSBlogPreview;

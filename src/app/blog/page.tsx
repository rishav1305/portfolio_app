import React from 'react';
import Link from 'next/link';
import { getMediumPosts } from '@/lib/utils/medium-feed';
import { getAllPosts } from '@/lib/markdown';
import Breadcrumb from '@/components/ui/Breadcrumb';

type UnifiedPost = {
  type: 'local' | 'medium';
  slug: string;
  title: string;
  description: string;
  date: string;
  categories: string[];
  readingTime: number;
  featured: boolean;
  link: string;
};

export default async function BlogPage() {
  const localPosts = getAllPosts();
  const mediumPosts = await getMediumPosts();

  // Unify all posts into a single feed sorted by date
  const allPosts: UnifiedPost[] = [
    ...localPosts.map((p) => ({
      type: 'local' as const,
      slug: p.slug,
      title: p.title,
      description: p.description,
      date: p.date,
      categories: p.categories,
      readingTime: p.readingTime,
      featured: p.featured,
      link: `/blog/${p.slug}`,
    })),
    ...mediumPosts.map((p) => ({
      type: 'medium' as const,
      slug: p.guid,
      title: p.title,
      description: p.cleanSnippet || '',
      date: p.isoDate,
      categories: p.categories?.slice(0, 3) || [],
      readingTime: p.readingTime || 5,
      featured: false,
      link: p.link,
    })),
  ].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

  // Featured = first featured post or just the latest
  const featuredPost = allPosts.find((p) => p.featured) || allPosts[0];
  const sidebarPosts = allPosts.filter((p) => p !== featuredPost).slice(0, 3);
  const gridPosts = allPosts.filter(
    (p) => p !== featuredPost && !sidebarPosts.includes(p)
  );

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Dark Hero Header */}
      <section className="bg-gray-900 pt-32 pb-16 px-6 md:px-20">
        <div className="max-w-6xl mx-auto">
          <div className="mb-6">
            <Breadcrumb overrides={{ blog: 'Blog' }} className="text-white" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 font-[family-name:var(--font-geist-sans)]">
            Blog
          </h1>
          <p className="text-lg text-blue-200/70 max-w-2xl">
            Research, articles, and technical deep-dives on AI systems, data engineering, and distributed computing.
          </p>
          <div className="w-20 h-1 bg-blue-500 mt-6 rounded-full"></div>
        </div>
      </section>

      {/* Magazine Layout */}
      {allPosts.length > 0 ? (
        <section className="px-6 md:px-20 pt-10 pb-20">
          <div className="max-w-6xl mx-auto">
            {/* Featured + Sidebar Row */}
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 mb-12">
              {/* Featured Post (Hero Card) */}
              {featuredPost && (
                <Link
                  href={featuredPost.link}
                  target={featuredPost.type === 'medium' ? '_blank' : undefined}
                  rel={featuredPost.type === 'medium' ? 'noopener noreferrer' : undefined}
                  className="lg:col-span-3 group"
                >
                  <div className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-blue-900 rounded-2xl p-8 md:p-10 h-full min-h-[340px] flex flex-col justify-end overflow-hidden transition-all duration-300 hover:shadow-2xl hover:shadow-blue-900/20">
                    {/* Decorative blurs */}
                    <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl" />
                    <div className="absolute bottom-0 left-0 w-48 h-48 bg-indigo-500/10 rounded-full blur-3xl" />

                    <div className="relative z-10">
                      <div className="flex items-center gap-3 mb-4 flex-wrap">
                        {featuredPost.featured && (
                          <span className="px-3 py-1 text-xs font-semibold bg-blue-500 text-white rounded-full">
                            Featured
                          </span>
                        )}
                        {featuredPost.type === 'medium' && (
                          <span className="px-3 py-1 text-xs font-medium bg-white/10 text-white/80 rounded-full backdrop-blur-sm">
                            Medium
                          </span>
                        )}
                        {featuredPost.categories.slice(0, 2).map((cat) => (
                          <span
                            key={cat}
                            className="px-3 py-1 text-xs font-medium bg-white/10 text-white/80 rounded-full backdrop-blur-sm"
                          >
                            {cat}
                          </span>
                        ))}
                      </div>

                      <h2 className="text-2xl md:text-3xl font-bold text-white mb-3 group-hover:text-blue-200 transition-colors font-[family-name:var(--font-geist-sans)]">
                        {featuredPost.title}
                      </h2>

                      <p className="text-white/60 mb-6 line-clamp-2 text-base">
                        {featuredPost.description}
                      </p>

                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-4 text-sm text-white/50">
                          <span>
                            {new Date(featuredPost.date).toLocaleDateString('en-US', {
                              year: 'numeric',
                              month: 'short',
                              day: 'numeric',
                            })}
                          </span>
                          <span className="w-1 h-1 bg-white/30 rounded-full" />
                          <span>{featuredPost.readingTime} min read</span>
                        </div>
                        <span className="text-blue-400 text-sm font-medium flex items-center gap-1 group-hover:gap-2 transition-all">
                          Read
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                          </svg>
                        </span>
                      </div>
                    </div>
                  </div>
                </Link>
              )}

              {/* Sidebar — Recent Posts */}
              <div className="lg:col-span-2 flex flex-col gap-4">
                {sidebarPosts.map((post) => (
                  <Link
                    key={post.slug}
                    href={post.link}
                    target={post.type === 'medium' ? '_blank' : undefined}
                    rel={post.type === 'medium' ? 'noopener noreferrer' : undefined}
                    className="group bg-white rounded-xl p-5 flex flex-col justify-between hover:shadow-lg transition-all duration-300 border border-gray-100 hover:-translate-y-0.5"
                  >
                    <div>
                      <div className="flex items-center gap-2 mb-2.5 flex-wrap">
                        {post.categories.slice(0, 1).map((cat) => (
                          <span
                            key={cat}
                            className="px-2.5 py-0.5 text-xs font-medium bg-blue-50 text-blue-700 rounded-full"
                          >
                            {cat}
                          </span>
                        ))}
                        {post.type === 'medium' && (
                          <span className="px-2 py-0.5 text-xs font-medium bg-gray-100 text-gray-500 rounded-full">
                            Medium
                          </span>
                        )}
                      </div>
                      <h3 className="text-base font-bold text-gray-900 mb-1.5 group-hover:text-blue-600 transition-colors line-clamp-2 font-[family-name:var(--font-geist-sans)]">
                        {post.title}
                      </h3>
                      <p className="text-sm text-gray-500 line-clamp-2">
                        {post.description}
                      </p>
                    </div>
                    <div className="flex items-center gap-3 text-xs text-gray-400 mt-3 pt-3 border-t border-gray-50">
                      <span>
                        {new Date(post.date).toLocaleDateString('en-US', {
                          month: 'short',
                          day: 'numeric',
                        })}
                      </span>
                      <span className="w-1 h-1 bg-gray-300 rounded-full" />
                      <span>{post.readingTime} min</span>
                    </div>
                  </Link>
                ))}
              </div>
            </div>

            {/* Grid Section — Remaining Posts */}
            {gridPosts.length > 0 && (
              <>
                <div className="flex items-center gap-4 mb-8">
                  <h2 className="text-xl font-semibold text-gray-800 font-[family-name:var(--font-geist-sans)]">
                    All Posts
                  </h2>
                  <div className="flex-1 h-px bg-gray-200" />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {gridPosts.map((post) => (
                    <Link
                      key={post.slug}
                      href={post.link}
                      target={post.type === 'medium' ? '_blank' : undefined}
                      rel={post.type === 'medium' ? 'noopener noreferrer' : undefined}
                      className="group bg-white rounded-xl p-6 hover:shadow-lg transition-all duration-300 border border-gray-100 hover:-translate-y-0.5"
                    >
                      <div className="flex items-center gap-2 mb-3 flex-wrap">
                        {post.categories.slice(0, 2).map((cat) => (
                          <span
                            key={cat}
                            className="px-2.5 py-0.5 text-xs font-medium bg-blue-50 text-blue-700 rounded-full"
                          >
                            {cat}
                          </span>
                        ))}
                        {post.type === 'medium' && (
                          <span className="px-2 py-0.5 text-xs font-medium bg-gray-100 text-gray-500 rounded-full">
                            Medium
                          </span>
                        )}
                      </div>

                      <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors line-clamp-2 font-[family-name:var(--font-geist-sans)]">
                        {post.title}
                      </h3>

                      <p className="text-sm text-gray-500 line-clamp-2 mb-4">
                        {post.description}
                      </p>

                      <div className="flex items-center justify-between text-xs text-gray-400 pt-4 border-t border-gray-50">
                        <div className="flex items-center gap-3">
                          <span>
                            {new Date(post.date).toLocaleDateString('en-US', {
                              year: 'numeric',
                              month: 'short',
                              day: 'numeric',
                            })}
                          </span>
                          <span className="w-1 h-1 bg-gray-300 rounded-full" />
                          <span>{post.readingTime} min read</span>
                        </div>
                        <span className="text-blue-500 opacity-0 group-hover:opacity-100 transition-opacity flex items-center gap-1">
                          <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                          </svg>
                        </span>
                      </div>
                    </Link>
                  ))}
                </div>
              </>
            )}
          </div>
        </section>
      ) : (
        <section className="px-6 md:px-20 py-20">
          <div className="max-w-6xl mx-auto text-center">
            <div className="mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 mx-auto text-gray-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
              </svg>
            </div>
            <p className="text-xl text-gray-500">No blog posts available yet.</p>
            <p className="mt-2 text-gray-400">
              Visit my{' '}
              <a
                href="https://medium.com/@chatterjeerishav96"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:underline"
              >
                Medium profile
              </a>{' '}
              for articles.
            </p>
          </div>
        </section>
      )}
    </div>
  );
}

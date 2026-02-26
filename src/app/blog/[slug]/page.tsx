import React from 'react';
import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import Link from 'next/link';
import { getAllPosts, getPostBySlug } from '@/lib/markdown';
import Breadcrumb from '@/components/ui/Breadcrumb';

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  const posts = getAllPosts();
  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPostBySlug(slug);
  if (!post) return { title: 'Post Not Found' };

  return {
    title: post.title,
    description: post.description,
    openGraph: {
      title: post.title,
      description: post.description,
      type: 'article',
      publishedTime: post.date,
    },
  };
}

// Content rendered via dangerouslySetInnerHTML is safe here:
// it comes from our own local markdown files in content/blog/,
// not from user input or external sources.
export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);

  if (!post) notFound();

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Dark Hero Header */}
      <section className="bg-gray-900 pt-32 pb-16 px-6 md:px-20">
        <div className="max-w-4xl mx-auto">
          <div className="mb-6">
            <Breadcrumb overrides={{ blog: 'Blog', [slug]: post.title }} className="text-white" />
          </div>

          <div className="flex flex-wrap gap-2 mb-5">
            {post.categories.map((cat) => (
              <span
                key={cat}
                className="px-3 py-1 text-xs font-semibold bg-blue-500/20 text-blue-300 rounded-full border border-blue-500/30"
              >
                {cat}
              </span>
            ))}
          </div>

          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight font-[family-name:var(--font-geist-sans)]">
            {post.title}
          </h1>

          <div className="flex items-center gap-4 text-sm text-white/50 flex-wrap">
            <div className="flex items-center gap-2">
              <div className="h-8 w-8 rounded-full bg-blue-500/30 flex items-center justify-center text-sm font-bold text-blue-300">
                R
              </div>
              <span className="text-white/70">Rishav Chatterjee</span>
            </div>
            <span className="w-1 h-1 bg-white/30 rounded-full" />
            <span>
              {new Date(post.date).toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'long',
                day: 'numeric',
              })}
            </span>
            <span className="w-1 h-1 bg-white/30 rounded-full" />
            <span>{post.readingTime} min read</span>
          </div>
        </div>
      </section>

      {/* Article Content — safe: content from local markdown files only */}
      <section className="px-6 md:px-20 py-12">
        <article
          className="max-w-[720px] mx-auto
            [&>h2]:text-2xl [&>h2]:font-bold [&>h2]:mt-12 [&>h2]:mb-5 [&>h2]:text-gray-900 [&>h2]:font-[family-name:var(--font-geist-sans)]
            [&>h3]:text-xl [&>h3]:font-semibold [&>h3]:mt-10 [&>h3]:mb-4 [&>h3]:text-gray-800 [&>h3]:font-[family-name:var(--font-geist-sans)]
            [&>h4]:text-lg [&>h4]:font-semibold [&>h4]:mt-8 [&>h4]:mb-3 [&>h4]:text-gray-800 [&>h4]:font-[family-name:var(--font-geist-sans)]
            [&>p]:text-gray-600 [&>p]:leading-[1.8] [&>p]:mb-5 [&>p]:text-[16.5px]
            [&>ul]:list-disc [&>ul]:pl-6 [&>ul]:mb-5 [&>ul>li]:text-gray-600 [&>ul>li]:mb-2 [&>ul>li]:leading-[1.7]
            [&>ol]:list-decimal [&>ol]:pl-6 [&>ol]:mb-5 [&>ol>li]:text-gray-600 [&>ol>li]:mb-2 [&>ol>li]:leading-[1.7]
            [&>hr]:my-10 [&>hr]:border-gray-200
            [&>blockquote]:border-l-4 [&>blockquote]:border-blue-500 [&>blockquote]:bg-blue-50 [&>blockquote]:pl-5 [&>blockquote]:pr-4 [&>blockquote]:py-4 [&>blockquote]:italic [&>blockquote]:text-gray-600 [&>blockquote]:my-6 [&>blockquote]:rounded-r-lg
            [&>pre]:bg-[#1a1a2e] [&>pre]:text-gray-100 [&>pre]:rounded-xl [&>pre]:p-5 [&>pre]:overflow-x-auto [&>pre]:mb-5 [&>pre]:text-sm [&>pre]:border [&>pre]:border-gray-800
            [&>p>code]:bg-blue-50 [&>p>code]:text-blue-700 [&>p>code]:px-2 [&>p>code]:py-0.5 [&>p>code]:rounded-md [&>p>code]:text-sm [&>p>code]:font-medium
            [&>table]:w-full [&>table]:border-collapse [&>table]:mb-6 [&>table]:text-sm [&>table]:rounded-lg [&>table]:overflow-hidden
            [&>table>thead>tr>th]:bg-gray-100 [&>table>thead>tr>th]:border [&>table>thead>tr>th]:border-gray-200 [&>table>thead>tr>th]:px-4 [&>table>thead>tr>th]:py-3 [&>table>thead>tr>th]:text-left [&>table>thead>tr>th]:font-semibold [&>table>thead>tr>th]:text-gray-700
            [&>table>tbody>tr>td]:border [&>table>tbody>tr>td]:border-gray-200 [&>table>tbody>tr>td]:px-4 [&>table>tbody>tr>td]:py-2.5 [&>table>tbody>tr>td]:text-gray-600
            [&>table>tbody>tr:hover]:bg-gray-50
            [&_a]:text-blue-600 [&_a]:underline [&_a]:decoration-blue-200 [&_a:hover]:text-blue-800 [&_a:hover]:decoration-blue-400
            [&>p>strong]:font-semibold [&>p>strong]:text-gray-800
            [&>p>em]:italic
            [&>img]:rounded-xl [&>img]:shadow-md [&>img]:my-6
          "
          dangerouslySetInnerHTML={{ __html: post.content }}
        />

        {/* Footer */}
        <div className="max-w-[720px] mx-auto mt-16 pt-8 border-t border-gray-200">
          <p className="text-sm text-gray-400 italic mb-8">
            {post.description}
          </p>
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-800 font-medium transition-colors group"
          >
            <svg className="w-4 h-4 transform group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to all posts
          </Link>
        </div>
      </section>
    </div>
  );
}

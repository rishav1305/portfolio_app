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
    <div className="min-h-screen bg-white">
      <section className="pt-32 pb-10 px-6 md:px-20">
        <div className="max-w-4xl mx-auto">
          <div className="mb-6">
            <Breadcrumb overrides={{ blog: 'Blog', [slug]: post.title }} />
          </div>

          <div className="flex flex-wrap gap-2 mb-4">
            {post.categories.map((cat) => (
              <span
                key={cat}
                className="px-3 py-1 text-xs font-medium bg-blue-100 text-blue-700 rounded-full"
              >
                {cat}
              </span>
            ))}
          </div>

          <h1 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
            {post.title}
          </h1>

          <div className="flex items-center text-sm text-gray-500 mb-8 gap-4">
            <span>{new Date(post.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</span>
            <span>{post.readingTime} min read</span>
          </div>

          <div className="w-20 h-1 bg-blue-500 mb-10"></div>
        </div>
      </section>

      <section className="px-6 md:px-20 pb-20">
        {/* SECURITY: Content is from local markdown files only, not user input */}
        <article
          className="max-w-4xl mx-auto
            [&>h2]:text-2xl [&>h2]:font-bold [&>h2]:mt-10 [&>h2]:mb-4 [&>h2]:text-gray-900
            [&>h3]:text-xl [&>h3]:font-semibold [&>h3]:mt-8 [&>h3]:mb-3 [&>h3]:text-gray-800
            [&>p]:text-gray-700 [&>p]:leading-relaxed [&>p]:mb-4
            [&>ul]:list-disc [&>ul]:pl-6 [&>ul]:mb-4 [&>ul>li]:text-gray-700 [&>ul>li]:mb-1
            [&>ol]:list-decimal [&>ol]:pl-6 [&>ol]:mb-4 [&>ol>li]:text-gray-700 [&>ol>li]:mb-1
            [&>hr]:my-8 [&>hr]:border-gray-200
            [&>blockquote]:border-l-4 [&>blockquote]:border-blue-500 [&>blockquote]:pl-4 [&>blockquote]:italic [&>blockquote]:text-gray-600 [&>blockquote]:my-4
            [&>pre]:bg-gray-900 [&>pre]:text-gray-100 [&>pre]:rounded-lg [&>pre]:p-4 [&>pre]:overflow-x-auto [&>pre]:mb-4 [&>pre]:text-sm
            [&>p>code]:bg-gray-100 [&>p>code]:text-blue-700 [&>p>code]:px-1.5 [&>p>code]:py-0.5 [&>p>code]:rounded [&>p>code]:text-sm
            [&>table]:w-full [&>table]:border-collapse [&>table]:mb-6 [&>table]:text-sm
            [&>table>thead>tr>th]:bg-gray-50 [&>table>thead>tr>th]:border [&>table>thead>tr>th]:border-gray-200 [&>table>thead>tr>th]:px-4 [&>table>thead>tr>th]:py-2 [&>table>thead>tr>th]:text-left [&>table>thead>tr>th]:font-semibold [&>table>thead>tr>th]:text-gray-700
            [&>table>tbody>tr>td]:border [&>table>tbody>tr>td]:border-gray-200 [&>table>tbody>tr>td]:px-4 [&>table>tbody>tr>td]:py-2 [&>table>tbody>tr>td]:text-gray-700
            [&>table>tbody>tr:hover]:bg-gray-50
            [&_a]:text-blue-600 [&_a]:underline [&_a:hover]:text-blue-800
            [&>p>strong]:font-semibold [&>p>strong]:text-gray-900
            [&>p>em]:italic
          "
          dangerouslySetInnerHTML={{ __html: post.content }}
        />

        <div className="max-w-4xl mx-auto mt-12 pt-8 border-t border-gray-200">
          <p className="text-sm text-gray-500 italic mb-6">
            {post.description}
          </p>
          <Link
            href="/blog"
            className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium"
          >
            <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to Blog
          </Link>
        </div>
      </section>
    </div>
  );
}

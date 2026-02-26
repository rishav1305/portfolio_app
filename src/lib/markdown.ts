import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import remarkGfm from 'remark-gfm';
import remarkHtml from 'remark-html';

export type LocalPost = {
  slug: string;
  title: string;
  date: string;
  description: string;
  categories: string[];
  readingTime: number;
  featured: boolean;
  content: string;
};

const POSTS_DIR = path.join(process.cwd(), 'content', 'blog');

export function getAllPosts(): Omit<LocalPost, 'content'>[] {
  if (!fs.existsSync(POSTS_DIR)) return [];

  const files = fs.readdirSync(POSTS_DIR).filter((f) => f.endsWith('.md'));

  const posts = files.map((filename) => {
    const filePath = path.join(POSTS_DIR, filename);
    const fileContent = fs.readFileSync(filePath, 'utf-8');
    const { data } = matter(fileContent);

    return {
      slug: data.slug || filename.replace(/\.md$/, ''),
      title: data.title || 'Untitled',
      date: data.date || '',
      description: data.description || '',
      categories: data.categories || [],
      readingTime: data.readingTime || 5,
      featured: data.featured || false,
    };
  });

  return posts.sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );
}

export async function getPostBySlug(
  slug: string
): Promise<LocalPost | null> {
  if (!fs.existsSync(POSTS_DIR)) return null;

  const files = fs.readdirSync(POSTS_DIR).filter((f) => f.endsWith('.md'));

  for (const filename of files) {
    const filePath = path.join(POSTS_DIR, filename);
    const fileContent = fs.readFileSync(filePath, 'utf-8');
    const { data, content } = matter(fileContent);

    const postSlug = data.slug || filename.replace(/\.md$/, '');
    if (postSlug !== slug) continue;

    const processed = await remark()
      .use(remarkGfm)
      .use(remarkHtml, { sanitize: false })
      .process(content);

    return {
      slug: postSlug,
      title: data.title || 'Untitled',
      date: data.date || '',
      description: data.description || '',
      categories: data.categories || [],
      readingTime: data.readingTime || 5,
      featured: data.featured || false,
      content: processed.toString(),
    };
  }

  return null;
}

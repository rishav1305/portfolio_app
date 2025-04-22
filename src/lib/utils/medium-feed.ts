import Parser from 'rss-parser';

export type MediumPost = {
  title: string;
  link: string;
  pubDate: string;
  content: string;
  contentSnippet: string;
  guid: string;
  categories: string[];
  creator: string;
  isoDate: string;
  // Additional properties we'll add
  thumbnailUrl?: string;
  cleanSnippet?: string;
  viewCount?: number;
  readCount?: number;
  readingTime?: number;
};

export type MediumFeed = {
  items: MediumPost[];
  feedUrl: string;
  title: string;
  description: string;
  link: string;
};

// Medium username should be without the '@' symbol
const MEDIUM_USERNAME = 'chatterjeerishav96';

// Default image to use when no image can be extracted
const DEFAULT_IMAGE = 'https://miro.medium.com/max/1200/1*jfdwtvU6V6g99q3G7gq7dQ.png';

export async function getMediumPosts(): Promise<MediumPost[]> {
  try {
    const parser = new Parser({
      customFields: {
        item: [
          ['media:content', 'mediaContent'],
          ['enclosure', 'enclosure']
        ]
      }
    });
    
    const feedUrl = `https://medium.com/feed/@${MEDIUM_USERNAME}`;
    
    const feed = await parser.parseURL(feedUrl) as any;
    
    return feed.items.map((item: any) => {
      // For debugging - log the first item to console to see its structure
      if (feed.items.indexOf(item) === 0) {
        console.log('First Medium item structure:', JSON.stringify(item, null, 2));
      }
      
      // Generate randomized but consistent stats based on the post's guid
      // In a real implementation, these would come from Medium's API
      const postId = item.guid ? item.guid.split('/').pop() : '';
      const seedValue = postId ? postId.split('').reduce((sum: number, char: string) => sum + char.charCodeAt(0), 0) : 0;
      
      // Generate pseudo-random but consistent view count (between 200-10000)
      const viewCount = 200 + (seedValue % 9800);
      
      // Read count is typically 40-60% of view count
      const readRatio = 0.4 + ((seedValue % 20) / 100);
      const readCount = Math.floor(viewCount * readRatio);
      
      // Reading time in minutes (typically 3-12 minutes)
      const readingTime = 3 + (seedValue % 10);

      return {
        ...item,
        // Extract thumbnail with enhanced methods
        thumbnailUrl: extractThumbnail(item),
        // Create a cleaned snippet without HTML tags
        cleanSnippet: item.contentSnippet ? 
          cleanContent(item.contentSnippet).substring(0, 160) + '...' : 
          'Read this article on Medium',
        // Add the stats
        viewCount,
        readCount,
        readingTime
      };
    });
  } catch (error) {
    console.error('Error fetching Medium posts:', error);
    console.error('Error details:', error instanceof Error ? error.message : String(error));
    return [];
  }
}

// Enhanced thumbnail extraction with multiple strategies
function extractThumbnail(item: any): string {
  try {
    // Strategy 1: Check for media:content field (RSS standard for media)
    if (item.mediaContent && item.mediaContent.$ && item.mediaContent.$.url) {
      return item.mediaContent.$.url;
    }
    
    // Strategy 2: Check for enclosure (another RSS standard for media)
    if (item.enclosure && item.enclosure.url) {
      return item.enclosure.url;
    }
    
    // Strategy 3: Extract first image from content HTML
    if (item.content) {
      // More comprehensive image regex that handles various HTML formats
      const imgRegexPatterns = [
        /<img[^>]+src=["']([^"']+)["']/i,  // Standard img tag
        /<figure[^>]*>.*?<img[^>]+src=["']([^"']+)["']/i,  // Figure with img
        /<picture[^>]*>.*?<img[^>]+src=["']([^"']+)["']/i  // Picture with img
      ];
      
      for (const regex of imgRegexPatterns) {
        const match = item.content.match(regex);
        if (match && match[1]) {
          return match[1];
        }
      }
    }
    
    // Strategy 4: Generate Medium article image from guid
    if (item.guid) {
      const postId = item.guid.split('/').pop();
      if (postId) {
        return `https://miro.medium.com/max/1200/${postId}`;
      }
    }
    
    // Fallback to default Medium image
    return DEFAULT_IMAGE;
  } catch (error) {
    console.error('Error extracting thumbnail:', error);
    return DEFAULT_IMAGE;
  }
}

// Helper function to clean HTML content
function cleanContent(content: string | undefined): string {
  if (!content) return '';
  
  return content
    .replace(/<[^>]*>/g, '') // Remove HTML tags
    .replace(/&nbsp;/g, ' ') // Replace non-breaking spaces
    .replace(/\s+/g, ' ') // Normalize whitespace
    .trim();
}
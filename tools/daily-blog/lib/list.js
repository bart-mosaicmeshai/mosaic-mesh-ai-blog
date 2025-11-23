const fs = require('fs').promises;
const path = require('path');

/**
 * Lists recent blog posts from the daily-posts directory
 * @param {number} count - Number of posts to show
 * @returns {Promise<Array>} Array of post metadata
 */
async function listPosts(count = 10) {
  const projectRoot = path.resolve(__dirname, '../../..');
  const postsDir = path.join(projectRoot, 'daily-posts');

  try {
    // Check if posts directory exists
    await fs.access(postsDir);

    // Read all markdown files
    const files = await fs.readdir(postsDir);
    const mdFiles = files.filter(f => f.endsWith('.md'));

    if (mdFiles.length === 0) {
      return [];
    }

    // Read frontmatter from each file
    const posts = await Promise.all(
      mdFiles.map(async (filename) => {
        const filePath = path.join(postsDir, filename);
        const content = await fs.readFile(filePath, 'utf8');
        const metadata = parseFrontmatter(content);

        return {
          filename,
          path: filePath,
          ...metadata
        };
      })
    );

    // Sort by date (newest first) and limit
    return posts
      .sort((a, b) => new Date(b.date) - new Date(a.date))
      .slice(0, count);

  } catch (error) {
    if (error.code === 'ENOENT') {
      return []; // Directory doesn't exist yet
    }
    throw error;
  }
}

/**
 * Parses frontmatter from markdown content
 * @param {string} content - Full markdown content
 * @returns {Object} Parsed frontmatter metadata
 */
function parseFrontmatter(content) {
  const match = content.match(/^---\n([\s\S]*?)\n---/);

  if (!match) {
    return {
      date: 'unknown',
      category: 'unknown',
      project: 'unknown',
      title: 'Untitled',
      published: false
    };
  }

  const frontmatter = match[1];
  const metadata = {};

  // Parse each line
  frontmatter.split('\n').forEach(line => {
    const [key, ...valueParts] = line.split(':');
    if (key && valueParts.length > 0) {
      const value = valueParts.join(':').trim();

      // Remove quotes from strings
      if (value.startsWith('"') && value.endsWith('"')) {
        metadata[key.trim()] = value.slice(1, -1);
      } else if (value === 'true') {
        metadata[key.trim()] = true;
      } else if (value === 'false') {
        metadata[key.trim()] = false;
      } else {
        metadata[key.trim()] = value;
      }
    }
  });

  return {
    date: metadata.date || 'unknown',
    category: metadata.category || 'unknown',
    project: metadata.project || 'unknown',
    title: metadata.title || 'Untitled',
    published: metadata.published || false,
    tags: metadata.tags || []
  };
}

module.exports = {
  listPosts
};

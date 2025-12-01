const fs = require('fs').promises;
const path = require('path');

// Categories with descriptions
const CATEGORIES = {
  Building: 'Creating something new',
  Breaking: 'Fixing bugs and solving problems',
  Learning: 'Exploring and experimenting',
  Measuring: 'Performance and benchmarking',
  Questioning: 'Rethinking and refactoring'
};

/**
 * Creates a new blog post from a template
 * @param {number|null} topicNumber - Topic number from scan results (future feature)
 * @param {Object} options - Post options (category, project, title, draft)
 * @returns {Promise<string>} Path to created post
 */
async function createPost(topicNumber, options = {}) {
  const date = new Date().toISOString().split('T')[0]; // YYYY-MM-DD
  const timestamp = Date.now();

  // Validate category
  const category = options.category || 'Building';
  if (!CATEGORIES[category]) {
    throw new Error(`Invalid category. Must be one of: ${Object.keys(CATEGORIES).join(', ')}`);
  }

  // Generate filename
  let titleSlug = options.title
    ? slugify(options.title)
    : `post-${timestamp}`;

  // Add -draft suffix if draft mode
  if (options.draft && !titleSlug.endsWith('-draft')) {
    titleSlug += '-draft';
  }

  const filename = `${date}-${titleSlug}.md`;

  // Post directory (relative to project root)
  const projectRoot = path.resolve(__dirname, '../../..');
  const postsDir = path.join(projectRoot, 'daily-posts');

  // Ensure posts directory exists
  await fs.mkdir(postsDir, { recursive: true });

  const postPath = path.join(postsDir, filename);

  // Generate post content
  const content = generatePostTemplate({
    date,
    category,
    project: options.project || 'unknown',
    title: options.title || 'Untitled Post',
    tags: []
  });

  // Write post file
  await fs.writeFile(postPath, content, 'utf8');

  return postPath;
}

/**
 * Generates post template with frontmatter
 */
function generatePostTemplate(metadata) {
  const { date, category, project, title, tags = [] } = metadata;

  return `---
date: ${date}
category: ${category}
project: ${project}
title: "${title}"
tags: ${tags.join(' ')}
published: false
---

# ${title}

## The Hook

[Write a compelling opening that grabs attention. What happened today? What made you curious? What problem did you face?]

## The Story

[Tell what you actually did. Be specific. Show your work. Include code snippets if relevant. Keep it conversational and honest - include the failures, not just the wins.]

\`\`\`
// Code example (if relevant)
\`\`\`

## The Reflection

[What did you learn? What surprised you? What would you do differently? What's next?]

---

## Project

**${project}** - [View on GitHub](https://github.com/bart-mosaicmeshai/${project})

*[Update the GitHub link above if the project name differs from the repo name, or remove if not applicable]*

---

## Meta

- **Category**: ${category} (${CATEGORIES[category]})
- **Project**: ${project}
- **Word count target**: 150-300 words
- **Writing time**: ~15-20 minutes
- **Inspiration**: Simon Willison's daily blog, Seth Godin's short posts

## Publishing Checklist

- [ ] Hook is compelling and specific
- [ ] Story shows real work, not just summary
- [ ] Reflection adds insight or learning
- [ ] Post is 150-300 words
- [ ] Code examples (if any) are formatted and explained
- [ ] Links to relevant resources
- [ ] Proofread for typos
- [ ] Update published: true in frontmatter

---

*This post is part of my daily AI journey blog at [Mosaic Mesh AI](https://www.mosaicmeshai.com/blog). Building in public, learning in public, sharing the messy middle of AI development.*
`;
}

/**
 * Creates a URL-friendly slug from a title
 */
function slugify(text) {
  return text
    .toLowerCase()
    .replace(/[^\w\s-]/g, '') // Remove special chars
    .replace(/\s+/g, '-')      // Replace spaces with hyphens
    .replace(/-+/g, '-')       // Remove consecutive hyphens
    .substring(0, 50);         // Limit length
}

module.exports = {
  createPost
};

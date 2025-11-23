const simpleGit = require('simple-git');
const fs = require('fs').promises;
const path = require('path');

// Projects directory to scan
const PROJECTS_DIR = path.join(require('os').homedir(), 'Projects');

// Category keywords mapping
const CATEGORY_PATTERNS = {
  Building: ['add', 'create', 'implement', 'build', 'develop', 'feature', 'new'],
  Breaking: ['fix', 'bug', 'error', 'issue', 'crash', 'broken', 'debug'],
  Learning: ['learn', 'explore', 'experiment', 'try', 'test', 'research', 'study'],
  Measuring: ['benchmark', 'performance', 'optimize', 'measure', 'profile', 'speed', 'metric'],
  Questioning: ['why', 'refactor', 'rethink', 'consider', 'question', 'alternative', 'approach']
};

/**
 * Scans all git repositories in ~/Projects for recent activity
 * @param {number} days - Number of days to look back
 * @returns {Promise<Array>} Array of suggested blog topics
 */
async function scanProjects(days = 1) {
  try {
    // Get all directories in Projects folder
    const entries = await fs.readdir(PROJECTS_DIR, { withFileTypes: true });
    const projectDirs = entries
      .filter(entry => entry.isDirectory() && !entry.name.startsWith('.'))
      .map(entry => entry.name);

    const allSuggestions = [];

    // Scan each project
    for (const projectName of projectDirs) {
      const projectPath = path.join(PROJECTS_DIR, projectName);

      try {
        // Check if it's a git repo
        const git = simpleGit(projectPath);
        const isRepo = await git.checkIsRepo();

        if (!isRepo) continue;

        // Get commits from last N days
        const since = new Date();
        since.setDate(since.getDate() - days);
        const sinceStr = since.toISOString().split('T')[0];

        const log = await git.log({
          '--since': sinceStr,
          '--all': null
        });

        if (log.total === 0) continue;

        // Analyze commits and generate suggestions
        const suggestions = analyzeCommits(projectName, log.all);
        allSuggestions.push(...suggestions);

      } catch (error) {
        // Skip projects that aren't git repos or have errors
        continue;
      }
    }

    // Sort by recency and relevance
    return allSuggestions.sort((a, b) => b.timestamp - a.timestamp);

  } catch (error) {
    throw new Error(`Failed to scan projects: ${error.message}`);
  }
}

/**
 * Analyzes commits and generates blog topic suggestions
 * @param {string} projectName - Name of the project
 * @param {Array} commits - Array of commit objects
 * @returns {Array} Array of topic suggestions
 */
function analyzeCommits(projectName, commits) {
  const suggestions = [];

  // Group commits by theme
  const commitsByCategory = groupCommitsByCategory(commits);

  // Generate suggestions for each category with activity
  for (const [category, categoryCommits] of Object.entries(commitsByCategory)) {
    if (categoryCommits.length === 0) continue;

    const suggestion = {
      project: projectName,
      category,
      commits: categoryCommits,
      timestamp: new Date(categoryCommits[0].date).getTime(),
      title: generateTitle(category, projectName, categoryCommits),
      description: generateDescription(categoryCommits)
    };

    suggestions.push(suggestion);
  }

  return suggestions;
}

/**
 * Groups commits by category based on commit message patterns
 */
function groupCommitsByCategory(commits) {
  const grouped = {
    Building: [],
    Breaking: [],
    Learning: [],
    Measuring: [],
    Questioning: []
  };

  for (const commit of commits) {
    const message = commit.message.toLowerCase();
    let assigned = false;

    // Check each category's patterns
    for (const [category, patterns] of Object.entries(CATEGORY_PATTERNS)) {
      if (patterns.some(pattern => message.includes(pattern))) {
        grouped[category].push(commit);
        assigned = true;
        break;
      }
    }

    // Default to Building if no pattern matches
    if (!assigned) {
      grouped.Building.push(commit);
    }
  }

  return grouped;
}

/**
 * Generates a blog post title suggestion
 */
function generateTitle(category, projectName, commits) {
  const cleanProject = projectName.replace(/-/g, ' ').replace(/_/g, ' ');
  const commitCount = commits.length;

  const templates = {
    Building: [
      `Building ${cleanProject}: ${extractFeature(commits[0].message)}`,
      `New features in ${cleanProject}`,
      `${cleanProject}: From idea to implementation`
    ],
    Breaking: [
      `Debugging ${cleanProject}: ${extractIssue(commits[0].message)}`,
      `Why ${cleanProject} broke (and how I fixed it)`,
      `Lessons from a ${cleanProject} bug`
    ],
    Learning: [
      `Learning by doing: ${cleanProject}`,
      `What ${cleanProject} taught me about AI`,
      `Experiments with ${cleanProject}`
    ],
    Measuring: [
      `Benchmarking ${cleanProject}`,
      `Performance tuning ${cleanProject}`,
      `How fast is ${cleanProject}?`
    ],
    Questioning: [
      `Rethinking ${cleanProject}`,
      `Why I'm refactoring ${cleanProject}`,
      `A better approach to ${cleanProject}`
    ]
  };

  const options = templates[category] || templates.Building;
  return options[0];
}

/**
 * Generates a brief description from commits
 */
function generateDescription(commits) {
  if (commits.length === 1) {
    return commits[0].message.split('\n')[0];
  }
  return `${commits.length} commits: ${commits[0].message.split('\n')[0]} and more`;
}

/**
 * Extracts feature name from commit message
 */
function extractFeature(message) {
  const match = message.match(/add(?:ed|ing)?\s+(.+?)(?:\.|$)/i);
  return match ? match[1].trim() : 'new feature';
}

/**
 * Extracts issue description from commit message
 */
function extractIssue(message) {
  const match = message.match(/fix(?:ed|ing)?\s+(.+?)(?:\.|$)/i);
  return match ? match[1].trim() : 'an issue';
}

module.exports = {
  scanProjects
};

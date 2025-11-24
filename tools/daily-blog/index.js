#!/usr/bin/env node

const { Command } = require('commander');
const { scanProjects } = require('./lib/scanner');
const { createPost } = require('./lib/generator');
const { listPosts } = require('./lib/list');
const chalk = require('chalk');

const program = new Command();

program
  .name('daily-blog')
  .description('CLI tool for generating daily AI journey blog posts')
  .version('1.0.0');

program
  .command('scan')
  .description('Scan projects for recent activity and suggest blog topics')
  .option('-d, --days <number>', 'number of days to look back', '1')
  .action(async (options) => {
    try {
      console.log(chalk.cyan('\n🔍 Scanning projects for activity...\n'));
      const suggestions = await scanProjects(parseInt(options.days));

      if (suggestions.length === 0) {
        console.log(chalk.yellow('No recent activity found in the last', options.days, 'day(s).\n'));
        return;
      }

      console.log(chalk.green(`Found ${suggestions.length} potential blog topic(s):\n`));
      suggestions.forEach((suggestion, index) => {
        console.log(chalk.bold(`${index + 1}. [${suggestion.category}] ${suggestion.title}`));
        console.log(chalk.gray(`   Project: ${suggestion.project}`));
        console.log(chalk.gray(`   ${suggestion.description}`));
        console.log();
      });

      console.log(chalk.cyan('💡 Use'), chalk.bold('daily-blog create <number>'), chalk.cyan('to generate a post template\n'));
    } catch (error) {
      console.error(chalk.red('Error scanning projects:'), error.message);
      process.exit(1);
    }
  });

program
  .command('create')
  .description('Create a new blog post from a suggested topic')
  .argument('[topic-number]', 'topic number from scan results')
  .option('-c, --category <category>', 'post category (Building, Breaking, Learning, Measuring, Questioning)')
  .option('-p, --project <project>', 'project name')
  .option('-t, --title <title>', 'post title')
  .option('-d, --draft', 'mark as draft (adds -draft suffix, excluded from git)')
  .action(async (topicNumber, options) => {
    try {
      console.log(chalk.cyan('\n✍️  Creating blog post...\n'));
      const postPath = await createPost(topicNumber, options);
      console.log(chalk.green('✓ Post created:'), postPath);
      if (options.draft) {
        console.log(chalk.yellow('📝 Draft mode: This file will be ignored by git'));
      }
      console.log(chalk.cyan('\nOpen the file and fill in the content sections!\n'));
    } catch (error) {
      console.error(chalk.red('Error creating post:'), error.message);
      process.exit(1);
    }
  });

program
  .command('list')
  .description('List recent blog posts')
  .option('-n, --number <count>', 'number of posts to show', '10')
  .action(async (options) => {
    try {
      const posts = await listPosts(parseInt(options.number));

      if (posts.length === 0) {
        console.log(chalk.yellow('\nNo posts found yet.\n'));
        return;
      }

      console.log(chalk.cyan(`\n📝 Recent blog posts (${posts.length}):\n`));
      posts.forEach((post, index) => {
        const status = post.published ? chalk.green('✓') : chalk.gray('○');
        console.log(`${status} ${chalk.bold(post.title)}`);
        console.log(chalk.gray(`   ${post.date} | ${post.category} | ${post.project}`));
        console.log(chalk.gray(`   ${post.path}`));
        console.log();
      });
    } catch (error) {
      console.error(chalk.red('Error listing posts:'), error.message);
      process.exit(1);
    }
  });

program.parse(process.argv);

#!/usr/bin/env node

const fs = require('fs');
const { program } = require('commander');
const chalk = require('chalk');
const { markdownToHtml } = require('../src/index');

program
  .name('md-to-html')
  .description('Convert Markdown to HTML')
  .version('1.0.0')
  .argument('<input>', 'Input markdown file')
  .option('-o, --output <file>', 'Output HTML file')
  .option('-s, --stdout', 'Output to stdout instead of file')
  .option('--no-html', 'Disable HTML tags in source')
  .option('--no-linkify', 'Disable automatic link detection')
  .option('--no-typographer', 'Disable typographic replacements')
  .action((input, options) => {
    try {
      // Check if input file exists
      if (!fs.existsSync(input)) {
        console.error(chalk.red(`Error: Input file '${input}' not found`));
        process.exit(1);
      }

      // Read markdown content
      const markdown = fs.readFileSync(input, 'utf8');

      // Convert to HTML
      const html = markdownToHtml(markdown, {
        html: options.html,
        linkify: options.linkify,
        typographer: options.typographer
      });

      // Output
      if (options.stdout) {
        console.log(html);
      } else {
        const outputFile = options.output || input.replace(/\.md$/i, '.html');
        fs.writeFileSync(outputFile, html, 'utf8');
        console.log(chalk.green(`✓ Successfully converted to ${outputFile}`));
      }
    } catch (error) {
      console.error(chalk.red(`Error: ${error.message}`));
      process.exit(1);
    }
  });

program.parse();

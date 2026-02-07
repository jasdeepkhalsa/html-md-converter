import fs from 'fs';
import { program } from 'commander';
import chalk from 'chalk';
import { htmlToMarkdown } from '../src/index.js';

program
  .name('html-to-md')
  .description('Convert HTML to Markdown')
  .version('1.0.0')
  .argument('<input>', 'Input HTML file')
  .option('-o, --output <file>', 'Output markdown file')
  .option('-s, --stdout', 'Output to stdout instead of file')
  .option('--heading-style <style>', 'Heading style (atx or setext)', 'atx')
  .option(
    '--code-block-style <style>',
    'Code block style (fenced or indented)',
    'fenced'
  )
  .action((input, options) => {
    try {
      // Check if input file exists
      if (!fs.existsSync(input)) {
        console.error(chalk.red(`Error: Input file '${input}' not found`));
        process.exit(1);
      }

      // Read HTML content
      const html = fs.readFileSync(input, 'utf8');

      // Convert to markdown
      const markdown = htmlToMarkdown(html, {
        headingStyle: options.headingStyle,
        codeBlockStyle: options.codeBlockStyle
      });

      // Output
      if (options.stdout) {
        console.log(markdown);
      } else {
        const outputFile = options.output || input.replace(/\.html?$/i, '.md');
        fs.writeFileSync(outputFile, markdown, 'utf8');
        console.log(chalk.green(`✓ Successfully converted to ${outputFile}`));
      }
    } catch (error) {
      console.error(chalk.red(`Error: ${error.message}`));
      process.exit(1);
    }
  });

program.parse();


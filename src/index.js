import TurndownService from 'turndown';
import MarkdownIt from 'markdown-it';

/**
 * Convert HTML to Markdown
 * @param {string} html - The HTML string to convert
 * @param {Object} options - Options for turndown service
 * @returns {string} - The converted markdown string
 */
export function htmlToMarkdown(html, options = {}) {
  const turndownService = new TurndownService({
    headingStyle: 'atx',
    codeBlockStyle: 'fenced',
    ...options
  });

  return turndownService.turndown(html);
}

/**
 * Convert Markdown to HTML
 * @param {string} markdown - The markdown string to convert
 * @param {Object} options - Options for markdown-it
 * @returns {string} - The converted HTML string
 */
export function markdownToHtml(markdown, options = {}) {
  const md = new MarkdownIt({
    html: true,
    linkify: true,
    typographer: true,
    ...options
  });

  return md.render(markdown);
}

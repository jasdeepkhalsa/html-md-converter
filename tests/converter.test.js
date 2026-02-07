import { htmlToMarkdown, markdownToHtml } from '../src/index.js';

describe('htmlToMarkdown', () => {
  test('converts basic HTML to Markdown', () => {
    const html = '<h1>Hello World</h1>';
    const expected = '# Hello World';
    expect(htmlToMarkdown(html)).toBe(expected);
  });

  test('converts paragraphs', () => {
    const html = '<p>This is a paragraph.</p>';
    const expected = 'This is a paragraph.';
    expect(htmlToMarkdown(html)).toBe(expected);
  });

  test('converts links', () => {
    const html = '<a href="https://example.com">Example</a>';
    const expected = '[Example](https://example.com)';
    expect(htmlToMarkdown(html)).toBe(expected);
  });

  test('converts lists', () => {
    const html = '<ul><li>Item 1</li><li>Item 2</li></ul>';
    const result = htmlToMarkdown(html);
    expect(result).toContain('Item 1');
    expect(result).toContain('Item 2');
    expect(result).toMatch(/[*-]/); // Contains list markers
  });

  test('converts code blocks', () => {
    const html = '<pre><code>const x = 1;</code></pre>';
    const result = htmlToMarkdown(html);
    expect(result).toContain('const x = 1;');
  });

  test('converts bold text', () => {
    const html = '<strong>Bold text</strong>';
    const expected = '**Bold text**';
    expect(htmlToMarkdown(html)).toBe(expected);
  });

  test('converts italic text', () => {
    const html = '<em>Italic text</em>';
    const expected = '_Italic text_';
    expect(htmlToMarkdown(html)).toBe(expected);
  });

  test('handles complex nested HTML', () => {
    const html = `
      <div>
        <h2>Title</h2>
        <p>Paragraph with <strong>bold</strong> and <em>italic</em>.</p>
        <ul>
          <li>Item 1</li>
          <li>Item 2</li>
        </ul>
      </div>
    `;
    const result = htmlToMarkdown(html);
    expect(result).toContain('## Title');
    expect(result).toContain('**bold**');
    expect(result).toContain('_italic_');
    expect(result).toContain('Item 1');
  });
});

describe('markdownToHtml', () => {
  test('converts basic Markdown to HTML', () => {
    const markdown = '# Hello World';
    const result = markdownToHtml(markdown);
    expect(result).toContain('<h1>Hello World</h1>');
  });

  test('converts paragraphs', () => {
    const markdown = 'This is a paragraph.';
    const result = markdownToHtml(markdown);
    expect(result).toContain('<p>This is a paragraph.</p>');
  });

  test('converts links', () => {
    const markdown = '[Example](https://example.com)';
    const result = markdownToHtml(markdown);
    expect(result).toContain('<a href="https://example.com">Example</a>');
  });

  test('converts unordered lists', () => {
    const markdown = '- Item 1\n- Item 2';
    const result = markdownToHtml(markdown);
    expect(result).toContain('<ul>');
    expect(result).toContain('<li>Item 1</li>');
    expect(result).toContain('<li>Item 2</li>');
  });

  test('converts code blocks', () => {
    const markdown = '```\nconst x = 1;\n```';
    const result = markdownToHtml(markdown);
    expect(result).toContain('<pre>');
    expect(result).toContain('<code>');
    expect(result).toContain('const x = 1;');
  });

  test('converts bold text', () => {
    const markdown = '**Bold text**';
    const result = markdownToHtml(markdown);
    expect(result).toContain('<strong>Bold text</strong>');
  });

  test('converts italic text', () => {
    const markdown = '_Italic text_';
    const result = markdownToHtml(markdown);
    expect(result).toContain('<em>Italic text</em>');
  });

  test('handles complex nested Markdown', () => {
    const markdown = `
## Title

Paragraph with **bold** and _italic_.

- Item 1
- Item 2
    `;
    const result = markdownToHtml(markdown, { linkify: true, typographer: true });
    expect(result).toContain('<h2>Title</h2>');
    expect(result).toContain('<strong>bold</strong>');
    expect(result).toContain('<em>italic</em>');
    expect(result).toContain('<li>Item 1</li>');
  });

  test('auto-linkifies URLs when enabled', () => {
    const markdown = 'Check out https://example.com';
    const result = markdownToHtml(markdown, { linkify: true });
    expect(result).toContain('<a href="https://example.com">');
  });
});

describe('Round-trip conversion', () => {
  test('HTML -> Markdown -> HTML preserves structure', () => {
    const originalHtml =
      '<h1>Title</h1><p>Paragraph with <strong>bold</strong> text.</p>';
    const markdown = htmlToMarkdown(originalHtml);
    const resultHtml = markdownToHtml(markdown);

    expect(resultHtml).toContain('<h1>Title</h1>');
    expect(resultHtml).toContain('<strong>bold</strong>');
  });

  test('Markdown -> HTML -> Markdown preserves structure', () => {
    const originalMd = '# Title\n\nParagraph with **bold** text.';
    const html = markdownToHtml(originalMd);
    const resultMd = htmlToMarkdown(html);

    expect(resultMd).toContain('# Title');
    expect(resultMd).toContain('**bold**');
  });
});


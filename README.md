# HTML-Markdown Converter

[![CI](https://github.com/jasdeepkhalsa/html-md-converter/actions/workflows/ci.yml/badge.svg)](https://github.com/jasdeepkhalsa/html-md-converter/actions/workflows/ci.yml)
[![npm version](https://badge.fury.io/js/html-md-converter.svg?v=1)](https://badge.fury.io/js/html-md-converter)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

A powerful, bidirectional converter between HTML and Markdown with both CLI and VS Code extension support.

## ✨ Features

- 🔄 **Bidirectional Conversion**: Convert HTML to Markdown and Markdown to HTML
- 💻 **CLI Tool**: Easy-to-use command-line interface
- 🎨 **VS Code Extension**: Integrate seamlessly into your workflow
- ⚡ **Fast & Reliable**: Built on [Turndown](https://github.com/mixmark-io/turndown) and [markdown-it](https://github.com/markdown-it/markdown-it)
- 🛠️ **Customizable**: Configure conversion options to suit your needs
- 📦 **Zero Config**: Works out of the box with sensible defaults

## 📦 Installation

### CLI Tool

Install globally to use from anywhere:

```bash
npm install -g html-md-converter
```

Or use locally in your project:

```bash
npm install html-md-converter
```

### VS Code Extension

Search for "HTML-Markdown Converter" in the VS Code Extensions marketplace, or install from the command palette:

1. Open VS Code
2. Press `Cmd+Shift+P` (Mac) or `Ctrl+Shift+P` (Windows/Linux)
3. Type "Install Extensions"
4. Search for "HTML-Markdown Converter"

## 🚀 Usage

### CLI

#### HTML to Markdown

```bash
# Convert a file
html-to-md input.html

# Specify output file
html-to-md input.html -o output.md

# Output to stdout
html-to-md input.html --stdout

# Customize heading style
html-to-md input.html --heading-style setext

# Customize code block style
html-to-md input.html --code-block-style indented
```

#### Markdown to HTML

```bash
# Convert a file
md-to-html input.md

# Specify output file
md-to-html input.md -o output.html

# Output to stdout
md-to-html input.md --stdout

# Disable HTML tags in source
md-to-html input.md --no-html

# Disable automatic link detection
md-to-html input.md --no-linkify
```

### Programmatic API

```javascript
import { htmlToMarkdown, markdownToHtml } from 'html-md-converter';

// HTML to Markdown
const html = '<h1>Hello World</h1><p>This is a paragraph.</p>';
const markdown = htmlToMarkdown(html);
console.log(markdown);
// # Hello World
//
// This is a paragraph.

// Markdown to HTML
const md = '# Hello World\n\nThis is a paragraph.';
const htmlOutput = markdownToHtml(md);
console.log(htmlOutput);
// <h1>Hello World</h1>
// <p>This is a paragraph.</p>
```

#### Advanced Options

```javascript
// HTML to Markdown with options
const markdown = htmlToMarkdown(html, {
  headingStyle: 'setext', // 'atx' or 'setext'
  codeBlockStyle: 'indented', // 'fenced' or 'indented'
  bulletListMarker: '-', // '-', '+', or '*'
  emDelimiter: '_', // '_' or '*'
  strongDelimiter: '**' // '**' or '__'
});

// Markdown to HTML with options
const html = markdownToHtml(markdown, {
  html: true, // Enable HTML tags in source
  linkify: true, // Auto-detect URLs and convert to links
  typographer: true, // Enable smart quotes and other typographic replacements
  breaks: false // Convert '\n' in paragraphs into <br>
});
```

### VS Code Extension

Once installed, the extension provides the following commands:

1. **Convert HTML to Markdown**
   - Open an HTML file or select HTML content
   - Press `Cmd+Shift+P` (Mac) or `Ctrl+Shift+P` (Windows/Linux)
   - Type "Convert HTML to Markdown"
2. **Convert Markdown to HTML**
   - Open a Markdown file or select Markdown content
   - Press `Cmd+Shift+P` (Mac) or `Ctrl+Shift+P` (Windows/Linux)
   - Type "Convert Markdown to HTML"

The extension also provides:

- Context menu options for quick conversion
- Keyboard shortcuts: `Ctrl+Alt+M` for HTML→MD, `Ctrl+Alt+H` for MD→HTML
- Real-time preview panel

## 🔧 Configuration

### CLI Options

#### html-to-md

| Option                       | Description                        | Default              |
| ---------------------------- | ---------------------------------- | -------------------- |
| `-o, --output <file>`        | Output file path                   | Auto-generated (.md) |
| `-s, --stdout`               | Output to stdout                   | false                |
| `--heading-style <style>`    | Heading style (atx/setext)         | atx                  |
| `--code-block-style <style>` | Code block style (fenced/indented) | fenced               |

#### md-to-html

| Option                | Description                      | Default                |
| --------------------- | -------------------------------- | ---------------------- |
| `-o, --output <file>` | Output file path                 | Auto-generated (.html) |
| `-s, --stdout`        | Output to stdout                 | false                  |
| `--no-html`           | Disable HTML tags in source      | false                  |
| `--no-linkify`        | Disable auto link detection      | false                  |
| `--no-typographer`    | Disable typographic replacements | false                  |

## 🤝 Contributing

We welcome contributions! Please see our [Contributing Guidelines](CONTRIBUTING.md) for details.

### Development Setup

```bash
# Clone the repository
git clone https://github.com/jasdeepkhalsa/html-md-converter.git
cd html-md-converter

# Install dependencies
npm install

# Run tests
npm test

# Run linter
npm run lint

# Format code
npm run format
```

## 📝 Examples

### Example 1: Converting HTML Blog Post

```bash
html-to-md blog-post.html -o blog-post.md
```

### Example 2: Converting Markdown Documentation

```bash
md-to-html README.md -o index.html
```

### Example 3: Batch Processing

```bash
# Convert all HTML files in a directory
for file in *.html; do html-to-md "$file"; done

# Convert all Markdown files
for file in *.md; do md-to-html "$file"; done
```

### Example 4: Piping with Other Tools

```bash
# Fetch HTML from URL and convert
curl https://example.com | html-to-md /dev/stdin --stdout

# Convert and preview in browser
md-to-html README.md --stdout | open -f -a "Google Chrome"
```

## 🧪 Testing

```bash
# Run all tests
npm test

# Run tests in watch mode
npm run test:watch

# Run with coverage
npm test -- --coverage
```

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- [Turndown](https://github.com/mixmark-io/turndown) - HTML to Markdown converter
- [markdown-it](https://github.com/markdown-it/markdown-it) - Markdown parser and renderer

## 📮 Support

- 🐛 [Report a bug](https://github.com/jasdeepkhalsa/html-md-converter/issues)
- 💡 [Request a feature](https://github.com/jasdeepkhalsa/html-md-converter/issues)
- 📖 [Documentation](https://github.com/jasdeepkhalsa/html-md-converter#readme)

## 🗺️ Roadmap

- [ ] Add support for custom Turndown rules
- [ ] Add support for markdown-it plugins
- [ ] Batch conversion UI
- [ ] Configuration file support (.converterrc)
- [ ] Support for more input/output formats
- [ ] Interactive CLI mode
- [ ] Web-based converter interface

---

Made with ❤️ by the open source community

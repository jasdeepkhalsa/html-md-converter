# VS Code Extension: HTML-Markdown Converter

- [![CI](https://github.com/jasdeepkhalsa/html-md-converter/actions/workflows/ci.yml/badge.svg)](https://github.com/jasdeepkhalsa/html-md-converter/actions/workflows/ci.yml)
- [![npm version](https://badge.fury.io/js/html-md-converter.svg?v=1)](https://badge.fury.io/js/html-md-converter)
- [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

A lightweight VS Code extension that provides fast, bidirectional conversion between HTML and Markdown directly in the editor.

## ✨ Features

- 🔄 **Bidirectional Conversion**: Convert HTML to Markdown and Markdown to HTML
- 💻 **Editor Integration**: Works on selected text or the entire file
- ⌨️ **Keyboard Shortcuts**: Quick conversion with configurable shortcuts
- 🖱️ **Context Menu**: Right-click to convert selected content
- ⚡ **Fast & Reliable**: Built on [Turndown](https://github.com/mixmark-io/turndown) and [markdown-it](https://github.com/markdown-it/markdown-it)
- 📦 **Zero Config**: Works out of the box with sensible defaults

## Usage

### Commands

- `Convert HTML to Markdown` - Convert HTML content to Markdown
- `Convert Markdown to HTML` - Convert Markdown content to HTML

### Keyboard Shortcuts

- **HTML to Markdown**: `Cmd+Alt+M` (Mac) / `Ctrl+Alt+M` (Windows/Linux)
- **Markdown to HTML**: `Cmd+Alt+H` (Mac) / `Ctrl+Alt+H` (Windows/Linux)

### Context Menu

Right-click in the editor and select the conversion option from the context menu.

## Installation

### From Marketplace

1. Open VS Code
2. Go to Extensions (Cmd+Shift+X)
3. Search for "HTML-Markdown Converter"
4. Click Install

### From Source

1. Clone the repository
2. Navigate to `vscode-extension` directory
3. Run `npm install`
4. Run `npm run package`
5. Install the generated `.vsix` file

## Development

```bash
cd vscode-extension
npm install
code .
```

Press F5 to open a new VS Code window with the extension loaded.

## License

MIT

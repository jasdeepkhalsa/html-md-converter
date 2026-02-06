# VS Code Extension: HTML-Markdown Converter

This extension provides bidirectional conversion between HTML and Markdown directly in VS Code.

## Features

- Convert HTML to Markdown
- Convert Markdown to HTML
- Works on selected text or entire file
- Keyboard shortcuts for quick access
- Context menu integration

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

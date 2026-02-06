# Contributing to HTML-Markdown Converter

First off, thank you for considering contributing to HTML-Markdown Converter! It's people like you that make this tool better for everyone.

## Table of Contents

- [Code of Conduct](#code-of-conduct)
- [Getting Started](#getting-started)
- [How Can I Contribute?](#how-can-i-contribute)
- [Development Setup](#development-setup)
- [Pull Request Process](#pull-request-process)
- [Coding Standards](#coding-standards)
- [Testing Guidelines](#testing-guidelines)
- [Commit Message Guidelines](#commit-message-guidelines)

## Code of Conduct

This project and everyone participating in it is governed by our Code of Conduct. By participating, you are expected to uphold this code. Please report unacceptable behavior to the project maintainers.

### Our Pledge

We pledge to make participation in our project a harassment-free experience for everyone, regardless of age, body size, disability, ethnicity, gender identity and expression, level of experience, nationality, personal appearance, race, religion, or sexual identity and orientation.

## Getting Started

1. **Fork the repository** on GitHub
2. **Clone your fork** locally
3. **Create a branch** for your changes
4. **Make your changes** and commit them
5. **Push to your fork** and submit a pull request

## How Can I Contribute?

### Reporting Bugs

Before creating bug reports, please check the existing issues to avoid duplicates. When creating a bug report, include as many details as possible:

- **Use a clear and descriptive title**
- **Describe the exact steps to reproduce the problem**
- **Provide specific examples** to demonstrate the steps
- **Describe the behavior you observed** and what you expected
- **Include screenshots or animated GIFs** if applicable
- **Include your environment details**: OS, Node.js version, etc.

**Bug Report Template:**

```markdown
**Description:**
A clear and concise description of the bug.

**To Reproduce:**
Steps to reproduce the behavior:

1. Go to '...'
2. Run command '...'
3. See error

**Expected behavior:**
What you expected to happen.

**Actual behavior:**
What actually happened.

**Environment:**

- OS: [e.g. macOS 13.0]
- Node.js version: [e.g. 18.0.0]
- Package version: [e.g. 1.0.0]

**Additional context:**
Add any other context about the problem.
```

### Suggesting Enhancements

Enhancement suggestions are tracked as GitHub issues. When creating an enhancement suggestion, include:

- **Use a clear and descriptive title**
- **Provide a step-by-step description** of the suggested enhancement
- **Explain why this enhancement would be useful**
- **List examples** of how the feature would be used

### Your First Code Contribution

Unsure where to begin? You can start by looking through issues labeled `good-first-issue` and `help-wanted`:

- **good-first-issue** - issues that should only require a few lines of code
- **help-wanted** - issues that may be a bit more involved

## Development Setup

```bash
# Clone your fork
git clone https://github.com/YOUR-USERNAME/html-md-converter.git
cd html-md-converter

# Add upstream remote
git remote add upstream https://github.com/ORIGINAL-OWNER/html-md-converter.git

# Install dependencies
npm install

# Run tests
npm test

# Run linter
npm run lint

# Run formatter
npm run format
```

### Project Structure

```
html-md-converter/
├── bin/                 # CLI executables
│   ├── html-to-md.js
│   └── md-to-html.js
├── src/                 # Core library code
│   └── index.js
├── tests/               # Test files
│   └── converter.test.js
├── vscode-extension/    # VS Code extension
│   ├── extension.js
│   └── package.json
├── .github/             # GitHub workflows
│   └── workflows/
│       └── ci.yml
└── README.md
```

## Pull Request Process

1. **Update your fork** with the latest changes from upstream:

   ```bash
   git fetch upstream
   git checkout main
   git merge upstream/main
   ```

2. **Create a new branch** for your feature or bugfix:

   ```bash
   git checkout -b feature/your-feature-name
   # or
   git checkout -b fix/your-bugfix-name
   ```

3. **Make your changes** following the coding standards

4. **Add tests** for your changes

5. **Run the test suite** to ensure all tests pass:

   ```bash
   npm test
   npm run lint
   ```

6. **Commit your changes** following the commit message guidelines

7. **Push to your fork**:

   ```bash
   git push origin feature/your-feature-name
   ```

8. **Open a Pull Request** with a clear title and description

### Pull Request Checklist

Before submitting your PR, make sure:

- [ ] Code follows the project's coding standards
- [ ] All tests pass (`npm test`)
- [ ] Linting passes (`npm run lint`)
- [ ] Code is formatted (`npm run format`)
- [ ] New code has appropriate test coverage
- [ ] Documentation is updated (if applicable)
- [ ] Commit messages follow the guidelines
- [ ] PR description clearly describes the changes

## Coding Standards

### JavaScript Style Guide

We follow standard JavaScript conventions with some specific guidelines:

- **Use ES6+ features** where appropriate
- **Use const/let** instead of var
- **No semicolons** (we use ASI)
- **2 spaces** for indentation
- **Single quotes** for strings
- **Meaningful variable names** that describe their purpose
- **JSDoc comments** for functions and classes

Example:

```javascript
/**
 * Convert HTML to Markdown
 * @param {string} html - The HTML string to convert
 * @param {Object} options - Options for conversion
 * @returns {string} - The converted markdown string
 */
function htmlToMarkdown(html, options = {}) {
  const turndownService = new TurndownService({
    headingStyle: 'atx',
    ...options
  });

  return turndownService.turndown(html);
}
```

### File Organization

- Place utility functions in `src/`
- Place CLI scripts in `bin/`
- Place tests in `tests/` with `.test.js` extension
- Keep files focused and single-purpose

## Testing Guidelines

### Writing Tests

- Write tests for all new features
- Write tests for all bug fixes
- Use descriptive test names
- Follow the AAA pattern: Arrange, Act, Assert
- Test edge cases and error conditions

Example:

```javascript
describe('htmlToMarkdown', () => {
  test('converts basic HTML to Markdown', () => {
    // Arrange
    const html = '<h1>Hello World</h1>';
    const expected = '# Hello World';

    // Act
    const result = htmlToMarkdown(html);

    // Assert
    expect(result).toBe(expected);
  });
});
```

### Running Tests

```bash
# Run all tests
npm test

# Run tests in watch mode
npm run test:watch

# Run tests with coverage
npm test -- --coverage
```

## Commit Message Guidelines

We follow the [Conventional Commits](https://www.conventionalcommits.org/) specification:

### Format

```
<type>(<scope>): <subject>

<body>

<footer>
```

### Type

Must be one of:

- **feat**: A new feature
- **fix**: A bug fix
- **docs**: Documentation only changes
- **style**: Code style changes (formatting, missing semicolons, etc.)
- **refactor**: Code change that neither fixes a bug nor adds a feature
- **perf**: Performance improvement
- **test**: Adding or updating tests
- **chore**: Changes to build process or auxiliary tools

### Examples

```
feat(cli): add support for batch conversion

Add --batch flag to convert multiple files at once

Closes #123
```

```
fix(converter): handle empty HTML input correctly

Previously, empty HTML would cause an error.
Now it returns an empty string.

Fixes #456
```

```
docs(readme): update installation instructions

Add npm global installation example
```

## Questions?

Don't hesitate to ask questions! You can:

- Open an issue with the `question` label
- Reach out to the maintainers
- Join our community discussions

## Recognition

All contributors will be recognized in our README. Thank you for making this project better!

---

Thank you for contributing! 🎉

# Project Setup Guide

## Quick Start

### Install Dependencies

```bash
npm install
```

### Test the CLI

```bash
# HTML to Markdown
node bin/html-to-md.js examples/example.html

# Markdown to HTML
node bin/md-to-html.js examples/example.md

# With stdout
node bin/html-to-md.js examples/example.html --stdout
node bin/md-to-html.js examples/example.md --stdout
```

### Run Tests

```bash
npm test
```

### Run Linter

```bash
npm run lint
```

### Format Code

```bash
npm run format
```

## Install Globally

To use the CLI commands from anywhere:

```bash
npm install -g .
```

Then you can use:

```bash
html-to-md myfile.html
md-to-html myfile.md
```

## VS Code Extension Development

```bash
cd vscode-extension
npm install

# Package the extension
npm run package

# This creates a .vsix file you can install in VS Code
```

To install the extension in VS Code:

1. Open VS Code
2. Press `Cmd+Shift+P` (Mac) or `Ctrl+Shift+P` (Windows/Linux)
3. Type "Install from VSIX"
4. Select the generated `.vsix` file

## GitHub Actions

The project includes two GitHub Actions workflows:

1. **CI Workflow** (`.github/workflows/ci.yml`)
   - Runs on every push and PR
   - Tests on multiple Node.js versions (18, 20, 22)
   - Runs linting and formatting checks
   - Generates code coverage reports

2. **Release Workflow** (`.github/workflows/release.yml`)
   - Runs when you push a version tag (e.g., `v1.0.0`)
   - Publishes to npm
   - Publishes VS Code extension to marketplace
   - Creates GitHub release

### Release Automation (Recommended)

The project includes a release automation script that syncs versions across the core library and the VS Code extension, handles tagging, and pushes to GitHub.

```bash
# Release a patch version (1.0.0 -> 1.0.1)
npm run release

# Release a minor version (1.0.0 -> 1.1.0)
npm run release minor

# Release a major version (1.0.0 -> 2.0.0)
npm run release major

# Release a specific version
npm run release 1.2.3

# Force-update an existing tag (deletes and re-creates on GitHub)
npm run release patch -- --force-tag
```

This script will automatically:

1. Update `version` in both root `package.json` and `vscode-extension/package.json`.
2. Create a git commit: `chore: release vX.Y.Z`.
3. Create a local git tag.
4. Push the branch and the tag to GitHub (triggering the Release Workflow).

### Manual Publishing (Fallback)

#### To npm

```bash
# Update version
npm version patch

# Publish
npm publish --access public
```

#### To VS Code Marketplace

```bash
cd vscode-extension
npx vsce publish
```

### Using GitHub Actions

Simply create and push a tag:

```bash
git tag v1.0.0
git push origin v1.0.0
```

The release workflow will automatically publish to both npm and VS Code marketplace.

## Project Structure

```
html-md-converter/
├── bin/                      # CLI executables
│   ├── html-to-md.js        # HTML to Markdown CLI
│   └── md-to-html.js        # Markdown to HTML CLI
├── src/                      # Core library
│   └── index.js             # Main conversion functions
├── tests/                    # Test files
│   └── converter.test.js    # Test suite
├── vscode-extension/         # VS Code extension
│   ├── extension.js         # Extension code
│   ├── package.json         # Extension manifest
│   └── README.md            # Extension docs
├── examples/                 # Example files
│   ├── example.html         # Sample HTML
│   └── example.md           # Sample Markdown
├── .github/workflows/        # CI/CD
│   ├── ci.yml               # CI pipeline
│   └── release.yml          # Release pipeline
├── package.json              # Project manifest
├── jest.config.js           # Test configuration
├── .eslintrc.js             # Linting rules
├── .prettierrc              # Formatting rules
├── .gitignore               # Git ignore rules
├── README.md                # Main documentation
├── CONTRIBUTING.md          # Contribution guidelines
└── LICENSE                  # MIT License
```

## Contributing

Please read [CONTRIBUTING.md](CONTRIBUTING.md) for details on our code of conduct and the process for submitting pull requests.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

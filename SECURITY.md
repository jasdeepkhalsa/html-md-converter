# Security Policy

## Supported Versions

We release patches for security vulnerabilities in the following versions:

| Version | Supported          |
| ------- | ------------------ |
| 1.0.x   | :white_check_mark: |
| < 1.0   | :x:                |

## Reporting a Vulnerability

We take the security of our project seriously. If you believe you have found a security vulnerability, please report it to us as described below.

### Please do NOT:

- Open a public GitHub issue
- Discuss the vulnerability in public forums or social media

### Please DO:

1. **Email us directly** at [security@jasdeepkhalsa.com] with:
   - A description of the vulnerability
   - Steps to reproduce the issue
   - Potential impact
   - Any suggested fixes (if available)

2. **Wait for our response** - We aim to respond within 48 hours

3. **Give us reasonable time** to fix the issue before making it public

## What to Expect

- **Acknowledgment**: We will acknowledge receipt of your vulnerability report within 48 hours
- **Assessment**: We will assess the vulnerability and determine its severity
- **Fix Development**: We will work on a fix and keep you updated on progress
- **Disclosure**: Once fixed, we will publicly disclose the vulnerability (with credit to you if desired)

## Security Best Practices for Users

When using this tool:

1. **Keep dependencies updated**: Run `npm update` regularly
2. **Use the latest version**: Always use the most recent release
3. **Review input**: Be cautious when processing HTML from untrusted sources
4. **Validate output**: Always validate the converted content before using it

## Security Features

- No external network requests are made by the converter
- All conversions happen locally
- No data is collected or transmitted
- Dependencies are regularly updated and audited

## Dependency Security

We use:

- `npm audit` to check for known vulnerabilities
- GitHub Dependabot to automatically update dependencies
- GitHub Actions to run security checks on every PR

## Thank You

We appreciate your efforts to responsibly disclose your findings and will make every effort to acknowledge your contributions.

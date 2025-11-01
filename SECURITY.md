# Security Policy

## Supported Versions

| Version | Supported          |
| ------- | ------------------ |
| 0.1.x   | :white_check_mark: |

## Reporting a Vulnerability

If you discover a security vulnerability in this design system, please report it by emailing:

**anderson.nascimento@meta.com.br**

Please include:
- Description of the vulnerability
- Steps to reproduce
- Potential impact
- Suggested fix (if any)

### What to expect:

1. **Initial Response**: Within 48 hours
2. **Status Update**: Within 7 days
3. **Fix Timeline**: Critical issues will be addressed within 14 days

### Security Best Practices for Users

When using this design system:

- Always use the latest version
- Review changelogs for security updates
- Run `pnpm audit` regularly in your projects
- Keep peer dependencies (React, React DOM) updated
- Use Content Security Policy (CSP) in production

## Vulnerability Disclosure Policy

- We request that you do not publicly disclose the vulnerability until we have addressed it
- We will credit researchers who responsibly disclose vulnerabilities
- We aim to fix critical vulnerabilities within 14 days

## Known Security Considerations

### CSS Injection
- All component props are typed and validated
- Classes are merged using `clsx` and `tailwind-merge` to prevent injection

### XSS Prevention
- No use of `dangerouslySetInnerHTML`
- All content is properly escaped by React

### Dependency Security
- Regular audits via `pnpm audit`
- Automated dependency updates via Dependabot (recommended to enable)

---

For general questions or support, please use [GitHub Issues](https://github.com/AndersonNascimentoAFSN/andersonnascimentoafsn-design-system/issues).

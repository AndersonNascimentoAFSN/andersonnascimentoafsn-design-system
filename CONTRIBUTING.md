# Contributing to Design System

Thank you for your interest in contributing! 🎉

## 📋 Table of Contents

- [Code of Conduct](#code-of-conduct)
- [Getting Started](#getting-started)
- [Development Workflow](#development-workflow)
- [Project Structure](#project-structure)
- [Coding Standards](#coding-standards)
- [Testing](#testing)
- [Pull Request Process](#pull-request-process)
- [Release Process](#release-process)

## Code of Conduct

This project follows the [Contributor Covenant](https://www.contributor-covenant.org/) Code of Conduct. Please be respectful and constructive.

## Getting Started

### Prerequisites

- Node.js >= 18.0.0
- pnpm >= 8.0.0

### Installation

```bash
# Clone the repository
git clone https://github.com/AndersonNascimentoAFSN/andersonnascimentoafsn-design-system.git

# Navigate to the project
cd andersonnascimentoafsn-design-system

# Install dependencies
pnpm install
```

### Development Commands

```bash
# Start Storybook (development)
pnpm dev

# Run tests
pnpm test

# Run tests in watch mode
pnpm test:watch

# Run tests with coverage
pnpm test:coverage

# Type checking
pnpm run type-check

# Linting
pnpm run lint

# Build library
pnpm run build
```

## Development Workflow

1. **Create a branch** from `main`:
   ```bash
   git checkout -b feature/your-feature-name
   # or
   git checkout -b fix/your-bug-fix
   ```

2. **Make your changes**

3. **Write tests** for new features

4. **Run validations**:
   ```bash
   pnpm run lint
   pnpm run type-check
   pnpm test
   ```

5. **Commit your changes** using [Conventional Commits](https://www.conventionalcommits.org/):
   ```bash
   git commit -m "feat: add new Button variant"
   git commit -m "fix: resolve focus ring issue in Button"
   git commit -m "docs: update README with new examples"
   ```

6. **Push and create a Pull Request**

## Project Structure

```
src/
├── components/          # React components
│   └── Button/
│       ├── Button.tsx          # Component implementation
│       ├── Button.test.tsx     # Unit tests
│       ├── Button.stories.tsx  # Storybook stories
│       ├── variants.ts         # CVA variants
│       ├── types.ts            # TypeScript types
│       └── index.ts            # Public exports
├── styles/
│   ├── global.css       # Tailwind + design tokens
│   └── tokens/          # Token definitions
├── ui/
│   └── utils.ts         # Utility functions (cn)
└── index.ts             # Main entry point
```

## Coding Standards

### TypeScript

- Use TypeScript strict mode
- Provide explicit types for all props
- Use `type` over `interface` for props
- Avoid `any` - use `unknown` when type is truly unknown

### React

- Use functional components with hooks
- Use `forwardRef` for components that need ref support
- Provide `displayName` for all components
- Use Radix UI Slot for composable components when appropriate

### Naming Conventions

- **Components**: PascalCase (`Button`, `Card`)
- **Files**: PascalCase for components, camelCase for utils
- **Props**: camelCase (`variant`, `isLoading`)
- **CSS Classes**: Use Tailwind classes, not custom CSS

### Styling

- **Always use Tailwind CSS** classes
- Use CVA for variant management
- Use `cn()` utility for conditional classes
- Follow design tokens defined in `global.css`

### Example Component

```tsx
import { forwardRef } from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '../../ui/utils';

const componentVariants = cva(
  'base-classes',
  {
    variants: {
      variant: {
        default: 'variant-classes',
      },
      size: {
        default: 'size-classes',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  }
);

export type ComponentProps = React.HTMLAttributes<HTMLDivElement> &
  VariantProps<typeof componentVariants> & {
    // Additional props
  };

export const Component = forwardRef<HTMLDivElement, ComponentProps>(
  ({ className, variant, size, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(componentVariants({ variant, size, className }))}
        {...props}
      />
    );
  }
);

Component.displayName = 'Component';
```

## Testing

### Writing Tests

- Write tests for all new components
- Test variants, sizes, and states
- Test interactions (click, hover, keyboard)
- Test accessibility (ARIA attributes, roles)
- Use `screen` queries from Testing Library
- Use `userEvent` for interactions

### Test Structure

```tsx
import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

describe('Component', () => {
  describe('Rendering', () => {
    it('should render correctly', () => {
      render(<Component />);
      expect(screen.getByRole('...')).toBeInTheDocument();
    });
  });

  describe('Variants', () => {
    // Test each variant
  });

  describe('Interactions', () => {
    // Test user interactions
  });

  describe('Accessibility', () => {
    // Test a11y features
  });
});
```

### Coverage Requirements

- Aim for **>80% code coverage**
- All critical paths must be tested
- Run `pnpm test:coverage` to check coverage

## Pull Request Process

1. **Update documentation** if needed (README, Storybook stories)
2. **Add tests** for new features
3. **Update CHANGELOG.md** following [Keep a Changelog](https://keepachangelog.com/)
4. **Ensure all CI checks pass**:
   - ✅ Lint
   - ✅ Type check
   - ✅ Tests
   - ✅ Build
5. **Request review** from maintainers
6. **Address feedback** promptly

### PR Title Format

Use [Conventional Commits](https://www.conventionalcommits.org/):

- `feat: add new Card component`
- `fix: resolve Button focus issue`
- `docs: update installation instructions`
- `chore: update dependencies`
- `refactor: improve Button component structure`
- `test: add tests for Input component`

## Release Process

Releases are automated via GitHub Actions when a new release is created.

### Version Bumping

Follow [Semantic Versioning](https://semver.org/):

- **MAJOR** (1.0.0): Breaking changes
- **MINOR** (0.1.0): New features (backwards compatible)
- **PATCH** (0.0.1): Bug fixes (backwards compatible)

### Creating a Release

1. Update version in `package.json`
2. Update `CHANGELOG.md`
3. Commit changes:
   ```bash
   git commit -m "chore: release v0.2.0"
   ```
4. Create and push tag:
   ```bash
   git tag v0.2.0
   git push origin main --tags
   ```
5. Create GitHub Release:
   ```bash
   gh release create v0.2.0 --title "v0.2.0" --notes-file CHANGELOG.md
   ```

The CI/CD pipeline will automatically:
- Run all tests
- Build the library
- Publish to NPM with provenance

## Questions or Need Help?

- 💬 Open a [Discussion](https://github.com/AndersonNascimentoAFSN/andersonnascimentoafsn-design-system/discussions)
- 🐛 Report bugs via [Issues](https://github.com/AndersonNascimentoAFSN/andersonnascimentoafsn-design-system/issues)
- 📧 Email: anderson.nascimento@meta.com.br

---

Thank you for contributing! 🙏

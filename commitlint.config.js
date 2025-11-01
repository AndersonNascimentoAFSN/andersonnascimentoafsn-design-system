/**
 * Commitlint Configuration
 * 
 * Enforces Conventional Commits specification for commit messages.
 * See: https://www.conventionalcommits.org/
 */

export default {
  extends: ['@commitlint/config-conventional'],
  
  rules: {
    // Type enum - allowed commit types
    'type-enum': [
      2,
      'always',
      [
        'feat',     // New feature
        'fix',      // Bug fix
        'docs',     // Documentation only changes
        'style',    // Changes that don't affect code meaning (white-space, formatting, etc)
        'refactor', // Code change that neither fixes a bug nor adds a feature
        'perf',     // Performance improvement
        'test',     // Adding or correcting tests
        'build',    // Changes to build system or dependencies
        'ci',       // Changes to CI/CD configuration
        'chore',    // Other changes that don't modify src or test files
        'revert',   // Reverts a previous commit
      ],
    ],
    
    // Subject case - allow sentence-case, start-case, pascal-case, upper-case
    'subject-case': [
      2,
      'never',
      ['sentence-case', 'start-case', 'pascal-case', 'upper-case'],
    ],
    
    // Header max length
    'header-max-length': [2, 'always', 100],
    
    // Subject min length
    'subject-min-length': [2, 'always', 3],
    
    // Body max line length
    'body-max-line-length': [2, 'always', 100],
    
    // Scope case
    'scope-case': [2, 'always', 'lower-case'],
  },
};

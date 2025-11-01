/**
 * Design Tokens - Typography
 * Sistema tipográfico do Clarivus Design System
 */

export const typography = {
  // Font Families
  fontFamily: {
    primary: "'Rubik', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif",
    mono: "'JetBrains Mono', 'SF Mono', Monaco, Inconsolata, 'Roboto Mono', 'Source Code Pro', monospace",
    sans: "ui-sans-serif, system-ui, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji'",
  },

  // Font Sizes
  fontSize: {
    // Display (Headings grandes)
    'display-2xl': '4.5rem',    // 72px
    'display-xl': '3.75rem',    // 60px
    'display-lg': '3rem',       // 48px
    'display-md': '2.25rem',    // 36px
    'display-sm': '1.875rem',   // 30px

    // Headings
    'h1': '2.25rem',   // 36px
    'h2': '1.875rem',  // 30px
    'h3': '1.5rem',    // 24px
    'h4': '1.25rem',   // 20px
    'h5': '1.125rem',  // 18px
    'h6': '1rem',      // 16px

    // Body text
    'xl': '1.25rem',   // 20px
    'lg': '1.125rem',  // 18px
    'base': '1rem',    // 16px (base)
    'md': '1rem',      // 16px
    'sm': '0.875rem',  // 14px
    'xs': '0.75rem',   // 12px

    // Specialized
    'button': '1rem',     // 16px
    'label': '0.875rem',  // 14px
    'caption': '0.75rem', // 12px
    'small': '0.875rem',  // 14px
    'table-header': '0.875rem', // 14px
  },

  // Font Weights
  fontWeight: {
    light: '300',
    regular: '400',
    normal: '400',
    medium: '500',
    semibold: '600',
    bold: '700',
    extrabold: '800',
    black: '900',
  },

  // Line Heights
  lineHeight: {
    none: '1',
    tight: '1.25',
    snug: '1.375',
    normal: '1.5',
    relaxed: '1.625',
    loose: '2',
    // Specific to font sizes
    'h1': '1.2',
    'h2': '1.25',
    'h3': '1.3',
    'h4': '1.35',
    'h5': '1.4',
    'h6': '1.45',
    'body': '1.5',
    'caption': '1.4',
  },

  // Letter Spacing
  letterSpacing: {
    tighter: '-0.05em',
    tight: '-0.025em',
    normal: '0em',
    wide: '0.025em',
    wider: '0.05em',
    widest: '0.1em',
  },
} as const;

// Tipos TypeScript
export type FontFamily = keyof typeof typography.fontFamily;
export type FontSize = keyof typeof typography.fontSize;
export type FontWeight = keyof typeof typography.fontWeight;
export type LineHeight = keyof typeof typography.lineHeight;
export type LetterSpacing = keyof typeof typography.letterSpacing;

// Helper functions
export const getFontSize = (size: FontSize) => typography.fontSize[size];
export const getFontWeight = (weight: FontWeight) => typography.fontWeight[weight];
export const getLineHeight = (height: LineHeight) => typography.lineHeight[height];

// Combinações predefinidas para textos
export const textStyles = {
  // Display Headings
  'display-2xl': {
    fontSize: typography.fontSize['display-2xl'],
    fontWeight: typography.fontWeight.bold,
    lineHeight: typography.lineHeight.tight,
    letterSpacing: typography.letterSpacing.tight,
  },
  'display-xl': {
    fontSize: typography.fontSize['display-xl'],
    fontWeight: typography.fontWeight.bold,
    lineHeight: typography.lineHeight.tight,
    letterSpacing: typography.letterSpacing.tight,
  },
  'display-lg': {
    fontSize: typography.fontSize['display-lg'],
    fontWeight: typography.fontWeight.bold,
    lineHeight: typography.lineHeight.snug,
    letterSpacing: typography.letterSpacing.normal,
  },

  // Headings
  h1: {
    fontSize: typography.fontSize.h1,
    fontWeight: typography.fontWeight.bold,
    lineHeight: typography.lineHeight.h1,
    letterSpacing: typography.letterSpacing.normal,
  },
  h2: {
    fontSize: typography.fontSize.h2,
    fontWeight: typography.fontWeight.semibold,
    lineHeight: typography.lineHeight.h2,
    letterSpacing: typography.letterSpacing.normal,
  },
  h3: {
    fontSize: typography.fontSize.h3,
    fontWeight: typography.fontWeight.semibold,
    lineHeight: typography.lineHeight.h3,
    letterSpacing: typography.letterSpacing.normal,
  },
  h4: {
    fontSize: typography.fontSize.h4,
    fontWeight: typography.fontWeight.medium,
    lineHeight: typography.lineHeight.h4,
    letterSpacing: typography.letterSpacing.normal,
  },

  // Body
  'body-lg': {
    fontSize: typography.fontSize.lg,
    fontWeight: typography.fontWeight.regular,
    lineHeight: typography.lineHeight.body,
    letterSpacing: typography.letterSpacing.normal,
  },
  'body-md': {
    fontSize: typography.fontSize.base,
    fontWeight: typography.fontWeight.regular,
    lineHeight: typography.lineHeight.body,
    letterSpacing: typography.letterSpacing.normal,
  },
  'body-sm': {
    fontSize: typography.fontSize.sm,
    fontWeight: typography.fontWeight.regular,
    lineHeight: typography.lineHeight.body,
    letterSpacing: typography.letterSpacing.normal,
  },

  // Specialized
  button: {
    fontSize: typography.fontSize.button,
    fontWeight: typography.fontWeight.medium,
    lineHeight: typography.lineHeight.none,
    letterSpacing: typography.letterSpacing.wide,
  },
  label: {
    fontSize: typography.fontSize.label,
    fontWeight: typography.fontWeight.medium,
    lineHeight: typography.lineHeight.normal,
    letterSpacing: typography.letterSpacing.normal,
  },
  caption: {
    fontSize: typography.fontSize.caption,
    fontWeight: typography.fontWeight.regular,
    lineHeight: typography.lineHeight.caption,
    letterSpacing: typography.letterSpacing.normal,
  },
} as const;

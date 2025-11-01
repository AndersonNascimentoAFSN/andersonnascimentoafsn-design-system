/**
 * Design Tokens - Spacing
 * Sistema de espaçamento do Clarivus Design System
 */

export const spacing = {
  // Base spacing unit (4px)
  0: '0px',
  1: '4px',      // 0.25rem
  2: '8px',      // 0.5rem
  3: '12px',     // 0.75rem
  4: '16px',     // 1rem
  5: '20px',     // 1.25rem
  6: '24px',     // 1.5rem
  7: '28px',     // 1.75rem
  8: '32px',     // 2rem
  9: '36px',     // 2.25rem
  10: '40px',    // 2.5rem
  11: '44px',    // 2.75rem
  12: '48px',    // 3rem
  14: '56px',    // 3.5rem
  16: '64px',    // 4rem
  18: '72px',    // 4.5rem
  20: '80px',    // 5rem
  24: '96px',    // 6rem
  28: '112px',   // 7rem
  32: '128px',   // 8rem
  36: '144px',   // 9rem
  40: '160px',   // 10rem
  44: '176px',   // 11rem
  48: '192px',   // 12rem
  52: '208px',   // 13rem
  56: '224px',   // 14rem
  60: '240px',   // 15rem
  64: '256px',   // 16rem
  72: '288px',   // 18rem
  80: '320px',   // 20rem
  96: '384px',   // 24rem

  // Named spacing
  xs: '4px',     // 1
  sm: '8px',     // 2
  md: '16px',    // 4
  lg: '24px',    // 6
  xl: '32px',    // 8
  '2xl': '48px', // 12
  '3xl': '64px', // 16
  '4xl': '80px', // 20
  '5xl': '96px', // 24
} as const;

// Border radius
export const borderRadius = {
  none: '0px',
  sm: '6px',
  md: '8px',
  lg: '12px',
  xl: '16px',
  '2xl': '20px',
  '3xl': '24px',
  full: '9999px',
} as const;

// Shadows
export const shadows = {
  none: 'none',
  xs: '0 1px 2px 0 rgb(0 0 0 / 0.05)',
  sm: '0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)',
  md: '0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)',
  lg: '0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)',
  xl: '0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)',
  '2xl': '0 25px 50px -12px rgb(0 0 0 / 0.25)',
  inner: 'inset 0 2px 4px 0 rgb(0 0 0 / 0.05)',
} as const;

// Z-index layers
export const zIndex = {
  hide: -1,
  auto: 'auto',
  base: 0,
  docked: 10,
  dropdown: 1000,
  sticky: 1100,
  banner: 1200,
  overlay: 1300,
  modal: 1400,
  popover: 1500,
  skipLink: 1600,
  toast: 1700,
  tooltip: 1800,
} as const;

// Container sizes
export const containers = {
  xs: '20rem',    // 320px
  sm: '24rem',    // 384px
  md: '28rem',    // 448px
  lg: '32rem',    // 512px
  xl: '36rem',    // 576px
  '2xl': '42rem', // 672px
  '3xl': '48rem', // 768px
  '4xl': '56rem', // 896px
  '5xl': '64rem', // 1024px
  '6xl': '72rem', // 1152px
  '7xl': '80rem', // 1280px
  full: '100%',
} as const;

// Breakpoints (for media queries)
export const breakpoints = {
  xs: '0px',
  sm: '640px',   // 40rem
  md: '768px',   // 48rem
  lg: '1024px',  // 64rem
  xl: '1280px',  // 80rem
  '2xl': '1536px', // 96rem
} as const;

// Types
export type SpacingScale = keyof typeof spacing;
export type BorderRadiusScale = keyof typeof borderRadius;
export type ShadowScale = keyof typeof shadows;
export type ZIndexScale = keyof typeof zIndex;
export type ContainerScale = keyof typeof containers;
export type BreakpointScale = keyof typeof breakpoints;

// Helper functions
export const getSpacing = (scale: SpacingScale) => spacing[scale];
export const getBorderRadius = (scale: BorderRadiusScale) => borderRadius[scale];
export const getShadow = (scale: ShadowScale) => shadows[scale];
export const getZIndex = (scale: ZIndexScale) => zIndex[scale];

// Component-specific spacing patterns
export const componentSpacing = {
  button: {
    paddingX: spacing[4], // 16px
    paddingY: spacing[2], // 8px
    gap: spacing[2],      // 8px
  },
  card: {
    padding: spacing[6],  // 24px
    gap: spacing[4],      // 16px
  },
  form: {
    gap: spacing[4],      // 16px
    labelGap: spacing[1], // 4px
  },
  list: {
    gap: spacing[2],      // 8px
    itemPadding: spacing[3], // 12px
  },
  section: {
    marginBottom: spacing[8], // 32px
    gap: spacing[6],          // 24px
  },
} as const;

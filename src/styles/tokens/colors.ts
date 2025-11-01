/**
 * Design Tokens - Colors
 * Sistema de cores do Clarivus Design System
 */

export const colors = {
  // Primary - Azul principal do sistema
  primary: {
    0: '#ebf2fe',
    100: '#d6e5fd',
    200: '#b5c3fd',
    300: '#8aabf9',
    400: '#5a8df7',
    500: '#2a6ff5', // Cor base
    600: '#2461d9',
    700: '#1e53bd',
    800: '#1844a1',
    900: '#123685',
  },

  // Success - Verde para estados de sucesso
  success: {
    0: '#e8fcf4',
    100: '#d1f9e9',
    200: '#a3f3d3',
    300: '#75edbd',
    400: '#47e7a7',
    500: '#28c76f', // Cor base
    600: '#23b362',
    700: '#1e9f55',
    800: '#198b48',
    900: '#14773b',
  },

  // Error - Vermelho para estados de erro
  error: {
    0: '#fdedef',
    100: '#fbdbe0',
    200: '#f7b7c1',
    300: '#f393a2',
    400: '#ef6f83',
    500: '#ea5455', // Cor base
    600: '#d44c4d',
    700: '#be4445',
    800: '#a83c3d',
    900: '#923435',
  },

  // Warning - Laranja para avisos
  warning: {
    0: '#fff5e6',
    100: '#ffebcc',
    200: '#ffd799',
    300: '#ffc366',
    400: '#ffaf33',
    500: '#ff9f43', // Cor base
    600: '#e68f3c',
    700: '#cc7f35',
    800: '#b36f2e',
    900: '#996027',
  },

  // Grayscale - Escala de cinzas
  gray: {
    0: '#ffffff',
    50: '#f8fafc',
    100: '#f1f5f9',
    200: '#e2e8f0',
    300: '#cbd5e1',
    400: '#94a3b8',
    500: '#64748b',
    600: '#475569',
    700: '#334155',
    800: '#1e293b',
    900: '#0f172a',
    950: '#020617',
  },

  // Base colors
  white: '#ffffff',
  black: '#000000',
} as const;

// Tipos TypeScript para autocomplete
export type ColorScale = keyof typeof colors;
export type PrimaryShade = keyof typeof colors.primary;
export type SuccessShade = keyof typeof colors.success;
export type ErrorShade = keyof typeof colors.error;
export type WarningShade = keyof typeof colors.warning;
export type GrayShade = keyof typeof colors.gray;

// Helper function para acessar cores
export const getColor = (scale: ColorScale, shade?: number | string) => {
  const colorScale = colors[scale];
  if (typeof colorScale === 'string') {
    return colorScale;
  }
  if (shade && typeof colorScale === 'object') {
    return colorScale[shade as keyof typeof colorScale];
  }
  return colorScale;
};

// CSS Variables mapping
export const colorVariables = {
  '--primary-0': colors.primary[0],
  '--primary-100': colors.primary[100],
  '--primary-200': colors.primary[200],
  '--primary-300': colors.primary[300],
  '--primary-400': colors.primary[400],
  '--primary-500': colors.primary[500],
  '--primary-600': colors.primary[600],
  '--primary-700': colors.primary[700],
  '--primary-800': colors.primary[800],
  '--primary-900': colors.primary[900],
  
  '--success-0': colors.success[0],
  '--success-100': colors.success[100],
  '--success-200': colors.success[200],
  '--success-300': colors.success[300],
  '--success-400': colors.success[400],
  '--success-500': colors.success[500],
  '--success-600': colors.success[600],
  '--success-700': colors.success[700],
  '--success-800': colors.success[800],
  '--success-900': colors.success[900],
  
  '--error-0': colors.error[0],
  '--error-100': colors.error[100],
  '--error-200': colors.error[200],
  '--error-300': colors.error[300],
  '--error-400': colors.error[400],
  '--error-500': colors.error[500],
  '--error-600': colors.error[600],
  '--error-700': colors.error[700],
  '--error-800': colors.error[800],
  '--error-900': colors.error[900],
  
  '--warning-0': colors.warning[0],
  '--warning-100': colors.warning[100],
  '--warning-200': colors.warning[200],
  '--warning-300': colors.warning[300],
  '--warning-400': colors.warning[400],
  '--warning-500': colors.warning[500],
  '--warning-600': colors.warning[600],
  '--warning-700': colors.warning[700],
  '--warning-800': colors.warning[800],
  '--warning-900': colors.warning[900],
} as const;

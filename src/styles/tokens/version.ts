/**
 * Design Tokens Version
 * 
 * This file tracks the version of the design token system.
 * Update this when making breaking changes to tokens.
 * 
 * @version 1.0.0
 */

export const DESIGN_TOKENS_VERSION = '1.0.0';

/**
 * Token compatibility checker
 * Use this in consuming applications to ensure token compatibility
 * 
 * @example
 * ```ts
 * import { isTokenVersionCompatible } from '@andersonnascimentoafsn/design-system';
 * 
 * if (!isTokenVersionCompatible('1.0.0')) {
 *   console.warn('Design tokens version mismatch');
 * }
 * ```
 */
export function isTokenVersionCompatible(minVersion: string): boolean {
  const currentMajor = Number(DESIGN_TOKENS_VERSION.split('.')[0]);
  const minMajor = Number(minVersion.split('.')[0]);
  
  return currentMajor >= minMajor;
}

/**
 * Get current token version
 */
export function getTokenVersion(): string {
  return DESIGN_TOKENS_VERSION;
}

import { ThemeConfig } from './types';
import { colorTheme } from './colors';
import { contentTheme } from './content';

// Single theme configuration
export const themeConfig: ThemeConfig = {
  colors: colorTheme,
  content: contentTheme,
};

// Re-export types and utilities
export type { ThemeConfig } from './types';
export { colorTheme } from './colors';
export { contentTheme } from './content';

import { ColorTheme } from './types';

const alpha = (hex: string, a: number): string => {
  const h = hex.replace('#', '');
  const r = parseInt(h.slice(0, 2), 16);
  const g = parseInt(h.slice(2, 4), 16);
  const b = parseInt(h.slice(4, 6), 16);
  return `rgba(${r},${g},${b},${a})`;
};

// Brand colors — Light Elegant Theme (Cream/Gold/Navy)
export const colorTheme: ColorTheme = {
  // Primary palette - deep navy accent
  primary: '#1a2b4a',
  primaryLight: '#2d4a6f',
  primaryDark: '#0f1a2e',
  primaryDarker: '#0a1220',

  // Background gradients - light and warm
  heroGradient:
    'linear-gradient(135deg, #fdfcfb 0%, #f7f5f3 50%, #f0ece8 100%)',
  statsGradient:
    'linear-gradient(135deg, #f7f5f3 0%, #fdfcfb 50%, #f7f5f3 100%)',
  ctaGradient: 'linear-gradient(135deg, #f0ece8 0%, #e8e4df 100%)',
  contactGradient: 'linear-gradient(135deg, #fdfcfb 0%, #f7f5f3 100%)',
  whyRecoveryGradient: 'linear-gradient(135deg, #f7f5f3 0%, #f0ece8 100%)',

  // Button gradients - dark buttons on light bg
  buttonPrimaryGradient: 'linear-gradient(135deg, #1a2b4a 0%, #2d4a6f 100%)',
  buttonPrimaryHoverGradient: 'linear-gradient(135deg, #2d4a6f 0%, #3d5a7f 100%)',

  // Accent colors - warm cream spectrum
  accentColors: ['#f7f5f3', '#f0ece8', '#e8e4df', '#e0dbd5', '#d8d2cb', '#cfc8c0'],

  // Text colors - dark on light
  textDark: '#1a2b4a',
  textMedium: '#4a5568',
  textLight: '#718096',

  // Tagline - subtle navy styling
  taglineColor: '#4a5568',
  taglineBackground: alpha('#1a2b4a', 0.05),
  taglineBorder: alpha('#1a2b4a', 0.15),

  // Highlights
  highlightGradient:
    'linear-gradient(135deg, #c9a962 0%, #b8943f 50%, #a07d2e 100%)',
  titleUnderlineGradient: 'linear-gradient(90deg, #1a2b4a, #c9a962)',

  // Shadows & success
  shadowColor: alpha('#1a2b4a', 0.1),
  successColor: '#48bb78',
};

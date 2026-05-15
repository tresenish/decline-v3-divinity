import { ColorTheme } from '../../themes/types';

/** Maps DS theme tokens to constructor-style navigation palette (hex + alpha suffixes). */
export function dsNavPalette(c: ColorTheme) {
  return {
    background: '#0a0a0a',
    surface: '#111111',
    border: '#2a2a2a',
    text: c.textDark,
    muted: c.textMedium,
    primary: c.primary,
    secondary: c.primaryDark,
    accent: c.primaryLight,
  };
}

export type DsNavPalette = ReturnType<typeof dsNavPalette>;

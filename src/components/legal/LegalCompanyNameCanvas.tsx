import React, { useRef, useLayoutEffect, useCallback } from 'react';
import { useTheme } from 'styled-components';
import type { ColorTheme } from '../../themes/types';

const FONT =
  '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif';

type Props = {
  companyName: string;
  /** Use theme emphasis (e.g. when visually aligned with bold legal labels). */
  emphasis?: boolean;
};

/**
 * Renders the legal entity name on canvas (non-selectable), sized/colored to match the host paragraph/list.
 */
const LegalCompanyNameCanvas: React.FC<Props> = ({ companyName, emphasis = false }) => {
  const ref = useRef<HTMLCanvasElement>(null);
  const theme = useTheme() as ColorTheme;

  const paint = useCallback(() => {
    const canvas = ref.current;
    if (!canvas || !companyName) return;

    const parent = canvas.parentElement;
    const cs = parent ? getComputedStyle(parent) : null;
    const fontSize = cs ? Math.max(12, parseFloat(cs.fontSize)) : 17;
    const fontWeight = emphasis ? '600' : cs?.fontWeight || '400';
    const color = emphasis ? theme.textDark : cs?.color || '#2c3e50';

    const dpr = window.devicePixelRatio || 1;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    ctx.font = `${fontWeight} ${fontSize}px ${FONT}`;
    const metrics = ctx.measureText(companyName);
    const ascent = metrics.fontBoundingBoxAscent || metrics.actualBoundingBoxAscent || fontSize * 0.8;
    const descent = metrics.fontBoundingBoxDescent || metrics.actualBoundingBoxDescent || fontSize * 0.2;
    const w = Math.ceil(metrics.width) + 2;
    const h = Math.ceil(ascent + descent);

    canvas.width = w * dpr;
    canvas.height = h * dpr;
    canvas.style.width = `${w}px`;
    canvas.style.height = `${h}px`;
    canvas.style.verticalAlign = `${-descent}px`;

    ctx.setTransform(1, 0, 0, 1, 0, 0);
    ctx.scale(dpr, dpr);
    ctx.clearRect(0, 0, w, h);
    ctx.textBaseline = 'alphabetic';
    ctx.font = `${fontWeight} ${fontSize}px ${FONT}`;
    ctx.fillStyle = color;
    ctx.fillText(companyName, 0, ascent);
  }, [companyName, emphasis, theme.textDark]);

  useLayoutEffect(() => {
    paint();
    window.addEventListener('resize', paint);
    return () => window.removeEventListener('resize', paint);
  }, [paint]);

  return (
    <canvas
      ref={ref}
      role="img"
      aria-label={companyName}
      style={{
        display: 'inline-block',
        userSelect: 'none',
        pointerEvents: 'none',
      }}
    />
  );
};

export default LegalCompanyNameCanvas;

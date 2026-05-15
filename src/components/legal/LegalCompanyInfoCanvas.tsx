import React, { useRef, useLayoutEffect, useCallback } from 'react';
import { useCompanyInfo } from '../../context/ThemeContext';

const FONT =
  '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif';

const TEXT_COLOR = 'rgba(26, 43, 74, 0.6)';

type Variant = 'full' | 'address';

type Props = {
  /** "full" = company name + address; "address" = address only. */
  variant?: Variant;
};

type Line = { text: string; weight: string };

const LegalCompanyInfoCanvas: React.FC<Props> = ({ variant = 'full' }) => {
  const ref = useRef<HTMLCanvasElement>(null);
  const { companyName, companyAddress } = useCompanyInfo();

  const paint = useCallback(() => {
    const canvas = ref.current;
    if (!canvas) return;

    const lines: Line[] =
      variant === 'address'
        ? [{ text: companyAddress, weight: '400' }]
        : [
            { text: companyName, weight: '600' },
            { text: companyAddress, weight: '400' },
          ];

    if (!lines.some((l) => l.text)) return;

    const parent = canvas.parentElement;
    const cs = parent ? getComputedStyle(parent) : null;
    const fontSize = cs ? Math.max(14, parseFloat(cs.fontSize)) : 17;
    const color = TEXT_COLOR;
    const lineHeight = Math.ceil(fontSize * 1.5);

    const dpr = window.devicePixelRatio || 1;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let maxW = 0;
    for (const line of lines) {
      ctx.font = `${line.weight} ${fontSize}px ${FONT}`;
      const w = ctx.measureText(line.text).width;
      if (w > maxW) maxW = w;
    }

    const w = Math.ceil(maxW) + 2;
    const h = lineHeight * lines.length;

    canvas.width = w * dpr;
    canvas.height = h * dpr;
    canvas.style.width = `${w}px`;
    canvas.style.height = `${h}px`;

    ctx.setTransform(1, 0, 0, 1, 0, 0);
    ctx.scale(dpr, dpr);
    ctx.clearRect(0, 0, w, h);
    ctx.textBaseline = 'middle';
    ctx.fillStyle = color;

    lines.forEach((line, i) => {
      ctx.font = `${line.weight} ${fontSize}px ${FONT}`;
      ctx.fillText(line.text, 0, lineHeight * i + lineHeight / 2);
    });
  }, [variant, companyName, companyAddress]);

  useLayoutEffect(() => {
    paint();
    window.addEventListener('resize', paint);
    return () => window.removeEventListener('resize', paint);
  }, [paint]);

  const ariaLabel =
    variant === 'address' ? companyAddress : `${companyName}, ${companyAddress}`;

  return (
    <canvas
      ref={ref}
      role="img"
      aria-label={ariaLabel}
      style={{
        display: 'block',
        userSelect: 'none',
        pointerEvents: 'none',
        maxWidth: '100%',
      }}
    />
  );
};

export default LegalCompanyInfoCanvas;

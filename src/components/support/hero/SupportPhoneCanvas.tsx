import React, { useRef, useLayoutEffect, useCallback } from 'react';

const FONT =
  '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif';

type Props = {
  phoneDisplay: string;
  availability: string;
  phoneColor?: string;
  availabilityColor?: string;
  phoneSize?: number;
  availabilitySize?: number;
};

/** Renders phone number + availability line on a single canvas. */
const SupportPhoneCanvas: React.FC<Props> = ({
  phoneDisplay,
  availability,
  phoneColor = '#222',
  availabilityColor = '#888',
  phoneSize = 32,
  availabilitySize = 16,
}) => {
  const ref = useRef<HTMLCanvasElement>(null);

  const paint = useCallback(() => {
    const canvas = ref.current;
    if (!canvas) return;

    const dpr = window.devicePixelRatio || 1;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    ctx.font = `700 ${phoneSize}px ${FONT}`;
    const phoneW = ctx.measureText(phoneDisplay).width;
    ctx.font = `400 ${availabilitySize}px ${FONT}`;
    const availW = ctx.measureText(availability).width;

    const w = Math.ceil(Math.max(phoneW, availW)) + 2;
    const phoneH = Math.ceil(phoneSize * 1.2);
    const availH = Math.ceil(availabilitySize * 1.35);
    const gap = 6;
    const h = phoneH + gap + availH;

    canvas.width = w * dpr;
    canvas.height = h * dpr;
    canvas.style.width = `${w}px`;
    canvas.style.height = `${h}px`;

    ctx.setTransform(1, 0, 0, 1, 0, 0);
    ctx.scale(dpr, dpr);
    ctx.clearRect(0, 0, w, h);
    ctx.textBaseline = 'top';

    ctx.font = `700 ${phoneSize}px ${FONT}`;
    ctx.fillStyle = phoneColor;
    ctx.fillText(phoneDisplay, 0, 0);

    ctx.font = `400 ${availabilitySize}px ${FONT}`;
    ctx.fillStyle = availabilityColor;
    ctx.fillText(availability, 0, phoneH + gap);
  }, [phoneDisplay, availability, phoneColor, availabilityColor, phoneSize, availabilitySize]);

  useLayoutEffect(() => {
    paint();
    window.addEventListener('resize', paint);
    return () => window.removeEventListener('resize', paint);
  }, [paint]);

  return (
    <canvas
      ref={ref}
      role="img"
      aria-label={`${phoneDisplay}. ${availability}`}
      style={{
        display: 'block',
        userSelect: 'none',
        pointerEvents: 'none',
      }}
    />
  );
};

export default SupportPhoneCanvas;

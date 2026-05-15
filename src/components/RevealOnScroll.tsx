import React, { type CSSProperties, type ReactNode } from 'react';
import { useRevealOnScroll } from '../hooks/useRevealOnScroll';

type Props = {
  children: ReactNode;
  /** Stagger like serenity-save `index * 150` ms */
  delayMs?: number;
  className?: string;
  style?: CSSProperties;
};

/**
 * Serenity-save style: opacity + translateY(12) with duration-700 ease-out when visible.
 */
const RevealOnScroll: React.FC<Props> = ({ children, delayMs = 0, className = '', style }) => {
  const { ref, isRevealed } = useRevealOnScroll();

  const mergedStyle: CSSProperties = {
    ...style,
    ...(delayMs > 0 ? { transitionDelay: `${delayMs}ms` } : {}),
  };

  return (
    <div
      ref={ref}
      className={`reveal-scroll${isRevealed ? ' reveal-scroll--visible' : ''}${className ? ` ${className}` : ''}`.trim()}
      style={mergedStyle}
    >
      {children}
    </div>
  );
};

export default RevealOnScroll;

import React, { useEffect, useState, Children } from 'react';
import styled from 'styled-components';

function prefersReducedMotion(): boolean {
  if (typeof window === 'undefined') return false;
  try {
    return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  } catch {
    return false;
  }
}

const ChildWrap = styled.div<{ $index: number; $visible: boolean }>`
  width: 100%;
  min-width: 0;
  opacity: ${({ $visible }) => ($visible ? 1 : 0)};
  transform: ${({ $visible }) => ($visible ? 'translateY(0)' : 'translateY(1.15rem)')};
  transition:
    opacity 0.75s cubic-bezier(0.22, 1, 0.36, 1),
    transform 0.75s cubic-bezier(0.22, 1, 0.36, 1);
  transition-delay: ${({ $visible, $index }) => ($visible ? `${70 + $index * 95}ms` : '0ms')};
  will-change: opacity, transform;

  @media (prefers-reduced-motion: reduce) {
    opacity: 1;
    transform: none;
    transition: none;
    will-change: auto;
  }
`;

type Props = {
  children: React.ReactNode;
};

/**
 * Staggered fade-up on first paint (hero is above the fold).
 * Respects `prefers-reduced-motion`.
 */
const HeroStagger: React.FC<Props> = ({ children }) => {
  const [visible, setVisible] = useState(() => prefersReducedMotion());

  useEffect(() => {
    if (prefersReducedMotion()) return;
    const id = window.requestAnimationFrame(() => {
      window.requestAnimationFrame(() => setVisible(true));
    });
    return () => window.cancelAnimationFrame(id);
  }, []);

  const items = Children.toArray(children).filter((c) => c != null);

  return (
    <>
      {items.map((child, index) => (
        <ChildWrap key={`hero-stagger-${index}`} $index={index} $visible={visible}>
          {child}
        </ChildWrap>
      ))}
    </>
  );
};

export default HeroStagger;

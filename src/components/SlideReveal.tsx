import React, { ReactNode } from 'react';
import styled from 'styled-components';
import { useSlideReveal } from '../hooks/useSlideReveal';

interface SlideRevealProps {
  children: ReactNode;
  className?: string;
  id?: string;
}

const SlideWrapper = styled.div`
  width: 100%;
`;

const SlideReveal: React.FC<SlideRevealProps> = ({ children, className, id }) => {
  const { ref, isVisible } = useSlideReveal(0.2);

  return (
    <SlideWrapper
      ref={ref}
      id={id}
      className={`slide-section ${isVisible ? 'slide-visible' : ''} ${className || ''}`}
    >
      {children}
    </SlideWrapper>
  );
};

export default SlideReveal;

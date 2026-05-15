/**
 * Wrapper that combines HowItWorks and WhyRecovery sections.
 */
import React from 'react';
import styled from 'styled-components';
import HowItWorksSection from './HowItWorksSection';
import WhyRecoverySection from './WhyRecoverySection';
import { useIsDSTheme } from '../context/ThemeContext';

const Wrapper = styled.div`
  background: #fff;
`;

const HowItWorksWhyRecoveryWrapper: React.FC = () => {
  const isDSTheme = useIsDSTheme();

  return (
    <Wrapper>
      <HowItWorksSection />
      {isDSTheme && <WhyRecoverySection />}
    </Wrapper>
  );
};

export default HowItWorksWhyRecoveryWrapper;

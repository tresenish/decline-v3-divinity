/**
 * Wrapper that combines CTA and FAQ sections
 * with a light background matching the site theme.
 */
import React from 'react';
import styled from 'styled-components';
import CTASection from './CTASection';
import FAQSection from './FAQSection';

const Wrapper = styled.div`
  position: relative;
  background: #fafafa;
  overflow: hidden;
`;

const ContentLayer = styled.div`
  position: relative;
  z-index: 1;
`;

const CTAFAQWrapper: React.FC = () => {
  return (
    <Wrapper>
      <ContentLayer>
        <CTASection />
        <FAQSection />
      </ContentLayer>
    </Wrapper>
  );
};

export default CTAFAQWrapper;

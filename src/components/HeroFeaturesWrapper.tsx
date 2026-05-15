/**
 * Wrapper component that places AnimatedBlobs behind Hero section (Light theme).
 */
import React from 'react';
import styled from 'styled-components';
import { AnimatedBlobs } from './blobs';
import HeroSection from './HeroSection';
import FeaturesSection from './FeaturesSection';

const Wrapper = styled.div`
  position: relative;
  isolation: isolate;
  background: #fafafa;
`;

const BlobsLayer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 100vh;
  z-index: 0;
  pointer-events: none;
  overflow: hidden;
`;

const ContentLayer = styled.div`
  position: relative;
  z-index: 1;
`;

const HeroFeaturesWrapper: React.FC = () => {
  return (
    <Wrapper>
      <BlobsLayer>
        <AnimatedBlobs />
      </BlobsLayer>
      <ContentLayer>
        <HeroSection />
        <FeaturesSection />
      </ContentLayer>
    </Wrapper>
  );
};

export default HeroFeaturesWrapper;

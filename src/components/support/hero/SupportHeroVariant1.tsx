/**
 * Support Hero — editorial style matching home page (Light theme).
 */
import React from 'react';
import styled from 'styled-components';
import {
  SupportHero,
  HeroContent,
  HeroTitle,
  HeroDescription,
} from '../../../styles/SupportPage.styles';
import type { SupportHeroModel } from './supportHeroTypes';
import { SupportHeroActionRow, SupportHeroPhoneBlock } from './SupportHeroShared';
import Threads from '../../Threads';

const ThreadsBackground = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 0;
  opacity: 0.3;
`;

const BigDecor = styled.span`
  position: absolute;
  top: 50%;
  right: 5%;
  transform: translateY(-50%);
  font-size: 24rem;
  font-weight: 200;
  color: rgba(26, 43, 74, 0.04);
  font-family: 'Cormorant Garamond', Georgia, serif;
  line-height: 1;
  pointer-events: none;
  user-select: none;
  z-index: 1;

  @media (max-width: 768px) {
    font-size: 14rem;
    right: -5%;
  }
`;

const Label = styled.span`
  display: inline-block;
  font-size: 0.75rem;
  font-weight: 600;
  color: rgba(26, 43, 74, 0.5);
  letter-spacing: 0.2em;
  text-transform: uppercase;
  margin-bottom: 2rem;
`;

const Divider = styled.div`
  width: 80px;
  height: 1px;
  background: rgba(26, 43, 74, 0.2);
  margin: 2.5rem 0;
`;

const ContentWrapper = styled.div`
  position: relative;
  z-index: 2;
  max-width: 1300px;
  margin: 0 auto;
`;

const SupportHeroVariant1: React.FC<{ model: SupportHeroModel }> = ({ model }) => {
  return (
    <SupportHero>
      <ThreadsBackground>
        <Threads color={[0.1, 0.17, 0.29]} amplitude={0.8} distance={0.5} />
      </ThreadsBackground>
      <BigDecor>?</BigDecor>
      <ContentWrapper>
        <HeroContent>
          <Label>Support Center</Label>
          <HeroTitle>{model.title}</HeroTitle>
          <HeroDescription>{model.description}</HeroDescription>
          <Divider />
          <SupportHeroPhoneBlock
            phoneDisplay={model.phoneDisplay}
            phoneHref={model.phoneHref}
            availability={model.availability}
          />
          <SupportHeroActionRow actions={model.actions} />
        </HeroContent>
      </ContentWrapper>
    </SupportHero>
  );
};

export default SupportHeroVariant1;
